import '../css/app.css';
import { createInertiaApp, router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { initializeTheme } from './composables/useAppearance';
import { configureEcho } from '@laravel/echo-vue';
import flasher from '@flasher/flasher';
import { configureEcho } from '@laravel/echo-vue';
import { configureEcho } from '@laravel/echo-vue';
import { configureEcho } from '@laravel/echo-vue';

configureEcho({
    broadcaster: 'reverb',
});

configureEcho({
    broadcaster: 'reverb',
});

configureEcho({
    broadcaster: 'reverb',
});

import { HSStaticMethods } from 'preline'


// configureEcho({
//     broadcaster: 'reverb',
// });


// প্রথম load
HSStaticMethods.autoInit()

// Inertia navigation এর পরে
router.on('finish', () => {
  HSStaticMethods.autoInit()
})

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {

        //---------  laravel reverb setup 
        configureEcho({
            broadcaster: 'reverb',
            key: import.meta.env.VITE_REVERB_APP_KEY,
            wsHost: import.meta.env.VITE_REVERB_HOST,
            wsPort: import.meta.env.VITE_REVERB_PORT ?? 8080,
            wssPort: import.meta.env.VITE_REVERB_PORT ?? 8080,
            forceTLS: false, // যেহেতু লোকাল এবং http ব্যবহার করছেন
            enabledTransports: ['ws', 'wss'], // এখানে wss ও রাখতে পারেন সেফটির জন্য
            authEndpoint: '/broadcasting/auth', // প্রাইভেট চ্যানেলের জন্য এটি মাস্ট
            withCredentials: true,
            // অতিরিক্ত সিকিউরিটির জন্য এটি যোগ করুন
            auth: {
                headers: {
                    'X-App-Inertia': true, // আপনি যদি Inertia ব্যবহার করেন
                }
            }as any,
        });





        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },






    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on page load...
initializeTheme();
