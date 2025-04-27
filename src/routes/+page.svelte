<script>
    // placeholder for future interactions
</script>

<header
    class="px-6 md:px-16 py-6 flex justify-between items-center border-b border-[#C4C4C4] bg-white"
>
    <div class="text-2xl font-bold">
        <img src="/logo.svg" alt="Logo" class="h-18 w-auto" />
    </div>
    <nav class="hidden md:flex items-center gap-8 text-[#1A1A1A]">
        <a href="/" class="hover:underline cursor-pointer">Product</a>
        <a href="/" class="hover:underline cursor-pointer">Enterprise</a>
        <a href="/" class="hover:underline cursor-pointer">Pricing</a>
        <a href="/login" class="text-[#3A3A3A] hover:underline cursor-pointer"
            >Sign in</a
        >
        <a
            href="/register"
            class="px-4 py-2 bg-[#1A1A1A] text-white rounded-xl hover:bg-gradient-to-br from-[#1A1A1A] to-[#4D4D4D] transition cursor-pointer"
            >Get started</a
        >
    </nav>
</header>

<main class="min-h-screen bg-white text-[#1A1A1A] font-sans">
    <section
        class="py-24 px-6 md:px-16 grid md:grid-cols-2 items-center gap-10"
    >
        <div>
            <h1 class="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
                Understand your audience. <br />Improve every send.
            </h1>
            <p class="text-[#3A3A3A] text-lg mt-6 max-w-xl">
                A newsletter platform with analytics that truly matter. Discover
                which topics drive engagement, compare campaigns, and identify
                your most loyal readers.
            </p>
            <button
                class="mt-10 px-6 py-3 bg-[#1A1A1A] text-white rounded-2xl shadow-md hover:bg-gradient-to-br from-[#1A1A1A] to-[#4D4D4D] transition cursor-pointer"
            >
                Start for free
            </button>
        </div>
        <div class="flex justify-center">
            <!--examples-->
        </div>
    </section>

    <section class="bg-[#F8F8F8] py-20 px-6 md:px-16">
        <h2 class="text-2xl md:text-4xl font-bold mb-10">Why our platform?</h2>
        <div class="grid md:grid-cols-3 gap-10">
            <div
                class="p-6 bg-white rounded-2xl shadow-sm border border-[#C4C4C4]"
            >
                <h3 class="text-xl font-semibold mb-2">Topic Engagement</h3>
                <p class="text-[#3A3A3A]">
                    See which subjects truly capture your readers' attention.
                    Rely on data, not guesses.
                </p>
            </div>
            <div
                class="p-6 bg-white rounded-2xl shadow-sm border border-[#C4C4C4]"
            >
                <h3 class="text-xl font-semibold mb-2">Campaign Comparison</h3>
                <p class="text-[#3A3A3A]">
                    Visually compare performance. Quickly learn from what works
                    — and what doesn’t.
                </p>
            </div>
            <div
                class="p-6 bg-white rounded-2xl shadow-sm border border-[#C4C4C4]"
            >
                <h3 class="text-xl font-semibold mb-2">Loyal Readers</h3>
                <p class="text-[#3A3A3A]">
                    Identify your most engaged subscribers and build real
                    connections.
                </p>
            </div>
        </div>
    </section>

    <section class="py-20 px-6 md:px-16 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
            Turn your newsletter into a learning machine
        </h2>
        <p class="text-[#3A3A3A] text-lg max-w-2xl mx-auto">
            No more confusing reports. Use real data and clear insights to grow
            with every send.
        </p>
        <button
            class="mt-10 px-6 py-3 bg-[#1A1A1A] text-white rounded-2xl shadow-md hover:bg-gradient-to-br from-[#1A1A1A] to-[#4D4D4D] transition cursor-pointer"
        >
            Try it now
        </button>
    </section>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

    :global(body) {
        font-family: "Inter", sans-serif;
    }
</style>
