<template>
  <div id="calendar-entry">
    <div class="card">
      <div class="card-header text-center">
        <h5>
          New Appointment For: <strong>{{ activeDayName }}</strong>
        </h5>
      </div>
      <div class="card-body">
        <div class="alert alert-danger" v-if="error">
          Der Titel darf nicht leer sein
        </div>

        <input
          type="text"
          class="form-control"
          placeholder="Neuer Eintrag"
          ref="eventTitleInput"
          v-model="event.title"
          @keyup.enter.exact="submitEvent()"
          @keyup.ctrl.enter.exact="resetEventTitle()"
        />
        <select class="form-select mt-2" v-model="event.priority">
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
            @click="setEventColor(color)"
          >
          </span>
        </div>
        <hr />
        <div class="d-grid gap-2">
          <button class="btn btn-primary" @click="submitEvent()">
            <!-- This is the version of the button if disabled with no input -->
            <!-- <button  :disabled="submitEventButtonStatus"></button> -->
            Submit
          </button>
          <button class="btn btn-danger" @click="resetEventTitle()">
            Delete Content
          </button>
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
      event: {
        title: "",
        color: "primary",
        priority: 0,
      },
      error: false,
    };
  },
  computed: {
    activeDayName() {
      return Store.getters.activeDay().fullName;
    },
    // submitEventButtonStatus() {
    //   return this.event.title === "";
    // },
  },

  mounted() {
    this.$refs.eventTitleInput.focus();
  },

  methods: {
    eventColorClasses(eventColor) {
      return [
        "alert-" + eventColor,
        this.event.color === eventColor
          ? "border border-" + this.event.color
          : "",
      ];
    },
    setEventColor(eventColor) {
      this.event.color = eventColor;
    },
    submitEvent() {
      if (this.event.title === "") return (this.error = true);
      Store.mutations.storeEvent(this.event);
      this.event = {
        title: "",
        color: "primary",
        priority: 0,
      };
      this.error = false;
    },
    resetEventTitle() {
      this.event.title = "";
    },
  },
};
</script>

<style scoped></style>
