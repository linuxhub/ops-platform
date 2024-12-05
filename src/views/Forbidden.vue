
<template>
    <div class="forbidden flex items-center justify-center h-screen bg-gradient-to-r from-red-500 to-yellow-500 text-white">
      <div class="text-center">
        <h1 class="text-9xl font-extrabold mb-8">403</h1>
        <p class="text-xl mb-6">无访问权限</p>
        <router-link to="/" class="bg-white text-red-500 font-semibold px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105">
          返回首页
        </router-link>
      </div>
    </div>
  </template>