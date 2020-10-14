import '@babel/polyfill'

import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './main.vue'

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue-app',
        render: r => r(App)
    } 
});
 
export const bootstrap = [
    vueLifecycles.bootstrap,
];
 
export const mount = [
    vueLifecycles.mount,
];
 
export const unmount = [
    vueLifecycles.unmount,
];