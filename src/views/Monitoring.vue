<template>
    <div class="monitoring flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 p-4 text-white">
      <div class="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">运维监控</h1>
        <p class="text-base sm:text-lg mb-4">在这里可以查看系统的运维监控信息。</p>
        <div class="flex flex-wrap items-center justify-center space-x-2 space-y-2">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 shadow-md">查看图表</button>
          <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 shadow-md">生成报告</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    // 无需脚本内容
  </script>
  
  <style scoped>
  /* 添加一些页面特定样式 */
  .monitoring p {
    margin-bottom: 1rem;
  }
  
  @media (min-width: 640px) {
    .monitoring .button-group {
      flex-direction: row;
    }
  }
  </style>