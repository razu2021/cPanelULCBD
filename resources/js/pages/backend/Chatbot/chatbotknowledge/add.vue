<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { ref } from 'vue';


// all intent data 

const props = defineProps<{
  allintents : any[]
}>()



// UseForm with remembering state
const form = useForm('chatbot_knowledge', {
  intent_id: '',
  question: '',
  answer: '',
  keywords: [] as string[],
  category: '',
  priority: '',
  slug: '',
  order: '',
  public_status: false,
})


// keywords 
const keywordInput = ref('')

const addKeyword = () => {
  const keyword = keywordInput.value.trim()

  if (!keyword) return

  // Duplicate prevent
  if (!form.keywords.includes(keyword)) {
    form.keywords.push(keyword)
  }

  keywordInput.value = ''
}

const removeKeyword = (index: number) => {
  form.keywords.splice(index, 1)
}
// keywords 





  // ✅ submit MUST use form
  const handleSubmit = () => {
    form.post(route('chatbot_knowledge.submit'), {
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
              <Link :href="route('chatbot_knowledge.all')">All Information</Link>
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
              <!-- end -->
              <div class="mb-4">
                <label for="category" class="block text-sm font-medium text-slate-700 mb-1" >Select Intent Name</label>
                <select id="category" v-model="form.intent_id"  class="block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition-colors duration-200">
                  <option value="">-- Select Intent --</option>
                  <option v-for="item in props.allintents" :key="item.id" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
                <p v-if="form.errors.intent_id"class="mt-1 text-sm text-red-500"> {{ form.errors.intent_id }}</p>
              </div>
                <!-- end -->
              
              <div>
                <label class="text-sm font-medium text-slate-600">Quesstion </label>
                <input type="text" placeholder="Enter Intent Name" v-model="form.question" 
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.question">{{ form.errors.question }}</div>
              </div>
                <!-- end -->

              <div>
                <label class="text-sm font-medium text-slate-600">Answer </label>
                <textarea
                  rows="5"
                  placeholder="Write something meaningful..." v-model="form.answer"
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500"></textarea>
                <div class="text-small text-red-500" v-if="form.errors.answer">{{ form.errors.answer }}</div>
                </div>
                <!-- end -->
                <div>
                    <label class="text-sm font-medium text-slate-600">
                        Keywords
                    </label>

                    <div
                        class="mt-1 flex min-h-[46px] flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-indigo-500 focus-within:bg-white"
                    >
                        <!-- Keywords -->
                        <span
                            v-for="(keyword, index) in form.keywords"
                            :key="index"
                            class="inline-flex items-center gap-1 rounded-lg bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700"
                        >
                            {{ keyword }}

                            <button
                                type="button"
                                @click="removeKeyword(index)"
                                class="text-indigo-500 hover:text-red-500"
                            >
                                ×
                            </button>
                        </span>

                        <!-- Input -->
                        <input
                            v-model="keywordInput"
                            @keydown.enter.prevent="addKeyword"
                            type="text"
                            placeholder="Type keyword and press Enter"
                            class="min-w-[180px] flex-1 border-0 bg-transparent px-1 py-1 text-sm outline-none focus:ring-0"
                        />
                    </div>

                    <p class="mt-1 text-xs text-slate-400">
                        Type a keyword and press Enter
                    </p>

                    <div
                        v-if="form.errors.keywords"
                        class="mt-1 text-sm text-red-500"
                    >
                        {{ form.errors.keywords }}
                    </div>
                </div>
              <!-- end -->
              <div>
                <label class="text-sm font-medium text-slate-600">Categorys</label>
                <input type="text" placeholder="Enter Intent Name" v-model="form.category" 
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.category">{{ form.errors.category }}</div>
              </div>
              <!-- end -->
              <div>
                <label class="text-sm font-medium text-slate-600">Priority</label>
                <input type="number" placeholder="Enter Intent Name" v-model="form.priority" 
                  class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                  <div class="text-small text-red-500" v-if="form.errors.priority">{{ form.errors.priority }}</div>
              </div>
              <!-- end -->
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
              <Button type="submit" class="mt-5 w-full" :disabled="form.processing">{{ form.processing ? 'Saving...' : 'Submit' }}</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </form>

</AdminLayout>
</template>
