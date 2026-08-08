<script setup lang="ts">
import { Head, Link, usePage } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import Button from '@/components/ui/button/Button.vue';
import { Card ,CardHeader,CardTitle ,CardDescription,CardContent} from '@/components/ui/card';
import Separator from '@/components/ui/separator/Separator.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';


//====== get data i
const {data} = defineProps<{
  data: any 
}>()



</script>



<template>
<Head title="Details Page"></Head>

<AdminLayout>
       
  <div class="container mx-auto mt-10 space-x-6">

    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 mb-5">
        <div class="flex datas-center justify-between rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-2 text-white shadow-lg">
          <div>
            <h1 class="text-lg font-semibold">Details View</h1>
            <p class="text-xs text-slate-300">Fill in the details below</p>
          </div>
          <button
            class="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20 transition">
            <Link :href="route('child_category_page.all')"><Button>All Information</Button></Link>
          </button>
        </div>
      </div>
      <!--  header end  -->

      <div class="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8 2xl:col-span-8">
        <Card class="bg-white shadow-lg rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
            <!-- Card Header -->
            <CardHeader class="pb-2">
              <CardTitle class="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
                </svg>
                Details Information
              </CardTitle>
              <CardDescription class="text-gray-500">Details Information below</CardDescription>
              <Separator class="mt-2" />
            </CardHeader>
            <!-- Card Content -->
              <CardContent class="space-y-4">
                  <div class="overflow-x-auto">
                    <table class="min-w-full bg-white rounded-xl shadow-lg border border-gray-200">
                      <!-- Table Body -->
                      <tbody class="divide-y divide-gray-200">
                        <tr class="hover:bg-blue-50 transition-colors duration-200">
                          <td class="py-3 px-5 text-gray-800">Sub Category Name</td>
                          <td class="py-3 px-5 text-gray-800">:</td>
                          <td class="py-3 px-5 text-gray-800">{{ data.subcategory.name ?? '' }}</td>
                        </tr>
                        <tr class="hover:bg-blue-50 transition-colors duration-200">
                          <td class="py-3 px-5 text-gray-800">Sub Category Name</td>
                          <td class="py-3 px-5 text-gray-800">:</td>
                          <td class="py-3 px-5 text-gray-800">{{ data.name }}</td>
                        </tr>
                        <!-- end -->
                        <tr class="hover:bg-blue-50 transition-colors duration-200">
                          <td class="py-3 px-5 text-gray-800">Sub Category URL</td>
                          <td class="py-3 px-5 text-gray-800">:</td>
                          <td class="py-3 px-5 text-gray-800">{{ data.url }}</td>
                        </tr>
                        <!-- end -->
                        <tr class="hover:bg-blue-50 transition-colors duration-200">
                          <td class="py-3 px-5 text-gray-800">Sub Category Order</td>
                          <td class="py-3 px-5 text-gray-800">:</td>
                          <td class="py-3 px-5 text-gray-800">{{ data.order }}</td>
                        </tr>
                        <!-- end -->
                        <tr class="hover:bg-blue-50 transition-colors duration-200">
                          <td class="py-3 px-5 text-gray-800">Meta Title</td>
                          <td class="py-3 px-5 text-gray-800">:</td>
                          <td class="py-3 px-5 text-gray-800">{{ data.title }}</td>
                        </tr>
                        <!-- end -->
                        <tr class="hover:bg-blue-50 transition-colors duration-200">
                          <td class="py-3 px-5 text-gray-800">Meta Description</td>
                          <td class="py-3 px-5 text-gray-800">:</td>
                          <td class="py-3 px-5 text-gray-800">{{ data.description ?? '' }}</td>
                        </tr>
                        <!-- end -->
                        <tr class="hover:bg-blue-50 transition-colors duration-200">
                          <td class="py-3 px-5 text-gray-800">Slug</td>
                          <td class="py-3 px-5 text-gray-800">:</td>
                          <td class="py-3 px-5 text-gray-800">{{ data.slug }}</td>
                        </tr>
                        <!-- end -->
                      </tbody>
                    </table>
                  </div>
              </CardContent>
            </Card>

      </div>
      <!-- span end -->
      <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 ">
        <Card class="bg-white rounded-2xl shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <!-- Card Header -->
            <CardHeader class="pb-3">
              <CardTitle class="text-lg font-bold text-gray-900 flex items-center gap-3">
                <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
                </svg>
                Create & Update Information
              </CardTitle>
              <CardDescription class="text-gray-500">Quick overview of record details</CardDescription>
              <Separator class="mt-2" />
            </CardHeader>
            <!-- Card Content -->
            <CardContent class="flex flex-col gap-4">
              <!-- Id -->
              <div class="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 2h16v16H2V2z"/>
                  </svg>
                  <span class="font-medium text-gray-700">Id</span>
                </div>
                <span class="text-gray-800 font-semibold">{{ data.id ?? '' }}</span>
              </div>
              <!-- Created At -->
              <div class="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2h8v4H6V2z"/>
                  </svg>
                  <span class="font-medium text-gray-700">Created At</span>
                </div>
                <span class="text-gray-800 font-semibold"> {{ data?.created_at ? new Date(data.created_at).toLocaleString() : ' ' }} </span>
              </div>
              <!-- Updated At -->
              <div class="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2h8v4H6V2z"/>
                  </svg>
                  <span class="font-medium text-gray-700">Updated At</span>
                </div>
                <span class="text-gray-800 font-semibold">{{ data?.updated_at ? new Date(data.updated_at).toLocaleString() : ' ' }}</span>
              </div>
              <!-- Creator -->
              <div class="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a4 4 0 110 8 4 4 0 010-8z"/>
                  </svg>
                  <span class="font-medium text-gray-700">Creator</span>
                </div>
                <span class="text-gray-800 font-semibold">{{ data.creator.name ?? ''}}</span>
              </div>

              <!-- Editor -->
              <div class="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a4 4 0 110 8 4 4 0 010-8z"/>
                  </svg>
                  <span class="font-medium text-gray-700"> Editor </span>
                </div>

                <span class="text-gray-800 font-semibold" v-if="data.editor">{{ data.editor.name ?? ' ' }}</span>
                <span class="text-gray-800 font-semibold" v-else="data.editor">N/A</span>
              </div>

              <!-- Status -->
              <div class="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"/>
                  </svg>
                  <span class="font-medium text-gray-700" >Status</span>
                </div>
              <span v-if="data.public_status == 1"  class="text-green-700 font-semibold">
                Active
              </span>
              <span v-else-if="data.public_status == 0" class="text-gray-500 font-semibold">
                Draft
              </span>
              <span v-else class="text-red-600 font-semibold">
                Inactive
              </span>
              </div>
            </CardContent>
          </Card>
      </div>
      <!-- span end -->
    </div>
    <!-- main grid end  -->
  </div>
  <!-- container end -->
</AdminLayout>
</template>




