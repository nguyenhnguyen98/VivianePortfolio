<template>
    <div class="fixed top-0 left-0 z-10 bg-mainBlue w-full min-h-screen flex flex-col justify-between items-center p-6 sm:p-12">
        <div class="w-full">
            <!-- <img src="" alt="Viviane Tran Le"> -->
        </div>
        <ul class="w-full flex flex-col items-center">
            <li class="my-4 lg:my-8">
                <button @click="$emit('close')"><a href="#" v-scroll-to="'#welcome'">
                    <h1 data-aos="custom-flip" data-aos-duration="600" class="font-bold text-3xl md:text-5xl leading-none text-white shadowed">Welcome</h1></a></button>
            </li>
            <li class="my-4 lg:my-8">
                <button @click="$emit('close')"><a href="#" v-scroll-to="'#about'">
                    <h1 data-aos="custom-flip" data-aos-duration="600" data-aos-delay="200" class="font-bold text-3xl md:text-5xl leading-none text-white shadowed">About me</h1></a></button>
            </li>
            <li class="my-4 lg:my-8">
                <button @click="$emit('close')"><a href="#" v-scroll-to="'#portfolio'">
                    <h1 data-aos="custom-flip" data-aos-duration="600" data-aos-delay="400" class="font-bold text-3xl md:text-5xl leading-none text-white shadowed">Portfolio</h1></a></button>
            </li>
            <li class="my-4 lg:my-8">
                <button @click="$emit('close')"><a href="#" v-scroll-to="'#contact'">
                    <h1 data-aos="custom-flip" data-aos-duration="600" data-aos-delay="600" class="font-bold text-3xl md:text-5xl leading-none text-white shadowed">Contact</h1></a></button>
            </li>
        </ul>
        <ul class="w-auto flex flex-row justify-between">
            <li class="w-6 h-6 lg:w-10 lg:h-10 mx-5"><a href="" target="_blank" class="fill-current text-white"><img src="~/assets/svg/artstation.svg" alt="ArtStation"></a></li>
            <li class="w-6 h-6 lg:w-10 lg:h-10 mx-5"><a href="" target="_blank" class="fill-current text-white"><img src="~/assets/svg/deviantart.svg" alt="DeviantArt"></a></li>
            <li class="w-6 h-6 lg:w-10 lg:h-10 mx-5"><a href="" target="_blank" class="fill-current text-white"><img src="~/assets/svg/instagram.svg" alt="Instagram"></a></li> 
        </ul>
    </div>
</template>

<script>
export default {

}
</script>
