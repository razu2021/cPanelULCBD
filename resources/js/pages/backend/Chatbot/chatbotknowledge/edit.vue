<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { ref } from 'vue';
import { route } from 'ziggy-js'

const props= defineProps<{
    data: {
        order: number,
        intent_id: number,
        question: string,
        answer: string,
        category: string,
        priority: string,
        keywords: string[] | string | null
    
        //-------------
        public_status: boolean,
        id: number,
        slug: string,
    }
     allintents: any[]
}>()

// ----------------------------------------
// Convert existing keywords into array
// ----------------------------------------

const initialKeywords = (): string[] => {

    if (Array.isArray(props.data.keywords)) {
        return [...props.data.keywords]
    }

    if (typeof props.data.keywords === 'string') {

        try {

            const parsed = JSON.parse(props.data.keywords)

            return Array.isArray(parsed)
                ? parsed
                : []

        } catch {

            return props.data.keywords
                .split(',')
                .map(keyword => keyword.trim())
                .filter(Boolean)
        }
    }

    return []
}


// ----------------------------------------
// Keyword input
// ----------------------------------------

const keywordInput = ref('')




// ✅ remember data
const form  = useForm(
  {
    id: props.data.id,
    intent_id: props.data.intent_id,
    question: props.data.question,
    answer: props.data.answer,
    category: props.data.category,
    priority: props.data.priority,
    keywords: initialKeywords(),
    order: props.data.order,
    public_status : Boolean(props.data.public_status),
    slug :props.data.slug
  })


// ----------------------------------------
// Add keyword
// ----------------------------------------

const addKeyword = () => {

    const keyword = keywordInput.value.trim()

    if (!keyword) {
        return
    }

    const exists = form.keywords.some(
        item => item.toLowerCase() === keyword.toLowerCase()
    )

    if (!exists) {
        form.keywords.push(keyword)
    }

    keywordInput.value = ''
}


// ----------------------------------------
// Remove keyword
// ----------------------------------------

const removeKeyword = (index: number) => {

    form.keywords.splice(index, 1)
}

// ✅ submit MUST use form
const handleUpdate = () => {
  form.transform((data) => ({
    ...data,
    _method: 'patch', 
  })).post(route('chatbot_knowledge.update', { id: props.data.id, slug: props.data.slug }));
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
                <Link :href="route('chatbot_knowledge.all')">All Information</Link>
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
                <!-- end -->

                
                

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
