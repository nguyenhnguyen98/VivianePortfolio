<template>
  <header class="fixed w-full p-6 md:p-12 flex flex-row justify-content z-20">
      <div data-aos="fade-down" data-aos-duration="500" class="w-auto text-black">
          <transition name="fade" mode="out-in">
            <a href="#" v-scroll-to="`#${indicator.toLowerCase()}`" :key="indicator" class="with-serif font-bold border-b border-black lg:text-xl" v-if="!isOpen">{{indicator}}</a>
          </transition>
      </div>    
    <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="200" class="w-full flex justify-end">
      <div class="hamburger-button relative z-20 cursor-pointer" :class="{'active': isOpen}" @click.prevent="toggleMenu()">
        <span v-for="i in 4" :key="i"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    props: {
        indicator: {
            type: String,
            required: false,
            default: 'Welcome'
        },
        menuState: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        isOpen() {
            return this.$props.menuState
        }
    },
    methods: {
        toggleMenu() {
            this.$emit('toggleMenu')
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
