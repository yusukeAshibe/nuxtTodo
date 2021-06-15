<template>
  <div class="text-center section">
    <h2 class="h2">予定表</h2>
    <p class="text-lg font-medium text-gray-600 mb-6"></p>
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
      height="600"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <div class="flex flex-col h-full z-10 overflow-hidden">
            <div v-bind:style="addStyleTextColor(day.day)">
              {{ day.day }}
            </div>
          </div>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              class="cell-content"
              v-for="attr in attributes"
              :key="attr.key"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>


<script lang ="ts">
//spreadsheetの戻り値
type PlanObject = {
  key: number;
  customData: {
    title: string;
    class: string;
    color: "red";
  };
  dates: Date;
};
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      masks: {
        weekdays: "WWW",
      },
      attributes: [] as any,
      colors: [
        "blue",
        "indigo",
        "deep-purple",
        "cyan",
        "green",
        "orange",
        "grey darken-1",
      ],
    };
  },
  methods: {
    color() {
      return "red";
    },
    changeDate(unixTimestamp: string) {
      var date = Date.parse(unixTimestamp);
      var newDate = new Date(date);
      var viewDate =
        newDate.getFullYear() +
        "/" +
        (newDate.getMonth() + 1) +
        "/" +
        newDate.getDate() +
        " " +
        newDate.getHours() +
        ":" +
        newDate.getMinutes() +
        ":" +
        newDate.getSeconds();
      return viewDate;
    },
    addStyleTextColor: function (weekday: number) {
      // if (weekday === 1) {
      //   return {
      //     color: "red",
      //   };
      // } else if (weekday === 7) {
      //   return {
      //     color: "#00c0ff",
      //   };
      // }
    },
  },
  created() {
    fetch(
      "https://script.google.com/macros/s/AKfycbw5s4Mr2gSaRwCQgRPVi6DZpwig3zrdmcb-2XLHSu05S66zaaf46aFBAFINEXIfh3WY/exec"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const month = new Date().getMonth();
          const year = new Date().getFullYear();
          for (var i in result) {
            var num = Number(i);
            var date = this.changeDate(result[num]["日付"]);
            const dateArray = date.split("/");
            console.log(
              result[num]["予定内容"],
              Number(dateArray[0]),
              "年",
              Number(dateArray[1]),
              "月",
              Number(dateArray[2].split(" ")[0]),
              "日"
            );
            const plan: PlanObject = {
              key: num,
              customData: {
                title: result[num]["予定内容"],
                class: "bg-red-600 text-white",
                color: "red",
              },
              dates: new Date(
                Number(dateArray[0]),
                Number(dateArray[1]) - 1,
                Number(dateArray[2].split(" ")[0])
              ),
            };

            this.attributes.push(plan);
          }
        },
        (error) => {
          console.log("error");
        }
      );
  },
});
</script>

<style  scoped>
.event {
  border-style: solid;
  border-color: rgb(200, 200, 50);
  display: inline-block;
}
.cell-content {
  font-size: 100%;
  border-style: solid;
  border-color: "brue";
  background-color: aqua;
  display: inline-block;
  /* border: 1px solid #efefef; */
}
</style>