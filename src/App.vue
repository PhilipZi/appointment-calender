<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <!-- <CalendarWeekAsList />
        <CalendarWeek /> -->
        <KeepAlive>
          <component :is="activeView" />
        </KeepAlive>
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

        <Transition name="fade">
          <CalendarSettings v-if="displaySettings" />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import store from "./store";
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarWeekAsList from "./components/CalendarWeekAsList.vue";
import CalendarEntry from "./components/CalendarEntry.vue";
// import CalendarSettings from "./components/CalendarSettings.vue";

export default {
  name: "App",
  components: {
    CalendarWeek,
    CalendarWeekAsList,
    CalendarEntry,
    CalendarSettings: defineAsyncComponent(() => {
      return import(
        /*webpackChunkName: 'CalendarSettingsComponent' */ "./components/CalendarSettings.vue"
      );
    }),
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
    activeView() {
      return store.getters.activeView();
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

/* Transition: Fade */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 0.25s ease-out;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.25s ease-out;
}
</style>
