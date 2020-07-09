<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        <h1 class="ml-5 font-weight-light">Newslify</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="pt-5">
      <Headlines/>
    </v-content>
  </v-app>
</template>

<script>
import Headlines from './components/Headlines.vue';

export default {
  name: 'App',

  components: {
    Headlines,
  },

  data: () => ({
    //
  }),
};
</script>
