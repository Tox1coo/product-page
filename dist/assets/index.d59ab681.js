(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();document.querySelector("#main").innerHTML=`
  <div class="container">
    <section class="product">
      <div  class="slider">
      </div>
      <div class="product__description">
      </div>
    </section>
  </div>
  <div class="notify">
    <div class="notify__inner">
      <h3>\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</h3>
      <div class="notify__scrollbar"></div>
    </div>
    <div class="close">
      <div class="close__inner">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
`;const _="\u0440\u0443\u0431\u0430\u0448\u043A\u0430 medicine",f=[{title:"\u0420\u0443\u0431\u0430\u0448\u043A\u0438 Medicine",link:"#"},{title:" \u0412\u0441\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 Medicine",link:"#"},{title:"\u0420\u0443\u0431\u0430\u0448\u043A\u0438",link:"#"}],C={currentPrice:"2 699 \u20BD",priceWithDiscount:"2 499 \u20BD",priceWithPromo:"2 227 \u20BD"},L=!0,y="Lamoda",g=["\u0420\u0443\u0431\u0430\u0448\u043A\u0430 Medicine \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0438\u0437 \u0432\u0438\u0441\u043A\u043E\u0437\u043D\u043E\u0439 \u0442\u043A\u0430\u043D\u0438 \u0441 \u043A\u043B\u0435\u0442\u0447\u0430\u0442\u044B\u043C \u0443\u0437\u043E\u0440\u043E\u043C. \u0414\u0435\u0442\u0430\u043B\u0438: \u043F\u0440\u044F\u043C\u043E\u0439 \u043A\u0440\u043E\u0439; \u043E\u0442\u043B\u043E\u0436\u043D\u043E\u0439 \u0432\u043E\u0440\u043E\u0442\u043D\u0438\u043A; \u043F\u043B\u0430\u043D\u043A\u0430 \u0438 \u043C\u0430\u043D\u0436\u0435\u0442\u044B \u043D\u0430 \u043F\u0443\u0433\u043E\u0432\u0438\u0446\u0430\u0445; \u043A\u0430\u0440\u043C\u0430\u043D \u043D\u0430 \u0433\u0440\u0443\u0434\u0438."],b={preview:["t-shirt-preview","t-shirt-2-preview","t-shirt-3-preview"],list:["t-shirt","t-shirt-2","t-shirt-3"]},w=123,n={nameProduct:_,tags:f,price:C,availability:L,shop:y,description:g,photos:b,shareCount:w};function P(t,i){const c=()=>{const r=document.createElement("div"),e=document.createElement("img");r.classList.add("slider__scroll"),e.src=`./productPhoto/${n.photos.preview[0]}.png`,e.setAttribute("data-active",`${n.photos.preview[0]}`),i.appendChild(e),n.photos.list.forEach((s,d)=>{const a=document.createElement("img");a.src=`./productPhoto/${s}.png`,a.classList.add("slider__item"),a.setAttribute("data-preview",`${s}-preview`),d===0&&a.classList.add("slider__item--active"),t.appendChild(a)}),t.appendChild(r),e.classList.add("preview__item")};window.addEventListener("load",c)}function S(t){const i=c=>{c.target.getAttribute("data-preview")&&(document.querySelector(".preview__item").src=`./productPhoto/${c.target.getAttribute("data-preview")}.png`,document.querySelector(".slider__item--active").classList.remove("slider__item--active"),c.target.classList.add("slider__item--active"))};t.addEventListener("mousemove",i)}document.querySelector(".slider").innerHTML=`
	<div class="slider__list">
	</div>
	<div class="slider__preview preview">
	</div>
`;P(document.querySelector(".slider__list"),document.querySelector(".slider__preview"));S(document.querySelector(".slider__list"));const h={google:{path:'<path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"/>',link:"https://google.com"},vk:{path:' <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 17 13 L 25.029297 13 C 26.769297 13 34 12.999844 34 18.339844 C 34 19.469844 33.720625 20.459844 33.140625 21.339844 C 32.560625 22.219844 31.390859 22.859297 30.380859 23.279297 L 31.189453 23.400391 C 32.639453 23.700391 33.809453 24.300469 34.689453 25.230469 C 35.559453 26.150469 36 27.390937 36 28.960938 C 36 30.100937 35.780078 31.110703 35.330078 31.970703 C 34.890078 32.840703 34.290781 33.549141 33.550781 34.119141 C 32.660781 34.789141 31.679375 35.280312 30.609375 35.570312 C 29.549375 35.850313 28.210313 36 26.570312 36 L 17 36 L 17 13 z M 23 18 L 23 22 L 26 22 C 27.105 22 28 21.105 28 20 C 28 18.895 27.105 18 26 18 L 23 18 z M 23 26 L 23 31 L 27.5 31 C 28.88 31 30 29.88 30 28.5 C 30 27.12 28.88 26 27.5 26 L 23 26 z"/>',link:"https://vk.com"},twitter:{path:'<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/>',link:"https://twitter.com"},facebook:{path:'<path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"/>',link:"https://facebook.com"}};function k(){const t=()=>{E(),q(),M(),x(),T()};window.addEventListener("load",t)}function E(){const t=document.querySelector(".product__tags");n.tags.forEach(i=>{const c=document.createElement("a");c.classList.add("product__tag"),c.textContent=i.title,c.href=i.link,t.appendChild(c)})}function q(){var i,c;const t=document.querySelector(".product__prices");if(((i=n.price)==null?void 0:i.priceWithDiscount)!==void 0){const r=document.createElement("del");r.classList.add("prices__current"),r.innerText=n.price.currentPrice,t.appendChild(r);const e=document.createElement("span");e.classList.add("prices__discount"),e.innerText=n.price.priceWithDiscount,t.appendChild(e)}else{const r=document.createElement("span");r.classList.add("prices__current"),r.innerText=n.price.currentPrice,t.appendChild(r)}if(((c=n.price)==null?void 0:c.priceWithPromo)!==void 0){const r=document.createElement("div");r.classList.add("prices__promo"),r.innerHTML=`<span>${n.price.priceWithPromo}</span> \u2014 \u0441 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u043E\u043C`,t.appendChild(r)}}function M(){const t=document.querySelector(".product__availability"),i=document.createElement("div");i.classList.add("product__availability-item"),i.innerHTML=`<img width="17" src="./icons/check.svg"> <div>\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 <span>${n.shop}</span></div>`,t.appendChild(i);const c=document.createElement("div");c.classList.add("product__availability-item"),c.innerHTML='<img width="17" src="./icons/delivery.svg"> <div>\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0432\u043A\u0430</div>',t.appendChild(c)}function x(){const t=document.querySelector(".product__text");n.description.forEach(i=>{const c=document.createElement("p");c.innerText=i,c.classList.add("text"),t.appendChild(c)})}function T(){const t=["vk","google","facebook","twitter"],i=document.querySelector(".share");t.forEach(r=>{const e=document.createElement("a");e.href=h[r].link,e.classList.add("share__link"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px">${h[r].path}</svg>`,i.appendChild(e)});const c=document.createElement("div");c.classList.add("share__count"),c.innerText=n.shareCount,i.appendChild(c)}const l=document.querySelector(".notify"),p=l.querySelector(".notify__scrollbar"),I=l.querySelector(".notify__inner"),o=document.createElement("div");I.appendChild(o);function $(t){o.classList.add("text"),o.classList.add("text--light"),o.classList.add("text--medium"),o.innerHTML=`\u0412\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0442\u043E\u0432\u0430\u0440\u0430 "${n.nameProduct}" \u0432 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E <span>${t}</span> \u0448\u0442\u0443\u043A`,l.style.transform="translateX(-2%)",A()}let v;function A(){let t=100;v=setInterval(()=>{p.style.width==="0%"&&(clearInterval(v),m()),t--,p.style.width=`${t}%`},40)}function m(){clearInterval(v),o.innerHTML="",l.style.transform="translateX(100%)",p.style.width="100%"}function H(t,i){t.tagName==="BUTTON"&&(t.getAttribute("data-minus")!==null&&i.value!=1&&(i.value=--i.value),t.getAttribute("data-plus")!==null&&(i.value=++i.value))}function N(t){t.value.match(/\d.\d/)&&(t.value=Math.floor(t.value))}document.querySelector(".product__description").innerHTML=`
	<h2 class="subtitle">
		${n.nameProduct}
	</h2>
	<div class="product__tags">
	</div>
	<div class="product__prices prices">
	</div>
	<div class="product__availability">
	</div>
	<div class="product__counter counter">
		<button data-minus class="counter__button">-</button>
		<input class="counter__input" type="number" value="1"/>
		<button data-plus class="counter__button">+</button>
	</div>
	<div class="product__buttons">
		<button data-buy class="btn btn--accent">\u041A\u0443\u043F\u0438\u0442\u044C</button>
		<button class="btn">\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435</button>
	</div>
	<div class="product__text">
	</div>
	<div class="product__share share">
		<div class="share__text">\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F:</div>
	</div>
`;k();document.querySelector(".close__inner").addEventListener("click",m);const u=document.querySelector(".counter__input");document.querySelector(".counter").addEventListener("click",t=>H(t.target,u));u.addEventListener("input",t=>N(t.target));u.addEventListener("change",t=>{t.target.value===""&&(t.target.value=1)});document.querySelector("button[data-buy]").addEventListener("click",t=>$(u.value));