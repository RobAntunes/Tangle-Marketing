export function inView(node: HTMLElement, params = { threshold: 0.2 }) {
    let lastScrollY = window.scrollY;
    let hasAnimated = false;
    
    // Initial state: invisible with transition
    node.classList.add('opacity-0', 'transition-opacity', 'duration-700');
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const currentScrollY = window.scrollY;
                const isScrollingDown = currentScrollY > lastScrollY;
                lastScrollY = currentScrollY;

                if (!entry.isIntersecting && entry.boundingClientRect.top > window.innerHeight) {
                    // Reset state when element is below viewport
                    node.classList.remove('opacity-100');
                    node.classList.add('opacity-0');
                    hasAnimated = false;
                } else if (entry.isIntersecting && isScrollingDown && !hasAnimated) {
                    // Animate when scrolling down into view
                    requestAnimationFrame(() => {
                        node.classList.remove('opacity-0');
                        node.classList.add('opacity-100');
                        hasAnimated = true;
                    });
                }
            });
        },
        {
            threshold: 0.33,
            rootMargin: "-10% 0px -33% 0px"
        }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}
