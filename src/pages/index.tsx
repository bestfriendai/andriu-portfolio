import Head from 'next/head'
import { useRouter } from 'next/router';
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
// import Image from 'next/image'
import Marquee from "react-fast-marquee";
import Spline from "@/components/spline"
import { fetchAPI } from '@/api/api';
import Section from '@/components/section';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { gsap } from "gsap";
import Assistant from '@/components/assistant';
import FloatingCard from '@/components/floatingCard';

type Params = {
  params: {
    project: String,
  }
}

  export async function getStaticProps({params}: Params): Promise<{
    // Passed to the page component as props
    props: { project: any, categories: any, color: String, backgroundColor: String }
  }> {
    
    const [projectsRes, assistantRes] = await Promise.all([
      fetchAPI("/landing", { populate: {
          highlights: {
            populate: "*"
          }
        }
      }),
      fetchAPI("/assistant", { populate: {
        categories: {
          populate: {
            highlights: "*",
            recommendations: "*"
          }
        }
      }})
    ])
      

    return {
  
      // Passed to the page component as props
      props: { 
        project: projectsRes.data.attributes, 
        categories:  assistantRes.data.attributes.categories,
        color: projectsRes.data.attributes.color, 
        backgroundColor: projectsRes.data.attributes.backgroundColor 
      }
    }
  }

export default function Home({project, categories, color, backgroundColor, goToProject, onTransition, setTransition, ...params}) {
  const router = useRouter() 
  const [tvEffect, setTvEffect] = useState({
    background: `repeating-radial-gradient(#000 0 0.0001%,#FFF 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(#000 0 0.0001%,#FFF 0 0.0002%) 60% 60%/2500px 2500px`,
    backgroundBlendMode: "difference",
    animation: "b .2s infinite alternate"
  })

  useEffect(() => {
    setTvEffect({
      background: `repeating-radial-gradient(${backgroundColor} 0 0.0001%,${color} 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(${backgroundColor} 0 0.0001%,${color} 0 0.0002%) 60% 60%/2500px 2500px`,
      backgroundBlendMode: "difference",
      animation: "b .2s infinite alternate"
    })

    setTimeout(() => {
      setTransition(false)
    }, 1000)

  }, [router.asPath])

  let fullWidth = false
  const handleScroll = (event) => {
    const height = event.currentTarget.clientHeight;
    const barHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;
    
  };

  const textRotation = {
    transformOrigin: "bottom right",
    transform: "rotate(-90deg)",
    position: "absolute",
    top: 0, right: 0,
    // position: "sticky",
    // top: 184,
    fontSize: "2em"
  }

  const [content, setContent] = useState({})


  function itemSelected(itemSelected) {
    
    const clickRouting = {
      "database": "Pantala",
      "postgresql": "Olimaps",
      "olimaps": "Olimaps",
      "awwwards": "Zandbeek",
      "mongodb": "Olimaps",
      "zandbeek": "Zandbeek",
      "trophy": "Zandbeek",
      "e-commerce": "Pantala",
      "social_network": "Olimaps",
      "conversational": "Zandbeek",
      "typescript": "Olimaps",
      "nodejs": "Olimaps",
    }

    console.log("ITEM SELECTED", itemSelected);

    goToProject(clickRouting[itemSelected])
    
  }

  function splineLoaded(spline) {

    const distance = window.innerWidth - document.querySelector("main")?.getBoundingClientRect().right
    gsap.to(".floatingCard", {
      right: distance -100,
      top: 0.6 * window.innerHeight,
      zIndex: 20,
      rotation: -18,
    })

    ScrollTrigger.refresh()
  }

  return (
    <> 
      <Head>
        <title>Andriu Garcia</title>
        <meta name="description" content="Adding a new perspective to web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-full' style={{ color: color}} onScroll={handleScroll}>
        <div className='grid grid-cols-8 grid-rows-6 h-full'>
          <div className='container3d relative row-start-1 row-end-5 col-start-1 col-end-7 border-r-8' style={{ borderColor: color }}>
            {
              // onTransition ? <div className='w-full h-full' style={tvEffect}></div> : <Assistant categories={categories} highlightsUpdate={highlightsUpdate}></Assistant>
              onTransition ? <div className='w-full h-full' style={tvEffect}></div> : <Spline scene={project.spline} onLoad={splineLoaded} onItemSelected={itemSelected}/>
            }
          </div>
          <div className='row-start-1 row-end-5 col-start-7 col-end-9 overflow-hidden'>
            {
              project.highlights.map(({highlight}) => {
                return (
                  <div className='p-6'>
                    <div className='highlight text-xl'>{highlight.toUpperCase()}</div>
                  </div>
                )
              })
            }
          </div>
          <div className='row-start-5 row-end-7 col-start-1 col-end-9 border-y-8' style={{ borderColor: color }}>
            <div className='h-1/3 flex items-center border-b-8' style={{ borderColor: color, backgroundColor: color }}>
              <Marquee className='marquee' gradient={false} speed={40} style={{color: backgroundColor, fontSize: '56px'}}>{onTransition ? "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////" : project.marquee}</Marquee>
            </div>
            <div className='h-2/3 pl-10 flex items-center' style={{ borderColor: color }} >
              <h1 className='project-title overflow-y-hidden text-7xl font-black uppercase flex'>
                {
                "FULL STACK DEVELOPER".split("").map((char: String) => (<div className='title-char' style={{marginRight: char == ' ' ? "16px" : "0"}}>{char}</div>))
                }
              </h1>
            </div>
          </div>
        </div>
        <FloatingCard project={{ title: "ABOUT ME", description: project.description }} color={color} backgroundColor={backgroundColor}></FloatingCard>
      </main>
    </>
  )
}
