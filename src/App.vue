<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <CalenderWeek />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <CalenderEntry />
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <!-- Mit dem Button blenden wir die Calendar-Settings-Component ein bzw. aus. -->
          <button class="btn btn-lg mb-2">
            <i class="fas fa-cogs"></i>
          </button>
        </div>

        <CalenderSettings />
      </div>
    </div>
  </div>
</template>

<script>
import CalenderWeek from "./components/CalenderWeek.vue";
import CalenderEntry from "./components/CalenderEntry.vue";
import CalenderSettings from "./components/CalenderSettings.vue";

export default {
  name: "App",
  components: {
    CalenderWeek,
    CalenderEntry,
    CalenderSettings,
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
