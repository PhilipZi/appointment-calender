<template>
  <div>
    <div class="alert text-center" :class="alertColor">
      <div>
        <strong>{{ priorityDisplayName }}</strong>
      </div>

      <div>{{ event.title }}</div>

      <div>
        <i class="fas fa-edit me-2" role="button"></i>
        <i class="far fa-trash-alt" role="button"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalenderEvent",
  props: {
    event: Object,
  },
  computed: {
    priorityDisplayName() {
      switch (this.event.priority) {
        case 1:
          return "Low";
        case 0:
          return "Medium";
        case -1:
          return "High";
      }
      return "Unkown priority";
    },
    alertColor() {
      return "alert-" + this.event.color;
    },
  },
};
</script>

<style lang="scss" scoped></style>
