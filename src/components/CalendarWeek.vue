<template>
  <div id="calendar-week">
    <div class="card-group">
      <CalendarDay v-for="day in calendarWeekData" :key="day.id" :day="day" />
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";
import Store from "../store";

export default {
  name: "CalendarWeek",
  components: { CalendarDay },
  data() {
    return {
      calendarWeekData: Store.state.calendarWeekData,
    };
  },
};
</script>

<style scoped></style>
