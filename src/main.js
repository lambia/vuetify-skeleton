import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import Configuration from './plugins/configuration';
import globals from './config/globals';

Vue.use(Configuration, globals);

Vue.config.productionTip = false

//Vue.prototype.$appName = "skeleton";
//Vue.prototype.$eventBus = new Vue();
window.EventBus = new Vue();

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
