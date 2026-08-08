
<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';




</script>



<template>
 <AdminLayout>
       <div class="p-6 bg-white min-h-screen space-y-6">

    <!-- Top Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-gray-400 text-xs font-semibold uppercase">Users</h2>
        <p class="text-2xl font-bold text-gray-700 mt-2">1,245</p>
        <span class="text-green-500 text-sm">+5% this month</span>
      </div>

      <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-gray-400 text-xs font-semibold uppercase">Orders</h2>
        <p class="text-2xl font-bold text-gray-700 mt-2">523</p>
        <span class="text-red-500 text-sm">-2% this month</span>
      </div>

      <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-gray-400 text-xs font-semibold uppercase">Revenue</h2>
        <p class="text-2xl font-bold text-gray-700 mt-2">$12,340</p>
        <span class="text-green-500 text-sm">+8% this month</span>
      </div>

      <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-gray-400 text-xs font-semibold uppercase">Feedback</h2>
        <p class="text-2xl font-bold text-gray-700 mt-2">321</p>
        <span class="text-green-500 text-sm">+10% this month</span>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white p-4 rounded-lg shadow space-y-3">
      <h3 class="text-gray-700 font-semibold">Quick Actions</h3>
      <div class="flex flex-wrap gap-3">
        <button class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Add Product</button>
        <button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Add User</button>
        <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Generate Report</button>
      </div>
    </div>

    <!-- Recent Activity / Table -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h3 class="text-gray-700 font-semibold mb-4">Recent Orders</h3>
      <table class="w-full text-left table-auto border-collapse">
        <thead>
          <tr class="text-gray-500 text-xs uppercase border-b">
            <th class="px-3 py-2">Order ID</th>
            <th class="px-3 py-2">Customer</th>
            <th class="px-3 py-2">Status</th>
            <th class="px-3 py-2">Total</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="hover:bg-gray-50 transition">
            <td class="px-3 py-2">#1024</td>
            <td class="px-3 py-2">John Doe</td>
            <td class="px-3 py-2 text-green-600 font-semibold">Completed</td>
            <td class="px-3 py-2">$320.00</td>
          </tr>
          <tr class="hover:bg-gray-50 transition">
            <td class="px-3 py-2">#1025</td>
            <td class="px-3 py-2">Jane Smith</td>
            <td class="px-3 py-2 text-yellow-500 font-semibold">Pending</td>
            <td class="px-3 py-2">$145.00</td>
          </tr>
          <tr class="hover:bg-gray-50 transition">
            <td class="px-3 py-2">#1026</td>
            <td class="px-3 py-2">Alex Johnson</td>
            <td class="px-3 py-2 text-red-500 font-semibold">Cancelled</td>
            <td class="px-3 py-2">$0.00</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
 </AdminLayout>



</template>














