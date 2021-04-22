import Vue from "vue";
import * as VueGoogleMaps from "~/node_modules/vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA-Poq2ZVIZ4Pb1CPUT7RUxIjZIX91-bOY",
    libraries: "places"
  }
});
