<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div class="bg-white rounded-2xl p-6 w-[90%] max-w-md text-center shadow-xl">

            <template v-if="step === 1">
                <div class="flex justify-center mb-4">
                    <font-awesome-icon icon="triangle-exclamation" class="text-teal-500 h-24 w-24" />
                </div>
                <h2 class="text-4xl font-bold mb-2">Un momento</h2>
                <p class="text-gray-700 mb-6 text-lg">
                    Antes de continuar necesitamos sus datos personales para poder identificarlo y comunicarnos correctamente.
                </p>
                <button @click="step = 2" class="text-xl w-full bg-teal-500 text-white font-bold py-2 rounded-lg hover:bg-teal-600 transition">
                    Continuar
                </button>
            </template>

            <template v-else>
                <h2 class="text-3xl font-bold mb-1 text-left">Datos personales</h2>
                <p class="text-md text-gray-600 mb-6 text-left">Ingrese los datos necesarios para permanecer en la plataforma</p>

                <form @submit.prevent="submitForm" class="space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" v-model="formData.firstName" placeholder="Primer nombre" required class="input" />
                        <input type="text" v-model="formData.lastName" placeholder="Primer apellido" required class="input" />
                        <input type="text" v-model="formData.secondName" placeholder="Segundo nombre" class="input" />
                        <input type="text" v-model="formData.secondLastName" placeholder="Segundo apellido" class="input" />
                    </div>

                    <input type="email" v-model="formData.email" placeholder="correo electrónico" required class="input w-full" />

                    <div class="flex items-start gap-2 text-left">
                        <input type="checkbox" id="allowLocation" v-model="formData.allowLocation" class="mt-1 accent-teal-500" />

                        <label for="allowLocation" class="text-sm text-gray-700">
                            Permitir obtener ubicación <span class="text-gray-500">(necesario para calcular sedes cercanas)</span>
                        </label>
                    </div>

                    <button type="submit" class="w-full bg-teal-500 text-white font-bold py-2 rounded-lg hover:bg-teal-600 transition">
                        Guardar y salir
                    </button>
                </form>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue'
import { useFormDataStore } from '@/stores/formDataStore'

const step = ref(1)
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: true
    }
})
const { isOpen } = toRefs(props)
const emit = defineEmits(['close'])
const formStore = useFormDataStore()

const formData = ref({
    firstName: '',
    lastName: '',
    secondName: '',
    secondLastName: '',
    email: '',
    allowLocation: false
})

const submitForm = () => {
    formStore.setFormData(formData.value)
    emit('close')
}

watch(isOpen, (val) => {
    if (val) step.value = 1
})

</script>
<style scoped>
.input {
    @apply border border-gray-300 rounded-xl px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500;
}
</style>
