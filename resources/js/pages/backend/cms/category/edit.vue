<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'









const props= defineProps<{
    data: {
        order: number,
        name: string,
        title: string,
        url: string,
        description: string,
        //-------------
        public_status: boolean,
        is_nav: boolean,
        id: number,
        slug: string,
    }
}>()

// ✅ remember data
const form  = useForm(
  {
    id: props.data.id,
    name: props.data.name,
    title: props.data.title,
    description: props.data.description,
    url: props.data.url,
    order: props.data.order,
    public_status : Boolean(props.data.public_status),
    is_nav : Boolean(props.data.is_nav),
    slug :props.data.slug
  })

// ✅ wrap remembered data with useForm


// ✅ submit MUST use form
const handleUpdate = () => {
  form.patch(route('category_page.update'))
  
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
                <Link :href="route('category_page.all')">All Information</Link>
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
                    <label class="text-sm font-medium text-slate-600">Name</label>
                    <input type="text" placeholder="Enter title" v-model="form.name"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>
                </div>
                    <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Meta Title</label>
                    <input type="text" placeholder="Enter title" v-model="form.title"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.title">{{ form.errors.title }}</div>
                </div>
                    <!-- end -->

                <div>
                    <label class="text-sm font-medium text-slate-600">Meta Description</label>
                    <textarea
                    rows="5"
                    placeholder="Write something meaningful..." v-model="form.description"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500"></textarea>
                    <div class="text-small text-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>
                    </div>
                

            </div>
            </div>

            <!-- ================= RIGHT SETTINGS (4 COL) ================= -->
            <div class="col-span-12 lg:col-span-4">
            <div class="space-y-6">

                <!-- STATUS CARD -->
                <div class="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                    <div class="mb-3">
                        <h3 class="text-sm font-semibold text-slate-800 mb-4">
                        Publish Settings
                    </h3>

                        <label class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <span class="text-sm text-slate-600">Active Status</span>
                            <input type="checkbox" v-model="form.public_status"
                            class="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500">
                        </label>
                    </div>
                    <!-- end -->
                    <div class="mb-3">
                        <h3 class="text-sm font-semibold text-slate-800 mb-4">
                        Menu Status
                    </h3>

                        <label class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <span class="text-sm text-slate-600">Added to Main Menu </span>
                            <input type="checkbox" v-model="form.is_nav"
                            class="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500">
                        </label>
                    </div>
                    <!-- end -->


                </div>
                <!-- STATUS CARD -->
                <div class="rounded-2xl bg-slet p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <h3 class="text-sm font-semibold mb-3">
                    Actions
                </h3>
                <div>
                    <label class="text-sm font-medium text-slate-600">Slug </label>
                    <input type="text" placeholder="Enter title" v-model="form.url"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.url">{{ form.errors.url }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Order  </label>
                    <input type="number" placeholder="Enter title" v-model="form.order"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.order">{{ form.errors.order }}</div>
                </div>
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
