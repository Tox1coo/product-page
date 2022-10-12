import '@/styles/UI.scss';
import product from "@/utils/productInfo.json"
import { setInfoProduct } from './logic/setInfoProduct';
import '@/styles/components/prices.scss';
import '@/styles/components/counter.scss';
import '@/styles/components/share.scss';
import { buyProduct } from "./logic/notify"
import { counterProduct, changeCounterInput } from "./logic/counter";
import { closeNotify } from '@/components/description/logic/notify.js';

document.querySelector('.product__description').innerHTML = `
	<h2 class="subtitle">
		${product.nameProduct}
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
		<button data-buy class="btn btn--accent">Купить</button>
		<button class="btn">В избранное</button>
	</div>
	<div class="product__text">
	</div>
	<div class="product__share share">
		<div class="share__text">Поделиться:</div>
	</div>
`
/* info */
setInfoProduct()

/* close */
document.querySelector('.close__inner').addEventListener('click', closeNotify)


/* counter */
const counterInput = document.querySelector('.counter__input');

document.querySelector('.counter').addEventListener('click', (e) => counterProduct(e.target, counterInput));

counterInput.addEventListener('input', (e) => changeCounterInput(e.target))
counterInput.addEventListener('change', (event) => {
	if (event.target.value === '') event.target.value = 1
})

/* buying */
document.querySelector('button[data-buy]').addEventListener('click', (e) => buyProduct(counterInput.value))
