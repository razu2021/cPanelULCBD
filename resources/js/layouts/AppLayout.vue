<script setup lang="ts">
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import type { BreadcrumbItemType } from '@/types';

import { usePage } from '@inertiajs/vue3'

import flasher from '@flasher/flasher';
import { computed, watch } from 'vue';





interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});


//Acces share data from inertia 

const page = usePage();
const messages = computed(()=> page.props.messages)


// watch for changes in flash messages
watch(
  messages,
  (newMessages) => {
    if (newMessages) {
      flasher.render(newMessages)
    }
  },
  { immediate: true }
)



 


</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
      <slot />
    </AppLayout>
</template>
