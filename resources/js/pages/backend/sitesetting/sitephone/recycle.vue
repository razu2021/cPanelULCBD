<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import Button from '@/components/ui/button/Button.vue';
import { Form, Head, Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import { SquarePlus, Trash,SquarePen, Eye, ShieldCheck, ShieldMinus, DownloadCloud, DeleteIcon, RotateCcwIcon, Download, DatabaseBackup, InfoIcon, RefreshCcw } from 'lucide-vue-next';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuSeparator,DropdownMenuTrigger,DropdownMenuGroup} from '@/components/ui/dropdown-menu'
import { useBulkSelection } from '@/composables/useBulkSelection'; // use for bulk action 
import { useConfirmDelete } from '@/composables/useConfirmDelete'; // use for sweet alert 
// ----- use sweet alert delete function 
 const {confirmDelete} = useConfirmDelete();
 // -- use bulk action function 
import { useDataTable } from '@/composables/useDataTable';
import { useFilter } from '@/composables/useFilter';
import { ref } from 'vue';




/**===================
 * ======================================
 *   Get Intertia Controller Data or Data Manageble Section Start here 
 * ======================================
 *  ================== */


// -----------------------------
// Props from inertia controller 
// -----------------------------
const props = defineProps({
    alldata: Object,
    filters : Object ,
})


const {rows,links,meta} = useDataTable(props)

const {form} = useFilter(props,'contact_phone.all')

const bulkRoute = ref('contact_phone.bulkAction')

const {selectedIds, isAnySelected, toggleSelectAll, bulkAction} = useBulkSelection(rows.value, bulkRoute)


</script>
<!-- ================= Script Code End Heer ================ -->

<template>
  <Head title="Dashboard"></Head>

  <AdminLayout>
    
    

      <div class="container mx-auto mt-5 space-y-4 bg-white p-5 rounded-xl border border-gray-100 shadow-lg">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-5 bg-black  rounded-2xl border border-gray-100">
        <div class="leading-tight">
          <h1 class="text-lg font-semibold text-white">
           {{ route().current() }}
          </h1>
          <p class="text-xs text-white">
            You can easily manage your data below with actions like <span class="font-medium text-red-300">Create,  Delete, Restore</span>, and more.
          </p>
      </div>
      <div> <Link :href="route('contact_phone.all')" class="bg-white hover:bg-gray-100  text-dark px-4 py-2 rounded shadow-lg flex items-center gap-2 w-full sm:w-auto sm:text-center"> <InfoIcon class="text-green-600"/> View Information </Link> </div>
      </div>

      <hr class="my-3 border-gray-200">
      <!-- Top Actions / Filters -->

    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-5 bg-white rounded-2xl border border-gray-100">
    <!-- LEFT: Search + Filter -->
    <div class="flex flex-wrap items-center gap-3 w-full lg:w-auto">
      <!-- Search Input -->
      <div class="relative flex-1 min-w-[200px]">
        <input
          type="text"
          v-model="form.search"
          placeholder="Search data..."
          class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm
                focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
        />
        <svg
          class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <!-- Filter Dropdown -->
    <select v-model="form.status"  class="px-3 py-2 border rounded-lg text-sm">
      <option value="">Short By</option>
      <option value="1">Active</option>
      <option value="0">Inactive</option>
    </select>
        <Link v-show="form.search || form.status" class="text-sm bg-green-200 p-2 rounded-full text-white hover:bg-green-600 transition-all" :href="route('contact_phone.all')"><RotateCcwIcon/></Link>
    </div>

  <!-- RIGHT: Action Buttons -->
  <div class="flex flex-wrap justify-end items-center gap-2 w-full lg:w-auto">

   
    <Transition
      enter-active-class="transition transform duration-300 ease-out"
      enter-from-class="opacity-0 scale-75 -translate-y-4"
      enter-to-class="opacity-100 scale-105 translate-y-0"
      leave-active-class="transition transform duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-90 translate-y-2"
    >
      <Button 
        v-show="selectedIds.length > 0"
        @click="bulkAction('Restore', rows)"
        class="bg-indigo-500 hover:bg-red-200 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2 w-full sm:w-auto"
      >
        <RefreshCcw class="w-4 h-4"/> Restore
      </Button>
    </Transition>

    <Transition
      enter-active-class="transition transform duration-300 ease-out"
      enter-from-class="opacity-0 scale-75 -translate-y-4"
      enter-to-class="opacity-100 scale-105 translate-y-0"
      leave-active-class="transition transform duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-90 translate-y-2"
    >
      <Button 
        v-show="selectedIds.length > 0"
        @click="bulkAction('Heard_Delete', rows)"
        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2 w-full sm:w-auto"
      >
        <DeleteIcon class="w-4 h-4"/> Delete
      </Button>
    </Transition>
    <!-- Bulk action button end here  -->

    <!-- Recycle -->



    <!-- Create / Add -->
    <Button
      class="px-3 py-2.5 rounded-xl bg-white text-green-500 shadow-lg border border-green-400 hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2 w-full sm:w-auto"
    >
      <Link :href="route('contact_phone.add')" class="flex items-center gap-2 w-full">
        <SquarePlus class="w-4 h-4" />
        <span>Create New Item</span>
      </Link>
    </Button>

  </div>
</div>



    <!-- Data Table -->
    <div class="overflow-x-auto bg-white rounded-xl shadow border border-gray-100">
      <table class="min-w-full divide-y divide-gray-200">
        <!-- Table Header -->
        <thead class="bg-gradient-to-r from-blue-50 to-blue-100 sticky top-0 z-10">
          <tr>
            <th class="px-4 py-3 text-left text-sm w-12">
              <input type="checkbox" :checked="isAnySelected" @change="toggleSelectAll(rows)" class="h-4 w-4 text-blue-600 rounded border-gray-300"/>
            </th>
            <th class="px-4 py-3 text-left text-gray-700 font-semibold text-sm">ID</th>
            <th class="px-4 py-3 text-left text-gray-700 font-semibold text-sm"> Phone</th>
            <th class="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Title</th>
            <th class="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Description</th>
            <th class="px-4 py-3 text-left text-gray-700 font-semibold text-sm">URL</th>
            <th class="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Status</th>
            <th class="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Manage</th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody class="divide-y divide-gray-100">
          <tr v-for="data in rows" :key="data.id" class="hover:bg-blue-50 transition-colors duration-200">
            <td class="px-4 py-3"><input type="checkbox" :value="data.id" v-model="selectedIds"  class="h-4 w-4 text-blue-600 rounded border-gray-300"/></td>
            <td class="px-4 py-3 font-medium text-gray-800 text-sm">{{ data.id ?? '' }}</td>
            <td class="px-4 py-3 font-medium text-gray-800 text-sm">{{ data.phone ?? '' }}</td>
            <td class="px-4 py-3 font-medium text-gray-800 text-sm">{{ data.title ?? '' }}</td>
            <td class="px-4 py-3 font-medium text-gray-800 text-sm"> {{ data.description ?? '' }}</td>
            <td class="px-4 py-3 font-medium text-gray-800 text-sm"> {{ data.url ?? '' }}</td>
            <td class="px-4 py-3 font-medium text-green-600 text-sm" v-if="data.public_status == 1">Active </td>
            <td class="px-4 py-3 font-medium text-red-600 text-sm" v-else="data.public_status == 0">Inactive </td>
            <td class="px-4 py-3 font-medium text-gray-800">
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Manage</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link :href="route('contact_phone.edit',{id:data.id , slug:data.slug})" class="w-full inline-flex items-center gap-2  text-sm font-medium text-blue-600 rounded-lg">
                          <span class="flex items-center"><RefreshCcw /></span>
                          <span>Restore</span>
                      </Link>
                      </DropdownMenuItem>
                      <!-- end -->
                      <DropdownMenuItem>
                        <button @click="confirmDelete('contact_phone.delete',data.id)" class="w-full inline-flex items-center gap-2  text-sm font-medium text-red-300 rounded-lg">
                          <span class="flex items-center"><Trash /></span>
                          <span> Delete </span>
                        </button>
                      </DropdownMenuItem>
                      <!-- end -->
                      
                    </DropdownMenuGroup>
                    
                  </DropdownMenuContent>
                </DropdownMenu>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Footer / Pagination -->
<div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 p-3 bg-white rounded-lg shadow-sm border">
  
  <!-- Left: Summary -->
  <div class="text-gray-600 text-sm">
  Showing 
   <span class="font-medium">{{ meta?.from }}</span>
  to 
  <span class="font-medium">{{ meta?.to }}</span> 
  of 
  <span class="font-medium">{{ meta?.total }}</span> items
</div>

  <!-- Right: Pagination -->
  <div class="flex flex-wrap gap-1">
    <Link
      v-for="(link, index) in links"
      :key="index"
      :href="link.url ?? '#'"
      v-html="link.label"
      class="px-3 py-1 border rounded transition-colors duration-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
      :class="{ 
        'bg-blue-500 text-white border-blue-500': link.active,
        'cursor-not-allowed opacity-50': !link.url
      }"
    />
  </div>

</div>


      <!-- pagination end here -->
    </div>
  </div>
        


















    </AdminLayout>
</template>
