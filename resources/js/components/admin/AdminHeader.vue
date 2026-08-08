<script setup>
import { usePage,Link, router} from '@inertiajs/vue3'
import { logout } from '@/routes'
import { ref } from 'vue'

defineEmits(['toggle-mobile', 'toggle-desktop'])
// get app name form config 
const appName = usePage().props.name ;
// profile menu 
const open = ref(false);

const handleLogout = () => {
    router.flushAll();
};


</script>

<template>
  <header
    class="h-14 bg-white border-b
           flex items-center justify-between
           px-4 md:px-6
           sticky top-0 z-20"
  >

    <!-- LEFT -->
    <div class="flex items-center gap-3">

      <!-- Mobile Toggle -->
      <button
        class="md:hidden p-2 rounded-lg
               hover:bg-gray-100 transition"
        @click="$emit('toggle-mobile')"
      >
        ☰
      </button>

      <!-- Desktop Toggle -->
      <button
        class="hidden md:flex p-2 rounded-lg
               hover:bg-gray-100 transition"
        @click="$emit('toggle-desktop')"
      >
        ☰
      </button>

      <!-- Title / Breadcrumb placeholder -->
      <div class="leading-tight">
        <h1 class="text-sm font-semibold text-gray-800">
          {{ appName ?? '' }}
        </h1>
        <p class="text-xs text-gray-500">
          Manage Your Application 
        </p>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="flex items-center gap-3">

      <!-- Notification -->
      <button
        class="relative p-2 rounded-lg
               hover:bg-gray-100 transition"
      >
        🔔
        <span
          class="absolute -top-1 -right-1
                 h-4 w-4 rounded-full
                 bg-red-500 text-white
                 text-[10px]
                 flex items-center justify-center"
        >
          3
        </span>
      </button>

      <!-- User -->
<div class="relative inline-block text-left">
  <!-- User Button -->
  <div
    @click="open = !open"
    class="flex items-center gap-2 px-2 py-1 rounded-lg
           hover:bg-gray-100 transition cursor-pointer select-none"
  >
    <!-- Avatar -->
    <div
      class="h-8 w-8 rounded-full bg-indigo-600 text-white
             flex items-center justify-center text-xs font-semibold"
    >
      MR
    </div>

    <!-- Name -->
    <span class="hidden sm:block text-sm text-gray-700">
      Md Razu
    </span>

    <!-- Arrow -->
    <svg
      class="w-3 h-3 ml-1 text-gray-400 transition-transform"
      :class="{ 'rotate-180': open }"
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  <!-- Dropdown Menu -->
  <transition
    enter-active-class="transition ease-out duration-150"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="open"
      class="absolute right-0 mt-2 w-48 bg-white border border-gray-100
             rounded-xl shadow-lg z-50 overflow-hidden"
    >
      <ul class="py-1">
        <li class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
          Profile
        </li>
        <li class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
          Settings
        </li>
        <li class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
          <Link :href="logout()"  @click="handleLogout">Logout</Link>
        </li>
      </ul>
    </div>
  </transition>
</div>

    </div>

  </header>
</template>
