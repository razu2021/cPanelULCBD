<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { computed, ref, watch } from 'vue';
import axios from 'axios'


//------- get the main category list 

const props = defineProps<{
  allcategory : any[]
}>()

// UseForm with remembering state
const form = useForm('child_category_page', {
  category_id:'',
  sub_category_id:'',
  name: '',
  title: '',
  description: '',
  slug: '',
  order: '',
  public_status: false,
  is_nav: true,
})
const subcategories = ref<any[]>([]) 

watch(
  () => form.category_id,
  async (newCategory) => {
    form.sub_category_id = ''
    subcategories.value = []

    if (!newCategory) return

    const res = await axios.get(
      route('child_category_page.getsubcategory',newCategory)
    )

    subcategories.value = res.data
  }
)

  // ✅ submit MUST use form
  const handleSubmit = () => {
    form.post(route('child_category_page.submit'), {
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
              <Link :href="route('child_category_page.all')">All Information</Link>
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

          
             <div class="mb-4">
                <label for="category" class="block text-sm font-medium text-slate-700 mb-1" >Select Category Name</label>

                <select id="category" v-model="form.category_id" required class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
                  <option value="">-- Select Category --</option>
                  <option v-for="item in props.allcategory" :key="item.id" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
                <p v-if="form.errors.category_id"class="mt-1 text-sm text-red-500"> {{ form.errors.category_id }}</p>
              </div>
             <div class="mb-4">
                <label for="subcategory" class="block text-sm font-medium text-slate-700 mb-1" >Select Category Name</label>

                <select id="category" v-model="form.sub_category_id" required class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
                  <option value="">-- Select Category --</option>
                  <option v-for="subcategory in subcategories" :key="subcategory.id" :value="subcategory.id">
                    {{ subcategory.name }}
                  </option>
                </select>
                <p v-if="form.errors.category_id"class="mt-1 text-sm text-red-500"> {{ form.errors.category_id }}</p>
              </div>

              <!-- end -->
              <div>
                <label class="text-sm font-medium text-slate-600">Name</label>
                <input type="text" placeholder="Enter Name" v-model="form.name" required
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <p class="text-small text-red-500" v-if="form.errors.name">{{ form.errors.name }}</p>
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
              <div>
                
              </div>
          

          </div>
        </div>

        <!-- ================= RIGHT SETTINGS (4 COL) ================= -->
        <div class="col-span-12 lg:col-span-4">
          <div class="space-y-6">

            <!-- STATUS CARD -->
            <div class="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div class="mb-2">
                <h3 class="text-sm font-semibold text-slate-800 mb-4">
                Publish Settings
              </h3>

              <label class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span class="text-sm text-slate-600">Active Status</span>
                <input type="checkbox" v-model="form.public_status"
                  class="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500">
              </label>

              </div>
              <div>
                <h3 class="text-sm font-semibold text-slate-800 mb-4">
                Menu Status
              </h3>

              <label class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span class="text-sm text-slate-600"> Added to Main Menu </span>
                <input type="checkbox" v-model="form.is_nav"
                  class="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500">
              </label>
              </div>
            </div>
            <!-- STATUS CARD -->
            <div class="rounded-2xl bg-slet p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <h3 class="text-sm font-semibold mb-3">
                Actions
              </h3>
              <div>
                <label class="text-sm font-medium text-slate-600"> Slug </label>
                <input type="text" placeholder="Enter Slug"  v-model="form.slug" required
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <p class="text-small text-red-500" v-if="form.errors.slug">{{ form.errors.slug }}</p>
              </div>
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
