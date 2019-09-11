export default {
    install: function (Vue, options) {
        Vue.prototype.$config = options;
    }
}