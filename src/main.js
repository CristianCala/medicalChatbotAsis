import '@/assets/css/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserDoctor, faComments, faTriangleExclamation, faPaperPlane, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faEye, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faUserDoctor, faComments, faTriangleExclamation, faPaperPlane, faCircleCheck)
library.add(faEye, faBell)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
