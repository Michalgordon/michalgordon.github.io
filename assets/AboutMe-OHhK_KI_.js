import{i as g,r,j as e,R as w,I as x,P as b,E as j,a as v,S as y,b as N,m as d}from"./index-CkoxxM4R.js";function E(a,t,s){var n;if(typeof a=="string"){let l=document;t&&(g(!!t.current),l=t.current),s?((n=s[a])!==null&&n!==void 0||(s[a]=l.querySelectorAll(a)),a=s[a]):a=l.querySelectorAll(a)}else a instanceof Element&&(a=[a]);return Array.from(a||[])}const I={some:0,all:1};function k(a,t,{root:s,margin:n,amount:l="some"}={}){const p=E(a),o=new WeakMap,f=u=>{u.forEach(i=>{const m=o.get(i.target);if(i.isIntersecting!==!!m)if(i.isIntersecting){const h=t(i);typeof h=="function"?o.set(i.target,h):c.unobserve(i.target)}else m&&(m(i),o.delete(i.target))})},c=new IntersectionObserver(f,{root:s,rootMargin:n,threshold:typeof l=="number"?l:I[l]});return p.forEach(u=>c.observe(u)),()=>c.disconnect()}function S(a,{root:t,margin:s,amount:n,once:l=!1}={}){const[p,o]=r.useState(!1);return r.useEffect(()=>{if(!a.current||l&&p)return;const f=()=>(o(!0),l?void 0:()=>o(!1)),c={root:t&&t.current||void 0,margin:s,amount:n};return k(a.current,f,c)},[t,a,s,l,n]),p}const A=()=>e.jsx(r.Fragment,{children:w.map((a,t)=>e.jsxs("h3",{className:`flex text-base items-center gap-4 text-center ${t%4==0?"font-thin italic":t%2==0?"text-base front-bold tracking-wider	":t%3==0?"laptop:text-sm italic font-semibold uppercase":"laptop:text-2xl last:uppercase"}`,children:[e.jsx(x,{name:a.iconName,className:"w-6 min-w-[24px]",fill:"#8BA7B8"}),e.jsx("p",{children:a.title}),e.jsx(x,{name:a.iconName,className:"w-6 min-w-[24px]",fill:"#8BA7B8"})]},t))}),B=()=>e.jsxs("div",{className:"timeline",children:[e.jsx(b,{className:"relative timeline-icon z-10 left-1/2 -translate-x-1/2 w-40 border-2 border-russian-blue bg-russian-blue mb-20"}),j.map((a,t)=>e.jsx("div",{className:"flex",children:e.jsxs("div",{className:`timeline-container ${(t+1)%2==0?"timeline-container--left":"timeline-container--right"}`,children:[e.jsx("div",{className:`timeline-icon w-fit border-2 border-russian-blue rounded-full aspect-square bg-white p-1 top-[20px]
${(t+1)%2==0?"timeline-icon--left":"timeline-icon--right"}`,children:e.jsx(x,{className:"w-[var(--icon-w)]",name:a.iconName,fill:"#9AAEBB"})}),e.jsx(v,{...a,className:`relative border-2 border-russian-blue ${(t+1)%2==0?"border-arrow--left":"border-arrow--right"}`})]})},t)),e.jsx("img",{className:"relative timeline-icon z-10 left-1/2 -translate-x-1/2 w-40 aspect-square rounded-full border-2 border-russian-blue bg-russian-blue mt-20 shadow-lg",src:"./mikey-highschool.png"})]}),M=()=>e.jsx(r.Fragment,{children:e.jsx("div",{className:"grid grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 laptop:grid-flow-row gap-8",children:y.map((a,t)=>r.createElement(N,{...a,key:t,iconColor:"#8BA7B8"}))})}),F=()=>{const a=r.useRef(null),t=S(a,{amount:1}),s=e.jsxs(r.Fragment,{children:[e.jsxs("p",{children:["I'm a nomadic full stack developer with over",e.jsx("span",{className:"font-bold uppercase",children:" 3 years of experience"}),". I used to work for a successful startup in Tel Aviv but quit my job to try out a different lifestyle in the States. My partner and I are living in a van and slowly making our way around the country while rock climbing, backpacking and absorbing the views."]}),e.jsxs("p",{children:["My experience in a small startup made me a"," ",e.jsx("span",{className:"font-bold uppercase",children:"fast and independent learner"}),". I gained a lot of experience with Vue.js, JavaScript, CSS and HTML. Since moving to the States, I've turned my attention to new frameworks that will make me a stronger and more well-rounded developer."]}),e.jsxs("p",{children:["Learning on my own and living on the road has been awesome but I'm ready for the next step in my career. I can't wait to work on cool, new products and be"," ",e.jsx("span",{className:"font-bold uppercase",children:" part of a team "})," again!"]})]});return e.jsxs("div",{className:"w-full flex flex-col gap-10",children:[e.jsxs("div",{ref:a,className:"relative flex flex-col px-4 pb-10 laptop:px-20 laptop:py-10 laptop:min-h-full laptop:box-border laptop:justify-center shadow-xl",children:[e.jsxs("div",{className:"flex flex-col laptop:flex-row gap-5 laptop:gap-10 justify-center items-center",children:[e.jsx(d.div,{className:"flex flex-col w-1/2 laptop:w-1/3 justify-center",initial:{x:"200%"},animate:{x:"0"},transition:{duration:.7,type:"spring"},children:e.jsx(b,{className:"w-full laptop:w-[25rem]"})}),e.jsxs("div",{className:"flex flex-col laptop:w-2/3 text-base text-justify px-8 ",children:[e.jsx(d.h2,{className:"hidden laptop:flex section-header laptop:relative laptop:-top-20",initial:{y:-150},animate:{y:0},transition:{duration:1,type:"spring",bounce:.5},children:"About Me."}),e.jsx(d.div,{className:"flex flex-col gap-3",initial:{opacity:0},animate:{opacity:"100%"},transition:{delay:.2,ease:"easeOut",duration:1},children:s})]})]}),e.jsx(d.div,{className:"hidden laptop:block relative -bottom-10 self-center h-0",initial:{y:200},animate:{y:0},transition:{duration:1,bounce:.5},style:{opacity:t?1:0,transition:"opacity 0.5s"},children:e.jsx(x,{className:"w-14 animate-bounce",name:"angle-double-down-solid",fill:"#9AAEBB"})})]}),e.jsxs("div",{className:"relative flex flex-grow flex-col gap-10  laptop:gap-20 px-4 pb-10 laptop:px-20 laptop:py-10 shadow-xl",children:[e.jsx("h2",{className:"section-header",children:"Skills."}),e.jsx(M,{})]}),e.jsxs("div",{className:"hidden laptop:flex flex-col gap-10 px-4 pb-10 laptop:px-20 laptop:py-10 shadow-xl",children:[e.jsx("h2",{className:"section-header",children:"My Experience."}),e.jsx(B,{})]}),e.jsxs("div",{className:"flex flex-grow flex-col gap-10 laptop:gap-20 px-4 pb-10 laptop:px-20 laptop:py-10 laptop:shadow-xl",children:[e.jsx("h2",{className:"section-header",children:"Random Facts."}),e.jsx("div",{className:"flex flex-grow flex-col justify-center items-center gap-4",children:e.jsx(A,{})})]})]})};export{F as default};