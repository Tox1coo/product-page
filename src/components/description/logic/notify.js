import product from "@/utils/productInfo.json"
const notify = document.querySelector('.notify');
const notifyScrollbar = notify.querySelector('.notify__scrollbar');
const notifyInner = notify.querySelector('.notify__inner');
const notifyText = document.createElement('div');

notifyInner.appendChild(notifyText)

export function buyProduct(countProduct) {
	notifyText.classList.add('text');
	notifyText.classList.add('text--light');
	notifyText.classList.add('text--medium');

	notifyText.innerHTML = `Вы добавили в корзину товара "${product.nameProduct}" в количество <span>${countProduct}</span> штук`;
	notify.style.transform = 'translateX(-2%)';

	updateScrollBar()
}
let intervalScrollBar;
function updateScrollBar() {
	let i = 100;
	intervalScrollBar = setInterval(() => {
		if (notifyScrollbar.style.width === "0%") {
			clearInterval(intervalScrollBar)
			closeNotify()
		};
		i--
		notifyScrollbar.style.width = `${i}%`
	}, 40)
}

export function closeNotify() {
	clearInterval(intervalScrollBar)

	notifyText.innerHTML = ``;
	notify.style.transform = 'translateX(100%)';
	notifyScrollbar.style.width = `100%`;
}