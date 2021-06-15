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
          <div>
            <v-btn
              outlined
              color="error"
              class="widthButton"
              @click="deletePin()"
            >
              <span class="del">ピン削除</span>
            </v-btn>
          </div>
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
          <GmapMarker
            v-for="(m, index) in markers"
            :key="index"
            :title="m.address"
            :position="m.position"
            :clickable="true"
            :icon="m.pinicon"
            @click="onClickMarker(index, m)"
          />
        </GmapMap>

        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <!--template v-slot:activator="{ on, attrs }">
              <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Click Me
              </v-btn>
            </template-->

            <v-card>
              <v-card-title class="headline grey lighten-2">
                住所
              </v-card-title>
              <v-card-text> {{ this.detail }} </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  閉じる
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<
<script type="text/javascript" src="//maps.google.com/maps/api/js?key=AIzaSyA-Poq2ZVIZ4Pb1CPUT7RUxIjZIX91-bOY?sensor=false"&libraries="geometry">
</script>
<script lang="ts">
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import Vue from "vue";

//検索結果の型指定
type GoogleGeocodingResponse = {
  results: {
    geometry: { location: { lat: number; lng: number } };
    formatted_address: string;
  }[];
  status: "OK" | "ZERO_RESULTS";
};
//検索結果の型（表示に使う分）
type AddressObject = {
  address: string;
  position: { lat: number; lng: number };
};

export default Vue.extend({
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {
      dialog: false as boolean,
      search: false as boolean,
      GOOGLE_API_KEY: "AIzaSyA-Poq2ZVIZ4Pb1CPUT7RUxIjZIX91-bOY" as string,
      address: "" as string,
      maplocation: { lng: 0 as number, lat: 0 as number },
      zoom: 16 as number,
      styleMap: {
        width: "100%",
        height: "400px",
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
      detail: "" as string,
      marker: {},
      markers: [
        {
          address: "" as string,
          position: { lat: 0 as number, lng: 0 as number },
        },
      ],
    };
  },
  methods: {
    searchAddress() {
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
          const detail = response.data.results[0].formatted_address;
          const pin = { address: detail, position: this.maplocation };
          this.markers.push(pin);
        })
        .catch((err) => {
          alert(err.message);
          console.log(err);
        });
    },
    deletePin() {
      this.markers = [];
      this.address = "";
    },
    getCurrentPosition() {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    },
    onClickMarker(index: number, address: AddressObject) {
      console.log(index, address);
      this.detail = address.address as string;
      console.log("onclick");
      this.dialog = true;
      console.log(this.markers);
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
