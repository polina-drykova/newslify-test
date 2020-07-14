<template>
  <v-card
    color="#212121"
    dark>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-text class="button pb-0">|  {{ headline.source.name }}</v-card-text>
        <v-card-text class="subtitle-1 pt-2">
          {{ headline.title }}
        </v-card-text>

        <div class="ml-4 mb-3">
          <!-- Button to the details page: -->
            <router-link
              :to="{
                name: 'Details',
                params: {
                  id: headline.id,
                }
              }"
              style="text-decoration: none;">
              <v-btn class="mr-3">Read more</v-btn>
            </router-link>

          <!-- Edit headline pop-up: -->
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  v-bind="attrs"
                  v-on="on">
                  Edit
                </v-btn>
              </template>

              <!-- Pop-up: -->
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit Title</span>
                  </v-card-title>
                  <!-- Form: -->
                    <v-card-text>
                      <v-col cols="12">
                          <v-textarea
                            danger
                            primary
                            counter="120"
                            :rules="titleRules"
                            auto-grow
                            rows="2"
                            class="pr-1 pt-1"
                            label="Title"
                            v-model="headline.title"
                            required>
                          </v-textarea>
                      </v-col>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        type="cancel"
                        @click="cancel(); dialog = false">
                        Close
                      </v-btn>

                      <v-btn
                        submit
                        text
                        @click="save(); dialog = false"
                        type="submit">
                        Save
                      </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
      </div>

      <v-avatar
        class="ma-3"
        size="130"
        tile>
        <v-img
          v-if="headline.urlToImage"
          :src="headline.urlToImage"
          gradient="to bottom, transparent 0%, rgba(33, 33, 33,1)">
        </v-img>
        <v-img
          v-if="!headline.urlToImage"
          src="../assets/img-placeholder.png"
          gradient="to bottom, transparent 0%, rgba(33, 33, 33,1)">
        </v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Headline',
  props: ['headline'],
  data() {
    return {
      isEditing: false,
      dialog: false,
      title: '',
      // Validation rules to display:
      titleRules: [
        (v) => !!v || 'Title is required',
        (v) => v.length <= 120 || 'Title must be less than 130 characters',
      ],
    };
  },
  methods: {
    // Handle updating:
    ...mapActions(['updateHeadline']),
    save() {
      this.cachedHeadline = { ...this.headline };
    },
    // Reverse changes (not the best solution):
    cancel() {
      const cacheVal = { ...this.cachedHeadline };
      this.updateHeadline(cacheVal);
    },
  },
  computed: {
    // Validation:
    titleIsValid() {
      return (this.headline.title.length <= 120);
    },
  },
  mounted() {
    this.cachedHeadline = { ...this.headline };
  },
};
</script>
