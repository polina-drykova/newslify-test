<template>
  <div class="details">
    <h1>This is Details page</h1>
    <p>headline: {{ this.$route.params.id }}</p>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
export default {
  name: 'Details',
  components: {},
};
</script>
