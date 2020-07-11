<template>
    <v-container grid-list-md sm8 class="ml-auto mr-auto mt-3">
      <v-layout
      row
      wrap
      class="ml-auto mr-auto" style="width: 97%;">
        <!-- Left side (display all headlines): -->
        <v-flex xs12 sm7 class="ml-auto mr-auto">
          <div class="mx-auto">
            <p class="font-weight-light mb-2" >HEADLINES</p>
          </div>
          <v-layout row wrap>
            <v-flex
            xs12
            sm12
            :key="headline.id"
            v-for="headline in allHeadlines"
            >
              <Headline v-bind:headline="headline"/>
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- Right side (display history): -->
        <v-flex xs12 sm4>
          <div class="mx-auto">
            <p class="font-weight-light mb-2" >HISTORY:</p>
          </div>
          <!-- History list: -->
          <p v-if="allVisitedPages.length < 1" style="opacity:.5;">There's no activity yet..</p>
            <v-list class="pa-0">
              <template>
                <v-list-item
                  class="pa-0 pb-3"
                  :key="visitedPage.id"
                  v-for="visitedPage in allVisitedPages">
                    <router-link
                      class="link"
                      :to="{
                        name: 'Details',
                        params: {
                          id: visitedPage.pageId
                        }
                      }"
                      >
                      • {{ visitedPage.headlineTitle }}
                    </router-link>
                </v-list-item>
              </template>
            </v-list>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Headline from './Headline.vue';

export default {
  name: 'Headlines',
  components: {
    Headline,
  },
  methods: {
    // import headlines:
    ...mapActions(['fetchHeadlines']),
  },
  computed: {
    ...mapGetters(['allHeadlines', 'getHeadlineById', 'allVisitedPages']),
  },
  created() {
    this.fetchHeadlines();
  },
};
</script>
