<template>
  <div class="card">
    <div class="card-header text-center" role="button">
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <div id="calendar-day">
        <CalenderEvent
          v-for="event in day.events"
          :key="event.title"
          :event="event"
        />
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
  props: {
    day: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: -1,
          fullName: "Fehlender Wochentag",
          events: [],
        };
      },
      validator: function (value) {
        if (Object.keys(value).includes("id")) {
          return true;
        }
      },
    },
  },
};
</script>

<style scoped></style>
