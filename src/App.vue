<template>
  <v-app>
    <NavigationDrawer/>
    <v-main>
      <!-- Render view: -->
      <router-view :headlines="allHeadlines" :key="$route.path"></router-view>
      <!-- <Headlines/> -->
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  name: 'App',

  components: {
    NavigationDrawer,
    // Headlines,
  },
  methods: {
    ...mapActions(['fetchHeadlines']),
  },
  computed: {
    ...mapGetters(['allHeadlines', 'getHeadlineById']),
  },
  created() {
    // import headlines:
    this.fetchHeadlines();
  },
};
</script>
