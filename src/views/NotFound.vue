<template>
    <div class="not-found flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div class="text-center">
        <h1 class="text-9xl font-extrabold mb-8">404</h1>
        <p class="text-xl mb-6">页面未找到</p>
        <router-link to="/" class="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105">
          返回首页
        </router-link>
      </div>
    </div>
  </template>