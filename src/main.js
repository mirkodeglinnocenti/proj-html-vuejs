import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faArrowRightLong, faLocationDot, faArrowUpLong} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(
    faUser,
    faTwitter,
    faFacebookF,
    faInstagram, 
    faLinkedin, 
    faFileAlt, 
    faArrowRightLong, 
    faLocationDot,
    faArrowUpLong,
)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
