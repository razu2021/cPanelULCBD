
<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
</script>



<template>
    <AdminLayout>
        <div class="min-h-screen bg-slate-50 text-slate-900">

            <div class="mx-auto max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8">

                <!-- ========================================
                    TOP HEADER
                ========================================= -->
                <div class="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <div class="flex items-center gap-3">

                            <!-- AI Icon -->
                            <div
                                class="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 shadow-lg shadow-slate-900/10">

                                <div
                                    class="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 opacity-80 blur-[1px]">
                                </div>

                                <svg
                                    class="relative h-5 w-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">

                                    <path
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 3v2m0 14v2M5.64 5.64l1.42 1.42m9.9 9.9 1.42 1.42M3 12h2m14 0h2M5.64 18.36l1.42-1.42m9.9-9.9 1.42-1.42" />

                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4"
                                        stroke-width="1.8" />
                                </svg>

                            </div>

                            <div>
                                <h1 class="text-2xl font-bold tracking-tight text-slate-950">
                                    AI Assistant
                                </h1>

                                <p class="mt-0.5 text-sm text-slate-500">
                                    Manage and monitor your intelligent assistant
                                </p>
                            </div>

                        </div>
                    </div>


                    <!-- Header Actions -->
                    <div class="flex items-center gap-3">

                        <!-- Status -->
                        <div
                            class="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-2 text-xs font-semibold text-emerald-600 shadow-sm">

                            <span class="relative flex h-2 w-2">
                                <span
                                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60">
                                </span>

                                <span
                                    class="relative h-2 w-2 rounded-full bg-emerald-500">
                                </span>
                            </span>

                            AI Online
                        </div>


                        <!-- Add Knowledge -->
                        <button
                            class="hidden items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 sm:flex">

                            <svg
                                class="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">

                                <path
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    d="M12 5v14M5 12h14" />

                            </svg>

                            Add Knowledge
                        </button>

                    </div>

                </div>


                <!-- ========================================
                    AI HERO CARD
                ========================================= -->
                <div
                    class="relative mb-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                    <!-- Gradient Background -->
                    <div
                        class="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-violet-50 via-transparent to-transparent">
                    </div>

                    <div
                        class="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl">
                    </div>

                    <div
                        class="absolute -bottom-28 right-1/4 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl">
                    </div>


                    <div
                        class="relative flex flex-col gap-6 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">

                        <div class="max-w-2xl">

                            <div
                                class="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">

                                <span>✦</span>

                                Intelligent Assistant

                            </div>

                            <h2
                                class="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">

                                Your AI assistant is
                                <span
                                    class="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                                    ready to help.
                                </span>

                            </h2>

                            <p
                                class="mt-2 max-w-xl text-sm leading-6 text-slate-500">

                                Your chatbot is actively handling conversations,
                                learning from your knowledge base and improving
                                response accuracy.

                            </p>

                            <div class="mt-5 flex flex-wrap gap-3">

                                <button
                                    class="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">

                                    Open Conversations
                                </button>

                                <button
                                    class="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">

                                    Manage Knowledge
                                </button>

                            </div>

                        </div>


                        <!-- AI Orb -->
                        <div class="flex justify-center lg:pr-12">

                            <div
                                class="relative flex h-40 w-40 items-center justify-center">

                                <div
                                    class="absolute h-40 w-40 rounded-full bg-gradient-to-r from-violet-300/30 to-cyan-300/30 blur-2xl">
                                </div>

                                <div
                                    class="absolute h-32 w-32 rounded-full border border-violet-200 bg-gradient-to-br from-violet-50 to-cyan-50">
                                </div>

                                <div
                                    class="relative flex h-20 w-20 items-center justify-center rounded-full bg-slate-950 shadow-xl shadow-violet-300/30">

                                    <div
                                        class="absolute inset-2 rounded-full border border-violet-400/30">
                                    </div>

                                    <svg
                                        class="h-8 w-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">

                                        <path
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 3v3m0 12v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M3 12h3m12 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12" />

                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="3"
                                            stroke-width="1.5" />

                                    </svg>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>


                <!-- ========================================
                    STATS
                ========================================= -->
                <div class="grid grid-cols-2 gap-4 xl:grid-cols-4">

                    <!-- Card -->
                    <div
                        class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

                        <div class="flex items-center justify-between">

                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">

                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">

                                    <path
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        d="M8 10h8M8 14h5M7 19l-4 2 1.5-4.5A8 8 0 0 1 4 12a8 8 0 1 1 16 0 8 8 0 0 1-1.5 4.5" />

                                </svg>

                            </div>

                            <span
                                class="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">

                                +12.8%

                            </span>

                        </div>

                        <p class="mt-5 text-sm text-slate-500">
                            Conversations
                        </p>

                        <div class="mt-1 flex items-end gap-2">

                            <h3 class="text-2xl font-bold tracking-tight text-slate-950">
                                12,840
                            </h3>

                            <span class="mb-1 text-xs text-slate-400">
                                total
                            </span>

                        </div>

                    </div>


                    <!-- Card -->
                    <div
                        class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

                        <div class="flex items-center justify-between">

                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">

                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">

                                    <path
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l2.5 2" />

                                </svg>

                            </div>

                            <span
                                class="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">

                                +8.4%

                            </span>

                        </div>

                        <p class="mt-5 text-sm text-slate-500">
                            Messages Today
                        </p>

                        <div class="mt-1 flex items-end gap-2">

                            <h3 class="text-2xl font-bold tracking-tight text-slate-950">
                                2,486
                            </h3>

                            <span class="mb-1 text-xs text-slate-400">
                                messages
                            </span>

                        </div>

                    </div>


                    <!-- Card -->
                    <div
                        class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

                        <div class="flex items-center justify-between">

                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">

                                    <path
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        d="M5 19V9m7 10V5m7 14v-7" />

                                </svg>

                            </div>

                            <span
                                class="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">

                                +5.2%

                            </span>

                        </div>

                        <p class="mt-5 text-sm text-slate-500">
                            Resolution Rate
                        </p>

                        <div class="mt-1 flex items-end gap-2">

                            <h3 class="text-2xl font-bold tracking-tight text-slate-950">
                                94.6%
                            </h3>

                            <span class="mb-1 text-xs text-slate-400">
                                resolved
                            </span>

                        </div>

                    </div>


                    <!-- Card -->
                    <div
                        class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

                        <div class="flex items-center justify-between">

                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">

                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">

                                    <path
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />

                                </svg>

                            </div>

                            <span
                                class="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-600">

                                Excellent

                            </span>

                        </div>

                        <p class="mt-5 text-sm text-slate-500">
                            AI Satisfaction
                        </p>

                        <div class="mt-1 flex items-end gap-2">

                            <h3 class="text-2xl font-bold tracking-tight text-slate-950">
                                4.8
                            </h3>

                            <span class="mb-1 text-xs text-slate-400">
                                / 5.0
                            </span>

                        </div>

                    </div>

                </div>


                <!-- ========================================
                    ANALYTICS GRID
                ========================================= -->
                <div class="mt-5 grid gap-5 xl:grid-cols-3">

                    <!-- Chart -->
                    <div
                        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">

                        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                            <div>
                                <h3 class="font-semibold text-slate-950">
                                    Conversation Analytics
                                </h3>

                                <p class="mt-1 text-xs text-slate-400">
                                    Chat activity for the current week
                                </p>
                            </div>

                            <button
                                class="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">

                                Last 7 Days

                            </button>

                        </div>


                        <!-- Chart -->
                        <div class="mt-7 flex h-60 items-end gap-2 sm:gap-5">

                            <div class="flex h-full flex-1 flex-col justify-end gap-2">
                                <div
                                    class="h-[35%] rounded-t-xl bg-gradient-to-t from-violet-100 to-violet-500 transition hover:from-violet-200">
                                </div>
                                <span class="text-center text-[10px] text-slate-400">Mon</span>
                            </div>

                            <div class="flex h-full flex-1 flex-col justify-end gap-2">
                                <div
                                    class="h-[52%] rounded-t-xl bg-gradient-to-t from-violet-100 to-violet-500 transition hover:from-violet-200">
                                </div>
                                <span class="text-center text-[10px] text-slate-400">Tue</span>
                            </div>

                            <div class="flex h-full flex-1 flex-col justify-end gap-2">
                                <div
                                    class="h-[43%] rounded-t-xl bg-gradient-to-t from-cyan-100 to-cyan-500 transition hover:from-cyan-200">
                                </div>
                                <span class="text-center text-[10px] text-slate-400">Wed</span>
                            </div>

                            <div class="flex h-full flex-1 flex-col justify-end gap-2">
                                <div
                                    class="h-[68%] rounded-t-xl bg-gradient-to-t from-violet-100 to-violet-500 transition hover:from-violet-200">
                                </div>
                                <span class="text-center text-[10px] text-slate-400">Thu</span>
                            </div>

                            <div class="flex h-full flex-1 flex-col justify-end gap-2">
                                <div
                                    class="h-[58%] rounded-t-xl bg-gradient-to-t from-cyan-100 to-cyan-500 transition hover:from-cyan-200">
                                </div>
                                <span class="text-center text-[10px] text-slate-400">Fri</span>
                            </div>

                            <div class="flex h-full flex-1 flex-col justify-end gap-2">
                                <div
                                    class="h-[82%] rounded-t-xl bg-gradient-to-t from-violet-100 to-violet-500 transition hover:from-violet-200">
                                </div>
                                <span class="text-center text-[10px] text-slate-400">Sat</span>
                            </div>

                            <div class="flex h-full flex-1 flex-col justify-end gap-2">
                                <div
                                    class="h-[72%] rounded-t-xl bg-gradient-to-t from-cyan-100 to-cyan-500 transition hover:from-cyan-200">
                                </div>
                                <span class="text-center text-[10px] text-slate-400">Sun</span>
                            </div>

                        </div>

                    </div>


                    <!-- Knowledge -->
                    <div
                        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                        <div class="flex items-center justify-between">

                            <div>
                                <h3 class="font-semibold text-slate-950">
                                    Knowledge Base
                                </h3>

                                <p class="mt-1 text-xs text-slate-400">
                                    AI learning resources
                                </p>
                            </div>

                            <button
                                class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50">

                                +

                            </button>

                        </div>


                        <!-- Progress -->
                        <div class="mt-7 flex items-center gap-5">

                            <div class="relative flex h-28 w-28 shrink-0 items-center justify-center">

                                <div
                                    class="absolute inset-0 rounded-full border-[10px] border-slate-100">
                                </div>

                                <div
                                    class="absolute inset-0 rotate-[-40deg] rounded-full border-[10px] border-transparent border-t-violet-500 border-r-violet-500">
                                </div>

                                <div class="text-center">
                                    <div class="text-xl font-bold text-slate-950">
                                        92%
                                    </div>

                                    <div class="text-[10px] text-slate-400">
                                        Ready
                                    </div>
                                </div>

                            </div>


                            <div class="flex-1 space-y-3">

                                <div class="flex items-center justify-between text-xs">
                                    <span class="text-slate-500">
                                        Documents
                                    </span>

                                    <span class="font-semibold">
                                        128
                                    </span>
                                </div>

                                <div class="flex items-center justify-between text-xs">
                                    <span class="text-slate-500">
                                        FAQs
                                    </span>

                                    <span class="font-semibold">
                                        342
                                    </span>
                                </div>

                                <div class="flex items-center justify-between text-xs">
                                    <span class="text-slate-500">
                                        Website Pages
                                    </span>

                                    <span class="font-semibold">
                                        86
                                    </span>
                                </div>

                            </div>

                        </div>


                        <!-- Knowledge Progress -->
                        <div class="mt-7">

                            <div class="mb-2 flex justify-between text-xs">
                                <span class="text-slate-500">
                                    Knowledge Quality
                                </span>

                                <span class="font-semibold text-violet-600">
                                    92%
                                </span>
                            </div>

                            <div class="h-2 overflow-hidden rounded-full bg-slate-100">

                                <div
                                    class="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400">
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <!-- ========================================
                    BOTTOM
                ========================================= -->
                <div class="mt-5 grid gap-5 lg:grid-cols-3">

                    <!-- Recent Conversations -->
                    <div
                        class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">

                        <div
                            class="flex items-center justify-between border-b border-slate-100 px-5 py-4">

                            <div>
                                <h3 class="font-semibold text-slate-950">
                                    Recent Conversations
                                </h3>

                                <p class="mt-1 text-xs text-slate-400">
                                    Latest customer interactions
                                </p>
                            </div>

                            <button
                                class="text-xs font-semibold text-violet-600 hover:text-violet-700">

                                View All

                            </button>

                        </div>


                        <div class="divide-y divide-slate-100">

                            <!-- Item -->
                            <div
                                class="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-50">

                                <div
                                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-bold text-white">

                                    AR

                                </div>

                                <div class="min-w-0 flex-1">

                                    <div class="flex items-center justify-between gap-3">

                                        <h4
                                            class="truncate text-sm font-semibold text-slate-800">

                                            Abdullah Rahman

                                        </h4>

                                        <span
                                            class="shrink-0 text-[10px] text-slate-400">

                                            2 min ago

                                        </span>

                                    </div>

                                    <p
                                        class="mt-1 truncate text-xs text-slate-400">

                                        How can I update my account information?

                                    </p>

                                </div>

                                <span
                                    class="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600 sm:block">

                                    Resolved

                                </span>

                            </div>


                            <!-- Item -->
                            <div
                                class="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-50">

                                <div
                                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-bold text-white">

                                    NS

                                </div>

                                <div class="min-w-0 flex-1">

                                    <div class="flex items-center justify-between gap-3">

                                        <h4
                                            class="truncate text-sm font-semibold text-slate-800">

                                            Nadia Sultana

                                        </h4>

                                        <span
                                            class="shrink-0 text-[10px] text-slate-400">

                                            8 min ago

                                        </span>

                                    </div>

                                    <p
                                        class="mt-1 truncate text-xs text-slate-400">

                                        What are your service charges?

                                    </p>

                                </div>

                                <span
                                    class="hidden rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-600 sm:block">

                                    Active

                                </span>

                            </div>


                            <!-- Item -->
                            <div
                                class="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-50">

                                <div
                                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-xs font-bold text-white">

                                    SH

                                </div>

                                <div class="min-w-0 flex-1">

                                    <div class="flex items-center justify-between gap-3">

                                        <h4
                                            class="truncate text-sm font-semibold text-slate-800">

                                            Saiful Hasan

                                        </h4>

                                        <span
                                            class="shrink-0 text-[10px] text-slate-400">

                                            21 min ago

                                        </span>

                                    </div>

                                    <p
                                        class="mt-1 truncate text-xs text-slate-400">

                                        Can you explain your refund policy?

                                    </p>

                                </div>

                                <span
                                    class="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600 sm:block">

                                    Resolved

                                </span>

                            </div>

                        </div>

                    </div>


                    <!-- Quick Actions -->
                    <div
                        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                        <h3 class="font-semibold text-slate-950">
                            Quick Actions
                        </h3>

                        <p class="mt-1 text-xs text-slate-400">
                            Configure your AI assistant
                        </p>


                        <div class="mt-5 space-y-2.5">

                            <button
                                class="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/50">

                                <div
                                    class="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">

                                    +

                                </div>

                                <div>
                                    <div class="text-sm font-semibold text-slate-800">
                                        Add Knowledge
                                    </div>

                                    <div class="text-[10px] text-slate-400">
                                        Train your assistant
                                    </div>
                                </div>

                            </button>


                            <button
                                class="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:border-cyan-200 hover:bg-cyan-50/50">

                                <div
                                    class="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">

                                    <svg
                                        class="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">

                                        <path
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            d="M12 5v14M5 12h14" />

                                    </svg>

                                </div>

                                <div>
                                    <div class="text-sm font-semibold text-slate-800">
                                        Create Intent
                                    </div>

                                    <div class="text-[10px] text-slate-400">
                                        Define chatbot behavior
                                    </div>
                                </div>

                            </button>


                            <button
                                class="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:border-blue-200 hover:bg-blue-50/50">

                                <div
                                    class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">

                                    <svg
                                        class="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">

                                        <path
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            d="M4 7h16M4 12h16M4 17h10" />

                                    </svg>

                                </div>

                                <div>
                                    <div class="text-sm font-semibold text-slate-800">
                                        Conversations
                                    </div>

                                    <div class="text-[10px] text-slate-400">
                                        View chat history
                                    </div>
                                </div>

                            </button>


                            <button
                                class="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:border-amber-200 hover:bg-amber-50/50">

                                <div
                                    class="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">

                                    ⚙

                                </div>

                                <div>
                                    <div class="text-sm font-semibold text-slate-800">
                                        AI Settings
                                    </div>

                                    <div class="text-[10px] text-slate-400">
                                        Configure assistant
                                    </div>
                                </div>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </AdminLayout>
</template>












