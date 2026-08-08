import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\frontend\frontendController::index
 * @see app/Http/Controllers/frontend/frontendController.php:29
 * @route '/'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::index
 * @see app/Http/Controllers/frontend/frontendController.php:29
 * @route '/'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::index
 * @see app/Http/Controllers/frontend/frontendController.php:29
 * @route '/'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::index
 * @see app/Http/Controllers/frontend/frontendController.php:29
 * @route '/'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::index
 * @see app/Http/Controllers/frontend/frontendController.php:29
 * @route '/'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::index
 * @see app/Http/Controllers/frontend/frontendController.php:29
 * @route '/'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::index
 * @see app/Http/Controllers/frontend/frontendController.php:29
 * @route '/'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\frontend\frontendController::html_sitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
export const html_sitemap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: html_sitemap.url(options),
    method: 'get',
})

html_sitemap.definition = {
    methods: ["get","head"],
    url: '/html/sitemap',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::html_sitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
html_sitemap.url = (options?: RouteQueryOptions) => {
    return html_sitemap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::html_sitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
html_sitemap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: html_sitemap.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::html_sitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
html_sitemap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: html_sitemap.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::html_sitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
    const html_sitemapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: html_sitemap.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::html_sitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
        html_sitemapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: html_sitemap.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::html_sitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
        html_sitemapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: html_sitemap.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    html_sitemap.form = html_sitemapForm
/**
 * @see routes/web.php:19
 * @route '/site/manage/users/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/site/manage/users/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:19
 * @route '/site/manage/users/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:19
 * @route '/site/manage/users/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:19
 * @route '/site/manage/users/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:19
 * @route '/site/manage/users/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:19
 * @route '/site/manage/users/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:19
 * @route '/site/manage/users/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\frontend\frontendController::section
 * @see app/Http/Controllers/frontend/frontendController.php:266
 * @route '/section'
 */
export const section = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: section.url(options),
    method: 'get',
})

section.definition = {
    methods: ["get","head"],
    url: '/section',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::section
 * @see app/Http/Controllers/frontend/frontendController.php:266
 * @route '/section'
 */
section.url = (options?: RouteQueryOptions) => {
    return section.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::section
 * @see app/Http/Controllers/frontend/frontendController.php:266
 * @route '/section'
 */
section.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: section.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::section
 * @see app/Http/Controllers/frontend/frontendController.php:266
 * @route '/section'
 */
section.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: section.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::section
 * @see app/Http/Controllers/frontend/frontendController.php:266
 * @route '/section'
 */
    const sectionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: section.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::section
 * @see app/Http/Controllers/frontend/frontendController.php:266
 * @route '/section'
 */
        sectionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: section.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::section
 * @see app/Http/Controllers/frontend/frontendController.php:266
 * @route '/section'
 */
        sectionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: section.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    section.form = sectionForm
/**
* @see \App\Http\Controllers\backend\AdminController::admin_dashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
export const admin_dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin_dashboard.url(options),
    method: 'get',
})

admin_dashboard.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\AdminController::admin_dashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
admin_dashboard.url = (options?: RouteQueryOptions) => {
    return admin_dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\AdminController::admin_dashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
admin_dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin_dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\AdminController::admin_dashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
admin_dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin_dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\AdminController::admin_dashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
    const admin_dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: admin_dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\AdminController::admin_dashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
        admin_dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin_dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\AdminController::admin_dashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
        admin_dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin_dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    admin_dashboard.form = admin_dashboardForm
/**
* @see \App\Http\Controllers\frontend\frontendController::categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
export const categorypage = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorypage.url(args, options),
    method: 'get',
})

categorypage.definition = {
    methods: ["get","head"],
    url: '/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
categorypage.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        category: args.category,
                }

    return categorypage.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
categorypage.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorypage.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
categorypage.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categorypage.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
    const categorypageForm = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: categorypage.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
        categorypageForm.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categorypage.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
        categorypageForm.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categorypage.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    categorypage.form = categorypageForm
/**
* @see \App\Http\Controllers\frontend\frontendController::sub_categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
export const sub_categorypage = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sub_categorypage.url(args, options),
    method: 'get',
})

sub_categorypage.definition = {
    methods: ["get","head"],
    url: '/{category}/{subcategory}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::sub_categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
sub_categorypage.url = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                    subcategory: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        category: args.category,
                                subcategory: args.subcategory,
                }

    return sub_categorypage.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace('{subcategory}', parsedArgs.subcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::sub_categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
sub_categorypage.get = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sub_categorypage.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::sub_categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
sub_categorypage.head = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sub_categorypage.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::sub_categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
    const sub_categorypageForm = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sub_categorypage.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::sub_categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
        sub_categorypageForm.get = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sub_categorypage.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::sub_categorypage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
        sub_categorypageForm.head = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sub_categorypage.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sub_categorypage.form = sub_categorypageForm
/**
* @see \App\Http\Controllers\frontend\frontendController::child_CategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
export const child_CategoryPage = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: child_CategoryPage.url(args, options),
    method: 'get',
})

child_CategoryPage.definition = {
    methods: ["get","head"],
    url: '/{category}/{subcategory}/{childcategory}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::child_CategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
child_CategoryPage.url = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                    subcategory: args[1],
                    childcategory: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        category: args.category,
                                subcategory: args.subcategory,
                                childcategory: args.childcategory,
                }

    return child_CategoryPage.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace('{subcategory}', parsedArgs.subcategory.toString())
            .replace('{childcategory}', parsedArgs.childcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::child_CategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
child_CategoryPage.get = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: child_CategoryPage.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::child_CategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
child_CategoryPage.head = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: child_CategoryPage.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::child_CategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
    const child_CategoryPageForm = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: child_CategoryPage.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::child_CategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
        child_CategoryPageForm.get = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: child_CategoryPage.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::child_CategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
        child_CategoryPageForm.head = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: child_CategoryPage.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    child_CategoryPage.form = child_CategoryPageForm