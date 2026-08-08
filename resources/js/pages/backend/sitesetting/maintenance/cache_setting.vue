<script setup lang="ts">
import { Head, Link, usePage } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import Button from '@/components/ui/button/Button.vue';
import { Card ,CardHeader,CardTitle ,CardDescription,CardContent} from '@/components/ui/card';
import Separator from '@/components/ui/separator/Separator.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';




</script>


<template>
<Head title="Details Page"></Head>

<AdminLayout>
    <div class="p-6 bg-gray-50 min-h-screen">
    <!-- Page Header -->
    <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-800">Cache Management</h1>
        <p class="text-gray-600">Optimize and manage your website performance by clearing or warming up cache.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Section: Quick Actions (Clear Everything) -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-red-100 rounded-lg text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
                <h2 class="text-lg font-semibold text-gray-700">Quick Actions</h2>
            </div>
            
            <p class="text-sm text-gray-500 mb-6">Use these buttons to completely clear all cached data, including application, config, and views.</p>
            
            <div class="space-y-3">
            <button class="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2">
                   <Link :href="route('system_optimize.systemCache_clear')"> <span>  Clear All System Cache </span> </Link>
            </button>

            <button class="w-full bg-green-600 hover:bg-green-300 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2">
                   <a :href="route('system_optimize.systemOPtimize_production')"> <span>  Site Optimization </span> </a>
            </button>
           
                
            </div>
        </div>

        <!-- Section: Site Optimization (Production Ready) -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h2 class="text-lg font-semibold text-gray-700">Site Optimization</h2>
            </div>
            
            <p class="text-sm text-gray-500 mb-6">Boost your production site speed by caching routes and views. Highly recommended for live servers.</p>
            
            <div class="space-y-4">
                <!-- Route Optimization -->
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                        <p class="text-sm font-semibold text-gray-700">Route Cache </p>
                        <p class="text-xs text-gray-500">Speed up route registration</p>
                    </div>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded transition duration-200">
                      <a :href="route('system_optimize.route_cache')">Optimize </a>
                    </button>
                </div>

                <!-- View Optimization -->
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                        <p class="text-sm font-semibold text-gray-700">View Cache</p>
                        <p class="text-xs text-gray-500">Compile Blade templates for faster load</p>
                    </div>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded transition duration-200">
                       <a :href="route('system_optimize.view_cache')">Optimize </a>
                    </button>
                </div>

                <!-- Config Optimization -->
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                        <p class="text-sm font-semibold text-gray-700">Config Cache </p>
                        <p class="text-xs text-gray-500">Combine config files into one</p>
                    </div>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded transition duration-200">
                       <a :href="route('system_optimize.config_cache')">Optimize </a>
                    </button>
                </div>
            </div>
        </div>

    </div>

    <!-- Storage Info Section -->
    <div class="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 class="text-md font-semibold text-gray-700 mb-4">Cache Environment Information</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="p-4 bg-gray-50 rounded-lg">
                <span class="text-xs text-gray-500 block uppercase tracking-wider">Cache Driver</span>
                <span class="text-sm font-bold text-gray-800">File</span>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
                <span class="text-xs text-gray-500 block uppercase tracking-wider">Queue Connection</span>
                <span class="text-sm font-bold text-gray-800">Database</span>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
                <span class="text-xs text-gray-500 block uppercase tracking-wider">Storage Path</span>
                <span class="text-sm font-bold text-gray-800 truncate">/storage/framework/cache</span>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
                <span class="text-xs text-gray-500 block uppercase tracking-wider">Debug Mode</span>
                <span class="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-bold">Enabled</span>
            </div>
        </div>
    </div>
</div>

</AdminLayout>
</template>




