<template>
  <div id="calender-week">
    <div class="card-group">
      <CalenderDay v-for="day in calenderWeekData" :key="day.id" :day="day" />
    </div>
  </div>
</template>

<script>
import CalenderDay from "./CalenderDay.vue";
import Store from "../store";

export default {
  name: "CalenderWeek",
  components: { CalenderDay },
  data() {
    return {
      calenderWeekData: Store.state.calenderWeekData,
    };
  },
};
</script>

<style scoped></style>
