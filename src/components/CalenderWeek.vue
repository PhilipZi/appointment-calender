<template>
  <div id="calender-week">
    <div class="card-group">
      <div class="card" v-for="i in 7" :key="i">
        <div class="card-header text-center" role="button">
          <strong>Monday</strong>
        </div>
        <div class="card-body">
          <!-- Anfang: Template für die Calendar-Day-Component -->
          <div id="calendar-day">
            <!-- Anfang: Template für die Calendar-Event-Component -->
            <div id="calendar-event">
              <div class="alert text-center">
                <div>
                  <strong>High</strong>
                </div>

                <div>Vue.js 3 learning</div>

                <div>
                  <i class="fas fa-edit me-2" role="button"></i>
                  <i class="far fa-trash-alt" role="button"></i>
                </div>
              </div>
            </div>
            <!-- Ende: Template für die Calendar-Event-Component -->
          </div>
          <!-- Ende: Template für die Calendar-Day-Component -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalenderWeek",
};
</script>

<style scoped></style>
