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
          >
          <v-list-item
          class="pl-2"
          @click="pickFilter('Home'); disableSearch()"
          >
            <v-list-item-content>
              <v-list-item-title class="ml-4">
                <h3 style="font-weight: 400;">HOME</h3>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
            <!--  List of sources: -->
            <v-expansion-panel>
              <v-expansion-panel-header
              style="max-height: 20px;"
              class="font-weight-normal">
                SOURCES
              </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list-item
                  :key="source.id"
                  v-for="source in allSources"
                  class="pl-2"
                  @click="pickFilter(source.id)"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{source.name}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- History list: -->
            <v-expansion-panel>
              <v-expansion-panel-header style="max-height: 20px;">HISTORY</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item class="pl-2" v-if="allVisitedPages.length < 1">
                  <v-list-item-title>No activity yet..</v-list-item-title>
                </v-list-item>
                <v-list-item
                  :key="visitedPage.id"
                  v-for="visitedPage in allVisitedPages"
                  link
                  class="pl-2"
                  :to="{
                    name: 'Details',
                    params: {
                      id: visitedPage.pageId,
                    }
                  }">
                  <v-list-item-content>
                    <v-list-item-title >{{ visitedPage.pageHeadline.title }}</v-list-item-title>
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
        <v-spacer></v-spacer>
        <!-- Search: -->
        <v-col cols="12" xs="1" sm="1" md="3" class="mt-5">
          <v-text-field
            placeholder="Search"
            filled
            rounded
            dense
            v-model="searchV"
            @input="sendSearchQ"
          ></v-text-field>
        </v-col>

      </v-app-bar>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavigationDrawer',
  data: () => ({
    drawer: null,
    panel: [0, 1],
    disabled: false,
    readonly: false,
    searchV: '',
  }),
  props: {
    headlines: Array,
  },
  methods: {
    ...mapActions(['fetchSources']),
    // pass filter option to update Headlines:
    pickFilter(value) {
      this.$emit('clicked', value);
    },
    // pass search query on each input if any:
    sendSearchQ(searchQ) {
      if (searchQ !== '') {
        this.$emit('searched', searchQ);
      }
    },
    disableSearch() {
      if (this.searchV !== '') {
        this.searchV = ''; // eslint-disable-line
        this.$emit('searched', '');
      }
    },
  },
  computed: {
    ...mapGetters(['allSources', 'allVisitedPages']),
  },
  mounted() {
    this.fetchSources();
  },
};
</script>
