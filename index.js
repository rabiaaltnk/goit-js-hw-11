import{a as f,S as p,i as l}from"./assets/vendor-1AYLTIiv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="49926039-70f4c194fbb0b63068557ead5",h="https://pixabay.com/api/";function y(n){const o=`${h}?key=${m}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;return f.get(o).then(e=>e).catch(e=>{throw new Error(e)})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");let c=null;function g(n){const o=n.map(e=>`
      <a href="${e.largeImageURL}" class="gallery-item">
        <img src="${e.webformatURL}" alt="${e.tags}" />
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </a>
    `).join("");u.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new p(".gallery a")}function b(){u.innerHTML=""}function L(){d.classList.remove("hidden")}function a(){d.classList.add("hidden")}const w=document.querySelector("#searchForm"),$=document.querySelector("#searchInput");w.addEventListener("submit",n=>{n.preventDefault();const o=$.value.trim();o&&(b(),L(),y(o).then(e=>{const s=e.data.hits;if(s.length===0){l.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}),a();return}setTimeout(()=>{g(s),a()},1e3)}).catch(e=>{console.error("Fetch error:",e),l.error({title:"Error",message:"An error occurred while fetching data."}),a()}))});
//# sourceMappingURL=index.js.map
