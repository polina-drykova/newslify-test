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
          <v-expansion-panels
            v-model="panel"
            multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-header style="max-height: 20px;">SOURCES</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item
                :key="source.id"
                v-for="source in allSources"
                link>
                  <v-list-item-content>
                    <v-list-item-title>{{source.name}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header style="max-height: 20px;">HISTORY</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item
                :key="visitedPage.id"
                v-for="visitedPage in allVisitedPages"
                link
                :to="{
                  name: 'Details',
                  params: {
                    id: visitedPage.pageId
                  }
                }">
                  <v-list-item-content>
                    <v-list-item-title>{{ visitedPage.headlineTitle }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
    panel: [0, 1],
    disabled: false,
    readonly: false,
  }),
  components: {
    // Headline,
  },
  methods: {
    // import headlines:
    ...mapActions(['fetchSources']),
  },
  computed: {
    ...mapGetters(['allSources', 'allVisitedPages']),
  },
  created() {
    this.fetchSources();
  },
};
</script>
