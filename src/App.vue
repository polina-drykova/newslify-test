<template>
  <v-app>
    <NavigationDrawer :headlines="allHeadlines" @clicked="onClickChild" @searched="onSearchChild"/>
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
      filterOpt: '', // Set to the value emitted by the child (@clicked)
      searchQuery: '', // Set to the value emitted by the child (@searched)
    };
  },
  methods: {
    ...mapActions(['fetchHeadlines', 'searchHeadlines']),
    // Get the filter option from nav drawer and assign it to data:
    onClickChild(value) {
      this.filterOpt = value;
      // Check if it's details page and redirect if true:
      if (this.$route.name === 'Details') {
        this.$router.push('/');
      }
    },
    onSearchChild(searchQ) {
      // update searchQuery in data:
      this.searchQuery = searchQ;
      // send updated value to actions that triggers fetching headlines with query:
      this.searchHeadlines(this.searchQuery);
    },
  },
  computed: {
    ...mapGetters(['allHeadlines']),
    // modify headlines if there's filter:
    filteredHeadlines() {
      if (this.filterOpt !== '' && this.filterOpt !== 'TOP-20') {
        return this.allHeadlines.filter((item) => item.source.id === this.filterOpt);
      }
      return this.allHeadlines;
    },
  },
  mounted() {
    // import headlines if not searching:
    if (this.searchQuery === '') {
      this.fetchHeadlines();
    }
  },
};
</script>
