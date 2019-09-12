import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import Configuration from './plugins/configuration';
import globals from './config/globals';

Vue.use(Configuration, globals);

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue();
if (process.env.NODE_ENV === "development") {
    window.eventBus = Vue.prototype.$eventBus;
}

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
