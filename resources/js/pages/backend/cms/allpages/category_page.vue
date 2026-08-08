<script setup lang="ts">
    import AdminLayout from '@/layouts/AdminLayout.vue';
    import { route } from 'ziggy-js';
    import { Form, Head, Link } from '@inertiajs/vue3';



    //====  get data form inertia controller 
    const {allpage} = defineProps<{
        allpage : any 
    }>()

</script>



<template>
<AdminLayout>


   <div class=" bg-gray-100 p-8 rounded-2xl">
    
    <!-- Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Manage Pages</h1>
        <p class="text-gray-500">Select a page to manage its sections</p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Page Card -->
        <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6" v-for="data in allpage" key="data.id">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-gray-800">{{ data.name ?? '' }}</h2>
                <span class="px-3 py-1 text-xs font-medium  rounded-full   text-green-600" :class="data.public_status == 1 ? 'bg-green-100':'bg-red-500 text-white'">
                    {{ data.public_status == 1 ? 'Active' : 'InActive' }}
                </span>
            </div>

            <p class="text-gray-500 text-sm mb-6">
                {{data.title ?? 'Page title not '}}
            </p>
            <Link :href="route('all_pages.categorypage_section',{id:data.id})"
               class="block w-full text-center bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-200">
                Manage Sections
            </Link>
        </div>
    </div>
    <!-- end  -->


</div>

</AdminLayout>
</template>