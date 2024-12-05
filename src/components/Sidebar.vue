<template>
    <div class="sidebar w-full lg:w-64 bg-gray-900 h-full text-white shadow-lg">
      <div class="p-4">
        <div class="flex items-center">
          <img src="/logo.png" alt="logo" class="h-8 sm:h-10 mr-3 rounded-full" />
          <span class="text-lg sm:text-xl font-bold">运维平台</span>
        </div>
      </div>
      <nav class="sidebar bg-gray-900 text-white h-full p-4 sm:p-6">
        <ul>
          <li class="mb-2 sm:mb-4">
            <router-link to="/service" class="block px-2 sm:px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-150">
              服务治理
            </router-link>
          </li>
          <li class="mb-2 sm:mb-4">
            <router-link to="/monitoring" class="block px-2 sm:px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-150">
              运维监控
            </router-link>
          </li>
          <li class="mb-2 sm:mb-4">
            <span class="block px-2 sm:px-3 py-2 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-150" @click="toggleSubmenu('bigdata')">
              大数据平台
              <span class="float-right">{{ showBigdata ? '-' : '+' }}</span>
            </span>
            <ul v-if="showBigdata" class="ml-4 sm:ml-5 mt-2 space-y-2">
              <li>
                <router-link to="/bigdata/flink" class="block px-2 sm:px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-150">
                  Flink
                </router-link>
              </li>
              <li>
                <router-link to="/bigdata/kafka" class="block px-2 sm:px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-150">
                  Kafka
                </router-link>
              </li>
              <li>
                <router-link to="/bigdata/starrocks" class="block px-2 sm:px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-150">
                  StarRocks
                </router-link>
              </li>
            </ul>
          </li>
          <li class="mb-2 sm:mb-4">
            <span class="block px-2 sm:px-3 py-2 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-150" @click="toggleSubmenu('cloud')">
              云平台
              <span class="float-right">{{ showCloud ? '-' : '+' }}</span>
            </span>
            <ul v-if="showCloud" class="ml-4 sm:ml-5 mt-2 space-y-2">
              <li>
                <router-link to="/cloud/aliyun" class="block px-2 sm:px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-150">
                  阿里云
                </router-link>
              </li>
              <li>
                <router-link to="/cloud/tencent" class="block px-2 sm:px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-150">
                  腾讯云
                </router-link>
              </li>
              <li>
                <router-link to="/cloud/huawei" class="block px-2 sm:px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-150">
                  华为云
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // 定义显示二级菜单的状态
  const showBigdata = ref<boolean>(false);
  const showCloud = ref<boolean>(false);
  
  const toggleSubmenu = (menu: 'bigdata' | 'cloud') => {
    if (menu === 'bigdata') {
      showBigdata.value = !showBigdata.value;
    } else if (menu === 'cloud') {
      showCloud.value = !showCloud.value;
    }
  };
  </script>
  
  <style scoped>
  .float-right {
    float: right;
    margin-left: auto;
  }
  </style>