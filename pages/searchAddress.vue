<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1 class="title">地図検索</h1>
      <div class="text-center">
        <v-text-field
          placeholder="検索"
          outlined
          v-model="address"
        ></v-text-field>
        <v-col>
          <v-btn
            outlined
            color="error"
            class="widthButton"
            @click="searchAddress"
          >
            <span class="del">この名前で検索する</span>
          </v-btn>
        </v-col>
      </div>
      <div v-if="search">
        <GmapMap
          map-type-id="roadmap"
          :center="maplocation"
          :zoom="zoom"
          :style="styleMap"
          :options="mapOptions"
        >
        </GmapMap>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import Vue from "vue";

//検索結果の型指定
type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

export default Vue.extend({
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {
      search: false as boolean,
      GOOGLE_API_KEY: "AIzaSyA-Poq2ZVIZ4Pb1CPUT7RUxIjZIX91-bOY" as string,
      address: "" as string,
      maplocation: { lng: 0, lat: 0 },
      zoom: 16 as number,
      styleMap: {
        width: "100%",
        height: "400px",
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
    };
  },
  methods: {
    searchAddress() {
      console.log(this.address);
      this.$axios
        .get<GoogleGeocodingResponse>(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            this.address +
            "&key=" +
            this.GOOGLE_API_KEY
        )
        .then((response) => {
          if (response.data.status !== "OK") {
            throw new Error("座標を取得できませんでした");
          }
          const coordinates = response.data.results[0].geometry.location;
          this.maplocation = coordinates;
          this.search = true;
        })
        .catch((err) => {
          alert(err.message);
          console.log(err);
        });
    },
  },
  middleware: ["auth-filter"],
});
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;

  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
