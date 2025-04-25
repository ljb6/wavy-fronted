<script>
    export let data;
</script>

<div
    class="flex min-h-screen bg-gradient-to-br from-[#F7F7F7] to-[#EDEDED] text-[#1A1A1A] font-sans"
>
    <!-- Sidebar -->
    <aside
        class="fixed top-6 left-6 bottom-6 w-64 bg-white border border-[#C4C4C4] rounded-2xl p-6 flex flex-col justify-between shadow-md"
    >
        <div>
            <!-- Logo -->
            <div class="mb-4">
                <img src="/logo.svg" alt="Logo" class="h-16 w-auto mx-auto" />
            </div>

            <!-- Action Buttons -->
            <div class="space-y-3 mb-4">
                <button
                    class="cursor-pointer w-full py-2 px-4 bg-[#1A1A1A] text-white rounded-lg shadow hover:bg-[#333] transition"
                >
                    Create Email
                </button>
                <button
                    class="cursor-pointer w-full py-2 px-4 bg-[#F0F0F0] text-[#1A1A1A] rounded-lg border border-[#C4C4C4] hover:bg-[#E4E4E4] transition"
                >
                    Analytics
                </button>
            </div>

            <!-- Menu -->
            <nav class="">
                <a
                    href="/dashboard"
                    class="block py-2 px-4 rounded-lg hover:bg-[#F0F0F0]"
                    >Dashboard</a
                >
                <a
                    href="#"
                    class="block py-2 px-4 rounded-lg hover:bg-[#F0F0F0]"
                    >Database</a
                >
                <a
                    href="#"
                    class="block py-2 px-4 rounded-lg hover:bg-[#F0F0F0]"
                    >Management</a
                >
                <!-- Add more items as needed -->
            </nav>
        </div>

        <!-- Settings Button -->
        <a
            href="/dashboard/settings"
            class="cursor-pointer w-full py-2 px-4 bg-[#F0F0F0] text-[#1A1A1A] rounded-lg border border-[#C4C4C4] hover:bg-[#E4E4E4] transition flex items-center justify-center"
        >
            ⚙️ Settings
        </a>
    </aside>

    <!-- Main content -->
    <main class="ml-[17rem] w-full p-10 overflow-y-auto">
        <h1 class="text-3xl font-bold mb-6">Welcome, {data.user.name}!</h1>
        <p class="text-lg mb-10 max-w-xl">
            Here is a brief view of your business.
        </p>

        <!-- Reserved content space -->
        <div class="space-y-10">
            <section
                class="bg-white p-6 rounded-2xl shadow border border-[#DCDCDC]"
            >
                <h2 class="text-xl font-semibold mb-2">Sample Section</h2>
                <p>You can use this area for cards, graphs, tables, etc.</p>
            </section>

            <section
                class="bg-white p-6 rounded-2xl shadow border border-[#DCDCDC]"
            >
                <h2 class="text-xl font-semibold mb-2">Another Section</h2>
                <p>More space to build out your ideas later.</p>
            </section>
        </div>
    </main>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

    :global(body) {
        font-family: "Inter", sans-serif;
        margin: 0;
    }
</style>
