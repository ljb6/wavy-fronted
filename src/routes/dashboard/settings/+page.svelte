<script>
    import { goto } from '$app/navigation';

    export let data;

    function changePassword() {
        alert("Redirecting to password change...");
    }

    function logout() {
        alert("Logging out...");
    }

</script>

<main
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F7F7] to-[#EDEDED] px-6 py-20 text-[#1A1A1A] font-sans"
>
    <div
        class="w-full max-w-md bg-white p-10 rounded-2xl shadow-md border border-[#C4C4C4] space-y-6"
    >
        <h1 class="text-2xl font-bold text-center mb-4">Account Settings</h1>

        <div>
            <p class="font-medium">Name</p>
            <p class="text-[#3A3A3A] mb-4">{data.user.name}</p>

            <p class="font-medium">Email</p>
            <p class="text-[#3A3A3A] mb-4">{data.user.email}</p>

            <p class="font-medium">Plan</p>
            <p class="text-[#3A3A3A] mb-4">{data.user.plan}</p>
        </div>

        <div class="space-y-3 pt-4">
            <button
                on:click={changePassword}
                class="cursor-pointer w-full py-2 px-4 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#333] transition"
            >
                Change Password
            </button>

            <div class="flex gap-3">
                <a
                    href="/dashboard"
                    class="cursor-pointer w-full py-2 px-4 bg-[#F5F5F5] text-[#1A1A1A] border border-[#C4C4C4] rounded-xl hover:bg-[#E0E0E0] transition"
                >
                    Back
                </a>

                <button
                    on:click={logout}
                    class="cursor-pointer w-full py-2 px-4 bg-[#F5F5F5] text-[#1A1A1A] border border-[#C4C4C4] rounded-xl hover:bg-[#E0E0E0] transition"
                >
                    Log Out
                </button>
            </div>
        </div>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

    :global(body) {
        font-family: "Inter", sans-serif;
        margin: 0;
    }
</style>
