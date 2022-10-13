import { createStore } from "vuex";

function getUsers(users) {
  const result = {};

  for (let user of users) {
    const className = user.className;
    if (Object.prototype.hasOwnProperty.call(result, className)) {
      result[className].attendees.push(user);
    } else {
      result[className] = {};
      result[className].attendees = [];
      result[className].attendees.push(user);
    }
  }

  return result;
}

export default createStore({
  state: {
    moderator: "Hans Werner Müller",
    users: [],
    usersByClass: [],
  },
  getters: {
    getUserByClass(state) {
      return state.usersByClass;
    },
  },
  mutations: {},
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
        ctx.state.usersByClass = getUsers(attendeeData);
      } catch (error) {
        // this.errorMessage = error;
        console.error("There was an error!", error);
      }
    },
  },
  modules: {},
});
