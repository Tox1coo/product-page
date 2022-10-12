export function counterProduct(counterElement, input) {
	if (counterElement.tagName === 'BUTTON') {
		if (counterElement.getAttribute('data-minus') !== null && input.value != 1) {
			input.value = --input.value;
		}
		if (counterElement.getAttribute('data-plus') !== null) {
			input.value = ++input.value;
		}
	}
}

export function changeCounterInput(inputCounter) {
	if (inputCounter.value.match(/\d.\d/)) inputCounter.value = Math.floor(inputCounter.value)
}