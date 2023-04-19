import { calenderWeekData } from "./seed";
import { reactive, readonly } from "vue";

const state = reactive({
  calenderWeekData,
});

const getters = {
  activeDay: () => state.calenderWeekData.find((day) => day.active),
};

const mutations = {};

export default {
  state: readonly(state),
  getters,
  mutations,
};
