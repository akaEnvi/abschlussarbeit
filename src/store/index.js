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
    studentName: "",
  },
  getters: {
    getUserByClass(state) {
      return state.usersByClass;
    },
    getCurrentClassAttendees(state) {
      return state.usersByClass[state.currentClass].attendees;
    },
  },
  mutations: {
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
      } catch (error) {
        // this.errorMessage = error;
        console.error("There was an error!", error);
      }
    },
  },
  modules: {},
});
