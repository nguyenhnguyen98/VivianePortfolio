<template>
    <section ref="welcome" id="welcome" class="relative max-w-screen-xl w-full min-h-screen flex flex-col justify-center items-center font-bold py-24 mx-auto">
      <h1 data-aos="custom-flip" data-aos-duration="800" class="text-5xl md:text-7xl xl:text-9xl leading-none uppercase text-mainBlue mr-12 md:mr-24 xl:mr-52">Viviane</h1>
      <h1 data-aos="custom-flip" data-aos-duration="800" data-aos-delay="200" class="text-5xl md:text-7xl xl:text-9xl leading-none uppercase text-mainBlue ml-20 md:ml-24 xl:ml-32">Tran</h1>
      <h1 data-aos="custom-flip" data-aos-duration="800" data-aos-delay="400" class="text-5xl md:text-7xl xl:text-9xl leading-none uppercase text-mainBlue ml-52 md:ml-68 xl:ml-108">Le</h1>
    </section>
</template>

<script>
export default {
    methods: {
        handleScroll () {
            const rect = this.$refs.welcome.getBoundingClientRect();
            if ( rect.top >= 0 && rect.top <= (window.innerHeight * 0.7 || document.documentElement.clientHeight * 0.7 )) {
              this.$emit('isVisible', {page: 'Welcome'})
            };
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

</style>