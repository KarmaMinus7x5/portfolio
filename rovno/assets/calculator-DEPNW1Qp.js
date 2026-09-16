import"./main-CDSC5m6J.js";import{n as e,r as t,t as n}from"./estimate-5vSfTSd0.js";import{a as r,i,r as a,t as o}from"./format-DVBgFexV.js";var s=document.querySelector(`[data-calc-form]`),c=document.querySelector(`[data-calc-sheet]`),l=document.querySelector(`[data-area-range]`),u=s.elements.area,d=document.querySelector(`[data-calc-bar]`),f=document.querySelector(`[data-calc-bar-total]`),p=[`неделя`,`недели`,`недель`],m=new Date().toLocaleDateString(`ru-RU`);function h(){let e=new FormData(s);return{home:e.get(`home`),area:e.get(`area`),height:e.get(`height`),rooms:e.get(`rooms`),baths:e.get(`baths`),level:e.get(`level`),ceiling:e.get(`ceiling`),options:e.getAll(`options`),materials:e.get(`materials`)}}function g(e){for(let t of[`home`,`height`,`level`,`ceiling`,`materials`]){let n=s.querySelector(`[name="${t}"][value="${e[t]}"]`);n&&(n.checked=!0)}u.value=e.area,l.value=e.area,s.elements.rooms.value=String(e.rooms),s.elements.baths.value=String(e.baths);for(let t of s.querySelectorAll(`[name="options"]`))t.checked=e.options.includes(t.value)}function _(e){let t=e.sections.map(e=>`
    <tbody>
      <tr class="sheet-section"><th colspan="3" scope="colgroup">${o(e.title)}</th><td class="mono">${i(e.subtotal)}</td></tr>
      ${e.lines.map(e=>`<tr><td>${o(e.name)}</td><td class="mono">${a(e.qty)} ${e.unit}</td><td class="mono">${i(e.price)}</td><td class="mono">${i(e.sum)}</td></tr>`).join(``)}
    </tbody>`).join(``),n=`/portfolio/rovno/request/?${new URLSearchParams({area:e.params.area,home:e.params.home,estimate:e.id})}`;return`
    <header class="sheet-head">
      <p class="meta">Предварительная смета № ${e.id} · ${m}</p>
      <p class="stamp" aria-hidden="true">Предварительно</p>
      <h2>${i(e.total)}</h2>
      <p class="sheet-weeks">Срок ${e.weeks.min}–${e.weeks.max} ${r(e.weeks.max,p)}</p>
    </header>
    <dl class="sheet-totals">
      <div><dt>Работы</dt><dd class="mono">${i(e.works)}</dd></div>
      <div><dt>Черновые материалы, по чекам</dt><dd class="mono">${i(e.roughMaterials)}</dd></div>
      ${e.finishMaterials?`<div><dt>Чистовые материалы</dt><dd class="mono">${i(e.finishMaterials)}</dd></div>`:``}
    </dl>
    <details class="sheet-lines">
      <summary>Все позиции сметы</summary>
      <table><thead><tr><th scope="col">Работа</th><th scope="col">Объём</th><th scope="col">Цена</th><th scope="col">Сумма</th></tr></thead>${t}</table>
    </details>
    <h3>График оплаты работ</h3>
    <ol class="sheet-schedule">${e.schedule.map(e=>`<li><span>${o(e.name)}</span><span class="mono">${i(e.amount)}</span></li>`).join(``)}</ol>
    <p class="meta">Это не оферта. Цену работ фиксируем в договоре после замера.</p>
    <div class="sheet-actions" data-no-print>
      <a class="button" href="${n}">На замер с этой сметой</a>
      <button class="button button--ghost" type="button" data-copy>Скопировать ссылку</button>
      <button class="button button--ghost" type="button" data-print>Печать или PDF</button>
    </div>`}function v(){let t=n(h());c.innerHTML=_(t),f.textContent=i(t.total),history.replaceState(null,``,`?${e(t.params)}`)}l.addEventListener(`input`,()=>{u.value=l.value,v()}),u.addEventListener(`change`,()=>{let e=t(`area=${u.value}`);u.value=e.area,l.value=e.area,v()}),s.addEventListener(`change`,e=>{e.target!==u&&v()}),s.addEventListener(`submit`,e=>e.preventDefault()),c.addEventListener(`click`,async e=>{e.target.closest(`[data-print]`)&&print();let t=e.target.closest(`[data-copy]`);if(t){try{await navigator.clipboard.writeText(location.href),t.textContent=`Ссылка скопирована`}catch{t.textContent=`Скопируйте адрес из строки браузера`}setTimeout(()=>{t.textContent=`Скопировать ссылку`},2500)}}),g(t(location.search)),d.hidden=!1,v();