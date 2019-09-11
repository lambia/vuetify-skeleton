import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
import config from '@/config/globals.js';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: config.dark.theme,
        themes: {
            light: {
                primary: colors.cyan.base, //es. link
                secondary: colors.lightBlue.accent3,
                accent: colors.indigo.base,
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
            dark: {
                primary: colors.cyan.base,
                secondary: colors.cyan.darken2,
                accent: colors.indigo.base,
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});
