<template>
    <div class="login flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div class="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md">
        <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">登录</h1>
        <form @submit.prevent="login">
          <div class="mb-4 sm:mb-6">
            <label for="username" class="block text-gray-600 font-semibold">用户名</label>
            <input type="text" id="username" v-model="username" class="mt-2 block w-full p-2 sm:p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4 sm:mb-6">
            <label for="password" class="block text-gray-600 font-semibold">密码</label>
            <input type="password" id="password" v-model="password" class="mt-2 block w-full p-2 sm:p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" class="bg-blue-600 text-white px-4 py-3 rounded-full w-full shadow-lg transform transition-transform hover:scale-105">
            登 录
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  
  const login = () => {
    if (username.value === 'admin' && password.value === '123') {
      localStorage.setItem('auth', 'true');
      router.push('/');
    } else {
      alert('用户名或密码错误');
    }
  };
  </script>