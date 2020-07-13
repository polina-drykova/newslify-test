<template>
  <v-app>
    <NavigationDrawer :headlines="allHeadlines" @clicked="onClickChild"/>
    <v-main>
      <!-- Render view: -->
      <router-view
        :headlines="filteredHeadlines"
        :filterOpt="filterOpt"
        :key="$route.path">
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  name: 'App',
  components: {
    NavigationDrawer,
  },
  data() {
    return {
      filterOpt: '', // Set to the value emitted by the child (NavigationDrawer)
    };
  },
  methods: {
    ...mapActions(['fetchHeadlines']),
    // Get the filter option from nav drawer and assign it to data:
    onClickChild(value) {
      this.filterOpt = value;
      // Check if it's details page and redirect if true:
      if (this.$route.name === 'Details') {
        this.$router.push('/');
      }
    },
  },
  computed: {
    ...mapGetters(['allHeadlines', 'getHeadlineById']),
    // modify headlines if there's filter:
    filteredHeadlines() {
      if (this.filterOpt !== '' && this.filterOpt !== 'TOP-20') {
        return this.allHeadlines.filter((item) => item.source.id === this.filterOpt);
      }
      return this.allHeadlines;
    },
  },
  created() {
    // import headlines:
    this.fetchHeadlines();
  },
};
</script>
