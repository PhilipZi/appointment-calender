<template>
  <div>
    <div class="alert text-center" :class="alertColor">
      <template v-if="!event.edit">
        <div>
          <slot name="eventPriority" :priorityDisplayName="priorityDisplayName">
            <strong>{{ priorityDisplayName }}</strong>
          </slot>
        </div>

        <slot :event="event">
          <div>{{ event.title }}</div>
        </slot>

        <div>
          <i class="fas fa-edit me-2" role="button" @click="editEvent()"></i>
          <i class="far fa-trash-alt" role="button" @click="deleteEvent()"></i>
        </div>
      </template>
      <template v-else>
        <input
          type="text"
          class="form-control"
          :placeholder="event.title"
          @input="setNewEventTitle"
        />
        <div>{{ newEventTitle }}</div>
        <hr />
        <i class="fas fa-check" role="button" @click="updateEvent()"></i>
      </template>
    </div>
  </div>
</template>

<script>
import Store from "../store";

export default {
  name: "CalendarEvent",
  props: {
    event: {},
    day: {},
  },
  data() {
    return {
      newEventTitle: "",
    };
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
  methods: {
    deleteEvent() {
      Store.mutations.deleteEvent(this.day.id, this.event.title);
    },
    editEvent() {
      Store.mutations.editEvent(this.day.id, this.event.title);
    },
    updateEvent() {
      Store.mutations.updateEvent(
        this.day.id,
        this.event.title,
        this.newEventTitle
      );
    },
    setNewEventTitle(event) {
      this.newEventTitle = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
