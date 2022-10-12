export function setActivePreview(listElement) {
	const setNewPreviewPhoto = (event) => {
		if (event.target.getAttribute('data-preview')) {
			document.querySelector('.preview__item').src = `./productPhoto/${event.target.getAttribute('data-preview')}.png`

			const beforeItemSlide = document.querySelector('.slider__item--active');

			beforeItemSlide.classList.remove('slider__item--active');

			event.target.classList.add('slider__item--active')
		}

	}
	listElement.addEventListener('mousemove', setNewPreviewPhoto)

}
