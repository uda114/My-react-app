const l=new Set(["Module","__esModule","default","_export_sfc"]);let a={"./Inventory":()=>(d([],!1,"./Inventory"),f("./__federation_expose_Inventory-Dz0eMYQY.js").then(e=>Object.keys(e).every(n=>l.has(n))?()=>e.default:()=>e))};const c={},d=(e,n,i)=>{const r=import.meta.url;if(typeof r>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const _=r.substring(0,r.lastIndexOf("inventoryEntry.js"));e.forEach(s=>{const t=_+s;if(!(t in c))if(c[t]=!0,n){const o="css__inventorymfe__"+i;window[o]==null&&(window[o]=[]),window[o].push(t)}else{const o=document.head.appendChild(document.createElement("link"));o.href=t,o.rel="stylesheet"}})};async function f(e){return import(e)}const h=e=>{if(!a[e])throw new Error("Can not find remote module "+e);return a[e]()},u=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([n,i])=>{const r=Object.keys(i)[0],_=Object.values(i)[0],s=_.scope||"default";globalThis.__federation_shared__[s]=globalThis.__federation_shared__[s]||{};const t=globalThis.__federation_shared__[s];(t[n]=t[n]||{})[r]=_})};export{d as dynamicLoadingCss,h as get,u as init};
