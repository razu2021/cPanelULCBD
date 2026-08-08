<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import { useListManager } from '@/composables/useListManager'
import { watch } from 'vue'
import { useImageUploads } from '@/composables/useImageUpload'
const props= defineProps<{
    data: {
        meta_title: string,
        meta_description: string,
        meta_keywords: string,
        meta_robots: string,
        canonical_url: string,
        hreflang_tags: string,
        structured_data: string,

        og_title: string,
        og_description: string,
        og_url: string,
        og_type: string,
        og_locale: string,


        twitter_card: string,
        twitter_title: string,
        twitter_description: string,
        twitter_site: string,


        pinterest_description: string,
        pinterest_rich_pin: string,

        whatsapp_title: string,
        whatsapp_description: string,

        cover_image : File | string | null,
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
    
    meta_title: props.data.meta_title,
    meta_description: props.data.meta_description,
    meta_keywords: props.data.meta_keywords || '',
    meta_robots: props.data.meta_robots,
    canonical_url: props.data.canonical_url,
    hreflang_tags: props.data.hreflang_tags,
    structured_data: props.data.structured_data,
    og_title: props.data.og_title,
    og_description: props.data.og_description,
    og_url: props.data.og_url,
    og_type: props.data.og_type,
    og_locale: props.data.og_locale,
    twitter_card: props.data.twitter_card,
    twitter_title: props.data.twitter_title,
    twitter_description: props.data.twitter_description,
    twitter_site: props.data.twitter_site,
    pinterest_description: props.data.pinterest_description,
    pinterest_rich_pin: props.data.pinterest_rich_pin,
    whatsapp_title: props.data.whatsapp_title,
    whatsapp_description: props.data.whatsapp_description,
    cover_image: props.data.cover_image || null,

    public_status : Boolean(props.data.public_status),
    slug :props.data.slug
  })
const imagepath = form.cover_image ? `/${form.cover_image}` : null;;
const {preview:image_preview ,handleUpload:handleImageUpload ,clearPreview:clearImagePreview} = useImageUploads(form, 'cover_image', imagepath);
// ✅ wrap remembered data with useForm
// --- ১. Meta Keywords এর জন্য ব্যবহার ---
const { 
    userInput: keywordInput, 
    items: keywordList, 
    addItem: addKeyword, 
    removeItem: removeKeyword 
} = useListManager(form.meta_keywords ? form.meta_keywords.split(',') : []);

watch(keywordList, (newVal) => {
    form.meta_keywords = newVal.join(',');
}, { deep: true });




/**========  update function ========== */
const handleUpdate = () => {
  form.transform((data) => ({
    ...(data as any),
    _method: 'patch',
  })).post(route('manage_seo.update'), {
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
                <Link :href="route('manage_seo.all')">All Information</Link>
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
                    <input type="text"  v-model="form.id">
                    <input type="text"  v-model="form.slug">
                </div>
            
              <!-- end -->
                


                <div>
                    <label class="text-sm font-medium text-slate-600">Meta Title</label>
                    <input type="text" placeholder="Enter title" v-model="form.meta_title"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.meta_title">{{ form.errors.meta_title }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Meta Description</label>
                    <input type="text" placeholder="Enter title" v-model="form.meta_description"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.meta_description">{{ form.errors.meta_description }}</div>
                </div>
                <!-- end -->
                    <div class="space-y-1">
                        <label class="text-sm font-medium text-slate-600">Meta Keywords</label>
                            <div class="flex flex-wrap gap-2 p-2 border rounded-md focus-within:ring-2 ring-blue-500 bg-white">
                                <span v-for="(tag, index) in keywordList" :key="index" 
                                    class="inline-flex items-center gap-1 px-3 py-1 bg-slate-700 text-white text-xs font-bold rounded-full">
                                    {{ tag }}
                                    <button type="button" @click="removeKeyword(index)" class="hover:text-red-200 ml-1">×</button>
                                </span>
                                <input v-model="keywordInput" @keydown.enter.prevent="addKeyword" @keydown.comma.prevent="addKeyword" 
                                    placeholder="Add keywords..." class="flex-1 outline-none text-sm"/>
                            </div>
                        <div class="text-[10px] text-slate-400">Enter বা কমা (,) চেপে ট্যাগ অ্যাড করুন।</div>
                        <div class="text-xs text-red-500 mt-1" v-if="form.errors.meta_keywords">{{ form.errors.meta_keywords }}</div>
                    </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Meta Robots</label>
                    <input type="text" placeholder="Enter title" v-model="form.meta_robots"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.meta_robots">{{ form.errors.meta_robots }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Canonicale URL</label>
                    <input type="text" placeholder="Enter title" v-model="form.canonical_url"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.canonical_url">{{ form.errors.canonical_url }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600"> Structured Data / Schema</label>
                    <textarea
                    rows="5"
                    placeholder="Write something meaningful..." v-model="form.structured_data"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500"></textarea>
                    <div class="text-small text-red-500" v-if="form.errors.structured_data">{{ form.errors.structured_data }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Og Title</label>
                    <input type="text" placeholder="Enter title" v-model="form.og_title"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.og_title">{{ form.errors.og_title }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Og Description</label>
                    <input type="text" placeholder="Enter title" v-model="form.og_description"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.og_description">{{ form.errors.og_description }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Og url</label>
                    <input type="text" placeholder="Enter title" v-model="form.og_url"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.og_url">{{ form.errors.og_url }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Og Type</label>
                    <input type="text" placeholder="Enter title" v-model="form.og_type"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.og_type">{{ form.errors.og_type }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Og Locale</label>
                    <input type="text" placeholder="Enter title" v-model="form.og_locale"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.og_type">{{ form.errors.og_type }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Twitter Card</label>
                    <input type="text" placeholder="Enter title" v-model="form.twitter_card"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.twitter_card">{{ form.errors.twitter_card }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Twitter Title</label>
                    <input type="text" placeholder="Enter title" v-model="form.twitter_title"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.twitter_title">{{ form.errors.twitter_title }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Twitter Description</label>
                    <input type="text" placeholder="Enter title" v-model="form.twitter_description"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.twitter_description">{{ form.errors.twitter_description }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Twitter Site</label>
                    <input type="text" placeholder="Enter title" v-model="form.twitter_site"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.twitter_site">{{ form.errors.twitter_site }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Pinterest Description</label>
                    <input type="text" placeholder="Enter title" v-model="form.pinterest_description"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.pinterest_description">{{ form.errors.pinterest_description }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Pinterest Rich Pin</label>
                    <input type="text" placeholder="Enter title" v-model="form.pinterest_rich_pin"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.pinterest_rich_pin">{{ form.errors.pinterest_rich_pin }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">whatsapp Title</label>
                    <input type="text" placeholder="Enter title" v-model="form.whatsapp_title"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.whatsapp_title">{{ form.errors.whatsapp_title }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">whatsapp Title</label>
                    <input type="text" placeholder="Enter title" v-model="form.whatsapp_description"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.whatsapp_description">{{ form.errors.whatsapp_description }}</div>
                </div>
                <!-- end -->

















                

            </div>
            </div>

            <!-- ================= RIGHT SETTINGS (4 COL) ================= -->
            <div class="col-span-12 lg:col-span-4">
            <div class="space-y-6">
                <!-- Cover photo-->
                <div class="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                    <h3 class="text-sm font-semibold text-slate-800 mb-4">Upload Seo Photo</h3>
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
