<script setup lang="ts">
import { ref } from 'vue';
import { Head, Link } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import {Gitlab, LayoutDashboard ,ChevronDown,Component,LayoutTemplate, Columns2, SlidersVertical, MailPlus, ContactIcon, SignatureIcon, PickaxeIcon, LockIcon, WebhookIcon, LucidePieChart } from 'lucide-vue-next';



// --- dropdown toggle option 

const openMenus = ref<{[key:string]: boolean}>({})
const toggleMenu = (key:string)=>{
  openMenus.value[key] =!openMenus.value[key]
}


</script>
<!-- marketing.vue ফাইলের ভেতরে এই স্ট্রাকচারটি ব্যবহার করুন -->
<template>
      <div class="flex flex-col space-y-1">
        <!-- Parent Button -->
        <button
          @click="toggleMenu('application_manage')" class="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-indigo-50 transition">
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 flex items-center justify-center text-indigo-600"><LucidePieChart /> </span>
            <span class="text-sm text-gray-700 font-medium">
             Marketing Suite
            </span>
          </div>
          <!-- Arrow -->
          <span class="text-xs text-gray-400 transition-transform duration-200"
            :class="openMenus['application_manage'] ? 'rotate-180 text-indigo-600' : 'rotate-0'"><ChevronDown /></span>
        </button>

        <!-- Dropdown Items -->
        <div class="ml-6 flex flex-col space-y-1 mt-1 overflow-hidden transition-all duration-300 ease-in-out"
          :style="openMenus['application_manage'] ? 'max-height: 500px;' : 'max-height: 0;'">
          <Link href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition">
              User Management 
          </Link>
          <Link href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition">
             Contact Messages
          </Link>
          <Link href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition">
            Appoinment
          </Link>
          <Link href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition">
             Complain Box
          </Link>
          <Link href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition">
            Admin Log
          </Link>
         
        </div>
    </div>
      <!-- ====== dropdown Site Seo end here ====== -->
</template>