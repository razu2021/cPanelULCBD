<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { Section } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { route } from 'ziggy-js'
import axios from 'axios'
import { allsections } from '@/sections';

const props= defineProps<{
    data: {
        order: number,
        section_heading: string,
        section_title: string,
        description: string,

        page_type:string,
        section_key:string,
        sectionable_type  :string,
        sectionable_id:number,
        //-------------
        public_status: boolean,
        id: number,
        category_id: number,
        slug: string,
    },
    allcategory : any[],
    currentCategory:string,
}>()

// ✅ remember data
const form  = useForm(
  {
    id: props.data.id,
    section_heading: props.data.section_heading,
    category_id : props.data.category_id,
    section_title: props.data.section_title,
    description: props.data.description,
    order: props.data.order,
    public_status : Boolean(props.data.public_status),
    slug :props.data.slug,

  section_key: props.data.section_key,
  page_type: props.currentCategory,  // category_page / subcategory_page / childcategory_page
  categorypage_id: props.data.sectionable_id || '',
  subcategorypage_id: props.data.sectionable_id || '',
  childcategorypage_id: props.data.sectionable_id || ''
  })

// ✅ wrap remembered data with useForm


// ----- get all pages category list 
const pages = ref<{
  categorypage: any[],
  subcategorypage: any[],
  childcategorypage: any[]
}>({
  categorypage: [],
  subcategorypage: [] ,
  childcategorypage: []
})

// --- call pages 
watch(()=>form.page_type,async(newType)=>{
  form.categorypage_id = ''
  form.subcategorypage_id = ''
  form.childcategorypage_id = ''


  if(newType === 'category_page') {
    pages.value.categorypage = await axios.get(route('page_section.getCategory')).then(res => res.data)
    // active page 
    if (props.data.sectionable_id) {
      pages.value.categorypage.sort((a, b) => a.id === props.data.sectionable_id ? -1 : 0)
      form.categorypage_id = props.data.sectionable_id
    }


  } else if(newType === 'subcategory_page') {
    pages.value.subcategorypage = await axios.get(route('page_section.getsubcategory')).then(res => res.data)
    if (props.data.sectionable_id) {
      pages.value.subcategorypage.sort((a, b) => a.id === props.data.sectionable_id ? -1 : 0)
      form.subcategorypage_id = props.data.sectionable_id
    }

  } else if(newType === 'childcategory_page') {
    pages.value.childcategorypage = await axios.get(route('page_section.getchildcategory')).then(res => res.data)
    if (props.data.sectionable_id) {
      pages.value.childcategorypage.sort((a, b) => a.id === props.data.sectionable_id ? -1 : 0)
      form.childcategorypage_id = props.data.sectionable_id
    }
  }

} ,{ immediate: true })



// ✅ submit MUST use form
const handleUpdate = () => {
  form.patch(route('page_section.update'))
  
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
                <Link :href="route('page_section.all')">All Information</Link>
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


            <select required v-model="form.page_type" class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
              <option value="">-- Select Page Type --</option>
              <option value="category_page">Category</option>
              <option value="subcategory_page">Sub Category</option>
              <option value="childcategory_page">Child Category</option>
            </select>

            <!-- Category -->
            <select required v-if="form.page_type==='category_page'" v-model="form.categorypage_id" class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
              <option value="">-- Select Category --</option>
              <option v-for="cat in pages.categorypage" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
            </select>

            <!-- SubCategory -->
            <select  v-if="form.page_type==='subcategory_page'" v-model="form.subcategorypage_id" class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
              <option value="">-- Select SubCategory --</option>
              <option v-for="sub in pages.subcategorypage" :key="sub.id" :value="sub.id">{{ sub.name }}</option>
            </select>

            <!-- ChildCategory -->
            <select v-if="form.page_type==='childcategory_page'" v-model="form.childcategorypage_id" class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
              <option value="">-- Select ChildCategory --</option>
              <option v-for="child in pages.childcategorypage" :key="child.id" :value="child.id">{{ child.name }}</option>
            </select>



            <!--  -->
            <select required  v-model="form.section_key" class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
              <option value="">-- Select Section  --</option>

              <option v-for="section in allsections" :key="section.key" :value="section.key">
                {{ section.name }}
              </option>
            </select>



              <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Section Heading</label>
                    <input type="text" placeholder="Enter title" v-model="form.section_heading"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.section_heading">{{ form.errors.section_heading }}</div>
                </div>
                    <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">Section Title</label>
                    <input type="text" placeholder="Enter title" v-model="form.section_title"
                    class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                    <div class="text-small text-red-500" v-if="form.errors.section_title">{{ form.errors.section_title }}</div>
                </div>
                    <!-- end -->

                <div>
                    <label class="text-sm font-medium text-slate-600">Section Description</label>
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
                </div>
                <div class="rounded-2xl bg-slet p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
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
