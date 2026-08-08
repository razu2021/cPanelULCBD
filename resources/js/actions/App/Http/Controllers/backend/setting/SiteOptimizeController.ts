import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cacheSetting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
export const cacheSetting = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cacheSetting.url(options),
    method: 'get',
})

cacheSetting.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/cache-setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cacheSetting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
cacheSetting.url = (options?: RouteQueryOptions) => {
    return cacheSetting.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cacheSetting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
cacheSetting.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cacheSetting.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cacheSetting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
cacheSetting.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cacheSetting.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cacheSetting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
    const cacheSettingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cacheSetting.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cacheSetting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
        cacheSettingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cacheSetting.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::cacheSetting
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:19
 * @route '/admin/dashboad/manage/setting/optimize/cache-setting'
 */
        cacheSettingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cacheSetting.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cacheSetting.form = cacheSettingForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCacheClear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
export const systemCacheClear = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemCacheClear.url(options),
    method: 'get',
})

systemCacheClear.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/system-cache-clear',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCacheClear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
systemCacheClear.url = (options?: RouteQueryOptions) => {
    return systemCacheClear.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCacheClear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
systemCacheClear.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemCacheClear.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCacheClear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
systemCacheClear.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: systemCacheClear.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCacheClear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
    const systemCacheClearForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: systemCacheClear.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCacheClear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
        systemCacheClearForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemCacheClear.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemCacheClear
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:24
 * @route '/admin/dashboad/manage/setting/optimize/system-cache-clear'
 */
        systemCacheClearForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemCacheClear.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    systemCacheClear.form = systemCacheClearForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOptimize
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
export const systemOptimize = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemOptimize.url(options),
    method: 'get',
})

systemOptimize.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/production',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOptimize
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
systemOptimize.url = (options?: RouteQueryOptions) => {
    return systemOptimize.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOptimize
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
systemOptimize.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemOptimize.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOptimize
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
systemOptimize.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: systemOptimize.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOptimize
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
    const systemOptimizeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: systemOptimize.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOptimize
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
        systemOptimizeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemOptimize.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::systemOptimize
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:54
 * @route '/admin/dashboad/manage/setting/optimize/production'
 */
        systemOptimizeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemOptimize.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    systemOptimize.form = systemOptimizeForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::routeCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
export const routeCache = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: routeCache.url(options),
    method: 'get',
})

routeCache.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/route-cache',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::routeCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
routeCache.url = (options?: RouteQueryOptions) => {
    return routeCache.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::routeCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
routeCache.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: routeCache.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::routeCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
routeCache.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: routeCache.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::routeCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
    const routeCacheForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: routeCache.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::routeCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
        routeCacheForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: routeCache.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::routeCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:82
 * @route '/admin/dashboad/manage/setting/optimize/route-cache'
 */
        routeCacheForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: routeCache.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    routeCache.form = routeCacheForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::viewCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
export const viewCache = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewCache.url(options),
    method: 'get',
})

viewCache.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/view-cache',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::viewCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
viewCache.url = (options?: RouteQueryOptions) => {
    return viewCache.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::viewCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
viewCache.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewCache.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::viewCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
viewCache.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewCache.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::viewCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
    const viewCacheForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: viewCache.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::viewCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
        viewCacheForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: viewCache.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::viewCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:93
 * @route '/admin/dashboad/manage/setting/optimize/view-cache'
 */
        viewCacheForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: viewCache.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    viewCache.form = viewCacheForm
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::configCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
export const configCache = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: configCache.url(options),
    method: 'get',
})

configCache.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/optimize/config-cache',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::configCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
configCache.url = (options?: RouteQueryOptions) => {
    return configCache.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::configCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
configCache.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: configCache.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::configCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
configCache.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: configCache.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::configCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
    const configCacheForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: configCache.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::configCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
        configCacheForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: configCache.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SiteOptimizeController::configCache
 * @see app/Http/Controllers/backend/setting/SiteOptimizeController.php:104
 * @route '/admin/dashboad/manage/setting/optimize/config-cache'
 */
        configCacheForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: configCache.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    configCache.form = configCacheForm
const SiteOptimizeController = { cacheSetting, systemCacheClear, systemOptimize, routeCache, viewCache, configCache }

export default SiteOptimizeController