import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";

// App Theme
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// PrimeFlex
import 'primeflex/primeflex.css';

// Add PrimeVue Components
import Card from 'primevue/card';
import Button from 'primevue/button';
import SelectButton from "primevue/selectbutton";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";
// Add i18n support
import i18n from "./i18n.js";

// Application instance setup
createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(i18n)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .mount('#app')
