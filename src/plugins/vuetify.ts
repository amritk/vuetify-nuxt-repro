import Vue from 'vue'
import Vuetify from 'vuetify/lib'


Vue.use(Vuetify, {
    theme: {
        // HC Green
        primary: {
            lighten3: '#009546', // hc-light-green
            base: '#008940'      // hc-green
        },
        // Blue
        accent: {
            lighten1: '#23BFFF', // light-blue
            base: '#0279D7',     // medium-blue
            darken3: '#0D47A1'   // dark-blue, darker-blue
        },
        // Grey
        secondary: {
            lighten5: '#FFFFFF', // white
            lighten4: '#EFEFEF', // lighter-grey, dark-white
            lighten3: '#DFDFDF', // light-medium-grey, light-grey
            base: '#9F9F9F',     // medium-grey
            darken2: '#777777',  // pastel-grey
            darken3: '#3E3E3E',  // darker-grey, charcoal-grey, light-black, dark-medium-grey, dark-grey
            darken5: '#000000'   // black
        },
        // Blue
        info: {
            base: '#0279D7'      // medium-blue
        },
        // Orange/Yellow
        warning: {
            lighten3: '#fad53e', // light-orange aka yellow
            base: '#ff8800',     // from https://www.google.com/search?q=css+warning+color
            darken3: '#e65100'   // dark-orange
        },
        // Red
        error: {
            lighten1: '#ff5252', // light-red
            base: '#B71C1C'      // medium-red
        },
        // Green
        success: {
            lighten3: '#4CAf50', // light-green
            base: '#28a745',     // bootstrap green https://getbootstrap.com/docs/4.3/getting-started/theming/
            darken3: '#00592A'   // dark-green
        }
    }
})
