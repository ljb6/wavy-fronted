<script lang="ts">
    import { getUserSettings, setUserSettings } from "$lib/api";
    import { onMount } from "svelte";

    type Settings = {
        host: string;
        port: number;
        username: string;
    };

    let host: string = $state("");
    let port: number = $state(0);
    let username: string = $state("");
    let password: string = $state("");

    async function handleSetSettings() {
        const res = await setUserSettings(host, port, username, password);
        console.log(res);
    }

    let settings: Settings[] = $state([]);

    onMount(async () => {
        try {
            settings = await getUserSettings();
        } catch (error) {
            console.error(error);
        }
    })
</script>

<main
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F7F7] to-[#EDEDED] px-6 py-20 text-[#1A1A1A] font-sans"
>
    <div
        class="w-full max-w-md bg-white p-10 rounded-2xl shadow-md border border-[#C4C4C4] space-y-6"
    >
        <h1 class="text-2xl font-bold text-center mb-4">Email Settings</h1>

        <div class="space-y-4">
            <div>
                <label for="current-password" class="block font-medium mb-1"
                    >Host</label
                >
                <input
                    bind:value={settings.host}
                    placeholder="e.g. smtp.gmail.com"
                    id="host"
                    type="text"
                    class="w-full px-4 py-2 border placeholder-gray-300 border-[#C4C4C4] rounded-lg bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                />
            </div>

            <div>
                <label for="new-password" class="block font-medium mb-1"
                    >Port</label
                >
                <input
                    bind:value={settings.port}
                    placeholder="e.g. 587"
                    id="port"
                    type="number"
                    class="w-full px-4 py-2 border placeholder-gray-300 border-[#C4C4C4] rounded-lg bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                />
            </div>

            <div>
                <label for="new-password" class="block font-medium mb-1"
                    >Username</label
                >
                <input
                    bind:value={settings.username}
                    placeholder="e.g. youruser@gmail.com"
                    id="username"
                    type="text"
                    class="w-full px-4 py-2 border placeholder-gray-300 border-[#C4C4C4] rounded-lg bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                />
            </div>

            <div>
                <label for="new-password" class="block font-medium mb-1"
                    >Password</label
                >
                <input
                    bind:value={password}
                    placeholder="•••••••••••••••••••"
                    id="password"
                    type="password"
                    class="w-full px-4 py-2 border placeholder-gray-300 border-[#C4C4C4]  rounded-lg bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                />
            </div>

            <div>
                <button
                    onclick={handleSetSettings}
                    class="cursor-pointer w-full py-2 px-4 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#333] transition"
                >
                    Confirm
                </button>
                <a href="/" class="text-gray-900 underline">How to set SMTP settings</a>
            </div>
        </div>

        <div class="space-y-3 pt-2">
            <div class="flex gap-3">
                <a
                    href="/dashboard"
                    class="cursor-pointer w-full py-2 px-4 bg-[#F0F0F0] text-[#1A1A1A] rounded-lg border border-[#C4C4C4] hover:bg-[#E4E4E4] transition flex items-center justify-center"
                >
                    Back
                </a>
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
