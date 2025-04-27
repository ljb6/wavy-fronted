<script lang="ts">
    import { goto } from "$app/navigation";
    import { changePassword, logoutUser } from "$lib/api.js";

    let { data } = $props();
    let loggingOut: boolean = $state(false);
    let currentPassword: string = $state("");
    let newPassword: string = $state("");

    async function handleLogout() {
        loggingOut = true;
        const response = await logoutUser();
        console.log(response);
        setTimeout(() => {
            goto("/");
        }, 500);
        console.log(response);
    }

    async function handleChangePassword() {
        const response = await changePassword(currentPassword, newPassword);
        console.log(response);
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

        <div class="space-y-4">
            <div>
                <label for="current-password" class="block font-medium mb-1"
                    >Current Password</label
                >
                <input
                    placeholder="••••••••••"
                    id="current-password"
                    type="password"
                    class="w-full px-4 py-2 border border-[#C4C4C4] rounded-lg bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                    bind:value={currentPassword}
                />
            </div>

            <div>
                <label for="new-password" class="block font-medium mb-1"
                    >New Password</label
                >
                <input
                    id="new-password"
                    type="password"
                    class="w-full px-4 py-2 border border-[#C4C4C4] rounded-lg bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                    bind:value={newPassword}
                />
            </div>
        </div>

        <div class="space-y-3 pt-4">
            <button
                class="cursor-pointer w-full py-2 px-4 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#333] transition"
                onclick={handleChangePassword}
            >
                Change Password
            </button>

            <div class="flex gap-3">
                <a
                    href="/dashboard"
                    class="cursor-pointer w-full py-2 px-4 bg-[#F0F0F0] text-[#1A1A1A] rounded-lg border border-[#C4C4C4] hover:bg-[#E4E4E4] transition flex items-center justify-center"
                >
                    Back
                </a>

                <button
                    onclick={handleLogout}
                    class="cursor-pointer w-full py-2 px-4 bg-[#F5F5F5] text-[#1A1A1A] border border-[#C4C4C4] rounded-xl hover:bg-[#E0E0E0] transition"
                >
                    {#if loggingOut}
                        Logging out...
                    {:else}
                        Logout
                    {/if}
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
