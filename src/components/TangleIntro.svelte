<script lang="ts">
    import { inView } from '../lib/actions/inView';

    const benefits = [
        "Digital cash with instant settlement",
        "High-frequency trading on chain",
        "Global-scale decentralized systems",
        "Real-time financial markets",
    ];

    const innovations = [
        "Processing at physical limits, not network limits",
        "Perfect security through mathematical structure",
        "True scalability with no compromise",
    ];
</script>

<section class="w-screen bg-slate-900 py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Hero Section -->
        <div class="text-center mb-20 reveal-section delay-1" use:inView>
            <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 hover-glow">
                Tangle
            </h2>
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-lime-400">
                Powering The Future at the speed of physics.<br class="hidden sm:block" />
                Unleashing the Potential of Decentralized Systems.
            </p>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {#each benefits as benefit, i}
                <div class="relative p-8 rounded-xl border border-lime-400/20 hover:border-lime-400/40 transition-all duration-500 group slide-up" use:inView style="animation-delay: {500 + i * 100}ms">
                    <!-- Background Glow -->
                    <div class="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-emerald-500/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <!-- Content -->
                    <div class="relative z-10">
                        <p class="text-xl text-gray-300">
                            {benefit}
                        </p>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Innovations Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each innovations as innovation, i}
                <div class="relative p-8 rounded-xl border border-lime-400/20 hover:border-lime-400/40 transition-all duration-500 group slide-up" use:inView style="animation-delay: {800 + i * 100}ms">
                    <!-- Background Glow -->
                    <div class="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-emerald-500/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <!-- Content -->
                    <div class="relative z-10">
                        <p class="text-xl text-gray-300">
                            {innovation}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .delay-1 {
        animation-delay: 0.2s;
    }

    .delay-2 {
        animation-delay: 0.4s;
    }

    .delay-3 {
        animation-delay: 0.6s;
    }

    .delay-4 {
        animation-delay: 0.8s;
    }

    @keyframes revealSection {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .slide-up {
        opacity: 0;
        transform: translateY(20px);
        animation: slideUp 0.8s ease-out forwards;
    }

    .slide-right {
        opacity: 0;
        transform: translateX(-20px);
        animation: slideRight 0.8s ease-out forwards;
    }

    .slide-left {
        opacity: 0;
        transform: translateX(20px);
        animation: slideLeft 0.8s ease-out forwards;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideRight {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideLeft {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .hover-lift {
        transition: all 0.3s ease-in-out;
    }

    .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
</style>
