<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { computed, ref, watch } from 'vue';
import axios from 'axios'
import { allsections } from '@/sections';


//------- get the main category list 

const props = defineProps<{
  allcategory : any[]
}>()

// UseForm with remembering state
const form = useForm('child_category_page', {
  page_type:'',
  categorypage_id: '',
  subcategorypage_id: '',
  childcategorypage_id: '',
  section_key: '',
  section_heading: '',
  section_title: '',
  description: '',
  order: '',
  public_status: false,
})

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
  } else if(newType === 'subcategory_page') {
    pages.value.subcategorypage = await axios.get(route('page_section.getsubcategory')).then(res => res.data)
  } else if(newType === 'childcategory_page') {
    pages.value.childcategorypage = await axios.get(route('page_section.getchildcategory')).then(res => res.data)
  }

})



  // ✅ submit MUST use form
  const handleSubmit = () => {
    form.post(route('page_section.submit'), {
      onSuccess: () => {
        form.reset()
      },
    })
  }
</script>

<template>
    <Head title="Create Information " />
<AdminLayout>
  <!-- PAGE WRAPPER -->
    <form @submit.prevent="handleSubmit" class="space-y-5">
    <div class="container  mx-auto my-10 px-4">
      <!-- PAGE WRAPPER -->
      <div class="grid grid-cols-12 gap-8">
        <!-- ================= TOP HEADER ================= -->
        <div class="col-span-12">
          <div class="flex items-center justify-between rounded-2xl bg-black py-4 px-5 text-white shadow-lg">
            <div>
              <h1 class="text-lg font-semibold">Create New Entry</h1>
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
              <h2 class="text-base font-semibold text-slate-800">Basic Information</h2>
              <p class="text-sm text-slate-500">Main content related data</p>
            </div>

          
                        <!-- Page Type -->
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

            <!-- section select  -->
            <select required  v-model="form.section_key" class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
              <option value="">-- Select Section  --</option>

              <option v-for="section in allsections" :key="section.key" :value="section.key">
                {{ section.name }}
              </option>
            </select>

              <!-- end  -->
           

              <!-- end -->
              <div>
                <label class="text-sm font-medium text-slate-600">Section Heading</label>
                <input type="text" placeholder="Enter Name" v-model="form.section_heading" 
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <p class="text-small text-red-500" v-if="form.errors.section_heading">{{ form.errors.section_heading }}</p>
              </div>
                <!-- end -->
              <div>
                <label class="text-sm font-medium text-slate-600">Section Title</label>
                <input type="text" placeholder="Enter title" v-model="form.section_title"
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.section_heading">{{ form.errors.section_heading }}</div>
              </div>
                <!-- end -->

              <div>
                <label class="text-sm font-medium text-slate-600"> Description</label>
                <textarea
                  rows="5"
                  placeholder="Write something meaningful..." v-model="form.description"
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500"></textarea>
                <div class="text-small text-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>
                </div>
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
