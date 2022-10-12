import product from "@/utils/productInfo.json"
import { shareIcons } from "@/utils/shares.js"
export function setInfoProduct() {

	const setNewInfoProduct = () => {
		setTagsProduct();
		setPricesProduct();
		setAvailability();
		setProductText();
		setShareProduct()
	}
	window.addEventListener('load', setNewInfoProduct);

}

function setTagsProduct() {
	const tagsList = document.querySelector('.product__tags');
	product.tags.forEach(tagElement => {
		const tag = document.createElement('a');
		tag.classList.add('product__tag');
		tag.textContent = tagElement.title
		tag.href = tagElement.link;
		tagsList.appendChild(tag);
	})
}

function setPricesProduct() {
	const pricesList = document.querySelector('.product__prices');
	if (product.price?.priceWithDiscount !== undefined) {
		const oldPrice = document.createElement('del');
		oldPrice.classList.add('prices__current')

		oldPrice.innerText = product.price.currentPrice;
		pricesList.appendChild(oldPrice)
		const newPrice = document.createElement('span');
		newPrice.classList.add('prices__discount')
		newPrice.innerText = product.price.priceWithDiscount;
		pricesList.appendChild(newPrice);
	} else {
		const price = document.createElement('span');
		price.classList.add('prices__current')
		price.innerText = product.price.currentPrice;
		pricesList.appendChild(price);
	}

	if (product.price?.priceWithPromo !== undefined) {
		const priceWithPromo = document.createElement('div');
		priceWithPromo.classList.add('prices__promo')
		priceWithPromo.innerHTML = `<span>${product.price.priceWithPromo}</span> — с промокодом`;
		pricesList.appendChild(priceWithPromo);
	}
}

function setAvailability() {
	const blockAvailability = document.querySelector('.product__availability')
	const availabilityItemShop = document.createElement('div');
	availabilityItemShop.classList.add('product__availability-item')
	if (product.availability) {
		availabilityItemShop.innerHTML = `<img width="17" src="./icons/check.svg"> <div>В наличии в магазине <span>${product.shop}</span></div>`;
		blockAvailability.appendChild(availabilityItemShop);

	} else {
		availabilityItemShop.innerHTML = `<img width="15" src="./icons/error.svg"><div> Нет в наличии </div>`;
		blockAvailability.appendChild(availabilityItemShop);
	}
	const availabilityItemDelivery = document.createElement('div');
	availabilityItemDelivery.classList.add('product__availability-item')
	availabilityItemDelivery.innerHTML = `<img width="17" src="./icons/delivery.svg"> <div>Бесплатная доствка</div>`;
	blockAvailability.appendChild(availabilityItemDelivery);

}


function setProductText() {
	const productDescriptionBlock = document.querySelector('.product__text')
	product.description.forEach(text => {
		const textElement = document.createElement('p');
		textElement.innerText = text;
		textElement.classList.add('text')
		productDescriptionBlock.appendChild(textElement);

	});
}


function setShareProduct() {
	const shares = ['vk', 'google', 'facebook', 'twitter'];
	const shareBlock = document.querySelector('.share')
	shares.forEach((shareItem) => {
		const shareLink = document.createElement('a');
		shareLink.href = shareIcons[shareItem].link;
		shareLink.classList.add('share__link')

		shareLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px">${shareIcons[shareItem].path}</svg>`
		shareBlock.appendChild(shareLink)
	})
	const shareCount = document.createElement('div');

	shareCount.classList.add('share__count');

	shareCount.innerText = product.shareCount;

	shareBlock.appendChild(shareCount)
}