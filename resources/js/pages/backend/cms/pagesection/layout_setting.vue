<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { computed, ref, watch } from 'vue';
import axios from 'axios'
import { allsections } from '@/sections';


//------- get the main category list 

const props = defineProps({
    id: Number,
    slug: String,
    jsonData: Object
});



// Active Tab State
const activeTab = ref('colors');

// Dynamic Style Only Form Setup
const form = useForm({
    id: props.id,
    slug: props.slug,
    style_settings: {
        bg_color: '#0a0c10',
        card_bg: 'rgba(22, 27, 38, 0.6)',
        accent_color: '#d4af37',
        text_primary: '#ffffff',
        text_secondary: '#9ca3af',
        border_color: 'rgba(212, 175, 55, 0.2)',
        heading_font: "'Cinzel', serif",
        heading_size: 'clamp(1.5rem, 3vw, 2.5rem)',
        text_align: 'left',
        backdrop_blur: '16px',
        border_radius: '12px',
        border_width: '1px',
        box_shadow: '0 0 25px rgba(212, 175, 55, 0.15)',
        padding_y: '80px',
        has_animation: true,
        animation_type: 'fade-up',
        animation_duration: '1s',
    }
});

// Preset Auto-fill
const applyPreset = (type:string) => {
    if (type === 'darkLuxury') {
        form.style_settings = {
            bg_color: '#0a0c10',
            card_bg: 'rgba(22, 27, 38, 0.6)',
            accent_color: '#d4af37',
            text_primary: '#ffffff',
            text_secondary: '#9ca3af',
            border_color: 'rgba(212, 175, 55, 0.2)',
            heading_font: "'Cinzel', serif",
            heading_size: 'clamp(1.5rem, 3vw, 2.5rem)',
            text_align: 'left',
            backdrop_blur: '16px',
            border_radius: '12px',
            border_width: '1px',
            box_shadow: '0 0 25px rgba(212, 175, 55, 0.15)',
            padding_y: '80px',
            has_animation: true,
            animation_type: 'fade-up',
            animation_duration: '1s',
        };
    } else if (type === 'cleanLight') {
        form.style_settings = {
            bg_color: '#ffffff',
            card_bg: '#f8fafc',
            accent_color: '#4f46e5',
            text_primary: '#0f172a',
            text_secondary: '#64748b',
            border_color: '#e2e8f0',
            heading_font: "'Plus Jakarta Sans', sans-serif",
            heading_size: 'clamp(1.5rem, 3vw, 2.5rem)',
            text_align: 'left',
            backdrop_blur: '0px',
            border_radius: '8px',
            border_width: '1px',
            box_shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
            padding_y: '60px',
            has_animation: true,
            animation_type: 'fade-up',
            animation_duration: '0.8s',
        };
    }
};

  // ✅ submit MUST use form
  const handleSubmit = () => {
    form.patch(route('page_section.themeSettingsUpdate'), {
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
<form @submit.prevent="handleSubmit" class="min-h-screen bg-slate-50/50 py-8">
        <div class="container mx-auto px-4 max-w-6xl">
            
         <input type="hidden" v-model="form.id" />
         <input type="hidden" v-model="form.slug" />
            <!-- ================= TOP HEADER ================= -->
            <div class="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-slate-900 p-6 text-white shadow-xl">
                <div>
                    <h1 class="text-xl font-bold tracking-tight">Dynamic JSON Style Configurator</h1>
                    <p class="text-xs text-slate-400 mt-1">Configure and generate dynamic CSS/SCSS styling properties as JSON.</p>
                </div>

                <div class="flex items-center gap-3">
                    <button type="submit" :disabled="form.processing" class="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-indigo-500 transition duration-200 disabled:opacity-50">
                        {{ form.processing ? 'Saving JSON...' : 'Save Style JSON' }}
                    </button>
                </div>
            </div>

            <!-- MAIN GRID LAYOUT -->
            <div class="grid grid-cols-12 gap-8">
                
                <!-- ================= LEFT COLUMN: STYLE SETTINGS TABS (8 COL) ================= -->
                <div class="col-span-12 lg:col-span-8 space-y-6">
                    
                    <div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-6">
                        
                        <!-- TAB SWITCHER HEADER -->
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-3">
                            <span class="text-sm font-bold text-slate-800">Style Parameters</span>

                            <!-- Tabs Button Group -->
                            <div class="flex p-1 bg-slate-100 rounded-xl overflow-x-auto">
                                <button type="button" @click="activeTab = 'colors'" :class="['px-3 py-1.5 text-xs font-medium rounded-lg transition whitespace-nowrap', activeTab === 'colors' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900']">Colors</button>
                                <button type="button" @click="activeTab = 'typography'" :class="['px-3 py-1.5 text-xs font-medium rounded-lg transition whitespace-nowrap', activeTab === 'typography' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900']">Typography</button>
                                <button type="button" @click="activeTab = 'effects'" :class="['px-3 py-1.5 text-xs font-medium rounded-lg transition whitespace-nowrap', activeTab === 'effects' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900']">Effects & Glass</button>
                                <button type="button" @click="activeTab = 'motion'" :class="['px-3 py-1.5 text-xs font-medium rounded-lg transition whitespace-nowrap', activeTab === 'motion' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900']">Spacing & Motion</button>
                            </div>
                        </div>

                        <!-- TAB 1: COLORS & GRADIENTS -->
                        <div v-show="activeTab === 'colors'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Section Background</label>
                                <div class="flex items-center gap-2">
                                    <input type="color" v-model="form.style_settings.bg_color" class="h-9 w-12 cursor-pointer rounded-lg border border-slate-200 p-1">
                                    <input type="text" v-model="form.style_settings.bg_color" placeholder="#0a0c10 or transparent" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs">
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Card / Box Background</label>
                                <div class="flex items-center gap-2">
                                    <input type="color" v-model="form.style_settings.card_bg" class="h-9 w-12 cursor-pointer rounded-lg border border-slate-200 p-1">
                                    <input type="text" v-model="form.style_settings.card_bg" placeholder="rgba(22, 27, 38, 0.6)" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs">
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Accent Color (Primary / Gold)</label>
                                <div class="flex items-center gap-2">
                                    <input type="color" v-model="form.style_settings.accent_color" class="h-9 w-12 cursor-pointer rounded-lg border border-slate-200 p-1">
                                    <input type="text" v-model="form.style_settings.accent_color" placeholder="#d4af37" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs">
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Primary Text Color</label>
                                <div class="flex items-center gap-2">
                                    <input type="color" v-model="form.style_settings.text_primary" class="h-9 w-12 cursor-pointer rounded-lg border border-slate-200 p-1">
                                    <input type="text" v-model="form.style_settings.text_primary" placeholder="#ffffff" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs">
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Secondary Text Color</label>
                                <div class="flex items-center gap-2">
                                    <input type="color" v-model="form.style_settings.text_secondary" class="h-9 w-12 cursor-pointer rounded-lg border border-slate-200 p-1">
                                    <input type="text" v-model="form.style_settings.text_secondary" placeholder="#9ca3af" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs">
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Border Color</label>
                                <div class="flex items-center gap-2">
                                    <input type="color" v-model="form.style_settings.border_color" class="h-9 w-12 cursor-pointer rounded-lg border border-slate-200 p-1">
                                    <input type="text" v-model="form.style_settings.border_color" placeholder="rgba(212, 175, 55, 0.2)" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs">
                                </div>
                            </div>
                        </div>

                        <!-- TAB 2: TYPOGRAPHY -->
                        <div v-show="activeTab === 'typography'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Font Family</label>
                                <select v-model="form.style_settings.heading_font" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-700">
                                    <option value="inherit">Default Sans System</option>
                                    <option value="'Cinzel', serif">Cinzel (Luxury Serif)</option>
                                    <option value="'Playfair Display', serif">Playfair Display (Classic Serif)</option>
                                    <option value="'Plus Jakarta Sans', sans-serif">Plus Jakarta Sans (Modern Clean)</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Fluid Font Size Preset</label>
                                <select v-model="form.style_settings.heading_size" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-700">
                                    <option value="clamp(2rem, 4vw, 3.5rem)">Hero Large (clamp(2rem, 4vw, 3.5rem))</option>
                                    <option value="clamp(1.5rem, 3vw, 2.5rem)">Section Medium (clamp(1.5rem, 3vw, 2.5rem))</option>
                                    <option value="clamp(1.2rem, 2vw, 1.8rem)">Header Small (clamp(1.2rem, 2vw, 1.8rem))</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Text Alignment</label>
                                <select v-model="form.style_settings.text_align" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-700">
                                    <option value="left">Left Aligned</option>
                                    <option value="center">Center Aligned</option>
                                    <option value="right">Right Aligned</option>
                                </select>
                            </div>
                        </div>

                        <!-- TAB 3: EFFECTS & GLASSMORPHISM -->
                        <div v-show="activeTab === 'effects'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Backdrop Blur Filter</label>
                                <input type="text" placeholder="16px" v-model="form.style_settings.backdrop_blur" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs">
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Border Radius</label>
                                <input type="text" placeholder="16px" v-model="form.style_settings.border_radius" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs">
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Border Width</label>
                                <input type="text" placeholder="1px" v-model="form.style_settings.border_width" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs">
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Box Shadow / Glow Effect</label>
                                <input type="text" placeholder="0 0 25px rgba(212, 175, 55, 0.25)" v-model="form.style_settings.box_shadow" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs">
                            </div>
                        </div>

                        <!-- TAB 4: SPACING & ANIMATION -->
                        <div v-show="activeTab === 'motion'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Section Vertical Padding (Y)</label>
                                <input type="text" placeholder="80px" v-model="form.style_settings.padding_y" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs">
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Enable Motion Animation</label>
                                <select v-model="form.style_settings.has_animation" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-700">
                                    <option :value="true">Enabled</option>
                                    <option :value="false">Disabled</option>
                                </select>
                            </div>

                            <div v-if="form.style_settings.has_animation">
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Animation Type (GSAP / AOS)</label>
                                <select v-model="form.style_settings.animation_type" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-700">
                                    <option value="fade-up">Fade Up</option>
                                    <option value="fade-down">Fade Down</option>
                                    <option value="zoom-in">Zoom In</option>
                                    <option value="flip-left">3D Flip Left</option>
                                </select>
                            </div>

                            <div v-if="form.style_settings.has_animation">
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Animation Duration (s)</label>
                                <input type="text" placeholder="1s" v-model="form.style_settings.animation_duration" class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs">
                            </div>
                        </div>

                    </div>
                </div>

                <!-- ================= RIGHT COLUMN: PREVIEW JSON & PRESETS (4 COL) ================= -->
                <div class="col-span-12 lg:col-span-4 space-y-6">
                    
                    <!-- PRESET THEME SELECTOR -->
                    <div class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm space-y-3">
                        <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Quick Presets</h3>
                        <p class="text-xs text-slate-500">Auto-fill style data with one click.</p>
                        
                        <div class="grid grid-cols-2 gap-2 pt-1">
                            <button type="button" @click="applyPreset('darkLuxury')" class="p-2.5 rounded-xl border border-amber-500/30 bg-slate-900 text-amber-400 text-xs font-medium hover:scale-105 transition">
                                Dark Luxury Gold
                            </button>
                            <button type="button" @click="applyPreset('cleanLight')" class="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs font-medium hover:scale-105 transition">
                                Minimal Clean Light
                            </button>
                        </div>
                    </div>

                    <!-- LIVE JSON DATA OUTPUT PREVIEW -->
                    <div class="rounded-2xl border border-slate-200/80 bg-slate-900 p-5 shadow-sm text-slate-200 space-y-3">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Generated JSON Output</h3>
                            <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        </div>
                        <pre class="text-[11px] font-mono leading-relaxed overflow-x-auto text-emerald-400 max-h-72 p-2 bg-slate-950/50 rounded-xl">{{ JSON.stringify(form.style_settings, null, 2) }}</pre>
                    </div>

                    <!-- SUBMIT ACTION -->
                    <div class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                        <button type="submit" :disabled="form.processing" class="w-full rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white shadow-lg hover:bg-indigo-500 transition duration-200 disabled:opacity-50">
                            {{ form.processing ? 'Saving...' : 'Save JSON Output' }}
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </form>

</AdminLayout>
</template>
