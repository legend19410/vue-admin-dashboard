import './style.scss';
import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import VueApexCharts from 'vue3-apexcharts';
import { PerfectScrollbar} from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { vMaska } from 'maska';
import multiselect1 from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.css";
import Vue3ColorPicker from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';
import TableComponent from '../src/shared/UI/tables-re.vue';

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify({ ssr: false, components, directives, });
app.use(pinia);
app.component('apexchart', VueApexCharts);
app.component("PerfectScrollbar", PerfectScrollbar);
app.component("multiselect1", multiselect1);
app.component("TableComponent", TableComponent);
app.use(router);
app.use(vuetify);
app.use(Vue3ColorPicker);
app.use(PerfectScrollbar);
app.directive('maska', vMaska);
app.mount('#app');

  

