<template>
  <div class="card border-start" :class="cardClasses">
    <div
      class="card-header text-center"
      :class="cardHeaderClasses"
      role="button"
    >
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <div id="calendar-day">
        <CalenderEvent
          v-for="event in day.events"
          :key="event.title"
          :event="event"
        >
          <!-- <template v-slot:eventPriority="slotProps"> -->
          <template #eventPriority="slotProps">
            <h5>{{ slotProps.priorityDisplayName }}</h5></template
          >
          <!-- <template v-slot:default></template> -->
          <template v-slot="{ event: entry }"
            ><i>{{ entry.title }}</i></template
          >
        </CalenderEvent>
        <!-- Ende: Template für die Calendar-Event-Component -->
      </div>
    </div>
  </div>
</template>

<script>
import CalenderEvent from "./CalenderEvent.vue";
import Store from "../store";

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
  computed: {
    cardClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["border-primary"]
        : null;
    },
    cardHeaderClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["bg-primary", "text-white"]
        : null;
    },
  },
};
</script>

<style scoped></style>
