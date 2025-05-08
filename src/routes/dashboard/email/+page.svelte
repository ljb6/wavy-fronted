<script lang="ts">
    import { sendMail } from "$lib/api";

    let subject = $state("");
    let message = $state("");

    async function sendMailHandler() {
        const response = await sendMail(subject, message);
    }
</script>

<div
    class="flex min-h-screen bg-gradient-to-br from-[#F7F7F7] to-[#EDEDED] text-[#1A1A1A] font-sans"
>
    <!-- Main Content -->
    <main class="ml-[17rem] w-full p-10 overflow-y-auto space-y-8">
        <div class="space-y-6">
            <h1 class="text-2xl font-bold">Create Email</h1>

            <div class="space-y-2">
                <label for="subject" class="block text-sm font-medium"
                    >Subject</label
                >
                <input
                    name="subject"
                    type="text"
                    bind:value={subject}
                    placeholder="Type the subject here..."
                    class="w-full px-4 py-2 border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#999] bg-white"
                />
            </div>

            <div class="space-y-2">
                <label for="text" class="block text-sm font-medium"
                    >Message</label
                >
                <textarea
                    name="text"
                    bind:value={message}
                    placeholder="Write your message..."
                    rows="12"
                    class="w-full px-4 py-3 border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#999] resize-none bg-white"
                ></textarea>
            </div>
            <!--                class="cursor-pointer w-full py-2 px-4 bg-[#F0F0F0] text-[#1A1A1A] rounded-lg border border-[#C4C4C4] hover:bg-[#E4E4E4] transition flex items-center justify-center"
-->

            <button
                onclick={() => {
                    subject = "";
                    message = "";
                }}
                class="ml-2 cursor-pointer px-6 py-3 border bg-white text-[#666] border-[#DCDCDC] rounded-lg hover:bg-[#F5F5F5] transition"
            >
                Clear
            </button>

            <!-- Save -->
            <button
                class="ml-2 cursor-pointer px-6 py-3 border bg-[#1A1A1A] text-white border-[#1A1A1A] rounded-lg hover:bg-[#333] transition"
            >
                Save
            </button>

            <button
                onclick={sendMailHandler}
                class="ml-2 cursor-pointer px-6 py-3 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#333] transition"
            >
                Send
            </button>
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
