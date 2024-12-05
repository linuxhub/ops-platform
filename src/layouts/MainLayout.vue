<template>
    <div class="main-layout flex flex-col lg:flex-row h-screen bg-gray-100">
      <!-- Sidebar 侧边栏容器 -->
      <Sidebar />
      <div class="flex-1 flex flex-col bg-white">
        <!-- Topbar 顶栏容器 -->
        <Topbar />
  
        <!-- Main content 主要区域容器 -->
        <div class="flex-1 p-4 sm:p-6 bg-gray-50 overflow-y-auto shadow-inner">
          <router-view />
        </div>
      </div>
    </div>∂
  </template>

  <script lang="ts" setup>
  import Sidebar from '../components/Sidebar.vue';
  import Topbar from '../components/Topbar.vue';
  </script>