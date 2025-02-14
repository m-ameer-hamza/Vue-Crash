<script setup></script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-center text-3xl font-bold text-green-500">Register</h2>
      <form class="space-y-4">
        <!-- Name Field -->
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="pi pi-user text-green-500"></i>
          </span>
          <input
            type="text"
            placeholder="Name"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <!-- Email Field -->
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="pi pi-envelope text-green-500"></i>
          </span>
          <input
            type="email"
            placeholder="Email"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <!-- Password Field -->
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="pi pi-lock text-green-500"></i>
          </span>
          <input
            type="password"
            placeholder="Password"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <!-- Register As Dropdown -->
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="pi pi-users text-green-500"></i>
          </span>
          <select
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled selected>Register as</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <!-- Register Button -->
        <button
          type="submit"
          class="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          <i class="pi pi-check mr-2"></i>
          Register
        </button>
      </form>
      <!-- Sign In Link -->
      <div class="text-center">
        <a href="/login" class="text-green-500 hover:underline font-medium">
          Already Registered? Sign In Now
        </a>
      </div>
    </div>
  </div>
</template>
