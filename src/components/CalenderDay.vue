<template>
  <div class="card">
    <div class="card-header text-center" role="button">
      <strong>Monday</strong>
    </div>
    <div class="card-body">
      <div id="calendar-day">
        <CalenderEvent />
        <!-- Ende: Template für die Calendar-Event-Component -->
      </div>
    </div>
  </div>
</template>

<script>
import CalenderEvent from "./CalenderEvent.vue";

export default {
  name: "CalenderDay",
  components: {
    CalenderEvent,
  },
};
</script>

<style scoped></style>
