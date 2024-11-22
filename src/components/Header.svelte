<script lang="ts">
    import { onMount } from 'svelte';
    import { inView } from '../lib/actions/inView';

    const links = [
        { title: "Home", href: "/" },
        { title: "Contact", href: "/contact" },
    ];

    let isMenuOpen = false;
    let isVisible = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    onMount(() => {
        // Small delay to ensure smooth animation
        setTimeout(() => {
            isVisible = true;
        }, 100);
    });
</script>

<header
    class="h-[8vh] flex items-center fixed top-0 z-[999] w-screen px-4 bg-slate-900/95 backdrop-blur-sm font-felix header-item"
    class:visible={isVisible}
>
    <div class="container mx-auto flex items-center justify-between text-white">
        <div class="slide-right header-item" class:visible={isVisible}>
            <h1 class="text-3xl font-bold hover-lift">Tangle</h1>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex gap-x-8 items-center slide-left header-item" class:visible={isVisible}>
            {#each links as link, i}
                <a 
                    href={link.href}
                    class="hover:text-lime-400 transition-colors duration-200 hover-lift header-item"
                    class:visible={isVisible}
                    style="transition-delay: {150 + i * 100}ms"
                >
                    {link.title}
                </a>
            {/each}
        </nav>

        <!-- Mobile Menu Button -->
        <button
            class="lg:hidden text-white p-2 focus:outline-none z-50 hover-scale fade-in header-item"
            class:visible={isVisible}
            on:click={toggleMenu}
            aria-label="Toggle menu"
        >
            <svg
                class="w-6 h-6 transition-transform duration-300"
                class:rotate-180={isMenuOpen}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                {#if !isMenuOpen}
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                {:else}
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                {/if}
            </svg>
        </button>
    </div>

    <!-- Mobile Navigation Overlay -->
    {#if isMenuOpen}
        <div 
            class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            on:click={toggleMenu}
            transition:fade={{ duration: 200 }}
        ></div>
    {/if}

    <!-- Mobile Navigation Side Panel -->
    <nav
        class="fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur-sm transform transition-all duration-300 ease-in-out z-40 lg:hidden {isMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
    >
        <div class="flex flex-col pt-24 px-4">
            {#each links as link, i}
                <a
                    href={link.href}
                    class="py-4 text-white text-lg hover:text-lime-400 border-b border-slate-800 transition-all duration-200 hover-lift slide-left"
                    use:inView
                    style="animation-delay: {200 + i * 100}ms"
                    on:click={toggleMenu}
                >{link.title}</a>
            {/each}
        </div>
    </nav>
</header>

<style>
    /* Add backdrop blur when menu is open */
    :global(body) {
        transition: backdrop-filter 0.3s ease;
    }

    :global(body.menu-open) {
        backdrop-filter: blur(4px);
    }

    /* Prevent content scroll when menu is open */
    :global(body.menu-open) {
        overflow: hidden;
    }

    .header-item {
        opacity: 0;
        transform: translateY(-10px);
    }
    
    .header-item.visible {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Mobile menu styles */
    .menu-enter {
        transform: translateX(100%);
    }
    
    .menu-enter.visible {
        transform: translateX(0);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
</style>
