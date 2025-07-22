import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormDataStore = defineStore('formData', () => {
    const firstName = ref('')
    const lastName = ref('')
    const secondName = ref('')
    const secondLastName = ref('')
    const email = ref('')
    const allowLocation = ref(false)

    const setFormData = (data) => {
        firstName.value = data.firstName
        lastName.value = data.lastName
        secondName.value = data.secondName
        secondLastName.value = data.secondLastName
        email.value = data.email
        allowLocation.value = data.allowLocation
    }

    const resetForm = () => {
        firstName.value = ''
        lastName.value = ''
        secondName.value = ''
        secondLastName.value = ''
        email.value = ''
        allowLocation.value = false
    }

    return {
        firstName,
        lastName,
        secondName,
        secondLastName,
        email,
        allowLocation,
        setFormData,
        resetForm
    }
})