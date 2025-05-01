<script lang="ts">
    let { children } = $props();
</script>

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
            <a
                href="/dashboard/email"
                class="cursor-pointer w-full py-2 px-4 bg-[#1A1A1A] text-white rounded-lg border border-[#C4C4C4] hover:bg-[#333] transition flex items-center justify-center"
            >
                Create Email
            </a>
            <a
                href="/dashboard"
                class="cursor-pointer w-full py-2 px-4 bg-[#F0F0F0] text-[#1A1A1A] rounded-lg border border-[#C4C4C4] hover:bg-[#E4E4E4] transition flex items-center justify-center"
            >
                Analytics
            </a>
        </div>

        <!-- Menu -->
        <nav class="">
            <a
                href="/dashboard/database"
                class="block py-2 px-4 rounded-lg hover:bg-[#F0F0F0]"
                >Database</a
            >
            <a
                href="/dashboard/settings"
                class="block py-2 px-4 rounded-lg hover:bg-[#F0F0F0]"
                >Settings</a
            >
        </nav>
    </div>

    <!-- Settings Button -->
    <a
        href="/dashboard/account"
        class="cursor-pointer w-full py-2 px-4 bg-[#F0F0F0] text-[#1A1A1A] rounded-lg border border-[#C4C4C4] hover:bg-[#E4E4E4] transition flex items-center justify-center"
    >
        ⚙️ Account
    </a>
</aside>

{@render children()}

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

    :global(body) {
        font-family: "Inter", sans-serif;
        margin: 0;
    }
</style>
