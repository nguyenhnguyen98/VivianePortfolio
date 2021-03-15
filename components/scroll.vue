<template>
  <div class="fixed w-full bottom-0 p-6 md:p-12 flex flex-row z-20" :class="{'justify-center': scroll <= 150, 'justify-end': scroll > 150}" v-if="!menuState">
    <transition name="fade">
        <h4 v-if="scroll <= 150" class="text-sm text-gray-600 animate-bounce -mt-6 mr-6 md:mr-12">Scroll</h4>
    </transition>
    <transition name="fade">
        <a href="#" v-scroll-to="'#welcome'" v-if="scroll > 150" class="absolute right-0 -mt-6 mr-6 md:mr-12"><img class="w-6 h-6" src="~/assets/svg/chevron-up.svg" alt="Scroll to top"></a>
    </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            scroll: 0
        }
    },
    props: {
        menuState: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        handleScroll () {
            this.scroll = window.scrollY
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
</style>
