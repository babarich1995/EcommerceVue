
<template>
  <div
    v-show="this.$store.state.layout === 'landing'"
    class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
  ></div>
   <!-- nav -->
    <navbar
      :class="[navClasses]"
      :textWhite="
        this.$store.state.isAbsolute ? 'text-white opacity-8' : 'text-white'
      "
      :minNav="navbarMinimize"
      v-if="this.$store.state.showNavbar"
    />
 
  <main
    class="main-content  position-relative max-height-vh-100 h-100 border-radius-lg"
    :class="this.$store.state.showNavbar ? 'mt-2': ''"
  >
  
    <router-view />

 
  </main>
</template>
<script>



import { mapMutations } from "vuex";


export default {
  name: "App",
  components: {
 
  
  
 
  },

 
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
  computed: {
    navClasses() {
      return {
        "position-sticky bg-white left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && !this.$store.state.darkMode,
        "position-sticky bg-default left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && this.$store.state.darkMode,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
          .isAbsolute,
        "px-0 mx-0": !this.$store.state.isAbsolute
      };
    },
    currentRouteName() {
      return this.$route.name;
    }
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  }
   
};
</script>
