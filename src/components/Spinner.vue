<template>
  <v-container
    class="fill-height"
    fluid>
    <v-row
      align="center"
      justify="center">
      <v-progress-circular
        :size="40"
        color="cyan darken-1"
        indeterminate>
      </v-progress-circular>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'Spinner',
};
</script>
