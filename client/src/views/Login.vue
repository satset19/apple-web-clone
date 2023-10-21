<script>
import { RouterLink } from 'vue-router'
// import { mapActions, mapWritableState } from 'pinia'
// import { useCustomerStore } from '../stores/store'
// import { GoogleLogin } from 'vue3-google-login'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      link: ''
    }
  },
  components: {}
  //   computed: {
  //     ...mapWritableState(useCustomerStore, ['isLogin'])
  //   },
  //   methods: {
  //     ...mapActions(useCustomerStore, ['login', 'loginGoogle'])
  //   },
  //   created() {
  //     // console.log(this.$route);
  //     if (this.isLogin === true) {
  //       this.$router.push('/')
  //     }
  //   }
}
</script>

<template>
  <section>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <form
        class="bg-white shadow-md rounded-lg px-16 pt-10 pb-10 mb-4"
        @submit.prevent="login(email, password)"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"> Email </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2"> Password </label>
          <input
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
            <!-- <RouterLink :to="'/dashboard'"></RouterLink> -->
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            <RouterLink :to="'/register'">Register</RouterLink>
          </a>
        </div>
        <div class="pt-8 rounded-lg"></div>
        <!-- <GoogleLogin :callback="loginGoogle" /> -->
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;Kelazzz Banget!!.</p>
    </div>
  </section>
</template>
