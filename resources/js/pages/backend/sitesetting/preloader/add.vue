<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import Button from '@/components/ui/button/Button.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import { useImageUploads } from '@/composables/useImageUpload'

// UseForm with remembering state=====================
const form = useForm('preloader', {
  type: '',
  title: '',
  thumbnail: null as File | null,
  order: '',
  public_status: false,
})
//--- - image upload composeable uses -----
const {preview:thumbnail_preview ,handleUpload:handleThumbnailUpload ,clearPreview:clearThumbnailPreview} = useImageUploads(form, 'thumbnail');
//===================== ✅ submit MUST use form========================
const handleSubmit = () => {
  form.post(route('preloader.submit'), {
      // -- its work as like multipart-form/Data --- 
      forceFormData: true,
      onSuccess: () => {
        // -- clear input feild after upload
        form.reset();
        clearThumbnailPreview();
      },
    })
  }
</script>
<!-- ==================== Script end here ============ -->
<template>
    <Head title="Create Information "/>
<AdminLayout>
  <!-- PAGE WRAPPER -->
    <form @submit.prevent="handleSubmit" class="space-y-5">
    <div class="container  mx-auto my-10 px-4">
      <!-- PAGE WRAPPER -->
      <div class="grid grid-cols-12 gap-8">
        <!-- ================= TOP HEADER ================= -->
        <div class="col-span-12">
          <div class="flex flex-wrap justify-between rounded-2xl bg-black py-4 px-5 text-white shadow-lg">
            <div>
              <h1 class="text-lg font-semibold">Create New Entry</h1>
              <p class="text-xs text-slate-300">Fill in the details below</p>
            </div>
           <div>
             <button
              class="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20 transition">
              <Link :href="route('preloader.all')">All Information</Link>
            </button>
         
           </div>
            
          </div>
        </div>
        <!-- ================= MAIN FORM (8 COL) ================= -->
        <div class="col-span-12 lg:col-span-8">
          <div class="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-6">

            <div class="border-b pb-4">
              <h2 class="text-base font-semibold text-slate-800">Basic Information</h2>
              <p class="text-sm text-slate-500">Main content related data</p>
            </div>
              
              <div>
                <label class="text-sm font-medium text-slate-600">Select Options </label>
                  <select   name="type" id="type" required  v-model="form.type" class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
                    <option value="">Select Type</option>
                    <option value="is_image">Show Image</option>
                    <option value="is_text">Show Text</option>
                   
                  </select>
                  <div class="text-small text-red-500" v-if="form.errors.type">{{ form.errors.type }}</div>
              </div>
              <!-- end -->
            
              <div>
                <label class="text-sm font-medium text-slate-600">Preloader Text</label>
                <input type="text" placeholder="Enter title" v-model="form.title"
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.title">{{ form.errors.title }}</div>
              </div>
                <!-- end -->
            
              
              
        
    
              <div>
              </div>
          </div>
        </div>

        <!-- ================= RIGHT SETTINGS (4 COL) ================= -->
        <div class="col-span-12 lg:col-span-4">
          <div class="space-y-6">
            <!-- Cover photo-->

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
           
              <!-- end -->
              <Button type="submit" class="mt-5 w-full" :disabled="form.processing">{{ form.processing ? 'Saving...' : 'Submit' }}</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </form>
</AdminLayout>
</template>
