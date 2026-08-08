<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { computed, ref } from 'vue'
import Iconpicker from '@/components/Iconpicker.vue'

//---------- get icons from intertia controller 

const props = defineProps<{
  iconlist: any[] 
}>();


// UseForm with remembering state
const form = useForm('copyright', {
  receved_by: '',
  receiver_url: '',
  receiver_icon: '',
  design_by: '',
  designer_url: '',
  designer_icon: '',
  slug: '',
  order: '',
  public_status: false,
})

  // ✅ submit MUST use form
  const handleSubmit = () => {
    form.post(route('copyright.submit'), {
      onSuccess: () => {
        form.reset()
      },
    })
  }



// ========== icon modal open or close 
const modalOpen = ref(false)
const search = ref('') // search keyword

// Filtered icons
const filteredIcons = computed(() => {
  if (!search.value) return props.iconlist
  return props.iconlist.filter(icon =>
    icon.toLowerCase().includes(search.value.toLowerCase())
  )
})

// Select icon
// select icon function
const selectIcon = (icon: string) => {
  form.receiver_icon = icon   // ✅ important: use form.data
  modalOpen.value = false

  // optionally clear error
  if (form.errors.receiver_icon) {
    delete form.errors.receiver_icon
  }
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
              <Link :href="route('copyright.all')">All Information</Link>
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

          
  
              <div>
                <label class="text-sm font-medium text-slate-600">Reserved Name / Owner By</label>
                <input type="text"  v-model="form.receved_by" required
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.receved_by">{{ form.errors.receved_by }}</div>
              </div>
                <!-- end -->
              <div>
                <label class="text-sm font-medium text-slate-600">Site URL</label>
                <input type="text"  v-model="form.receiver_url" required
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.receiver_url">{{ form.errors.receiver_url }}</div>
              </div>
                <!-- end -->
              <div>
                <label class="text-sm font-medium text-slate-600">Icon</label>
                  <Iconpicker v-model="form.receiver_icon" :iconlist="props.iconlist" />
                  <div class="text-small text-red-500" v-if="form.errors.receiver_icon">{{ form.errors.receiver_icon }}</div>
              </div>
                <!-- end -->
                 <hr>
              <div>
                <label class="text-sm font-medium text-slate-600">Developer Name </label>
                <input type="text"  v-model="form.design_by" 
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.design_by">{{ form.errors.design_by }}</div>
              </div>
                <!-- end -->
              <div>
                <label class="text-sm font-medium text-slate-600">Developer URL</label>
                <input type="text"  v-model="form.designer_url" 
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.designer_url">{{ form.errors.designer_url }}</div>
              </div>
          
                <Iconpicker v-model="form.designer_icon" :iconlist="props.iconlist" />
              

              
           
          

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
              <Button type="submit" class="mt-5 w-full" :disabled="form.processing">{{ form.processing ? 'Saving...' : 'Submit' }}</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </form>

</AdminLayout>
</template>
<style scoped>
/* fade animation for modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>