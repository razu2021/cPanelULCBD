<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import Button from '@/components/ui/button/Button.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import { useImageUploads } from '@/composables/useImageUpload'
import tiptap from '@/components/TipTap.vue'
import Iconpicker from '@/components/Iconpicker.vue'



//-- go back function 
  const goBack = () => {
    window.history.back()
}

//=== defineprops =================
const props = defineProps<{
  section_id:any,
  iconlist: any[]  // get icons from inertia controller 
}>()
// UseForm with remembering state=====================
const form = useForm('faq_manage', {
  section_id:  props.section_id,
  icon: '',
  heading: '',
  title: '',
  sub_title: '',
  short_des: '',
  description: '',
  order: '',
  public_status: false,
})
//--- - image upload composeable uses -----
const {preview:image_preview ,handleUpload:handleImageUpload ,clearPreview:clearImagePreview} = useImageUploads(form, 'cover_image');
const {preview:thumbnail_preview ,handleUpload:handleThumbnailUpload ,clearPreview:clearThumbnailPreview} = useImageUploads(form, 'thumbnail');
//===================== ✅ submit MUST use form========================
const handleSubmit = () => {
  form.post(route('faq_manage.submit'), {
      // -- its work as like multipart-form/Data --- 
      forceFormData: true,
      onSuccess: () => {
        // -- clear input feild after upload
        form.reset();
        clearImagePreview();
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
              <Link :href="route('faq_manage.all')">All Information</Link>
            </button>
             <Button @click="goBack" class="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20 transition mx-2">
              Go Back
            </Button>
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
              <input type="hidden" name="section_id" id="section_id" v-model="form.section_id"/>
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12 md:col-span-12">
                    <div>
                      <label class="text-sm font-medium text-slate-600">Icon</label>
                        <Iconpicker v-model="form.icon" :iconlist="props.iconlist" /> 
                    </div>
                  </div>
                  <!-- col end -->
                  
                </div>
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12 md:col-span-12">
                    <div>
                      <label class="text-sm font-medium text-slate-600">Heading</label>
                      <input type="text" placeholder="Heading" v-model="form.heading"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.heading">{{ form.errors.heading }}</div>
                    </div>
                  </div>
                  <!-- col end -->
                </div>
                <!----------------------- grid end------------------------- -->
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12 md:col-span-12">
                    <div>
                      <label class="text-sm font-medium text-slate-600">Questions ?</label>
                      <input type="text" placeholder="Title" v-model="form.title"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.title">{{ form.errors.title }}</div>
                    </div>
                  </div>
                  <!-- col end -->
                  <div class="col-span-12 md:col-span-12">
                    <div>
                      <label class="text-sm font-medium text-slate-600">Question Sub Title</label>
                      <input type="text" placeholder="Sub Title" v-model="form.sub_title"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.sub_title">{{ form.errors.sub_title }}</div>
                    </div>
                  </div>
                  <!-- col end -->
                </div>
                <!----------------------- grid end ------------------------- -->
              <div>
                  <label class="text-sm font-medium text-slate-600">Short Answer</label>
                  <textarea
                  rows="5"
                  placeholder="Write something meaningful..." v-model="form.short_des"
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500"></textarea>
                  <div class="text-small text-red-500" v-if="form.errors.short_des">{{ form.errors.short_des }}</div>
                </div>
                <!----------------------- grid end ------------------------- -->
                <div>
                  <label class="text-sm font-medium text-slate-600">Details Answer</label>
                  <tiptap v-model="form.description" />
                  <div class="text-small text-red-500" v-if="form.errors.short_des">{{ form.errors.short_des }}</div>
                </div>
                <!----------------------- grid end ------------------------- -->
              <div>
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
              <!-- end -->
              <div>
                <label class="text-sm font-medium text-slate-600">Order  </label>
                <input type="number" placeholder="Enter title" v-model="form.order"
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.order">{{ form.errors.order }}</div>
              </div>
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
