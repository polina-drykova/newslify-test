<template>
  <div class="details">
    <v-container>
        <v-layout row wrap class="">
          <v-flex
            xs12
            sm8
            md8
            lg8
            class="mx-auto px-5"
          >
            <div class="mb-2">
              <router-link class="link" to="/">
                Home/
              </router-link>
            </div>
            <h1 style="font-weight: 300; line-height: 1.3;">
              {{ headlineToDisplay.title }}
            </h1>
            <div class="d-flex justify-space-between mt-3">
              <!-- <p style="opacity: .6;">| {{ headline.source }}</p> -->
              <p style="opacity: .6;">| Some source</p>
            </div>
            <!-- <v-img class="my-4" :aspect-ratio="21 / 9" :src="headline.urlToImage"
            gradient="to bottom, transparent 0%, rgba(33, 33, 33,1)"></v-img> -->
            <div>
              <p>{{ headlineToDisplay.body }}</p>
            </div>

          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Details',
  data() {
    return {
      headlineId: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(['addVisitedPage']),
  },
  computed: {
    ...mapGetters(['getHeadlineById']),
    headlineToDisplay() {
      return this.getHeadlineById(this.headlineId);
    },
  },

  // Using In-Component Guards:
  beforeRouteLeave(to, from, next) {
    const pageInfo = {
      headlineTitle: this.headlineToDisplay.title,
      pageId: from.params.id,
    };
    this.addVisitedPage(pageInfo);
    next();
  },
};
</script>

<style>
  a.link {
    color: #757575;
    text-decoration: none;
  }
  a.link:hover {
    color: #26c6da;
  }
</style>
