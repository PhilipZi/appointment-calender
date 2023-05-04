<template>
  <div id="calendar-entry">
    <div class="card">
      <div class="card-header text-center">
        <h5>
          New Appointment For: <strong>{{ activeDayName }}</strong>
        </h5>
      </div>
      <div class="card-body">
        <input type="text" class="form-control" placeholder="Neuer Eintrag" />
        <select class="form-select mt-2">
          <option value="-1">High</option>
          <option value="0">Medium</option>
          <option value="1">Low</option>
        </select>
        <div class="text-center mt-3">
          <span
            v-for="color in eventColors"
            :key="color"
            class="d-inline-block alert m-0 me-2 square"
            :class="eventColorClasses(color)"
            role="button"
          >
          </span>
        </div>
        <hr />
        <div class="d-grid gap-2">
          <button class="btn btn-primary">Submit</button>
          <button class="btn btn-danger">Delete Content</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from "../store";

export default {
  name: "CalendarEntry",
  data() {
    return {
      eventColors: ["primary", "success", "info", "warning", "danger"],
    };
  },
  computed: {
    activeDayName() {
      return Store.getters.activeDay().fullName;
    },
  },
  methods: {
    eventColorClasses(eventColor) {
      return ["alert-" + eventColor];
    },
  },
};
</script>

<style scoped></style>
