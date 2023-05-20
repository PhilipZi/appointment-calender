<template>
  <div>
    <div class="alert text-center" :class="alertColor">
      <Transition name="fade" mode="out-in">
        <div v-if="!event.edit">
          <div>
            <slot
              name="eventPriority"
              :priorityDisplayName="priorityDisplayName"
            >
              <strong>{{ priorityDisplayName }}</strong>
            </slot>
          </div>

          <slot :event="event">
            <div>{{ event.title }}</div>
          </slot>

          <div>
            <i class="fas fa-edit me-2" role="button" @click="editEvent()"></i>
            <i
              class="far fa-trash-alt"
              role="button"
              @click="deleteEvent()"
            ></i>
          </div>
        </div>
        <div v-else>
          <input
            type="text"
            class="form-control"
            ref="newEventTitleInput"
            :placeholder="event.title"
            @input="setNewEventTitle($event)"
          />
          <select class="form-select mt-2" v-model="newEventPriority">
            <option value="-1">High</option>
            <option value="0">Medium</option>
            <option value="1">Low</option>
          </select>
          <hr />
          <i class="fas fa-check" role="button" @click="updateEvent()"></i>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import Store from "../store";

export default {
  name: "CalendarEvent",
  props: {
    event: Object,
    day: Object,
  },
  data() {
    return {
      newEventTitle: "",
      newEventPriority: this.event.priority,
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
      // Auf die template refs zugreifen
      this.$nextTick(() => {
        this.$refs.newEventTitleInput.focus();
      });
    },
    updateEvent() {
      Store.mutations.updateEvent(this.day.id, this.event.title, {
        title: this.newEventTitle,
        priority: this.newEventPriority,
      });
    },
    setNewEventTitle(event) {
      this.newEventTitle = event.target.value;
    },
  },
};
</script>

<style scoped></style>
