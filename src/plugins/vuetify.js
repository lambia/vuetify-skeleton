import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: colors.cyan.darken1,
                secondary: colors.red.lighten4,
                accent: colors.indigo.base,
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
            dark: {
                primary: colors.cyan.darken1,
                secondary: colors.cyan.lighten4,
                accent: colors.indigo.base,
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});
