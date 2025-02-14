<script>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
export default {
  props: {
    showName: {
      type: Boolean,
      default: true,
    },
    showRegisterAs: {
      type: Boolean,
      default: true,
    },
    formTitle: {
      type: String,
      default: "Register",
    },
    btnTitle: {
      type: String,
      default: "Register",
    },
  },
};
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 pb-4">
    <div class="w-full max-w-lg p-10 space-y-8 bg-white rounded-lg shadow-lg">
      <h2 class="text-center text-3xl font-bold text-green-500">
        {{ formTitle }}
      </h2>
      <form class="space-y-6">
        <!-- Name Field -->
        <div v-if="showName" class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-4">
            <i class="pi pi-user text-green-500"></i>
          </span>
          <input
            type="text"
            placeholder="Name"
            class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <!-- Email Field -->
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-4">
            <i class="pi pi-envelope text-green-500"></i>
          </span>
          <input
            type="email"
            placeholder="Email"
            class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <!-- Password Field -->
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-4">
            <i class="pi pi-lock text-green-500"></i>
          </span>
          <input
            type="password"
            placeholder="Password"
            class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <!-- Register As Dropdown -->
        <div class="relative" v-if="showRegisterAs">
          <span class="absolute inset-y-0 left-0 flex items-center pl-4">
            <i class="pi pi-users text-green-500"></i>
          </span>
          <select
            class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled selected>Register as</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <!-- Register Button -->

        <button
          v-if="btnTitle === 'Register'"
          type="submit"
          class="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          <i class="pi pi-check mr-2"></i>
          Register
        </button>
        <button
          v-else
          type="submit"
          class="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          <i class="pi pi-check mr-2"></i>
          Login
        </button>
      </form>
      <!-- Sign/Register In Link -->
      <div v-if="btnTitle === 'Register'" class="text-center">
        <RouterLink
          to="/login"
          class="text-green-500 hover:underline font-medium"
        >
          Already Registered? Sign In Now
        </RouterLink>
      </div>
      <div v-else class="text-center">
        <RouterLink to="/" class="text-green-500 hover:underline font-medium">
          New User? Register Now
        </RouterLink>
      </div>
    </div>
  </div>
</template>
