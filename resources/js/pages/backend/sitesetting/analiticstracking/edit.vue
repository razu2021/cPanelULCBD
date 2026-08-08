<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import {groups,apikeys, trackings } from '@/trackings'



const props= defineProps<{
    data: {
        group: string,
        key: string,
        value: string,
        //-------------
        public_status: boolean,
        id: number,
        slug: string,
    }
}>()

// ✅ remember data
const form  = useForm(
  {
    id: props.data.id,
    group: props.data.group,
    key: props.data.key,
    value: props.data.value,
    public_status : Boolean(props.data.public_status),
    slug :props.data.slug
  })

// ✅ wrap remembered data with useForm


// ✅ submit MUST use form
const handleUpdate = () => {
  form.patch(route('analitics_tracking.update'))
  
}
</script>


<template>
    <Head title="Update Informations" />

    <AdminLayout>

       <form @submit.prevent="handleUpdate" class="space-y-5">



  <!-- PAGE WRAPPER -->
<div class="container  mx-auto my-10 px-4">

  <!-- PAGE WRAPPER -->
  <div class="grid grid-cols-12 gap-8">

            <!-- ================= TOP HEADER ================= -->
            <div class="col-span-12">
            <div class="flex items-center justify-between rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 text-white shadow-lg">
                <div>
                <h1 class="text-lg font-semibold">Would you like update The Record ? </h1>
                <p class="text-xs text-slate-300">Fill in the details below</p>
                </div>

            
                <button
                class="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20 transition">
                <Link :href="route('analitics_tracking.all')">All Information</Link>
                </button>
            </div>
            </div>

            <!-- ================= MAIN FORM (8 COL) ================= -->
            <div class="col-span-12 lg:col-span-8">
            <div class="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-6">

                <div class="border-b pb-4">
                <h2 class="text-base font-semibold text-slate-800">Update Information</h2>
                <p class="text-sm text-slate-500">Update Infromation below</p>
                </div>

                
                <div>
                    <input type="hidden"  v-model="form.id">
                    <input type="hidden"  v-model="form.slug">
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Select Group</label>
                    <select name="type" id="type" required  v-model="form.group" class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
                        <option value="">Select  Type</option>
                        <option :value="group.key" v-for="group in groups">{{ group.name }}</option>
                    
                    </select>
                    <div class="text-small text-red-500" v-if="form.errors.group">{{ form.errors.group }}</div>
                </div>
              <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Select options</label>
                    <select name="type" id="type" required  v-model="form.key" class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
                        <option value="">Select  Type</option>
                        <option :value="apis.key" v-for="apis in apikeys">{{ apis.name }}</option>
                    
                    </select>
                    <div class="text-small text-red-500" v-if="form.errors.key">{{ form.errors.key }}</div>
                </div>
              <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Value</label>
                    <input type="text" placeholder="write here..." v-model="form.value"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.value">{{ form.errors.value }}</div>
                </div>
            </div>
            </div>

            <!-- ================= RIGHT SETTINGS (4 COL) ================= -->
            <div class="col-span-12 lg:col-span-4">
            <div class="space-y-6">

                <!-- STATUS CARD -->
                <div class="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <h3 class="text-sm font-semibold text-slate-800 mb-4">
                    Publish Settings
                </h3>

                <label class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span class="text-sm text-slate-600">Active Status</span>
                    <input type="checkbox" v-model="form.public_status"
                    class="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500">
                </label>
                </div>
                <!-- STATUS CARD -->
                <div class="rounded-2xl bg-slet p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <h3 class="text-sm font-semibold mb-3">
                    Actions
                </h3>
              
                <!-- end -->
              
                <!-- end -->
                <div class="mt-4">
                    <Button class="w-full" type="submit" :disabled="form.processing">{{ form.processing ? 'Saving...' : 'Save Changes' }}</Button>
                </div>
                </div>
            </div>
            </div>

        </div>
        </div>

</form>
   </AdminLayout>
</template>
