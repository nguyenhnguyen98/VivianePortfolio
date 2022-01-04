<template>
  <section ref="portfolio" id="portfolio" class="max-w-screen-xl w-full h-full min-h-screen flex flex-col lg:flex-col flex-start items-center lg:items-stretch font-bold pt-24 px-6 lg:px-0 sm:pt-32 sm:pb-32 mx-auto">
    <div class="w-full relative z-50">
      <ul class="flex flex-row mb-4">
        <li>
          <label for="all" class="cursor-pointer">
            <input type="radio" v-model="filter" class="hidden" checked value="all" id="all" name="radio-group"/>
            <h1 class="text-mainBlue font-bold lg:text-xl mr-4" :class="{'underline': filter == 'all', 'opacity-50 hover:opacity-100': filter != 'all'}">All</h1>
          </label>
        </li>
        <li>
          <label for="#design" class="cursor-pointer">
            <input type="radio" v-model="filter" class="hidden" value="#design" id="#design" name="radio-group"/>
            <h1 class="text-mainBlue font-bold lg:text-xl mx-4" :class="{'underline': filter == '#design', 'opacity-50 hover:opacity-100': filter != '#design'}">Design</h1>
          </label>
        </li>
        <li>
          <label for="#illustration" class="cursor-pointer">
            <input type="radio" v-model="filter" class="hidden" value="#illustration" id="#illustration" name="radio-group"/> 
            <h1 class="text-mainBlue font-bold lg:text-xl mx-4" :class="{'underline': filter == '#illustration', 'opacity-50 hover:opacity-100': filter != '#illustration'}">Illustration</h1>
          </label>
        </li>
        <li>
          <label for="#3D" class="cursor-pointer">
            <input type="radio" v-model="filter" class="hidden" value="#3D" id="#3D" name="radio-group"/> 
            <h1 class="text-mainBlue font-bold lg:text-xl mx-4" :class="{'underline': filter == '#3D', 'opacity-50 hover:opacity-100': filter != '#commission'}">3D</h1>
          </label>
        </li>
      </ul>
    </div>
    <div class="masonry" data-aos="fade-up" data-aos-duration="400">
      <transition-group name="fade">
      <div class="grid cursor-pointer" v-for="(work, index) in filtered" :key="work+index" @click.prevent="toggleModal(work)">
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
          {source: 'school/Work-1.png', tag: '#illustration'},
          {source: 'commission/Work-1.jpg', tag: '#illustration', desc: 'Commission for “awomanontheinternet”. Portrait of her with her cat in warm lighting.'},
          {source: 'school/Work-1_5.jpg', tag: '#design'},
          {source: 'personal/Work-1.jpg', tag: '#illustration'},
          {source: 'school/dino_1-min.jpg', tag: '#3D'},
          {source: 'school/dino_2-min.jpg', tag: '#3D'},
          {source: 'school/dino_3-min.jpg', tag: '#3D'},
          {source: 'school/dino_4-min.jpg', tag: '#3D'},
          {source: 'school/dino_5-min.jpg', tag: '#3D'},
          {source: 'school/Work-2.png', tag: '#3D'},
          {source: 'school/Work-2_5.png', tag: '#design'},
          {source: 'personal/Work-2.jpg', tag: '#illustration'}, 
          {source: 'school/Work-3.jpg', tag: '#illustration'},
          {source: 'personal/Work-3.png', tag: '#3D'}, 
          {source: 'school/Work-4.jpg', tag: '#illustration'},
          {source: 'personal/Work-4.jpg', tag: '#illustration'}, 
          {source: 'school/Work-5.png', tag: '#3D'},
          {source: 'personal/Work-5.jpg', tag: '#illustration'}, 
          {source: 'school/Work-6.jpg', tag: '#illustration'},
          {source: 'personal/Work-6.jpg', tag: '#illustration'}, 
          {source: 'school/Work-7.png', tag: '#3D'},
          {source: 'personal/Work-7.jpg', tag: '#illustration'}, 
          {source: 'school/Work-8.jpg', tag: '#illustration'},
          {source: 'personal/Work-8.png', tag: '#illustration'},    
          {source: 'school/Work-9.jpg', tag: '#3D'},
          {source: 'school/Work-10.png', tag: '#3D'},
          {source: 'commission/Work-2.png', tag: '#illustration', desc: 'Commission for a friend. They requested I recreate a portrait of their father and late grandmother, as they did not have any pictures together.'},
          {source: 'commission/Work-3.jpg', tag: '#illustration', desc: 'Commission for Vedic108, a Twitch streamer. They requested a logo to represent their channel. '},
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
      toggleModal(data) {
        this.$modal.show( Viewer, {link: data.source, desc: data.desc})
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
        transition: opacity .25s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
</style>
