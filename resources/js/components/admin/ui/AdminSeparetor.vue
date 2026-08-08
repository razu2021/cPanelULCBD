<template lang="">
    <div class="flex items-center gap-2 px-3 py-2">
  <span class="text-gray-500 text-xs font-semibold  tracking-wider">
   {{props.title ?? ''}}
  </span>
  <!-- Horizontal Line after text -->
  <div class="flex-1 h-px bg-gray-300"></div>
</div>
</template>
<script setup lang="ts">
  const props = defineProps({
    title: String,
  })
</script>
<style lang="">
    
</style>