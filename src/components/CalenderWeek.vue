<template>
  <div id="calender-week">
    <div class="card-group">
      <CalenderDay v-for="i in 7" :key="i" />
    </div>
  </div>
</template>

<script>
import CalenderDay from "./CalenderDay.vue";

export default {
  name: "CalenderWeek",
  components: { CalenderDay },
};
</script>

<style scoped></style>
