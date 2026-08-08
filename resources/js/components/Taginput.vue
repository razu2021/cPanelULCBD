<template>
  <div class="tag-input-container border p-2 rounded shadow-sm bg-white">
    <div v-for="(tag, index) in tags" :key="index" class="tag-item badge bg-primary me-2 mb-1 p-2">
      {{ tag }}
      <span class="ms-2 cursor-pointer" @click="removeTag(index)">&times;</span>
    </div>
    
    <input
      type="text"
      placeholder="Type keyword and press Enter..."
      class="border-0 outline-none flex-grow-1 p-1"
      v-model="currentInput"
      @keydown.enter.prevent="addTag"
      @keydown.comma.prevent="addTag"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const tags = ref([]);
const currentInput = ref('');

// প্যারেন্ট কম্পোনেন্ট বা API তে পাঠানোর জন্য ডিফাইন ইমিট
const emit = defineEmits(['update:tags']);

const addTag = () => {
  const val = currentInput.value.trim().replace(/,$/, ""); // কমা রিমুভ করা
  if (val && !tags.value.includes(val)) {
    tags.value.push(val);
    emit('update:tags', tags.value); // প্যারেন্টকে জানানো
  }
  currentInput.value = ''; // ইনপুট ক্লিয়ার করা
};

const removeTag = (index) => {
  tags.value.splice(index, 1);
  emit('update:tags', tags.value);
};
</script>

<style scoped>
.tag-input-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.cursor-pointer {
  cursor: pointer;
}
input:focus {
  box-shadow: none;
  outline: none;
}
</style>