<script>
    let email = "";
    let password = "";
</script>

<main
    class="min-h-screen bg-white text-[#1A1A1A] font-sans flex items-center justify-center px-6 py-20"
>
    <div
        class="w-full max-w-md bg-white p-10 rounded-2xl shadow-md border border-[#C4C4C4]"
    >
        <div class="flex justify-center mb-6">
            <img src="/logo.svg" alt="Logo" class="h-12 w-auto" />
        </div>
        <h1 class="text-3xl font-bold mb-6 text-center">Sign in to your account</h1>
        <form class="space-y-6">
            <div>
                <label for="email" class="block mb-2 font-medium"
                    >Email address</label
                >
                <input
                    type="email"
                    bind:value={email}
                    id="email"
                    class="w-full px-4 py-2 border border-[#C4C4C4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                    required
                />
            </div>
            <div>
                <label for="password" class="block mb-2 font-medium"
                    >Password</label
                >
                <input
                    type="password"
                    bind:value={password}
                    id="password"
                    class="w-full px-4 py-2 border border-[#C4C4C4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                    required
                />
            </div>
            <button
                type="submit"
                class="w-full mt-4 px-6 py-3 bg-[#1A1A1A] text-white rounded-2xl shadow-md hover:bg-gradient-to-br from-[#1A1A1A] to-[#4D4D4D] transition cursor-pointer"
            >
                Sign in
            </button>
        </form>
        <p class="text-center text-[#3A3A3A] text-sm mt-6">
            Don't have an account? <a
                href="/register"
                class="underline hover:text-black">Register here</a
            >
        </p>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

    :global(body) {
        font-family: "Inter", sans-serif;
    }
</style>
