import{s as d,a as p,b as v,r as b,o as y,d as g,m as o}from"./cart.xsPK77po.js";const n=JSON.parse(document.getElementById("cart-strings").textContent),f=document.getElementById("cart-empty"),x=document.getElementById("cart-filled"),u=document.getElementById("cart-lines"),$=document.getElementById("cart-subtotal"),h=document.getElementById("cart-total"),E="/daker-preview".replace(/\/+$/,"");function w(t){const a=t.variantLabel?t.variantLabel[n.lang]:"",e=r=>r.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);return`
      <li class="flex gap-4 p-4" data-line="${e(t.id)}">
        <img src="${e(t.art.startsWith("/")?t.art:`${E}/art/${t.art}.svg`)}" alt="" width="96" height="72" loading="lazy"
             class="h-18 w-24 shrink-0 rounded-lg bg-brand-50 object-cover" />
        <div class="min-w-0 flex-1">
          <p class="font-semibold text-brand-950">${e(t.name[n.lang])}</p>
          <p class="text-xs text-slate-400">${e(t.sku)}${a?" · "+e(a):""}</p>
          <div class="mt-3 flex flex-wrap items-center gap-3">
            <div class="flex items-stretch overflow-hidden rounded-lg border border-slate-300">
              <button type="button" data-act="dec" class="w-8 cursor-pointer bg-slate-50 font-bold text-slate-600 hover:bg-slate-100" aria-label="-1">−</button>
              <input type="number" min="1" max="99" value="${t.qty}" data-act="qty" inputmode="numeric"
                     class="w-12 border-x border-slate-300 py-1.5 text-center text-sm font-semibold focus:outline-none" />
              <button type="button" data-act="inc" class="w-8 cursor-pointer bg-slate-50 font-bold text-slate-600 hover:bg-slate-100" aria-label="+1">+</button>
            </div>
            <button type="button" data-act="del" class="cursor-pointer text-xs font-semibold text-red-600 hover:underline">
              ${e(n.remove)}
            </button>
          </div>
        </div>
        <div class="shrink-0 text-right">
          <p class="font-bold text-brand-900">${o(t.price*t.qty)}</p>
          <p class="text-xs text-slate-400">${o(t.price)} ×${t.qty}</p>
        </div>
      </li>`}function s(t=b()){const a=t.length>0;if(f.hidden=a,x.hidden=!a,!a)return;u.innerHTML=t.map(w).join("");const e=g(t);$.textContent=o(e),h.textContent=o(e)}u.addEventListener("click",t=>{const a=t.target.closest("[data-act]"),e=t.target.closest("[data-line]");if(!a||!e)return;const r=e.dataset.line,c=e.querySelector('[data-act="qty"]');a.dataset.act==="inc"?s(d(r,Number(c.value)+1)):a.dataset.act==="dec"?s(d(r,Number(c.value)-1)):a.dataset.act==="del"&&s(p(r))});u.addEventListener("change",t=>{const a=t.target;if(a.dataset.act!=="qty")return;const e=a.closest("[data-line]");s(d(e.dataset.line,Number(a.value)))});document.getElementById("cart-clear")?.addEventListener("click",()=>{v(),s([])});function I(t){const a=t.map((e,r)=>{const c=e.variantLabel?` (${e.variantLabel[n.lang]})`:"";return`${r+1}. ${e.name[n.lang]}${c} — ${e.sku}
   ${n.labels.qty}: ${e.qty} × ${o(e.price)} = ${o(e.price*e.qty)}`});return[n.labels.orderTitle,...a,`${n.labels.total}: ${o(g(t))}`].join(`
`)}const i=document.getElementById("cart-manual"),m=document.getElementById("cart-manual-note"),l=document.getElementById("cart-tg-text");document.getElementById("cart-tg")?.addEventListener("click",async()=>{const t=b();if(!t.length)return;const a=I(t);l&&(l.value=a);let e=!1;try{await navigator.clipboard.writeText(a),e=!0}catch{}i&&(i.hidden=!1),e?(m&&(m.textContent=n.labels.copied),window.open(`${n.telegram}?text=${encodeURIComponent(a)}`,"_blank","noopener")):i?.scrollIntoView({behavior:"smooth",block:"center"})});document.getElementById("cart-tg-copy")?.addEventListener("click",()=>{l&&(l.select(),navigator.clipboard?.writeText(l.value).catch(()=>{}))});s();y(s);
