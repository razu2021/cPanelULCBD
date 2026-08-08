<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import AdminLayout from '@/layouts/AdminLayout.vue'



// UseForm with remembering state
const form = useForm('email_config', {
  mail_mailer: '',
  mail_host: '',
  mail_port: '',
  mail_username: '',
  mail_password: '',
  mail_encryption: '',
  mail_from_address: '',
  mail_from_name: '',
  slug: '',
  order: '',
  public_status: false,
})

  // ✅ submit MUST use form
  const handleSubmit = () => {
    form.post(route('email_config.submit'), {
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
              <Link :href="route('email_config.all')">All Information</Link>
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
             
              <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600 mx-2">Mail Mailer</label>
                      <input type="text" placeholder="SMTP" v-model="form.mail_mailer"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.mail_mailer">{{ form.errors.mail_mailer }}</div>
                    </div>
                  </div>
                  <!-- col end -->
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600 mx-2">Mail Host</label>
                      <input type="text" placeholder="mail host" v-model="form.mail_host"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.mail_host">{{ form.errors.mail_host }}</div>
                    </div>
                  </div>
                  <!-- col end -->
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600 mx-2">Mail Port</label>
                      <input type="text" placeholder="mail host" v-model="form.mail_port"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.mail_port">{{ form.errors.mail_port }}</div>
                    </div>
                  </div>
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600 mx-2">Mail User Name</label>
                      <input type="text" placeholder="mail host" v-model="form.mail_username"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.mail_username">{{ form.errors.mail_username }}</div>
                    </div>
                  </div>
                  <!-- cole end -->
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600 mx-2">Mail Password</label>
                      <input type="text" placeholder="mail host" v-model="form.mail_password"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.mail_password">{{ form.errors.mail_password }}</div>
                    </div>
                  </div>
                  <!-- cole end -->
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600 mx-2">Mail Encription</label>
                      <input type="text" placeholder="mail host" v-model="form.mail_encryption"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.mail_encryption">{{ form.errors.mail_encryption }}</div>
                    </div>
                  </div>
                  <!-- cole end -->
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600 mx-2">Mail From Address </label>
                      <input type="text" placeholder="mail host" v-model="form.mail_from_address"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.mail_from_address">{{ form.errors.mail_from_address }}</div>
                    </div>
                  </div>
                  <!-- cole end -->
                  <div class="col-span-12 md:col-span-6">
                    <div>
                      <label class="text-sm font-medium text-slate-600 mx-2">Mail From Name </label>
                      <input type="text" placeholder="mail host" v-model="form.mail_from_name"
                        class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
                        <div class="text-small text-red-500" v-if="form.errors.mail_from_name">{{ form.errors.mail_from_name }}</div>
                    </div>
                  </div>
                  <!-- cole end -->
                </div>
                <!-- grid end  -->

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
