<template>
  <section ref="about" id="about" class="max-w-screen-xl w-full min-h-screen flex flex-col flex-start items-center font-bold py-24 sm:py-32 px-6 mx-auto">
    <div class="mb-24 sm:mb-32 lg:mb-40 w-full">
      <h1 data-aos="custom-flip" data-aos-duration="600" class="font-bold text-mainBlue text-5xl lg:text-6xl mb-2">Hello,</h1>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <p class="mb-2 leading-snug sm:text-lg lg:text-xl">I'm currently an Illustration student at Dawson College. I'd love to work with you and learn new things!</p>
        <p class="leading-snug sm:text-lg lg:text-xl">My main current main art medium is digital, but I do enjoy good old graphite on paper from time to time. I'm also open to learning new stuff and adapt very quickly.</p>
      </div>
    </div>
    <div class="w-full" v-if="$vssWidth	<= 680">
      <div class="flex flex-row items-baseline mb-4">  
        <h1 data-aos="custom-flip" data-aos-duration="600" class="font-bold text-mainBlue text-2xl mr-5">{{currentTab}}</h1>
        <h3 data-aos="custom-flip" data-aos-duration="600" class="font-bold text-mainBlue text-md" @click="setTab">/ {{otherTab}}</h3>
      </div>
      <ul data-aos="fade-up" data-aos-duration="800" v-if='currentTab == "Competence"'>
        <li data-aos-delay="200" v-for="(competence, index) in competences" :key='index' class="mb-1 sm:text-lg">{{competence}}</li>
      </ul>
      <ul data-aos="fade-up" data-aos-duration="800" v-if='currentTab == "Interest"'>
        <li data-aos-delay="200" v-for="(interest, index) in interests" :key='index' class="mb-1 sm:text-lg" :class="{'text-transparent': interest == '_'}">{{interest}}</li>
      </ul>
    </div>
    <div class="w-full flex flex-row justify-between" v-else>
      <div class="w-1/2 flex flex-col justify-center text-center mr-2">
        <h1 data-aos="custom-flip" data-aos-duration="600" class="w-auto font-bold text-mainBlue text-3xl lg:text-6xl mb-4 lg:mb-6 border-b border-mainBlue">Competence</h1>
        <ul>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" v-for="(competence, index) in competences" :key='index' class="text-center mb-1 sm:text-lg lg:text-xl">{{competence}}</li>
        </ul>
      </div>
      <div class="w-1/2 flex flex-col justify-center text-center ml-2">
        <h1 data-aos="custom-flip" data-aos-duration="600" class="w-auto font-bold text-mainBlue text-3xl lg:text-6xl mb-4 lg:mb-6 border-b border-mainBlue">Interest</h1>
        <ul>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" v-for="(interest, index) in interests" :key='index' class="text-center mb-1 sm:text-lg lg:text-xl" :class="{'text-transparent': interest == '_'}">{{interest}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

export default {
    mixins: [VueScreenSize.VueScreenSizeMixin],
    data() {
      return {
        currentTab: 'Competence',
        otherTab: 'Interest',
        competences: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Animate', 'Procreate', 'Paint Tool Sai', 'SketchUp', '3DS Max', 'Mudbox'],
        interests: ['Concept Art', 'Illustrations', 'Graphic Design', '_', '_', '_', '_', '_']
      }
    },
    methods: {
        handleScroll () {
            const rect = this.$refs.about.getBoundingClientRect();
            if ( rect.top >= 0 && rect.top <= (window.innerHeight * 0.7 || document.documentElement.clientHeight * 0.7 )) {
              this.$emit('isVisible', {page: 'About'})
            };
        },
        setTab() {
          let current = this.currentTab;
          let other = this.otherTab;
          this.currentTab = other;
          this.otherTab = current;
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