<script>
    let { data } = $props();
</script>

<div
    class="flex min-h-screen bg-gradient-to-br from-[#F7F7F7] to-[#EDEDED] text-[#1A1A1A] font-sans"
>
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
