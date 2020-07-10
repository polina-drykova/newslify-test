<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        color="#212121"
        dark
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-text class="subtitle-1" style="min-height: 90px;">
              {{ headline.title }}
            </v-card-text>
            <v-card-text height="350"
              class="button"
            >|  {{ headline.source }}</v-card-text>
          </div>

          <v-avatar
            class="ma-3"
            size="130"
            tile
          >
            <v-img :src="headline.urlToImage"
            gradient="to bottom, transparent 0%, rgba(33, 33, 33,1)"></v-img>
          </v-avatar>
        </div>
        <!-- Hover effect -->
        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#26c6da">
            <!-- Link to Details page -->
            <router-link
            :to="{ name: 'Details', params: { headline: getHeadlineById(headline.id) } }"
            style="text-decoration: none;">
              <v-btn class="mr-3">Read more</v-btn>
            </router-link>
            <v-btn>Edit</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Headline',
  methods: {},
  props: ['headline'],
  // import headline:
  computed: mapGetters(['getHeadlineById']),
};
</script>
