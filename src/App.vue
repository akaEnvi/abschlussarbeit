<template>
  <nav>
    <router-link to="/">Index</router-link> |

    <router-link to="/questionList">Questions</router-link> |

    <router-link to="/CheckIn">CheckIn</router-link> |
    <router-link to="/Roti">Roti</router-link> |
  </nav>
  <router-view />
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("getUsers");
  },
};
</script>
