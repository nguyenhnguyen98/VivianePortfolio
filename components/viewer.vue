<template>
  <div class="flex justify-center">
      <img :src="require(`~/assets/images/${link}`)" alt="Work">
  </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String
        }
    }
}
</script>

<style>

</style>