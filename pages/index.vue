<template>
  <div class="content-container flex-grow flex flex-col">
    <Header :menuState='isOpen' :indicator='indicator' @toggleMenu='showMenu'/>
    <transition name="fade" mode="out-in">
      <Menu v-if="isOpen" @close='showMenu'/>
    </transition>
    <Welcome @isVisible='emit'/>
    <About @isVisible='emit'/>
    <Portfolio @isVisible='emit'/>
    <Contact @isVisible='emit'/>
    <Scroll :menuState='isOpen'/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      indicator: 'Welcome'
    }
  },
  methods: {
    emit(e) {
      if (this.indicator != e.page) {
        this.indicator = e.page
      }
      // this.$emit("updateIndicator", {page: "About"})
    },    
    showMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: opacity .15s ease;
}
.slide-fade-leave-active {
  transition: opacity .15s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
