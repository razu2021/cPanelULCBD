<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import { useImageUploads } from '@/composables/useImageUpload'
import tiptap from '@/components/TipTap.vue'
import Iconpicker from '@/components/Iconpicker.vue'
import { useSkills } from '@/composables/useSkills';
import { watch } from 'vue'


/**==========  define props get data from inertia controller ========== */
const props= defineProps<{
    data: {
        order: number,
        icon: string,
        name: string,
        designation: string,
        short_des: string,
        description: string,
        cover_image: File | string | null,
        thumbnail: File | string | null,
        public_status: boolean,
        id: number,
        slug: string,
    },
     iconlist: any[] ,
     existingSkills: any[]
}>()
// use for skill only
const { skillInput, skills, addSkill, removeSkill } = useSkills(props.existingSkills || []);

// ✅ remember data
const form  = useForm(
  {
    id: props.data.id,
    icon: props.data.icon,
    name: props.data.name,
    designation: props.data.designation,
    short_des: props.data.short_des,
    description: props.data.description,
    skills : skills.value,
    cover_image : props.data.cover_image  || null,
    thumbnail : props.data.thumbnail  || null,
    order: props.data.order,
    public_status : Boolean(props.data.public_status),
    slug :props.data.slug
  })

//--- - image upload composeable uses -----

const imagepath = form.cover_image ? `/${form.cover_image}` : null;
const thumbnail_path = form.thumbnail ? `/${form.thumbnail}` : null;

const {preview:image_preview ,handleUpload:handleImageUpload ,clearPreview:clearImagePreview} = useImageUploads(form, 'cover_image', imagepath);
const {preview:thumbnail_preview ,handleUpload:handleThumbnailUpload ,clearPreview:clearThumbnailPreview} = useImageUploads(form,'thumbnail',thumbnail_path);

watch(skills, (newSkills) => {
    form.skills = [...newSkills];
}, { deep: true });



/**========  update function ========== */
const handleUpdate = () => {
  form.transform((data) => ({
    ...(data as any),
    _method: 'patch',
  })).post(route('team_manage.update'), {
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
                <Link :href="route('team_manage.all')">All Information</Link>
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
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12 md:col-span-12">
                    <div>
                      <label class="text-sm font-medium text-slate-600">Type</label>
                      <Iconpicker v-model="form.icon" :iconlist="props.iconlist" />
                      <div class="text-small text-red-500" v-if="form.errors.icon">{{ form.errors.icon }}</div>
                    </div>
                  </div>
                  <!-- col end -->
                  
                </div>
                <!----------------------- grid end------------------------- -->
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600">Name</label>
                      <input type="text" placeholder="name" v-model="form.name"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>
                    </div>
                  </div>
                  <!-- col end -->
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600">Designation</label>
                      <input type="text" placeholder="Sub Heading" v-model="form.designation"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.designation">{{ form.errors.designation }}</div>
                    </div>
                  </div>
                  <!-- col end -->
                </div>
                <!----------------------- grid end------------------------- -->
                <div>
                  <label class="text-sm font-medium text-slate-600">Short Description</label>
                  <textarea
                  rows="5"
                  placeholder="Write something meaningful..." v-model="form.short_des"
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500"></textarea>
                  <div class="text-small text-red-500" v-if="form.errors.short_des">{{ form.errors.short_des }}</div>
                </div>
                <!----------------------- grid end ------------------------- -->
                <div>
                  <label class="text-sm font-medium text-slate-600">Description</label>
                  <tiptap v-model="form.description" />
                  <div class="text-small text-red-500" v-if="form.errors.description">{{ form.errors.short_des }}</div>
                </div>
                <!----------------------- grid end ------------------------- -->
                <div>
                    <label class="block text-sm font-medium mb-2">Skills (Type & Press Enter)</label>
                    
                    <div class="flex flex-wrap gap-2 p-2 border rounded-md focus-within:ring-2 ring-blue-500">
                        <span v-for="(skill, index) in form.skills" :key="index" 
                            class="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                            {{ skill }}
                            <button type="button" @click="removeSkill(index)" class="hover:text-red-200 ml-1">×</button>
                        </span>
                        <input  v-model="skillInput"  @keydown.enter.prevent="addSkill" placeholder="e.g. Web Designer" class="flex-1 outline-none min-w-[150px] text-sm"/>
                    </div>
                </div>
                <!-- skill end here  -->
            </div>
            </div>

            <!-- ================= RIGHT SETTINGS (4 COL) ================= -->
            <div class="col-span-12 lg:col-span-4">
            <div class="space-y-6">
                
                <!-- Cover photo-->
                <div class="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                    <h3 class="text-sm font-semibold text-slate-800 mb-4">Upload Cover Photo</h3>
                    <label class="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-6 cursor-pointer hover:bg-slate-100 transition">
                    <div v-if="image_preview">
                        <img :src="image_preview" class="w-auto h-50 object-cover rounded-xl shadow"/>
                    </div>
                    <div v-else class="text-sm text-slate-500">
                        Click to upload image
                    </div>
                    <input type="file"  class="hidden" accept="image/*" @change="handleImageUpload"/>
                    </label>
                    <div class="text-sm text-red-500 mt-2" v-if="form.errors.cover_image">
                    {{ form.errors.cover_image }}
                    </div>
                </div>
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
