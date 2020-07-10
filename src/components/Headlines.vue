<template>
    <v-container grid-list-xl class="ml-auto mr-auto mt-3">
      <div class="mx-auto" style="width: 90%;">
        <p class="font-weight-light ml-3 mb-0" >HEADLINES</p>
      </div>
      <v-layout row wrap class="ml-auto mr-auto" style="width: 90%;">
        <!-- Left side (display all headlines): -->
        <v-flex xs12 sm8>
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
          <v-btn outlined block>History</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Headline from './Headline.vue';

export default {
  name: 'Headlines',
  components: {
    Headline,
  },
  // import headlines:
  computed: mapGetters(['allHeadlines', 'getHeadlineById']),
};
</script>
