<template>
  <section ref="contact" id="contact" class="max-w-screen-xl w-full min-h-screen flex flex-col lg:flex-row flex-start items-center lg:items-stretch font-bold py-16 sm:py-32 px-6 sm:px-24 mx-auto">
    <div class="w-full lg:w-1/2">
      <h1 data-aos="custom-flip" data-aos-duration="600" class="font-bold text-mainBlue text-5xl lg:text-6xl mb-2">Let's talk</h1>
      <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" class="mb-4 leading-snug sm:text-lg lg:text-xl">If you want to contact me for any business related inquiries, please fill in the contact form.</p>
      <form data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" @submit.prevent='submit' class="mt-10 mb-5 w-full">
        <label class="block mb-4">
          <span class="text-gray-700">Name</span>
          <input type='text' class="form-input mt-1 block w-full" v-model="form.name" required>
        </label>
        <label class="block mb-4">
          <span class="text-gray-700">Email</span>
          <input type='email' class="form-input mt-1 block w-full" v-model="form.email" required>
        </label>
        <label class="block mb-4">
          <span class="text-gray-700">Message</span>
          <textarea class="form-textarea mt-1 block w-full" rows="3" v-model="form.message" required></textarea>
        </label>
        <button class="border-2 border-transparent rounded bg-mainBlue w-full py-2 px-4 font-bold uppercase text-white transition-all hover:border-mainBlue hover:bg-transparent hover:text-mainBlue" 
                :class="{'opacity-50': form.name == '' && form.email == '' && form.message == ''}" 
                :disabled="form.name == '' && form.email == '' && form.message == ''"
        >
          Submit
        </button>
      </form>
    </div>
    <ul class="w-full flex flex-row justify-center lg:w-1/2 lg:flex-col lg:items-start lg:justify-start lg:pl-80 lg:pt-24">
      <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" class="mx-5 lg:mx-0 lg:mb-4 transform transition duration-150 hover:scale-110">
        <a class="w-full flex flex-row items-center" href="https://www.artstation.com/b0e0e6" target="_blank">
          <img class="w-6 h-6 lg:w-10 lg:h-10 lg:mr-5" src="~/assets/svg/artstation-black.svg" alt="ArtStation">
          <span class="leading-snug sm:text-lg lg:text-xl" v-if="$vssWidth > 1024">artstation.com/b0e0e6</span></a></li>
      <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" class="mx-5 lg:mx-0 lg:mb-4 transform transition duration-150 hover:scale-110">
        <a class="w-full flex flex-row items-center" href="https://www.deviantart.com/b0e0e6" target="_blank">
          <img class="w-6 h-6 lg:w-10 lg:h-10 lg:mr-5" src="~/assets/svg/deviantart-black.svg" alt="DeviantArt">
          <span class="leading-snug sm:text-lg lg:text-xl" v-if="$vssWidth > 1024">deviantart.com/b0e0e6</span></a></li>
      <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" class="mx-5 lg:mx-0 lg:mb-4 transform transition duration-150 hover:scale-110">
        <a class="w-full flex flex-row items-center" href="https://www.instagram.com/_b0e0e6_/" target="_blank">
          <img class="w-6 h-6 lg:w-10 lg:h-10 lg:mr-5" src="~/assets/svg/instagram-black.svg" alt="Instagram">
          <span class="leading-snug sm:text-lg lg:text-xl" v-if="$vssWidth > 1024">instagram.com/_b0e0e6_</span></a></li> 
      <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" class="mx-5 lg:mx-0 lg:mb-4 transform transition duration-150 hover:scale-110">
        <a class="w-full flex flex-row items-center" href="mailto:vivianetranle@gmail.com" target="_blank" >
          <img class="w-6 h-6 lg:w-10 lg:h-10 lg:mr-5" src="~/assets/svg/gmail-black.svg" alt="Instagram">
          <span class="leading-snug sm:text-lg lg:text-xl" v-if="$vssWidth > 1024">vivianetranle@gmail.com</span></a></li> 
    </ul>
  </section>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

export default {
    mixins: [VueScreenSize.VueScreenSizeMixin],
    data() {
      return {
        endpoint: 'https://formspree.io/f/xyybrllk',
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
        handleScroll () {
            const rect = this.$refs.contact.getBoundingClientRect();
            if ( rect.top >= 0 && rect.top <= (window.innerHeight * 0.7 || document.documentElement.clientHeight * 0.7 )) {
              this.$emit('isVisible', {page: 'Contact'})
            };
        },
        async submit() {
          try {
            await this.$axios.post(this.endpoint, {email: this.form.email, message: this.form.message})
            this.form = {
              name: '',
              email: '',
              message: ''
            }
          } catch (error) {
            console.log(error)
          }
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