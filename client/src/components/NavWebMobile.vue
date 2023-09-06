<template>
  <nav class="bg-white py-2">
    <!-- Navbar Web -->
    <div class="flex justify-center">
      <div class="flex w-[836px] items-center justify-around px-5 max-[835px]:hidden">
        <img
          class="w-4 object-scale-down"
          src="https://www.freepnglogos.com/uploads/apple-logo-png/carve-apple-logo-pumpkin-5.png"
          alt="logo"
        />
        <a href="#" class="text-xs">Store</a>
        <a href="#" class="text-xs">Mac</a>
        <a href="#" class="text-xs">iPad</a>
        <a href="#" class="text-xs">iPhone</a>
        <a href="#" class="text-xs">Watch</a>
        <a href="#" class="text-xs">Vision</a>
        <a href="#" class="text-xs">AirPods</a>
        <a href="#" class="text-xs">TV & Home</a>
        <a href="#" class="text-xs">Entertaiment</a>
        <a href="#" class="text-xs">Accessories</a>
        <a href="#" class="text-xs">Support</a>
        <a href="#" class="text-xs"
          ><img
            class="w-4 object-scale-down"
            src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png"
            alt=""
        /></a>
        <a href="#"
          ><img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/shopping-bag--v1.png"
            alt="shopping-bag--v1"
        /></a>
      </div>
    </div>

    <!-- Navbar Mobile -->
    <div class="flex justify-between px-5 min-[836px]:hidden">
      <img
        class="w-4 object-scale-down"
        src="https://www.freepnglogos.com/uploads/apple-logo-png/carve-apple-logo-pumpkin-5.png"
        alt="logo"
      />
      <div class="flex w-28 justify-between">
        <a href="#" class="text-xs pt-1"
          ><img
            class="w-4 object-scale-down"
            src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png"
            alt=""
        /></a>
        <a href="#"
          ><img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/shopping-bag--v1.png"
            alt="shopping-bag--v1"
        /></a>
        <button>
          <img
            class="w-4 object-scale-down"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
            alt=""
          />
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavWebMobile'
}
</script>
<style lang=""></style>
