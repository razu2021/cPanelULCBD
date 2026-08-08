<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import { useImageUploads } from '@/composables/useImageUpload'
import tiptap from '@/components/TipTap.vue'
/**==========  define props get data from inertia controller ========== */
const props= defineProps<{
    data: {
        order: number,
        heading: string,
        title: string,
        url: string,
        description: string,
        cover_image: File | string | null,
        thumbnail: File | string | null,
        public_status: boolean,
        id: number,
        slug: string,
    }
}>()

// ✅ remember data
const form  = useForm(
  {
    id: props.data.id,
    heading: props.data.heading,
    title: props.data.title,
    description: props.data.description,
    cover_image : props.data.cover_image  || null,
    thumbnail : props.data.thumbnail  || null,
    url: props.data.url,
    order: props.data.order,
    public_status : Boolean(props.data.public_status),
    slug :props.data.slug
  })

//--- - image upload composeable uses -----

const imagepath = form.cover_image ? `/${form.cover_image}` : null;
const thumbnail_path = form.thumbnail ? `/${form.thumbnail}` : null;

const {preview:thumbnail_preview ,handleUpload:handleThumbnailUpload ,clearPreview:clearThumbnailPreview} = useImageUploads(form,'thumbnail',thumbnail_path);

/**========  update function ========== */
const handleUpdate = () => {
  form.transform((data) => ({
    ...(data as any),
    _method: 'patch',
  })).post(route('notice_board.update'), {
    forceFormData: true,
    onSuccess: () => console.log('Updated'),
  });
};
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
                <Link :href="route('notice_board.all')">All Information</Link>
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
                    <label class="text-sm font-medium text-slate-600">Heading</label>
                    <input type="text" placeholder="Enter title" v-model="form.heading"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.heading">{{ form.errors.heading }}</div>
                </div>
                    <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600"> Title</label>
                    <input type="text" placeholder="Enter title" v-model="form.title"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.title">{{ form.errors.title }}</div>
                </div>
                    <!-- end -->

                <div>
                    <label class="text-sm font-medium text-slate-600">Description</label>
                    <tiptap v-model="form.description" />
                    <div class="text-small text-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>
                </div>
                

            </div>
            </div>

            <!-- ================= RIGHT SETTINGS (4 COL) ================= -->
            <div class="col-span-12 lg:col-span-4">
            <div class="space-y-6">
                
                <!-- Thumbnail upload-->
                <div class="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                    <h3 class="text-sm font-semibold text-slate-800 mb-4">Upload Thumbnail</h3>
                    <label class="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-6 cursor-pointer hover:bg-slate-100 transition">
                    <div v-if="thumbnail_preview">
                        <img :src="thumbnail_preview" class="w-auto h-50 object-cover rounded-xl shadow"/>
                    </div>
                    <div v-else class="text-sm text-slate-500">
                        Click to upload image
                    </div>
                    <input type="file"  class="hidden" accept="image/*" @change="handleThumbnailUpload"/>
                    </label>
                    <div class="text-sm text-red-500 mt-2" v-if="form.errors.thumbnail">
                    {{ form.errors.thumbnail }}
                    </div>
                   
                </div>

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
