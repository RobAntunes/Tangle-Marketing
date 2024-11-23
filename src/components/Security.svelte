<script>
    const protectionLayers = [
        {
            title: "Geometric Isolation",
            description: "Attacks naturally contained to local zones",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
        },
        {
            title: "Global Integrity",
            description: "51% consensus threshold through mathematical proof",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`
        }
    ];

    const evolutionPrinciples = [
        {
            title: "Natural Progression",
            description: "Accounts evolve like living things, each new state emerging naturally from its history. Every transaction adds to this evolutionary chain, creating an unbreakable thread of cryptographic DNA.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
        },
        {
            title: "Separation of Powers",
            description: "While transactions flow at physical speed, consensus emerges gradually like sediment settling in still water. This natural separation removes artificial bottlenecks, letting each part of the system move freely.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.5-6.5-2 2m-7 7-2 2m11 0-2-2m-7-7-2-2"></path></svg>`
        },
        {
            title: "Mathematical Certainty",
            description: "Blocks link together through pure mathematics, not forced rules. Like watching galaxies form, valid structures emerge naturally while invalid ones simply cannot exist.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>`
        },
        {
            title: "The Power of Eventually",
            description: "Just as nature finds its balance, Tangle finds its truth. The system converges on consistency through mathematical law, not forced synchronization. This is blockchain working with physics, not against it.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>`
        }
    ];
</script>

<!-- Security Section -->
<section class="w-screen bg-slate-900 pt-32 overflow-hidden relative">
    <!-- Geometric Background Pattern -->
    <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 grid grid-cols-6 gap-2">
            {#each Array(24) as _, i}
                <div class="h-full border-r border-lime-400/20"></div>
            {/each}
        </div>
        <div class="absolute inset-0 grid grid-rows-6 gap-2">
            {#each Array(24) as _, i}
                <div class="w-full border-b border-lime-400/20"></div>
            {/each}
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative">
        <!-- Header -->
        <div class="text-center mb-20 reveal-section">
            <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
                Security Through Structure
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-lime-400 to-emerald-500 mx-auto mb-8"></div>
            <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Most blockchains fight an endless battle against attacks, patching vulnerabilities as they're discovered. 
                Tangle takes a different approach: security emerges naturally from mathematical structure.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div class="reveal-section delay-1">
                <div class="group relative bg-black/30 p-8 rounded-xl border border-lime-400/20 hover:border-lime-400/40 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-emerald-500/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="text-lime-400 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <p class="text-xl text-gray-300 leading-relaxed">
                            Tangle's security properties materialize from careful mathematical design. 
                            Invalid transactions aren't blocked – they're mathematically impossible to construct.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Protection Layers -->
            <div class="reveal-section delay-2">
                <h3 class="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                    Two-Layer Protection
                </h3>
                <div class="space-y-6">
                    {#each protectionLayers as layer}
                        <div class="group bg-black/30 p-6 rounded-xl border border-lime-400/20 hover:border-lime-400/40 transition-all duration-300" use:inView>
                            <div class="flex items-start space-x-4">
                                <div class="text-lime-400">
                                    {@html layer.icon}
                                </div>
                                <div>
                                    <h4 class="text-xl font-bold text-white mb-2">{layer.title}</h4>
                                    <p class="text-gray-300">{layer.description}</p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Evolution Section -->
<section class="w-screen bg-slate-900 py-32 overflow-hidden relative">
    <!-- DNA Helix Background Pattern -->
    <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 flex flex-col items-center">
            {#each Array(12) as _, i}
                <div class="w-full h-16 border-b border-lime-400/20 transform -skew-x-45"></div>
                <div class="w-full h-16 border-b border-lime-400/20 transform skew-x-45"></div>
            {/each}
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative">
        <!-- Header -->
        <div class="text-center mb-20 reveal-section">
            <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
                Evolution, Not Revolution
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-lime-400 to-emerald-500 mx-auto mb-8"></div>
            <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                In nature, DNA carries forward the story of life. In Tangle, each transaction evolves from what came before – 
                a perfect cryptographic ancestry that makes valid progression inevitable and invalid paths impossible.
            </p>
        </div>

        <!-- Evolution Principles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {#each evolutionPrinciples as principle, i}
                <div class="reveal-section" style="animation-delay: {0.2 * (i + 1)}s" use:inView>
                    <div class="group relative bg-black/30 p-8 rounded-xl border border-lime-400/20 hover:border-lime-400/40 transition-all duration-500">
                        <div class="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-emerald-500/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="relative">
                            <div class="text-lime-400 mb-6">
                                {@html principle.icon}
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">
                                {principle.title}
                            </h3>
                            <p class="text-gray-300 leading-relaxed">
                                {principle.description}
                            </p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Closing Statement -->
        <div class="text-center max-w-4xl mx-auto reveal-section delay-5">
            <p class="text-2xl font-bold bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                Welcome to the natural evolution of value.
            </p>
        </div>
    </div>
</section>

<style>
    .reveal-section {
        opacity: 0;
        transform: translateY(20px);
        animation: revealSection 0.8s ease-out forwards;
    }

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

    .delay-5 {
        animation-delay: 1s;
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
</style>
