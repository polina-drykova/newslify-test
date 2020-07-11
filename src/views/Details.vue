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
              <div>
                <p class="mb-0">{{ headlineToDisplay.author }}</p>
                <p style="opacity: .6;"><i>- {{ headlineToDisplay.source.name }}</i></p>
              </div>
              <p>{{ formatDate }}, {{ getYear }}</p>
            </div>
            <v-img class="my-4" :aspect-ratio="21 / 9" :src="headlineToDisplay.urlToImage"
            gradient="to bottom, transparent 0%, rgba(33, 33, 33,1)"></v-img>
            <div>
              <p>{{ headlineToDisplay.content }}</p>
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
    // Display the date month/date:
    formatDate() {
      const date = this.headlineToDisplay.publishedAt.split('T')[0];
      const newDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: '2-digit',
      }).format(Date.parse(date));
      return newDate;
    },
    getYear() {
      const year = this.headlineToDisplay.publishedAt.split('T')[0].split('-')[0];
      return year;
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
