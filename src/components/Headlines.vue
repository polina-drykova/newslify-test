<template>
    <v-container grid-list-xl sm8 class="ml-auto mr-auto pt-0 mt-0">
        <v-layout
        row
        wrap
        class="ml-auto mr-auto">
          <!-- Display all headlines: -->
          <v-flex xs12 sm10 class="ml-auto mr-auto">
            <div class="mx-auto">
              <h2 class="font-weight-light mb-2 text-uppercase" >TOP-20 {{ title }}</h2>
            </div>
            <div v-if="this.searchQuery !== ''" class="mx-auto">
              <p class="font-weight-light mb-2 text-uppercase">
                RESULTS FOR: {{ this.searchQuery }}
              </p>
            </div>
            <v-layout row wrap>
              <v-flex
                xs12
                sm12
                v-if="headlines.length < 1"
                style="opacity: .4;">
                  <h1>Ooops..</h1>
                  <p>looks like there's no news {{ source }}</p>
              </v-flex>
              <v-flex
                xs12
                sm6
                md6
                lg4
                :key="headline.id"
                v-for="headline in headlines">
                <Headline v-bind:headline="headline"/>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Headline from './Headline.vue';

export default {
  name: 'Headlines',
  components: {
    Headline,
  },
  props: {
    headlines: Array,
    filterOpt: String,
    searchQuery: String,
  },
  computed: {
    title() {
      const value = this.filterOpt;
      if (value !== '' && value !== 'Home') {
        return `/ ${value}`;
      }
      return '';
    },
    source() {
      return `from "${this.filterOpt}"`;
    },
  },
};
</script>
<style>
</style>
