<template>
  <v-app>
    <NavigationDrawer :headlines="allHeadlines" @clicked="onClickChild" @searched="onSearchChild"/>
    <v-main>
      <!-- Render view: -->
      <div v-if="isError">
        <Error :isError="isError" :msg="this.$store.state.error"/>
      </div>

      <Spinner v-if="getLoadingStatus"/>

      <div v-if="!getLoadingStatus">
        <router-view
          :headlines="filteredHeadlines"
          :filterOpt="filterOpt"
          :searchQuery="searchQuery"
          :key="$route.path">
        </router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Error from '@/components/Error.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';
import Spinner from './components/Spinner.vue';

export default {
  name: 'App',
  components: {
    NavigationDrawer,
    Spinner,
    Error,
  },
  data() {
    return {
      filterOpt: '', // Set to the value emitted by the child (@clicked)
      searchQuery: '', // Set to the value emitted by the child (@searched)
    };
  },
  methods: {
    ...mapActions(['fetchHeadlines', 'searchHeadlines', 'changeLoader']),
    // Get the filter option from nav drawer and assign it to data:
    onClickChild(value) {
      this.filterOpt = value;
      if (value === 'Home') {
        this.resetSearch('');
        this.fetchHeadlines();
      }
      // Check if it's details page and redirect if true:
      if (this.$route.name === 'Details') {
        this.$router.push('/');
      }
    },
    onSearchChild(searchQ) {
      // update searchQuery in data:
      this.searchQuery = searchQ;
      if (searchQ !== '') {
        // send updated value to actions that triggers fetching headlines with query:
        this.searchHeadlines(this.searchQuery);
      }
    },
    resetSearch() {
      this.searchQuery = '';
    },
  },
  computed: {
    ...mapGetters(['allHeadlines', 'getLoadingStatus']),
    // modify headlines if there's filter:
    filteredHeadlines() {
      if (this.filterOpt !== '' && this.filterOpt !== 'Home') {
        return this.allHeadlines.filter((item) => item.source.id === this.filterOpt);
      }
      return this.allHeadlines;
    },
    // check if there're any errors in api calls:
    isError() {
      if (this.$store.state.error !== '') {
        return true;
      }
      return false;
    },
  },

  mounted() {
    // import headlines if not searching:
    if (this.searchQuery === '' || this.filterOpt === 'Home') {
      this.fetchHeadlines();
    }
  },
};
</script>
