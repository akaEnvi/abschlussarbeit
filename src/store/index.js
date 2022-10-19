import { createStore } from "vuex";

function splitUserByClasses(users) {
  const result = {};

  for (let user of users) {
    const className = user.className;

    if (!Object.prototype.hasOwnProperty.call(result, className)) {
      result[className] = {};
      result[className].attendees = [];
    }

    result[className].attendees.push(user);
  }

  return result;
}

export default createStore({
  state: {
    moderatorName: "",
    users: [],
    usersByClass: [],
    currentClass: "",
    questions: [""],
    knowledge: [""],
    checkout: [],
    checkIn: [],
    liveSessionPresence: [],
    studentName: "",
  },
  getters: {
    getUserByClass(state) {
      return state.usersByClass;
    },
    getCurrentClassAttendees(state) {
      return state.currentClass
        ? state.usersByClass[state.currentClass].attendees
        : "";
    },
  },
  mutations: {
    setLiveSessionPresence(state, value) {
      state.liveSessionPresence = value;
    },
    updateSingleLiveSessionPresence(state, index) {
      state.liveSessionPresence[index].present =
        !state.liveSessionPresence[index].present;
    },
    setCheckInPresence(state, value) {
      state.CheckInPresence = value;
    },
    updateSingleCheckInPresence(state, index) {
      state.CheckInPresence[index].present =
        !state.CheckInPresence[index].present;
    },
    addUpdateCheckIn(state, value) {
      const index = state.checkIn.findIndex((item) => {
        return item.student.uid === value.student.uid;
      });
      if (index === -1) {
        state.checkIn.push(value);
      } else {
        state.checkIn[index] = value;
      }
    },
    setCheckOutPresence(state, value) {
      state.CheckOutPresence = value;
    },
    updateSingleCheckOutPresence(state, index) {
      state.CheckOutPresence[index].present =
        !state.CheckOutPresence[index].present;
    },
    addUpdateCheckOut(state, value) {
      const index = state.checkout.findIndex((item) => {
        return item.student.uid === value.student.uid;
      });
      if (index === -1) {
        state.checkout.push(value);
      } else {
        state.checkout[index] = value;
      }
    },
    setCheckout(state, value) {
      state.checkout = value;
    },

    setCurrentClass(state, value) {
      state.currentClass = value;
    },
    setModeratorName(state, value) {
      state.moderatorName = value;
    },
    setQuest(state, value) {
      state.questions = value;
    },
    setKnowledge(state, value) {
      state.knowledge = value;
    },
    setStudentName(state, value) {
      state.studentName = value;
    },
  },
  actions: {
    async getUsers(ctx) {
      try {
        const response = await fetch(
          "https://dummy-apis.netlify.app/api/students"
        );
        const attendeeData = await response.json();

        console.log(attendeeData.length);

        if (!response.ok) {
          const error =
            (attendeeData && attendeeData.message) || response.statusText;
          return Promise.reject(error);
        }
        ctx.state.users = attendeeData;
        ctx.state.usersByClass = splitUserByClasses(attendeeData);
        console.log(ctx.getters.getCurrentClassAttendees);
      } catch (error) {
        // this.errorMessage = error;
        console.error("There was an error!", error);
      }
    },
    reset(ctx) {
      ctx.state.moderatorName = "";
      ctx.state.checkIn = [];
      ctx.state.liveSessionPresence = [];
      ctx.state.checkout = [];
      ctx.state.knowledge = [];
      ctx.state.questions = [];
      ctx.state.present = "false";
    },
  },
  modules: {},
});
