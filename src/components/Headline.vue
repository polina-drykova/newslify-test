<template>
  <v-card
    class="mx-auto"
    heght="400px">
    <v-img
      v-if="headline.urlToImage"
      :src="headline.urlToImage"
      class="white--text align-end"
      height="190px"
      gradient="to bottom, transparent 55%, rgba(32,32,32,.2), rgba(32,32,32,.4)">
      <v-card-title>|  {{ headline.source.name }}</v-card-title>
    </v-img>

    <v-img
      v-if="!headline.urlToImage"
      src="../assets/img-placeholder.png"
      class="white--text align-end"
      height="190px"
      gradient="to bottom, transparent 55%, rgba(32,32,32,.2), rgba(32,32,32,.4)">
      <v-card-title>|  {{ headline.source.name }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary pb-0" style="min-height: 95px;">
      <h4 style="font-weight: 400;">{{ headline.title }}</h4>
    </v-card-text>

    <v-card-actions class="pt-0">
      <v-spacer></v-spacer>
      <router-link
        :to="{
          name: 'Details',
          params: {
            id: headline.id,
          }
        }"
        style="text-decoration: none;">
        <v-btn color="cyan darken-1" text>Read</v-btn>
      </router-link>

      <!-- Edit headline pop-up: -->
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              color="cyan darken-1"
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
                    text
                    color="cyan darken-1"
                    type="cancel"
                    @click="cancel(); dialog = false">
                    Close
                  </v-btn>

                  <v-btn
                    submit
                    text
                    color="cyan darken-1"
                    @click="save(); dialog = false"
                    type="submit">
                    Save
                  </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card-actions>
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
    ...mapActions(['updateHeadline']),
    // Handle updating:
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
