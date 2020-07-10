<template>
  <v-card
    color="#212121"
    dark
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-text
          class="button pb-0"
        >|  {{ headline.source }}</v-card-text>
        <v-card-text class="subtitle-1 pt-2" style="">
          {{ headline.title }}
        </v-card-text>
        <div class="ml-4 mb-3">
          <!-- Button to the details page: -->
          <router-link
          :to="{ name: 'Details', params: { headline: getHeadlineById(headline.id) } }"
          style="text-decoration: none;">
            <v-btn class="mr-3">Read more</v-btn>
          </router-link>

          <!-- Edit headline pop-up: -->
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                v-bind="attrs"
                v-on="on"
              >
                Edit
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline ml-3">Edit Headline: {{ headline.id }}</span>
              </v-card-title>
              <v-card-text>
                <v-col cols="12">
                  <v-text-field label="Headline" required></v-text-field>
                  <small class="mt-0">0/140</small>
                </v-col>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </div>
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
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Headline',
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
  props: ['headline'],
  // import headline:
  computed: mapGetters(['getHeadlineById']),
};
</script>
