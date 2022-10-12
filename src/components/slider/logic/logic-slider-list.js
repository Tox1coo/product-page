import product from "@/utils/productInfo.json"
export function setPhotoProduct(listElement, previewElement) {

	const loadPhotoProduct = () => {
		const buttonScroll = document.createElement('div');
		const itemPreview = document.createElement('img');

		buttonScroll.classList.add('slider__scroll');

		itemPreview.src = `./productPhoto/${product.photos.preview[0]}.png`
		itemPreview.setAttribute('data-active', `${product.photos.preview[0]}`)

		previewElement.appendChild(itemPreview)

		product.photos.list.forEach((photo, index) => {
			const item = document.createElement('img');

			item.src = `./productPhoto/${photo}.png`;
			item.classList.add('slider__item');
			item.setAttribute('data-preview', `${photo}-preview`)

			if (index === 0)
				item.classList.add('slider__item--active');

			listElement.appendChild(item);

		});
		listElement.appendChild(buttonScroll);

		itemPreview.classList.add('preview__item');

	}
	window.addEventListener('load', loadPhotoProduct)

}
