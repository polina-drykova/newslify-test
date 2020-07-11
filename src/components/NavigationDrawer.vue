<template>
  <v-container>
    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        dark
        class="grey darken-4"
      >
        <v-list dense>
          <v-list-item class="ml-1">
            SOURCES
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
          :key="source.id"
          v-for="source in allSources"
          class="ml-1"
          link>
            <v-list-item-content>
              <v-list-item-title>{{source.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        app
        clipped-left
        dark
        class="grey darken-4"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>NEWSLIFY</v-toolbar-title>
      </v-app-bar>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
// import Headline from './Headline.vue';

export default {
  name: 'NavigationDrawer',
  data: () => ({
    drawer: null,
  }),
  components: {
    // Headline,
  },
  methods: {
    // import headlines:
    ...mapActions(['fetchSources']),
  },
  computed: {
    ...mapGetters(['allSources']),
  },
  created() {
    this.fetchSources();
  },
};
</script>
