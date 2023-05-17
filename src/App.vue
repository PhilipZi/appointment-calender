<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <CalendarWeek />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <CalendarEntry />
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <!-- Mit dem Button blenden wir die Calendar-Settings-Component ein bzw. aus. -->
          <button
            class="btn btn-lg mb-2"
            @click="toggleDisplaySettings()"
            :class="buttonSettingsClasses"
          >
            <i class="fas fa-cogs"></i>
          </button>
        </div>

        <CalendarSettings v-show="displaySettings" />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarEntry from "./components/CalendarEntry.vue";
import CalendarSettings from "./components/CalendarSettings.vue";

export default {
  name: "App",
  components: {
    CalendarWeek,
    CalendarEntry,
    CalendarSettings,
  },
  data() {
    return {
      displaySettings: false,
    };
  },
  computed: {
    buttonSettingsClasses() {
      return this.displaySettings ? ["btn-success"] : ["btn-outline-success"];
    },
  },
  methods: {
    toggleDisplaySettings() {
      this.displaySettings = !this.displaySettings;
    },
  },
};
</script>

<style>
@import "@fortawesome/fontawesome-free/css/all.css";
.square {
  width: 40px;
  height: 40px;
}
</style>
