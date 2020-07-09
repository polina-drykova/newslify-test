<template>
  <v-flex
          xs12
          sm8
        >
          <v-layout row wrap class="">
            <v-flex
            xs12
            sm12
            :key="headline.id"
            v-for="headline in allHeadlines"
            >
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

                  <!-- <v-avatar
                    class="ma-3"
                    size="130"
                    tile
                  >
                    <v-img :src="headline.urlToImage"
                    gradient="to bottom, transparent 0%, rgba(33, 33, 33,1)"></v-img>
                  </v-avatar> -->
                </div>
              </v-card>

              <!-- <v-btn outline block class="primary">1</v-btn> -->

            </v-flex>
            </v-layout>
            </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Headline',
  methods: {},
  computed: mapGetters(['allHeadlines']), // import headlines
};
</script>
