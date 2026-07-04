/** Scroll-reveal via IntersectionObserver. Honors prefers-reduced-motion. */
export function reveal(node) {
	const prefersReduced =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReduced) {
		node.classList.add('reveal', 'reveal--visible');
		return {};
	}

	node.classList.add('reveal');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('reveal--visible');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
