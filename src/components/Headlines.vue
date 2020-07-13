<!-- eslint-disable -->
<template>
    <v-container grid-list-md sm8 class="ml-auto mr-auto mt-3">
      <v-layout
      row
      wrap
      class="ml-auto mr-auto" style="width: 97%;">
        <!-- Display all headlines: -->
        <v-flex xs12 sm7 class="ml-auto mr-auto">
          <div class="mx-auto">
            <p class="font-weight-light mb-2" >{{ title }}</p>
          </div>
          <div v-if="headlines.length < 1">
            <p>Oops, no news to load..</p>
          </div>
          <v-layout row wrap>
            <v-flex
            xs12
            sm12
            :key="headline.id"
            v-for="headline in headlines"
            >
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
  },
  computed: {
    // Modify title depend on filter option if there one:
    title() {
      const value = this.filterOpt.toUpperCase();
      if (value === '' || value === 'TOP-20') {
        return 'TOP-20 HEADLINES:';
      }
      return value;
    },
  },
};
</script>
<style>
  .image {
    background-color: #424242;
  }
</style>
