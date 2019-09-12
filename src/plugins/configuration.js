export default {
    install: function (Vue, options) {
        Vue.prototype.$config = options;
        Vue.prototype.$eventBus = new Vue();
        if (process.env.NODE_ENV === "development") {
            console.log("[ENV] Development");
            window.eventBus = Vue.prototype.$eventBus;
        }
    }
}