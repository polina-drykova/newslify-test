<template>
  <v-dialog
      v-model="dialog"
      max-width="300">
      <v-card>
        <v-card-title class="headline">
          Oops, something went wrong..
        </v-card-title>

        <v-card-text>
          {{ msg }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-3"
            text
            @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Error',
  props: {
    isError: Boolean,
    msg: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {
    // set error status:
    if (this.isError) {
      this.dialog = true;
    }
  },
};
</script>
