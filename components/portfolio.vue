<template>
  <section ref="portfolio" id="portfolio" class="max-w-screen-xl w-full h-full min-h-screen flex flex-col lg:flex-col flex-start items-center lg:items-stretch font-bold pt-24 px-6 lg:px-0 sm:pt-32 sm:pb-32 mx-auto">
    <!-- <div class="w-full relative z-50">
      <ul class="flex flex-row mb-4">
        <li>
          <label for="all" class="cursor-pointer" >
            <input type="radio" v-model="filter" class="hidden" checked value="all" id="all" name="radio-group"/>
            <h1 class="text-mainBlue font-bold lg:text-xl mr-4" :class="{'underline': filter == 'all', 'opacity-50': filter != 'all'}">All</h1>
          </label>
        </li>
        <li>
          <label for="#school" class="cursor-pointer" >
            <input type="radio" v-model="filter" class="hidden" value="#school" id="#school" name="radio-group"/>
            <h1 class="text-mainBlue font-bold lg:text-xl mx-4" :class="{'underline': filter == '#school', 'opacity-50': filter != '#school'}">School</h1>
          </label>
        </li>
        <li>
          <label for="#personal" class="cursor-pointer" >
            <input type="radio" v-model="filter" class="hidden" value="#personal" id="#personal" name="radio-group"/> 
            <h1 class="text-mainBlue font-bold lg:text-xl mx-4" :class="{'underline': filter == '#personal', 'opacity-50': filter != '#personal'}">personal</h1>
          </label>
        </li>
      </ul>
    </div> -->
    <div class="masonry" data-aos="fade-up" data-aos-duration="600">
      <transition-group name="fade">
      <div class="grid" v-for="(work, index) in filtered" :key="work+index" @click.prevent="toggleModal(work.source)">
        <img :src="require(`~/assets/images/${work.source}`)">
        <div class="grid__body">
          <div class="mt-auto" >
            <span class="grid__tag">{{work.tag}}</span>
          </div>
        </div>
      </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
import Viewer from '~/components/viewer'

export default {
    data() {
      return {
        filter: 'all',
        works: [
          {source: 'school/Work-1.png', tag: '#school'},
          {source: 'school/Work-1_5.jpg', tag: '#school'},
          {source: 'personal/Work-1.jpg', tag: '#personal'}, 
          {source: 'school/Work-2.png', tag: '#school'},
          {source: 'school/Work-2_5.png', tag: '#school'},
          {source: 'personal/Work-2.jpg', tag: '#personal'}, 
          {source: 'school/Work-3.jpg', tag: '#school'},
          {source: 'personal/Work-3.png', tag: '#personal'}, 
          {source: 'school/Work-4.jpg', tag: '#school'},
          {source: 'personal/Work-4.jpg', tag: '#personal'}, 
          {source: 'school/Work-5.png', tag: '#school'},
          {source: 'personal/Work-5.jpg', tag: '#personal'}, 
          {source: 'school/Work-6.jpg', tag: '#school'},
          {source: 'personal/Work-6.jpg', tag: '#personal'}, 
          {source: 'school/Work-7.png', tag: '#school'},
          {source: 'personal/Work-7.jpg', tag: '#personal'}, 
          {source: 'school/Work-8.jpg', tag: '#school'},
          {source: 'personal/Work-8.png', tag: '#personal'},    
          {source: 'school/Work-9.jpg', tag: '#school'},
          {source: 'school/Work-10.png', tag: '#school'},
        ]
      }
    },
    components: { Viewer },
    computed: {
      filtered() {
        return this.works.filter(x => x.tag == this.filter || this.filter == 'all')
      }
    },
    methods: {
      handleScroll () {
          const rect = this.$refs.portfolio.getBoundingClientRect();
          if ( rect.top >= 0 && rect.top <= (window.innerHeight * 0.7 || document.documentElement.clientHeight * 0.7 )) {
            this.$emit('isVisible', {page: 'Portfolio'})
          };
      },
      toggleModal(i) {
        this.$modal.show( Viewer, {link: i})
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

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
</style>
