const c=new Set(["Module","__esModule","default","_export_sfc"]);let a={"./Order":()=>(l([],!1,"./Order"),f("./__federation_expose_Order-Dpraoi7k.js").then(e=>Object.keys(e).every(r=>c.has(r))?()=>e.default:()=>e))};const d={},l=(e,r,i)=>{const o=import.meta.url;if(typeof o>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const _=o.substring(0,o.lastIndexOf("orderEntry.js"));e.forEach(s=>{const t=_+s;if(!(t in d))if(d[t]=!0,r){const n="css__ordermfe__"+i;window[n]==null&&(window[n]=[]),window[n].push(t)}else{const n=document.head.appendChild(document.createElement("link"));n.href=t,n.rel="stylesheet"}})};async function f(e){return import(e)}const h=e=>{if(!a[e])throw new Error("Can not find remote module "+e);return a[e]()},u=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([r,i])=>{const o=Object.keys(i)[0],_=Object.values(i)[0],s=_.scope||"default";globalThis.__federation_shared__[s]=globalThis.__federation_shared__[s]||{};const t=globalThis.__federation_shared__[s];(t[r]=t[r]||{})[o]=_})};export{l as dynamicLoadingCss,h as get,u as init};
