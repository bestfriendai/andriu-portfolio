(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{6670:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[project]",function(){return l(2508)}])},451:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var r=l(5893),o=l(3935),s=l(6958);function n(e){let{project:t,color:l,backgroundColor:n}=e;return o.createPortal((0,r.jsxs)("div",{className:"floatingCard fixed w-[250px] h-[500px]",style:{backgroundColor:l,right:"-60vw",bottom:0,transform:"rotateX(30deg)"},children:[(0,r.jsxs)(s.Z,{className:"font-mono uppercase",gradient:!1,speed:50,style:{color:n,width:"calc(100% - 20px)"},children:[t.title," -- ",t.title," -- ",t.title," -- ",t.title," -- ",t.title," -- ",t.title," --"]}),(0,r.jsx)("div",{className:"absolute",style:{top:"calc(50% - 20px)",transform:"translateX(-1px)"},children:(0,r.jsxs)(s.Z,{className:"font-mono uppercase",gradient:!1,speed:25,style:{color:n,width:"calc(500px - 20px)",transform:"rotate(90deg)"},children:[t.title," -- ",t.title," -- ",t.title," -- ",t.title," -- ",t.title," -- ",t.title," --"]})}),(0,r.jsx)("div",{className:"absolute",style:{left:"-100%",top:"50%",transform:"translateX(19px)"},children:(0,r.jsxs)(s.Z,{className:"font-mono uppercase",gradient:!1,speed:25,style:{color:n,width:"calc(500px - 20px)",transform:"rotate(-90deg)"},children:[t.title," -- ",t.title," -- ",t.title," -- ",t.title," -- ",t.title," -- ",t.title," --"]})}),(0,r.jsx)("div",{className:"absolute",style:{top:"100%",transform:"translate(20px, -100%)"},children:(0,r.jsxs)(s.Z,{className:"font-mono uppercase",gradient:!1,speed:50,style:{color:n,width:"calc(100% - 20px)",transform:"rotate(180deg)"},children:[t.title," -- ",t.title," -- ",t.title," -- ",t.title," -- ",t.title," -- ",t.title," --"]})}),(0,r.jsx)("p",{className:"absolute font-bold inset-[26px] text-2xl uppercase",style:{color:n,textAlign:"justify"},children:t.description})]}),document.querySelector(".crt"))}},5048:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var r=l(5893),o=l(7294),s=l(3935);let n=o.lazy(()=>Promise.all([l.e(918),l.e(236)]).then(l.bind(l,9849))),a=null,i=null,c=null;function d(e){let{scene:t,onLoad:l,onItemSelected:d,hidden:u}=e,m=document.querySelector(".container3d"),x=null==m?void 0:m.getBoundingClientRect(),[p,h]=(0,o.useState)({background:"repeating-radial-gradient(#000 0 0.0001%,#FFF 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(#000 0 0.0001%,#FFF 0 0.0002%) 60% 60%/2500px 2500px",backgroundBlendMode:"difference",animation:"b .2s infinite alternate"});return a||(a=null==x?void 0:x.width,c=null==x?void 0:x.x),(!i||i<400)&&(i=(null==x?void 0:x.height)+40),window.addEventListener("resize",()=>{a=null==(x=null==(m=document.querySelector(".container3d"))?void 0:m.getBoundingClientRect())?void 0:x.width,c=null==x?void 0:x.x,i=null==x?void 0:x.height,document.querySelector(".spline-container").style.top=(null==x?void 0:x.y)-40+"px",document.querySelector(".spline-container").style.left=c+"px",document.querySelector(".spline-container").style.width=a+"px",document.querySelector(".spline-container").style.height=i+40+"px"}),s.createPortal((0,r.jsx)("div",{className:"spline-container fixed",style:{top:(null==x?void 0:x.y)-40,left:c,width:a,height:i,clipPath:"polygon(15% 0%, 91% 0%, 99% 100%, 0% 100%)",visibility:u?"hidden":"visible"},children:(0,r.jsx)(o.Suspense,{fallback:(0,r.jsx)("div",{className:"w-full h-full",style:p}),children:(0,r.jsx)(n,{scene:t,onLoad:l,onMouseDown:function(e){d(e.target.name)}})})}),document.querySelector(".crt"))}},2508:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return T},default:function(){return P}});var r=l(5893),o=l(9008),s=l.n(o),n=l(1163),a=l(7294),i=l(6958),c=l(7568),d=l.n(c),u=l(8573),m=l(4579),x=l(5675),p=l.n(x);let h={},f=e=>{let{image:t}=e,{alternativeText:l,width:o,height:s}=t.data.attributes;return(0,r.jsx)(p(),{layout:"responsive",height:s,width:o,objectFit:"contain",src:function(e){let{url:t}=e.data.attributes,l=t.startsWith("/")?(0,m.p)(t):t;return l}(t),alt:l||"",className:"my-6",style:h})};var g=l(6038),v=e=>{let{color:t,backgroundColor:l,name:o,url:s}=e;return(0,r.jsxs)("a",{href:s,target:"_blank",onMouseOver:function(){g.p8.to(".external-overlay",{clipPath:"inset(0 0 0 0%)",duration:1,ease:"Expo.easeOut"})},onMouseLeave:function(){g.p8.to(".external-overlay",{clipPath:"inset(0 0 0 100%)",duration:1,ease:"Expo.easeOut"})},className:"relative flex align-center justify-between pl-12 -mx-10 border-y-8 y-20",style:{borderColor:t,width:"calc(100% + 6rem)"},children:[(0,r.jsxs)("div",{className:"py-6",children:[(0,r.jsx)("div",{className:"font-mono uppercase",children:"Visit Page"}),(0,r.jsx)("div",{className:"font-black text-3xl uppercase",children:o}),(0,r.jsx)("div",{className:"w-28 absolute top-8 right-0 overflow-hidden",children:(0,r.jsx)("svg",{width:"48",height:"48",version:"1.1",viewBox:"0 0 700 700",xmlns:"http://www.w3.org/2000/svg",style:{fill:t},children:(0,r.jsxs)("g",{"fill-rule":"evenodd",children:[(0,r.jsx)("path",{d:"m132.39 547.11-49.496-49.496 494.98-494.98 49.496 49.496z"}),(0,r.jsx)("path",{d:"m560 525v-525h70v525z"}),(0,r.jsx)("path",{d:"m105 70v-70h525v70z"})]})})})]}),(0,r.jsxs)("div",{className:"absolute external-overlay inset-0 flex align-center justify-between y-20",style:{paddingLeft:"5.5rem",backgroundColor:t,color:l,clipPath:"inset(0 0 0 100%)"},children:[(0,r.jsxs)("div",{className:"pt-6",style:{marginLeft:"-2.5rem"},children:[(0,r.jsx)("div",{className:"font-mono uppercase",children:"Visit Page"}),(0,r.jsx)("div",{className:"font-black text-3xl uppercase",children:o})]}),(0,r.jsx)("div",{className:"w-28 absolute top-8 right-0 overflow-hidden",children:(0,r.jsx)("svg",{width:"48",height:"48",version:"1.1",viewBox:"0 0 700 700",xmlns:"http://www.w3.org/2000/svg",style:{fill:l},children:(0,r.jsxs)("g",{"fill-rule":"evenodd",children:[(0,r.jsx)("path",{d:"m132.39 547.11-49.496-49.496 494.98-494.98 49.496 49.496z"}),(0,r.jsx)("path",{d:"m560 525v-525h70v525z"}),(0,r.jsx)("path",{d:"m105 70v-70h525v70z"})]})})})]})]})},j=l(9417),y=l(7814),b=e=>{let{author:t,content:l,color:o,backgroundColor:s}=e;return(0,r.jsxs)("div",{className:"border-8",style:{borderColor:o},children:[(0,r.jsxs)("div",{className:"flex pa-2 pb-3",style:{backgroundColor:o},children:[(0,r.jsx)(y.G,{className:"mr-2",icon:j.y1i,style:{fontSize:24,color:s}}),(0,r.jsx)("div",{className:"font-mono uppercase",style:{color:s},children:t})]}),(0,r.jsx)("p",{className:"m-2 font-mono",children:l})]})};let N={};var w=e=>{let{section:t,color:l,backgroundColor:o}=e;return Object.entries(t).map(e=>(function(e,t,l,o){switch(e.toLowerCase()){case"rich-text":return(0,r.jsx)(u.D,{className:"".concat(d().variable," font-mono w-full"),children:t.body,style:{color:l}});case"external":return(0,r.jsx)(v,{color:l,backgroundColor:o,name:t.name,url:t.url});case"recommendation":return(0,r.jsx)(b,{author:t.author,content:t.content,color:l,backgroundColor:o});case"media":return(0,r.jsx)(f,{image:t.file});case"video":return(0,r.jsx)("video",{controls:!0,"auto-play":!0,style:N,src:node.url});default:return(0,r.jsx)("div",{})}})(e[0],e[1],l,o))},C=l(5048),E=l(451),k=l(6546),T=!0;function P(e){let{project:t,nextProject:l,color:o,backgroundColor:c,goToProject:d,onTransition:u,setTransition:m,...x}=e;console.log(l);let p=(0,n.useRouter)(),h=(0,a.useRef)(null),f=(0,a.useRef)(null),[v,j]=(0,a.useState)(!1),[y,b]=(0,a.useState)(0),[N,T]=(0,a.useState)(!0),[P,B]=(0,a.useState)(!1),[_,S]=(0,a.useState)({id:0,name:"ABOUT"}),[O,R]=(0,a.useState)({background:"repeating-radial-gradient(#000 0 0.0001%,#FFF 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(#000 0 0.0001%,#FFF 0 0.0002%) 60% 60%/2500px 2500px",backgroundBlendMode:"difference",animation:"b .2s infinite alternate"}),[q,z]=(0,a.useState)({}),X="";t.technologies.data.forEach(e=>{X+=e.attributes.name.toUpperCase()+" // "}),(0,a.useEffect)(()=>{setInterval(()=>{j(!v)},2e3),k.ScrollTrigger.create({trigger:".container3d",scroller:"#scrollarea",start:"top top",end:"50% top",onEnterBack:e=>T(!0),onLeave:e=>T(!1)})},[]),(0,a.useEffect)(()=>{var e,l,r,s;f.current.scrollTo(0,0),R({background:"repeating-radial-gradient(".concat(c," 0 0.0001%,").concat(o," 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(").concat(c," 0 0.0001%,").concat(o," 0 0.0002%) 60% 60%/2500px 2500px"),backgroundBlendMode:"difference",animation:"b .2s infinite alternate"}),document.getElementById("projectBar").style.height=document.getElementById("scrollarea").offsetHeight+"px",document.getElementById("projectBar__rotated-content").style.width=(null===(e=document.getElementById("projectBar"))||void 0===e?void 0:e.offsetHeight)+"px",document.getElementById("projectBar__rotated-content").style.height=(null===(l=document.getElementById("projectBar"))||void 0===l?void 0:l.offsetWidth)+"px";let n=((null===(r=document.getElementById("projectBar"))||void 0===r?void 0:r.offsetWidth)-(null===(s=document.getElementById("projectBar"))||void 0===s?void 0:s.offsetHeight))/2;document.getElementById("projectBar__rotated-content").style.top=-n+"px",document.getElementById("projectBar__rotated-content").style.left=n+"px",g.p8.set(".navbarProjectTitle",{yPercent:110}),setTimeout(()=>{m(!1)},1e3),z({});let a={},i=null;t.content.forEach(e=>{"section.section-name"===e.__component?(a[e.name]={},i=a[e.name]):i[e.__component.substr(e.__component.indexOf(".")+1)]=e}),z(a);let d=g.p8.timeline(),u=document.querySelector(".tv-off");null==u||u.getBoundingClientRect(),document.querySelector("#scrollarea"),d.to(".tv-off__top, .tv-off__bottom",{height:0,duration:.5,ease:"Expo.easeIn"}),d.set(".tv-off",{zIndex:0,display:"none"})},[p.asPath]);let F=!1,I=e=>{let t=e.currentTarget.clientHeight,r=e.currentTarget.scrollHeight,o=e.currentTarget.scrollTop;b((t+o)/r*100);let s=Array.from(document.getElementsByClassName("contentBlock"));for(let e=s.length-1;e>0;e-=1)if(console.log(o,s[e].id.toUpperCase(),s[e].offsetTop),o>s[e].offsetTop){S({id:e,name:s[e].id.toUpperCase()});break}if(o>0)F||(F=!0,g.p8.to(".navbarProjectTitle",{yPercent:0,duration:1}),g.p8.to(".floatingCard",{right:"-25vw",top:.6*window.innerHeight,zIndex:20,rotation:0}));else{var n;F=!1;let e=window.innerWidth-(null===(n=document.querySelector("main"))||void 0===n?void 0:n.getBoundingClientRect().right);g.p8.to(".floatingCard",{right:e+200,bottom:-60,rotation:-18}),g.p8.to(".navbarProjectTitle",{yPercent:110,duration:1})}l&&(t+o>r-h.current.clientHeight/2?P||(B(!0),g.p8.to(".nextProjectOverlay",{clipPath:"inset(0 0% 0 0)",duration:3,ease:"linear",overwrite:!0,onComplete:()=>d()})):P&&(B(!1),g.p8.to(".nextProjectOverlay",{clipPath:"inset(0 100% 0 0)",duration:3,ease:"linear",overwrite:!0})))},J={transformOrigin:"bottom right",transform:"rotate(-90deg)",position:"absolute",top:0,right:12,fontSize:"2em"};return"linear-gradient(130deg, ".concat(o," 25%, ").concat(c," 25%, ").concat(c," 50%, ").concat(o," 50%, ").concat(o," 75%, ").concat(c," 75%, ").concat(c," 100%)"),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{ref:f,id:"scrollarea",className:"overflow-y-scroll h-full",style:{color:o},onScroll:I,children:[(0,r.jsx)("div",{id:"topProject"}),(0,r.jsxs)("div",{className:"grid grid-cols-8 grid-rows-6 h-full",children:[(0,r.jsxs)("div",{className:"container3d relative row-start-1 row-end-5 col-start-1 col-end-7 border-r-8",style:{borderColor:o},children:[u||!N?(0,r.jsx)("div",{className:"w-full h-full",style:O}):(0,r.jsx)(r.Fragment,{}),u?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(C.Z,{scene:t.spline,onLoad:function(){var e;let t=window.innerWidth-(null===(e=document.querySelector("main"))||void 0===e?void 0:e.getBoundingClientRect().right);g.p8.to(".floatingCard",{right:t+200,top:.6*window.innerHeight,zIndex:20,rotation:-18}),k.ScrollTrigger.refresh()},hidden:!N})]}),(0,r.jsx)("div",{className:"row-start-1 row-end-5 col-start-7 col-end-9 overflow-hidden",children:t.highlights.map(e=>{let{highlight:t}=e;return(0,r.jsx)("div",{className:"p-6",children:(0,r.jsx)("div",{className:"highlight text-xl",children:t.toUpperCase()})})})}),(0,r.jsxs)("div",{className:"row-start-5 row-end-7 col-start-1 col-end-9 border-y-8",style:{borderColor:o},children:[(0,r.jsx)("div",{className:"h-1/3 flex items-center border-b-8",style:{borderColor:o,backgroundColor:o},children:(0,r.jsx)(i.Z,{className:"marquee",gradient:!1,speed:40,style:{color:c,fontSize:"56px"},children:u?"////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////":X})}),(0,r.jsx)("div",{className:"h-2/3 pl-10 flex items-center",style:{borderColor:o},children:(0,r.jsx)("h1",{className:"project-title overflow-y-hidden text-9xl font-black uppercase flex",children:t.title.split("").map(e=>(0,r.jsx)("div",{className:"title-char",children:e}))})})]})]}),(0,r.jsxs)("div",{className:"flex content",children:[u?"":(0,r.jsx)("div",{className:"w-[70%]",children:Object.entries(q).map(e=>(0,r.jsxs)("div",{id:e[0].toLowerCase(),className:"contentBlock flex",children:[(0,r.jsx)("div",{className:"relative border-8 -ml-4 -mt-2 w-20 mh-40",style:{borderColor:o},children:(0,r.jsx)("div",{className:"sticky h-80 top-0 pr-2",children:(0,r.jsx)("h2",{className:"text-xl font-black uppercase",style:{color:o,...J},children:e[0]})})}),(0,r.jsx)("section",{className:"pb-10 px-10",style:{width:"calc(100% - 5rem)"},children:(0,r.jsx)(w,{section:e[1],color:o,backgroundColor:c})})]}))}),(0,r.jsx)("div",{className:"border-l-8 w-[30%]",style:{marginLeft:"auto",borderColor:o},children:(0,r.jsx)("div",{id:"projectBar",className:"sticky top-0",children:(0,r.jsxs)("div",{id:"projectBar__rotated-content",className:"absolute flex",style:{transform:"rotate(-90deg)"},children:[(0,r.jsx)("div",{className:"absolute top-0 right-2 h-6 w-1",style:{backgroundColor:o}}),(0,r.jsx)("div",{className:"absolute top-0 right-2 h-6 w-1 mr-2",style:{backgroundColor:o}}),(0,r.jsx)("div",{className:"absolute top-0 right-2 h-6 w-1 mr-4",style:{backgroundColor:o}}),(0,r.jsxs)("div",{className:"w-1/3 relative flex flex-col justify-between items-center p-6",children:[(0,r.jsxs)("div",{className:"relative w-[200px] aspect-square rounded-full",style:{backgroundColor:o},children:[(0,r.jsx)("div",{className:"absolute top-[50%] left-[50%] w-20 h-20 rounded-full",style:{backgroundColor:c,transform:"translate(-50%, -50%)"}}),(0,r.jsx)("div",{className:"absolute top-[50%] left-[50%] w-1 h-1 rounded-full",style:{backgroundColor:o,transform:"translate(-50%, -50%)"}}),(0,r.jsx)("div",{className:"circleText",style:{transform:"rotate(".concat(3.6*y,"deg)")},children:(0,r.jsx)("p",{className:"uppercase text-mono",children:"".concat(_.name," \xb7 ").concat(_.name," \xb7 ").concat(_.name," \xb7 ").concat(_.name," \xb7 ").split("").map((e,t)=>(0,r.jsx)("span",{style:{color:c,transform:"rotate("+360*t/((_.name.length+3)*4)+"deg"},children:e}))})}),(0,r.jsx)("div",{className:"absolute bottom-[-12px] right-0 w-6 h-6 rounded-full",style:{backgroundColor:o}})]}),(0,r.jsx)("div",{className:"font-black text-5xl",style:{color:o},children:"PROJECT"}),(0,r.jsxs)("div",{className:"absolute top-6 right-0",children:[(0,r.jsx)("div",{className:"w-6 h-6",style:{backgroundColor:o}}),(0,r.jsx)("div",{className:"w-6 h-6 mt-4",style:{backgroundColor:o}})]})]}),(0,r.jsxs)("div",{className:"w-2/3 relative p-6 flex flex-col justify-between",children:[(0,r.jsxs)("div",{className:"relative flex flex-col justify-start items-end flex-wrap w-full h-[50%]",children:[(0,r.jsx)("div",{className:"absolute text-xl font-bold top-0 left-0",children:"["}),(0,r.jsx)("div",{className:"absolute text-xl font-bold bottom-0 right-0",children:"]"}),Object.entries(q).map((e,t)=>(0,r.jsx)("div",{className:"w-[30%]",children:(0,r.jsx)("div",{className:"font-bold",style:{backgroundColor:_.id===t?o:c,color:_.id===t?c:o},children:t+1+"   "+e[0].toUpperCase()})}))]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex justify-end mb-2",children:[(0,r.jsx)("div",{className:"w-6 h-6 mr-2",style:{backgroundColor:o}}),(0,r.jsx)("div",{className:"recordingSquare w-6 h-6 border-4",style:{borderColor:o,backgroundColor:v?o:c}})]}),(0,r.jsx)(i.Z,{className:"marquee font-mono uppercase",gradient:!1,speed:12,style:{color:o,fontSize:"12px"},children:[...Array(8)].map((e,t)=>" "+_.name+" \xb7 ")}),(0,r.jsx)("div",{className:"border-4 relative",style:{width:"100%",height:32,borderColor:o},children:(0,r.jsx)("div",{className:"scrollStatus absolute right-0 top-0 bottom-0",style:{backgroundColor:o,left:100-y+"%"}})})]})]})]})})})]}),l?(0,r.jsxs)("div",{ref:h,className:"relative -mt-2",children:[(0,r.jsx)("div",{className:"border-y-8",style:{borderColor:o},children:(0,r.jsx)(i.Z,{className:"marquee",gradient:!1,speed:40,style:{fontSize:"56px"},children:"NEXT PROJECT -- NEXT PROJECT -- NEXT PROJECT -- NEXT PROJECT -- NEXT PROJECT -- NEXT PROJECT --"})}),(0,r.jsx)("div",{className:"nextProject pl-10 flex items-center",style:{borderColor:o},children:(0,r.jsx)("span",{className:"overflow-y-hidden text-9xl font-black uppercase flex",children:l.title})}),(0,r.jsxs)("div",{className:"nextProjectOverlay absolute z-10 inset-0",style:{clipPath:"inset(0 100% 0 0)"},children:[(0,r.jsx)("div",{className:"border-y-8",style:{backgroundColor:o,color:c,borderColor:o},children:(0,r.jsx)(i.Z,{className:"marquee",gradient:!1,speed:40,style:{fontSize:"56px"},children:"NEXT PROJECT -- NEXT PROJECT -- NEXT PROJECT -- NEXT PROJECT -- NEXT PROJECT -- NEXT PROJECT --"})}),(0,r.jsx)("div",{className:"pl-10 flex items-center",style:{backgroundColor:o,color:c,borderColor:c},children:(0,r.jsx)("span",{className:"overflow-y-hidden text-9xl font-black uppercase flex",children:l.title})})]})]}):"",(0,r.jsx)(E.Z,{project:t,color:o,backgroundColor:c})]})]})}}},function(e){e.O(0,[582,774,888,179],function(){return e(e.s=6670)}),_N_E=e.O()}]);