<template>
  <v-app>
    <NavigationDrawer/>
    <v-main>
      <!-- Render view: -->
      <router-view :key="$route.path"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  name: 'App',

  components: {
    NavigationDrawer,
  },

  data: () => ({}),
};
</script>
