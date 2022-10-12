import '@/styles/UI.scss';
import '@/styles/components/slider.scss';
import { setPhotoProduct } from './logic/logic-slider-list';
import { setActivePreview } from './logic/setActivePreview';

document.querySelector('.slider').innerHTML = `
	<div class="slider__list">
	</div>
	<div class="slider__preview preview">
	</div>
`

setPhotoProduct(document.querySelector('.slider__list'), document.querySelector('.slider__preview'));
setActivePreview(document.querySelector('.slider__list'));
