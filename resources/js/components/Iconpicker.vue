<script setup lang="ts">
import { ref, computed } from 'vue'


// Props: icon list from DB
const props = defineProps<{
  iconlist: any[]
  modelValue?: string   
}>();


const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const modalOpen = ref(false)
const search = ref('')

// Computed filtered icons
const filteredIcons = computed(() => {
  if (!search.value) return props.iconlist
  return props.iconlist.filter(icon =>
    icon.toLowerCase().includes(search.value.toLowerCase())
  )
})

// Select icon
const selectIcon = (icon:string ) => {
  emit('update:modelValue', icon)
  modalOpen.value = false
}
</script>

<template>
  <div class="space-y-2">
    <div class="flex gap-2">
      <input
        type="text"
        :value="modelValue"
        readonly
        placeholder="Select an icon"
        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
      <button
        type="button"
        @click="modalOpen = true"
        class="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100 transition"
      >
        Choose
      </button>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div v-if="modalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div class="bg-white rounded-2xl w-[600px] max-h-[500px] overflow-y-auto p-6 shadow-xl">
          <div class="flex justify-between items-center mb-4 border-b pb-2">
            <h3 class="text-lg font-semibold text-gray-800">Select Icon</h3>
            <button @click="modalOpen = false" class="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
          </div>

          <!-- Search -->
          <div class="mb-4">
            <input
              type="text"
              v-model="search"
              placeholder="Search icon..."
              class="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <!-- Icons grid -->
          <div class="grid grid-cols-10 gap-4">
            <div
              v-for="icon in filteredIcons"
              :key="icon.id"
              class="flex flex-col items-center justify-center cursor-pointer p-2 rounded hover:bg-indigo-100 transition relative"
              @click="selectIcon(icon)"
            >
              <i :class="icon + ' text-2xl text-indigo-600'"></i>
              <!-- <span class="text-xs mt-1 text-gray-700 break-words text-center">{{ icon }}</span> -->
              <!-- Highlight selected icon -->
              <div
                v-if="modelValue === icon"
                class="absolute inset-0 rounded border-2 border-indigo-500 pointer-events-none"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>