<template>
    <v-container>
        <v-layout row wrap class="">
          <v-flex
            xs12
            sm8
            md8
            lg8
            class="mx-auto px-5">
            <div class="mb-2">
              <router-link class="link" to="/" style="text-decoration: none; color: #00ACC1">
                Go Back
              </router-link>
            </div>

            <h1 style="font-weight: 300; line-height: 1.3;">
              {{ headline.title }}
            </h1>

            <div class="d-flex justify-space-between mt-3">
              <div>
                <p v-if="headline.author" class="mb-0">{{ headline.author }}</p>
                <p style="opacity: .6;"><i>- {{ headline.source.name }}</i></p>
              </div>
              <p>{{ formatDate }}</p>
            </div>

            <v-img
              v-if="headline.urlToImage"
              :src="headline.urlToImage"
              class="my-4"
              :aspect-ratio="21 / 9">
            </v-img>
            <v-img
              v-if="!headline.urlToImage"
              src="../assets/img-placeholder-lg.png"
              class="my-4"
              :aspect-ratio="21 / 9">
            </v-img>

            <div>
              <p>{{ headline.content }}</p>
            </div>

            <v-btn
              text
              :href="this.url"
              target="_blank"
              rel="noopener"
              class="mr-3 mb-7"
              color="cyan darken-1">
              Read more
            </v-btn>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
    ...mapGetters(['allHeadlines', 'getHeadline']),
    headline() {
      return this.getHeadline(this.headlineId);
    },
    // Formatting date to display:
    formatDate() {
      const date = this.headline.publishedAt.split('T')[0];
      const year = date.split('-')[0];
      const newDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: '2-digit',
      }).format(Date.parse(date));
      return `${newDate}, ${year}`;
    },
    url() {
      return `${this.headline.url}`;
    },
  },

  // Using In-Component Guards:
  beforeRouteLeave(to, from, next) {
    const pageInfo = {
      pageHeadline: this.headline,
      pageId: this.headlineId,
    };
    this.addVisitedPage(pageInfo);
    next();
  },
};
</script>
