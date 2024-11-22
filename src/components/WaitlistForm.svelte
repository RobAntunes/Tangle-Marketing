<script>
    import { inView } from '../lib/actions/inView';
    let email = '';
    let submitted = false;
    let error = '';

    const handleSubmit = async () => {
        if (!email) {
            error = 'Please enter your email';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error = 'Please enter a valid email';
            return;
        }
        
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            submitted = true;
            error = '';
        } catch (e) {
            error = 'Something went wrong. Please try again.';
        }
    };
</script>

<!-- Waitlist CTA Section -->
<section class="w-screen bg-slate-950 py-24 overflow-hidden relative">
    <div class="max-w-4xl mx-auto px-6 relative">
        <div 
            class="bg-black/30 p-12 rounded-2xl border border-lime-400/20 hover:border-lime-400/40 transition-all duration-500"
            use:inView
        >
            <!-- Title -->
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6">
                Join the <span class="bg-gradient-to-r from-lime-400 via-emerald-500 to-green-500 bg-clip-text text-transparent">Revolution</span>
            </h2>
            <p class="text-xl text-gray-300 text-center mb-12">
                Be among the first to experience the future of blockchain technology.
            </p>

            <!-- Form -->
            {#if !submitted}
                <form 
                    on:submit|preventDefault={handleSubmit}
                    class="max-w-md mx-auto"
                >
                    <div class="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            bind:value={email}
                            placeholder="Enter your email"
                            class="flex-1 px-6 py-3 bg-black/50 rounded-xl border border-lime-400/20 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400/40"
                        />
                        <button
                            type="submit"
                            class="px-8 py-3 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold rounded-xl hover:opacity-90 transition-opacity"
                        >
                            Join Waitlist
                        </button>
                    </div>
                    {#if error}
                        <p class="text-red-400 mt-2 text-center">{error}</p>
                    {/if}
                </form>
            {:else}
                <div class="text-center text-lime-400 text-xl">
                    Thank you for joining! We'll be in touch soon.
                </div>
            {/if}
        </div>
    </div>
</section>
