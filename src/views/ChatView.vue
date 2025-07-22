<template>
    <div class="flex h-screen bg-[#2f3f46]">
        <aside class="w-16 bg-white rounded-xl flex flex-col items-center py-4 space-y-4 my-10 ms-10">
            <div class="bg-[#00cfc7] p-2 rounded-full">
                <font-awesome-icon icon="eye" class="text-white" />
            </div>

            <hr class="border-b border-gray-400 px-6 my-2" />

            <div class="relative">
                <div class="bg-[#00cfc7] px-2 py-1 rounded-lg">
                    <font-awesome-icon icon="bell" class="text-white w-7 h-7" />
                </div>
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">7</span>
            </div>

            <div class="flex-1"></div>

            <div class="mb-2">
                <div class="relative group">
                    <div class="bg-[#00cfc7] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                        {{ getFirstLetterNames }}
                    </div>
                    <div class="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                        {{ formStore.firstName }} {{ formStore.lastName }}
                    </div>
                </div>
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
                <font-awesome-icon icon="eye" class="w-20 mb-4" />
                <h1 class="text-3xl font-bold text-gray-800">Hola! 👋</h1>
                <p class="text-xl text-gray-600">En qué puedo ayudarte?</p>

                <div class="grid grid-cols-3 gap-4 max-w-xl w-full">
                    <button class="flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-2xl shadow-sm hover:shadow-md">
                        En qué puedes ayudarme?
                        <font-awesome-icon icon="circle-check" class="text-[#00cfc7] text-xl" />
                    </button>

                    <button class="flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-2xl shadow-sm hover:shadow-md">
                        Necesito conocer qué puedo tener
                        <font-awesome-icon icon="circle-check" class="text-[#00cfc7] text-xl" />
                    </button>

                    <button class="flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-2xl shadow-sm hover:shadow-md">
                        Lista de sedes disponibles
                        <font-awesome-icon icon="circle-check" class="text-[#00cfc7] text-xl" />
                    </button>

                    <button class="flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-2xl shadow-sm hover:shadow-md col-span-3">
                        Necesito contactar un médico...
                        <font-awesome-icon icon="circle-check" class="text-[#00cfc7] text-xl" />
                    </button>
                </div>

                <div class="flex items-center w-full max-w-2xl bg-white border border-gray-300 rounded-xl px-4 py-2 mt-8">
                    <input type="text" placeholder="Pregúntame lo que necesites" class="flex-grow focus:outline-none text-gray-700" />
                    <button class="text-white bg-[#00cfc7] px-4 py-1.5 rounded-xl flex items-center">
                        <font-awesome-icon icon="paper-plane" class="w-5 h-5" />
                        Enviar
                    </button>
                </div>
            </div>
        </main>
    </div>
    <ModalPersonalData
        :is-open="isModalFormOpen"
        @close="closeModal"
    />
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import ModalPersonalData from '../components/ModalPersonalData.vue'
import { useFormDataStore } from '@/stores/formDataStore'

const isModalFormOpen = ref(true)
const formStore = useFormDataStore()

const closeModal = () => {
    isModalFormOpen.value = false
}

const getFirstLetterNames = computed(() => {
    if (formStore.firstName && formStore.lastName) {
        return `${formStore.firstName.charAt(0).toUpperCase()}${formStore.lastName.charAt(0).toUpperCase()}`
    }
    return '?'
})

watch(() => formStore, (newValue) => {
    console.log('Form Store Updated:', newValue)
}, { deep: true })
</script>
