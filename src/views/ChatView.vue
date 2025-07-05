<template>
    <div class="flex h-screen bg-[#2f3f46]">
        <!-- Sidebar -->
        <aside class="w-16 bg-white rounded-xl flex flex-col items-center py-4 space-y-4 my-10 ms-10">
            <div class="bg-[#00cfc7] p-2 rounded-full">
            <!-- <img src="/eye-icon.svg" alt="Logo" class="w-6 h-6" /> -->
            </div>
            <div class="relative">
                <div class="bg-[#00cfc7] p-2 rounded-full">
                    <!-- <img src="/noti-icon.svg" alt="Noti" class="w-6 h-6" /> -->
                </div>
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">7</span>
            </div>
            <div class="mt-auto mb-2">
                <div class="bg-[#00cfc7] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">CR</div>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 bg-[#f7f8fb] rounded-2xl m-10 relative">
            <div class="absolute top-6 right-6">
                <button class="bg-[#00cfc7] text-white px-4 py-1 rounded-lg text-sm font-semibold">
                    Contactar soporte
                </button>
            </div>

            <div class="flex flex-col items-center justify-center h-full space-y-6">
                <!-- <img src="/eye-logo.svg" alt="Logo" class="w-20" /> -->
                <h1 class="text-3xl font-bold text-gray-800">Hola! 👋</h1>
                <p class="text-xl text-gray-600">En qué puedo ayudarte?</p>

                <div class="grid grid-cols-3 gap-4 max-w-xl w-full">
                    <button class="flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-2xl shadow-sm hover:shadow-md">
                        En qué puedes ayudarme?
                        <span class="text-[#00cfc7] text-xl">✔️</span>
                    </button>

                    <button class="flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-2xl shadow-sm hover:shadow-md">
                        Necesito conocer qué puedo tener
                        <span class="text-[#00cfc7] text-xl">✔️</span>
                    </button>

                    <button class="flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-2xl shadow-sm hover:shadow-md">
                        Lista de sedes disponibles
                        <span class="text-[#00cfc7] text-xl">✔️</span>
                    </button>

                    <button class="flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-2xl shadow-sm hover:shadow-md col-span-3">
                        Necesito contactar un médico...
                        <span class="text-[#00cfc7] text-xl">✔️</span>
                    </button>
                </div>

                <div class="flex items-center w-full max-w-2xl bg-white border border-gray-300 rounded-full px-4 py-2 mt-8">
                    <input type="text" placeholder="Pregúntame lo que necesites" class="flex-grow focus:outline-none text-gray-700" />
                    <button class="text-white bg-[#00cfc7] px-4 py-1.5 rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.94 2.94a1.5 1.5 0 012.12 0L10 7.88l4.94-4.94a1.5 1.5 0 112.12 2.12L12.12 10l4.94 4.94a1.5 1.5 0 01-2.12 2.12L10 12.12l-4.94 4.94a1.5 1.5 0 01-2.12-2.12L7.88 10 2.94 5.06a1.5 1.5 0 010-2.12z" />
                        </svg>
                    </button>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
</script>
