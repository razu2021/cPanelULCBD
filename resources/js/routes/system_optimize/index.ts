import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cache_setting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
export const cache_setting = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cache_setting.url(options),
    method: 'get',
})

cache_setting.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/cache-setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cache_setting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
cache_setting.url = (options?: RouteQueryOptions) => {
    return cache_setting.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cache_setting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
cache_setting.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cache_setting.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cache_setting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
cache_setting.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cache_setting.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cache_setting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
    const cache_settingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cache_setting.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cache_setting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
        cache_settingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cache_setting.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cache_setting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
        cache_settingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cache_setting.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cache_setting.form = cache_settingForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCache_clear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
export const systemCache_clear = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemCache_clear.url(options),
    method: 'get',
})

systemCache_clear.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/system-cache-clear',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCache_clear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
systemCache_clear.url = (options?: RouteQueryOptions) => {
    return systemCache_clear.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCache_clear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
systemCache_clear.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemCache_clear.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCache_clear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
systemCache_clear.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: systemCache_clear.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCache_clear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
    const systemCache_clearForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: systemCache_clear.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCache_clear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
        systemCache_clearForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemCache_clear.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCache_clear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
        systemCache_clearForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemCache_clear.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    systemCache_clear.form = systemCache_clearForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOPtimize_production
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
export const systemOPtimize_production = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemOPtimize_production.url(options),
    method: 'get',
})

systemOPtimize_production.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/production',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOPtimize_production
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
systemOPtimize_production.url = (options?: RouteQueryOptions) => {
    return systemOPtimize_production.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOPtimize_production
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
systemOPtimize_production.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemOPtimize_production.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOPtimize_production
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
systemOPtimize_production.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: systemOPtimize_production.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOPtimize_production
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
    const systemOPtimize_productionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: systemOPtimize_production.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOPtimize_production
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
        systemOPtimize_productionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemOPtimize_production.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOPtimize_production
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
        systemOPtimize_productionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemOPtimize_production.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    systemOPtimize_production.form = systemOPtimize_productionForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::route_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
export const route_cache = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: route_cache.url(options),
    method: 'get',
})

route_cache.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/route-cache',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::route_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
route_cache.url = (options?: RouteQueryOptions) => {
    return route_cache.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::route_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
route_cache.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: route_cache.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::route_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
route_cache.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: route_cache.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::route_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
    const route_cacheForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: route_cache.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::route_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
        route_cacheForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: route_cache.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::route_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
        route_cacheForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: route_cache.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    route_cache.form = route_cacheForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::view_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
export const view_cache = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view_cache.url(options),
    method: 'get',
})

view_cache.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/view-cache',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::view_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
view_cache.url = (options?: RouteQueryOptions) => {
    return view_cache.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::view_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
view_cache.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view_cache.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::view_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
view_cache.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view_cache.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::view_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
    const view_cacheForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view_cache.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::view_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
        view_cacheForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view_cache.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::view_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
        view_cacheForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view_cache.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    view_cache.form = view_cacheForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::config_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
export const config_cache = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: config_cache.url(options),
    method: 'get',
})

config_cache.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/config-cache',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::config_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
config_cache.url = (options?: RouteQueryOptions) => {
    return config_cache.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::config_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
config_cache.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: config_cache.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::config_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
config_cache.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: config_cache.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::config_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
    const config_cacheForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: config_cache.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::config_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
        config_cacheForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: config_cache.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::config_cache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
        config_cacheForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: config_cache.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    config_cache.form = config_cacheForm
const system_optimize = {
    cache_setting: Object.assign(cache_setting, cache_setting),
systemCache_clear: Object.assign(systemCache_clear, systemCache_clear),
systemOPtimize_production: Object.assign(systemOPtimize_production, systemOPtimize_production),
route_cache: Object.assign(route_cache, route_cache),
view_cache: Object.assign(view_cache, view_cache),
config_cache: Object.assign(config_cache, config_cache),
}

export default system_optimize