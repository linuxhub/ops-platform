<template>
    <div class="service flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white">
      <div class="bg-white bg-opacity-20 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">服务管理</h1>
        <p class="text-base sm:text-lg mb-4">在这里可以查看服务信息。</p>
        <div class="flex flex-wrap items-center justify-center space-x-2 space-y-2">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 shadow-md">查看服务</button>
          <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 shadow-md">新增服务</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    // 无需脚本内容
  </script>
  
  <style scoped>
  /* 添加一些页面特定样式 */
  .service p {
    margin-bottom: 1rem;
  }
  </style>