document.addEventListener('DOMContentLoaded', () => {
	const btn = document.querySelector('.hamburger');
	const nav = document.getElementById('mainNav');

	// hamburger toggle (only if elements exist)
	if (btn && nav) {
		btn.addEventListener('click', () => {
			const expanded = btn.getAttribute('aria-expanded') === 'true';
			btn.setAttribute('aria-expanded', String(!expanded));
			nav.classList.toggle('open');
		});
	}
	// product rotator
	const rotator = document.querySelector('.productDisplay');
	if (!rotator) return;

	const items = Array.from(rotator.querySelectorAll('.product'));
	if (items.length <= 1) return;

	let current = 0;
	const show = (index) => {
		items.forEach((it, i) => {
			const active = i === index;
			it.classList.toggle('active', active);
			it.setAttribute('aria-hidden', String(!active));
		});
	};

	show(current);
	setInterval(() => {
		current = (current + 1) % items.length;
		show(current);
	}, 3000);
});

