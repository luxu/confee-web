<template>
  <div id="Home">
    <carousel-view></carousel-view>
    <img src="../assets/logo.png">
  </div>
</template>

<script>

// import Menu from './components/shared/menu/Menu.vue';
import Carousel from "./Carousel.vue";
// import UsersSidebarItem from './components/sidebar/UsersItemr.vue'
// import ClientsSidebarItem from './components/sidebar/UsersItemr.vue'

export default {
  name: 'Home',
  components: {
    // 'page-header': PageHeader, 
    // PageSidebar, 
    // UsersSidebarItem, 
    // ClientsSidebarItem,
    'carousel-view' : Carousel
  },
  data () {
    return {
      msg: 'Bem-vindo a maior farmácia do Brasil'
    }
  }
}
</script>

<style scoped>
</style>
