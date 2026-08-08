<script setup lang="ts">
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import AdminLayout from '@/layouts/AdminLayout.vue';
import { HeaderTheme,theme_mainheader ,theme_topheader,theme_socialheader} from '@/headertheme/headertheme';

const props= defineProps<{
    data: {
        id: number,
        slug: string,
        theme : string,
        type : string,
    }
}>()


// ✅ remember data
const form  = useForm(
  {
    id: props.data.id,
    slug :props.data.slug,
    theme: props.data.theme ?? '',
  })




const updateTheme = (key:string) => {
  form.theme = key
  form.patch(route('manage_header.theme_update'), {
    preserveScroll:true
  })

}


</script>



<template>
<Head title="Details Page"></Head>
<AdminLayout>
        <!-- ================= TOP HEADER ================= -->
        <div class="col-span-12 mb-5">
          <div class="flex items-center justify-between rounded-2xl bg-black py-4 px-5 text-white shadow-lg">
            <div>
              <h1 class="text-lg font-semibold">Update Theme </h1>
              <p class="text-xs text-slate-300">Choose your Theme First </p>
            </div>

          
            <button
              class="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20 transition">
              <Link :href="route('manage_header.all')">All Information</Link>
            </button>
          </div>
        </div>
        <hr>
        <!-- ================= MAIN FORM (8 COL) ================= -->


   <div v-if="data.type === 'main_header'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <label v-for="theme in theme_mainheader" :key="theme.key" class="border rounded-xl overflow-hidden shadow hover:shadow-xl transition relative cursor-pointer group">
      
      <!-- Preview Image -->
      <img :src="theme.preview" class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />

      <!-- Card Footer -->
      <div class="p-4 flex justify-between items-center bg-white">
        <span class="font-semibold text-gray-800">{{ theme.name }}</span>
        <input
            type="radio"
            name="theme"
            class="accent-indigo-600 w-5 h-5"
            :value="theme.key"
            v-model="form.theme"
            @change="updateTheme(theme.key)"
            >
      </div>

      <!-- Highlight Border if selected -->
      <div v-if="form.theme === theme.key" class="absolute inset-0 border-4 border-indigo-500 rounded-xl pointer-events-none"></div>
    </label>
  </div>


  <!-- main header end here  -->
   <div v-if="data.type === 'top_header'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <label v-for="theme in theme_topheader" :key="theme.key" class="border rounded-xl overflow-hidden shadow hover:shadow-xl transition relative cursor-pointer group">
      
      <!-- Preview Image -->
      <img :src="theme.preview" class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />

      <!-- Card Footer -->
      <div class="p-4 flex justify-between items-center bg-white">
        <span class="font-semibold text-gray-800">{{ theme.name }}</span>
        <input
            type="radio"
            name="theme"
            class="accent-indigo-600 w-5 h-5"
            :value="theme.key"
            v-model="form.theme"
            @change="updateTheme(theme.key)"
            >
      </div>

      <!-- Highlight Border if selected -->
      <div v-if="form.theme === theme.key" class="absolute inset-0 border-4 border-indigo-500 rounded-xl pointer-events-none"></div>
    </label>
  </div>
  <!-- main header end here  -->


   <div v-if="data.type === 'social_header'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <label v-for="theme in theme_socialheader" :key="theme.key" class="border rounded-xl overflow-hidden shadow hover:shadow-xl transition relative cursor-pointer group">
      
      <!-- Preview Image -->
      <img :src="theme.preview" class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />

      <!-- Card Footer -->
      <div class="p-4 flex justify-between items-center bg-white">
        <span class="font-semibold text-gray-800">{{ theme.name }}</span>
        <input
            type="radio"
            name="theme"
            class="accent-indigo-600 w-5 h-5"
            :value="theme.key"
            v-model="form.theme"
            @change="updateTheme(theme.key)"
            >
      </div>

      <!-- Highlight Border if selected -->
      <div v-if="form.theme === theme.key" class="absolute inset-0 border-4 border-indigo-500 rounded-xl pointer-events-none"></div>
    </label>
  </div>
  <!-- main header end here  -->
 

</AdminLayout>
</template>