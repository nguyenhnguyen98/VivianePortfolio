<template>
  <div class="flex justify-center relative">
      <img :src="require(`~/assets/images/${link}`)" alt="Work">
      <div v-if="desc" class="absolute bottom-0 w-full px-5 py-4 transparent-background">
         <p class="text-white text-sm">{{desc}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String
        },
        desc: {
            type: String
        }
    }
}
</script>

<style>

</style>