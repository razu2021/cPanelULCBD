<script setup lang="ts">
    import AdminLayout from '@/layouts/AdminLayout.vue';
    import { route } from 'ziggy-js';
    import { Form, Head, Link } from '@inertiajs/vue3';
    import { ref } from 'vue'
    import Button from '@/components/ui/button/Button.vue';

    //-- go back function 
    const goBack = () => {
        window.history.back()
    }

    //====  get data form inertia controller 
   const {sections}= defineProps<{
        sections:any,
   }>()



</script>
<!-- ========== script end ======== -->
<template>
<AdminLayout>
  <div class="min-h-screen bg-gray-50 p-8">

    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-5 bg-black  rounded-2xl border border-gray-100 mb-5">
          <div class="leading-tight">
            <h1 class="text-sm font-semibold text-white">
              Database Record Management
            </h1>
            <p class="text-xs text-white">
              You can easily manage your data below with actions like <span class="font-medium text-red-300">Create, Edit, View, Delete, Restore, Activate, Deactivate</span>, and more.
            </p>
        </div>
        <!-- end -->
      <div>
        <Button @click="goBack">Go Back</Button>
      </div>
    </div>
    
    <div class="space-y-6">
       
        <!-- Card 1 -->
        <div class="bg-white rounded-2xl shadow p-6 flex justify-between items-start hover:shadow-lg transition duration-300 relative" v-for="data in sections" key="data.id">
            <div>
                <h2 class="text-xl font-semibold text-gray-800">{{ data.section_key ?? '' }}</h2>
                <p class="text-gray-500 mt-1 text-sm">Title : {{ data.section_title ?? 'section title'}}</p>
                <p class="text-gray-400 mt-0.5 text-xs">ID: {{ data.id ?? '' }}</p>
            </div>

            <div class="flex items-center space-x-3 relative">
               <Button v-if="route().has(data.dynamic_route + '.add')"> <Link :href="route(data.dynamic_route + '.add', {  id: data.id, slug: data.slug })" > Create Section Data  </Link></Button>
            </div>
        </div>

    </div> 

  </div>

 
</AdminLayout>
</template>