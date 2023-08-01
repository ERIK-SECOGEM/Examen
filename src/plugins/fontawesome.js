import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPen, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)