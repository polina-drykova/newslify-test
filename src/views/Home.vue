<template>
  <div class="home mt-0">
    <Headlines/>
  </div>
</template>

<script>
// @ is an alias to /src
import Headlines from '@/components/Headlines.vue';

export default {
  name: 'Home',
  components: {
    Headlines,
  },
};
</script>
