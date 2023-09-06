<template>
  <div>
    <div class="relative">
      <video class="static h-[700px] max-[835px]:h-[500px] w-full object-cover" autoplay loop>
        <source
          src="https://www.apple.com/105/media/us/home/2023/7f9f4504-ae23-4873-b01a-8f803990d57f/anim/bts-hero/largetall.mp4"
        />
      </video>

      <div
        class="absolute top-0 flex h-full w-full justify-center py-24 max-[835px]:py-12 text-center"
      >
        <div class="w-[500px]">
          <p class="cursor-default text-5xl max-[835px]:text-4xl font-medium">
            Save on MAC or iPad for college
          </p>
          <p class="cursor-default py-1 text-2xl max-[835px]:text-xl font-normal">
            Plus get a gift card up to $150.
          </p>
          <p class="py-2">
            <a href="#" class="text-xl max-[835px]:text-lg text-blue-700"> Shop now ></a>
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <img
        class="static h-[700px] max-[835px]:h-[500px] w-full object-cover"
        src="https://www.apple.com/v/home/bd/images/heroes/macbook-air-15/hero_macbook_air_15_midnight__ct0pgwizvree_largetall.jpg"
      />

      <div
        class="absolute top-0 flex h-full w-full justify-center py-24 max-[835px]:py-12 text-center"
      >
        <div class="w-[500px]">
          <p class="cursor-default text-5xl max-[835px]:text-4xl font-medium">MacBook Air 15"</p>
          <p class="cursor-default py-1 text-2xl max-[835px]:text-xl font-normal">
            Impressively big. Impossibily thin.
          </p>
          <div class="flex justify-center py-2">
            <p class="px-5">
              <a href="#" class="text-xl max-[835px]:text-lg text-blue-700"> Learn more ></a>
            </p>
            <p class="px-7">
              <a href="#" class="text-xl max-[835px]:text-lg text-blue-700"> Buy ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <img
        class="static h-[700px] w-auto object-cover pb-5"
        src="https://www.apple.com/v/home/bd/images/heroes/iphone-14/hero_iphone14_yellow__eun20sn4imi6_largetall.jpg"
      />

      <div
        class="absolute top-0 flex h-full w-full justify-center py-24 max-[835px]:py-12 text-center"
      >
        <div class="w-[500px]">
          <p class="cursor-default text-5xl max-[835px]:text-4xl font-medium">Iphone 14</p>
          <p class="cursor-default py-1 text-2xl max-[835px]:text-xl font-normal">Wonderfull.</p>
          <div class="flex justify-center py-2">
            <p class="px-5">
              <a href="#" class="text-xl max-[835px]:text-lg text-blue-700"> Learn more ></a>
            </p>
            <p class="px-7">
              <a href="#" class="text-xl max-[835px]:text-lg text-blue-700"> Buy ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BannerFlex'
}
</script>
<style lang=""></style>
