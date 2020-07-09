<template>
  <v-container>
    <p>Headlines:</p>
    <Headline/>
  </v-container>
</template>

<script>
import Headline from './Headline.vue';

export default {
  name: 'Headlines',
  components: {
    Headline,
  },
  data: () => ({}),
};
</script>
