<script lang="ts">
    import { goto } from "$app/navigation";

    import { addSubscriberManually, clearSubs, getSubscribers } from "$lib/api";
    import { onMount } from "svelte";

    type Subscriber = {
        ID: number;
        Name: string;
        Email: string;
    };

    let subName = $state("");
    let subEmail = $state("");

    async function handleAddSubForm() {
        const response = await addSubscriberManually(subName, subEmail);
        console.log(response);
        goto("/dashboard").then(() => goto("/dashboard/database"));
    }

    async function handleClearSubs() {
        const response = await clearSubs();
        goto("/dashboard").then(() => goto("/dashboard/database"));
    }

    let subscribers: Subscriber[] = $state([]);

    onMount(async () => {
        try {
            subscribers = await getSubscribers();
        } catch (error) {
            console.error(error);
        }
    });
</script>

<div
    class="flex min-h-screen bg-gradient-to-br from-[#F7F7F7] to-[#EDEDED] text-[#1A1A1A] font-sans"
>
    <!-- Main Content -->
    <main class="ml-[17rem] w-full p-10 overflow-y-auto space-y-8">
        <!-- Top Section -->
        <div class="grid grid-cols-3 gap-6 w-full mb-10">
            <!-- Add sub -->
            <div
                class="bg-white border border-[#C4C4C4] rounded-2xl shadow p-6 flex items-center gap-4"
            >
                <div class="flex flex-col gap-4 flex-1">
                    <div class="flex items-center gap-2">
                        <input
                            bind:value={subName}
                            type="text"
                            placeholder="Name"
                            class="flex-1 px-4 py-2 border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#999]"
                        />
                    </div>

                    <div class="flex items-center gap-2">
                        <input
                            bind:value={subEmail}
                            type="text"
                            placeholder="Email"
                            class="flex-1 px-4 py-2 border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#999]"
                        />
                    </div>
                </div>
                <button
                    class="w-12 h-full bg-[#1A1A1A] text-white rounded-lg hover:bg-[#333] transition flex items-center justify-center text-xl"
                    onclick={handleAddSubForm}
                >
                    +
                </button>
            </div>

            <!-- Subs counter -->
            <div
                class="bg-white border border-[#C4C4C4] rounded-2xl shadow flex flex-col items-center justify-center p-6"
            >
                <p class="text-3xl font-bold">{subscribers.length}</p>
                <p class="text-sm text-[#555]">Total Subscribers</p>
            </div>
            <!-- Functions -->
            <div
                class="bg-white border border-[#C4C4C4] rounded-2xl shadow p-6 flex flex-col gap-4"
            >
                <button
                    onclick="{handleClearSubs}"
                    class="w-full py-2 px-4 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#333] transition"
                >
                    Clear data
                </button>
                <div class="flex gap-4">
                    <button
                        class="w-full py-2 px-4 bg-[#F0F0F0] text-[#1A1A1A] rounded-lg border border-[#C4C4C4] hover:bg-[#E4E4E4] transition"
                    >
                        Import Data
                    </button>
                    <button
                        class="w-full py-2 px-4 bg-[#F0F0F0] text-[#1A1A1A] rounded-lg border border-[#C4C4C4] hover:bg-[#E4E4E4] transition"
                    >
                        Export Data
                    </button>
                </div>
            </div>
        </div>

        <!-- Table -->
        <section
            class="bg-white p-6 rounded-2xl shadow border border-[#DCDCDC]"
        >
            <table class="w-full text-left">
                <thead>
                    <tr class="border-b border-[#E0E0E0]">
                        <th class="pb-4">Ref-ID</th>
                        <th class="pb-4">Name</th>
                        <th class="pb-4">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {#each subscribers as subscriber}
                        <tr class="border-b border-[#F0F0F0]">
                            <td class="py-3">{subscriber.ID}</td>
                            <td class="py-3">{subscriber.Name}</td>
                            <td class="py-3">{subscriber.Email}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </section>
    </main>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

    :global(body) {
        font-family: "Inter", sans-serif;
        margin: 0;
    }
</style>
