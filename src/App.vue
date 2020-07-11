<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        <h1 class="ml-5 font-weight-light"
        style="color: #26c6da; opacity: 0.8;">Newslify</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <!-- Render view: -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
