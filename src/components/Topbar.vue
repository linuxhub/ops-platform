<template>
    <div class="topbar flex justify-between items-center p-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-md">
      <div class="left">
        <!-- 可选添加 logo 或标题 -->
      </div>
      <div class="right flex items-center space-x-2 sm:space-x-4">
        <span class="font-medium text-sm sm:text-base">{{ username }}</span>
        <img src="/avatar.png" alt="avatar" class="h-8 sm:h-10 w-8 sm:w-10 rounded-full cursor-pointer transition-transform duration-150 hover:scale-110" @click="showMenu = !showMenu" />
        <div v-if="showMenu" class="menu bg-gray-800 p-2 sm:p-3 rounded-lg absolute right-4 top-16 w-40 sm:w-48 shadow-lg transform transition-transform duration-150">
          <p class="cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors duration-150" @click="showProfile">个人信息</p>
          <p class="cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors duration-150" @click="logout">退出登录</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const username = 'admin';
  const showMenu = ref(false);
  
  const showProfile = () => {
    alert('个人信息');
  };
  
  const logout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/login';
  };
  </script>
  
  <style scoped>
  .menu {
    @apply absolute top-12 right-0 w-32 bg-gray-700;
  }
  </style>