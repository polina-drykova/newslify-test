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
              class="my-4"
              :aspect-ratio="21 / 9"
              :src="headline.urlToImage"></v-img>
            <div>
              <p>{{ headline.content }}</p>
            </div>

          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Details',
  props: ['headline'],
  methods: {
    ...mapActions(['addVisitedPage']),
  },
  computed: {
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
  },

  // Using In-Component Guards:
  beforeRouteLeave(to, from, next) {
    const pageInfo = {
      pageHeadline: this.headline,
      pageId: this.headline.id,
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
