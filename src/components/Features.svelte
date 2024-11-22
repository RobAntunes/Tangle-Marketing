<script>
    import { inView } from '../lib/actions/inView';

    const features = [
        {
            title: "Physical-Speed Processing",
            description:
                "Transform blockchain bottlenecks into parallel processing through Proof of Structure.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
        },
        {
            title: "True Decentralization",
            description:
                "No coordinators, no delegation, no compromises. Pure mathematical decentralization.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>`,
        },
        {
            title: "Real-World, Global Scale",
            description:
                "Built for real-world deployment with comprehensive security guarantees and seamless scalability.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
        },
    ];
</script>

<section class="w-screen bg-slate-900 py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Section Title -->
        <div class="text-center mb-20" use:inView>
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Redefining <span class="bg-gradient-to-r from-lime-400 via-emerald-500 to-green-500 bg-clip-text text-transparent">Possible</span>
            </h2>
            <p class="text-xl text-gray-300">
                A new paradigm in blockchain architecture.
            </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each features as feature, i}
                <div 
                    class="relative p-8 rounded-xl border border-lime-400/20 hover:border-lime-400/40 transition-all duration-500 group"
                    use:inView
                >
                    <!-- Background Glow -->
                    <div class="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-emerald-500/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <!-- Content -->
                    <div class="relative z-10">
                        <div class="text-lime-400 mb-6">
                            {@html feature.icon}
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                            {feature.title}
                        </h3>
                        <p class="text-gray-300 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
    }
</style>
