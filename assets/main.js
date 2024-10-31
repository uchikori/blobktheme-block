window.onload = () => {
	setTimeout(crossfade, 1000);
};

function crossfade() {
	const elInner = document.querySelectorAll(".bl_crossFadeAnim img");
	console.log(elInner);

	if (elInner.length > 0) {
		const duration = 5000;
		let defaultIndex = 0;
		const switchImage = function (next) {
			let current = next ? next - 1 : elInner.length - 1;
			elInner[current].classList.remove("is-visible");
			elInner[next].classList.add("is-visible");
			next = ++next < elInner.length ? next : 0;
			setTimeout(() => switchImage(next), duration);
		};
		switchImage(defaultIndex);
	} else {
		console.log("no image");
	}
}
