<!-- Beyond Blockchain Section -->
<section
    class="w-screen bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-32 overflow-hidden relative"
>
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-1">
            {#each Array(48) as _, i}
                <div
                    class="h-full border-r border-lime-400/10 animate-pulse"
                    style="animation-delay: {i * 0.1}s"
                ></div>
            {/each}
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <!-- Main Title with Glitch Effect -->
        <div class="reveal-section mb-12 md:mb-16 text-center">
            <h2
                class="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-lime-400 via-emerald-500 to-green-500 text-transparent bg-clip-text mb-6 hover:scale-105 transition-transform duration-500"
            >
                It's Barely a Blockchain
            </h2>
        </div>

        <!-- Main Description -->
        <div class="max-w-3xl mx-auto text-left mb-12 md:mb-16 px-0 sm:px-6">
            <p class="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Most blockchains are digital ledgers obsessed with global order
                and perfect synchronization. Tangle isn't.
            </p>
            <p class="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Think of Tangle as digital physics. Transactions find their
                natural position in geometric space. Processing emerges from
                pure mathematics. Security materializes from structure. Order
                arises naturally, not through force.
            </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 md:mb-16">
            <div
                class="relative bg-black/30 p-8 rounded-xl border border-lime-400/20 hover:border-lime-400/40 transition-all duration-500 group"
            >
                <div
                    class="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-emerald-500/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                <h3 class="text-2xl font-bold text-lime-400 mb-4">
                    What We Keep
                </h3>
                <ul class="space-y-3 text-gray-300">
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        Cryptographic security
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        Distributed ledger
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>Double-Spend Prevention
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        Immutable history
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        Decentralized control
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        Perfect consensus
                    </li>
                </ul>
            </div>
            <div
                class="relative bg-black/30 p-8 rounded-xl border border-lime-400/20 hover:border-lime-400/40 transition-all duration-500 group"
            >
                <div
                    class="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-emerald-500/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                <h3 class="text-2xl font-bold text-lime-400 mb-4">
                    What We Shed
                </h3>
                <ul class="space-y-3 text-gray-300">
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                        Single-file lines
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                        Global synchronization
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                        Forced consensus mechanisms
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                        Energy-intensive mining
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                        Scalability bottlenecks
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                        Whack-a-mole security
                    </li>

                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-lime-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                        Arbitrary limits
                    </li>
                </ul>
            </div>
        </div>

        <!-- Final Statement -->
        <div class="text-center reveal-section delay-2">
            <p class="text-2xl font-bold text-gray-300 mb-4">
                This isn't blockchain improved. This is blockchain evolved.
            </p>
            <p
                class="text-3xl font-bold bg-gradient-to-r from-lime-400 via-emerald-500 to-green-500 text-transparent bg-clip-text"
            >
                Welcome to the post-blockchain era.
            </p>
        </div>
    </div>
</section>

<script>
import WaitlistForm from './WaitlistForm.svelte';
</script>

<WaitlistForm />

<style>
    .reveal-section {
        opacity: 0;
        transform: translateY(20px);
        animation: reveal 0.8s ease forwards;
    }

    .delay-1 {
        animation-delay: 0.2s;
    }

    .delay-2 {
        animation-delay: 0.4s;
    }

    @keyframes reveal {
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
