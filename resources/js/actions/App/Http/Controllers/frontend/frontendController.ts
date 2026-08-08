import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\frontend\frontendController::htmlSitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
export const htmlSitemap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: htmlSitemap.url(options),
    method: 'get',
})

htmlSitemap.definition = {
    methods: ["get","head"],
    url: '/html/sitemap',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::htmlSitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
htmlSitemap.url = (options?: RouteQueryOptions) => {
    return htmlSitemap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::htmlSitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
htmlSitemap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: htmlSitemap.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::htmlSitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
htmlSitemap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: htmlSitemap.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::htmlSitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
    const htmlSitemapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: htmlSitemap.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::htmlSitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
        htmlSitemapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: htmlSitemap.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::htmlSitemap
 * @see app/Http/Controllers/frontend/frontendController.php:244
 * @route '/html/sitemap'
 */
        htmlSitemapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: htmlSitemap.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    htmlSitemap.form = htmlSitemapForm
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
* @see \App\Http\Controllers\frontend\frontendController::serviceDetails
 * @see app/Http/Controllers/frontend/frontendController.php:153
 * @route '/service/details/{id}/{slug}'
 */
export const serviceDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serviceDetails.url(args, options),
    method: 'get',
})

serviceDetails.definition = {
    methods: ["get","head"],
    url: '/service/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::serviceDetails
 * @see app/Http/Controllers/frontend/frontendController.php:153
 * @route '/service/details/{id}/{slug}'
 */
serviceDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return serviceDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::serviceDetails
 * @see app/Http/Controllers/frontend/frontendController.php:153
 * @route '/service/details/{id}/{slug}'
 */
serviceDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serviceDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::serviceDetails
 * @see app/Http/Controllers/frontend/frontendController.php:153
 * @route '/service/details/{id}/{slug}'
 */
serviceDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: serviceDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::serviceDetails
 * @see app/Http/Controllers/frontend/frontendController.php:153
 * @route '/service/details/{id}/{slug}'
 */
    const serviceDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: serviceDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::serviceDetails
 * @see app/Http/Controllers/frontend/frontendController.php:153
 * @route '/service/details/{id}/{slug}'
 */
        serviceDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: serviceDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::serviceDetails
 * @see app/Http/Controllers/frontend/frontendController.php:153
 * @route '/service/details/{id}/{slug}'
 */
        serviceDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: serviceDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    serviceDetails.form = serviceDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::blogDetails
 * @see app/Http/Controllers/frontend/frontendController.php:160
 * @route '/blog/details/{id}/{slug}'
 */
export const blogDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogDetails.url(args, options),
    method: 'get',
})

blogDetails.definition = {
    methods: ["get","head"],
    url: '/blog/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::blogDetails
 * @see app/Http/Controllers/frontend/frontendController.php:160
 * @route '/blog/details/{id}/{slug}'
 */
blogDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return blogDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::blogDetails
 * @see app/Http/Controllers/frontend/frontendController.php:160
 * @route '/blog/details/{id}/{slug}'
 */
blogDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::blogDetails
 * @see app/Http/Controllers/frontend/frontendController.php:160
 * @route '/blog/details/{id}/{slug}'
 */
blogDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blogDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::blogDetails
 * @see app/Http/Controllers/frontend/frontendController.php:160
 * @route '/blog/details/{id}/{slug}'
 */
    const blogDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blogDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::blogDetails
 * @see app/Http/Controllers/frontend/frontendController.php:160
 * @route '/blog/details/{id}/{slug}'
 */
        blogDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::blogDetails
 * @see app/Http/Controllers/frontend/frontendController.php:160
 * @route '/blog/details/{id}/{slug}'
 */
        blogDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blogDetails.form = blogDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::eventDetails
 * @see app/Http/Controllers/frontend/frontendController.php:167
 * @route '/event/details/{id}/{slug}'
 */
export const eventDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventDetails.url(args, options),
    method: 'get',
})

eventDetails.definition = {
    methods: ["get","head"],
    url: '/event/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::eventDetails
 * @see app/Http/Controllers/frontend/frontendController.php:167
 * @route '/event/details/{id}/{slug}'
 */
eventDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return eventDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::eventDetails
 * @see app/Http/Controllers/frontend/frontendController.php:167
 * @route '/event/details/{id}/{slug}'
 */
eventDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::eventDetails
 * @see app/Http/Controllers/frontend/frontendController.php:167
 * @route '/event/details/{id}/{slug}'
 */
eventDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eventDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::eventDetails
 * @see app/Http/Controllers/frontend/frontendController.php:167
 * @route '/event/details/{id}/{slug}'
 */
    const eventDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: eventDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::eventDetails
 * @see app/Http/Controllers/frontend/frontendController.php:167
 * @route '/event/details/{id}/{slug}'
 */
        eventDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::eventDetails
 * @see app/Http/Controllers/frontend/frontendController.php:167
 * @route '/event/details/{id}/{slug}'
 */
        eventDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eventDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    eventDetails.form = eventDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::postDetails
 * @see app/Http/Controllers/frontend/frontendController.php:174
 * @route '/post/details/{id}/{slug}'
 */
export const postDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: postDetails.url(args, options),
    method: 'get',
})

postDetails.definition = {
    methods: ["get","head"],
    url: '/post/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::postDetails
 * @see app/Http/Controllers/frontend/frontendController.php:174
 * @route '/post/details/{id}/{slug}'
 */
postDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return postDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::postDetails
 * @see app/Http/Controllers/frontend/frontendController.php:174
 * @route '/post/details/{id}/{slug}'
 */
postDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: postDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::postDetails
 * @see app/Http/Controllers/frontend/frontendController.php:174
 * @route '/post/details/{id}/{slug}'
 */
postDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: postDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::postDetails
 * @see app/Http/Controllers/frontend/frontendController.php:174
 * @route '/post/details/{id}/{slug}'
 */
    const postDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: postDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::postDetails
 * @see app/Http/Controllers/frontend/frontendController.php:174
 * @route '/post/details/{id}/{slug}'
 */
        postDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: postDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::postDetails
 * @see app/Http/Controllers/frontend/frontendController.php:174
 * @route '/post/details/{id}/{slug}'
 */
        postDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: postDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    postDetails.form = postDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::newsDetails
 * @see app/Http/Controllers/frontend/frontendController.php:180
 * @route '/news/details/{id}/{slug}'
 */
export const newsDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsDetails.url(args, options),
    method: 'get',
})

newsDetails.definition = {
    methods: ["get","head"],
    url: '/news/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::newsDetails
 * @see app/Http/Controllers/frontend/frontendController.php:180
 * @route '/news/details/{id}/{slug}'
 */
newsDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return newsDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::newsDetails
 * @see app/Http/Controllers/frontend/frontendController.php:180
 * @route '/news/details/{id}/{slug}'
 */
newsDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::newsDetails
 * @see app/Http/Controllers/frontend/frontendController.php:180
 * @route '/news/details/{id}/{slug}'
 */
newsDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newsDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::newsDetails
 * @see app/Http/Controllers/frontend/frontendController.php:180
 * @route '/news/details/{id}/{slug}'
 */
    const newsDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: newsDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::newsDetails
 * @see app/Http/Controllers/frontend/frontendController.php:180
 * @route '/news/details/{id}/{slug}'
 */
        newsDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: newsDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::newsDetails
 * @see app/Http/Controllers/frontend/frontendController.php:180
 * @route '/news/details/{id}/{slug}'
 */
        newsDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: newsDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    newsDetails.form = newsDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::promotDetails
 * @see app/Http/Controllers/frontend/frontendController.php:186
 * @route '/promot/details/{id}/{slug}'
 */
export const promotDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: promotDetails.url(args, options),
    method: 'get',
})

promotDetails.definition = {
    methods: ["get","head"],
    url: '/promot/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::promotDetails
 * @see app/Http/Controllers/frontend/frontendController.php:186
 * @route '/promot/details/{id}/{slug}'
 */
promotDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return promotDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::promotDetails
 * @see app/Http/Controllers/frontend/frontendController.php:186
 * @route '/promot/details/{id}/{slug}'
 */
promotDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: promotDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::promotDetails
 * @see app/Http/Controllers/frontend/frontendController.php:186
 * @route '/promot/details/{id}/{slug}'
 */
promotDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: promotDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::promotDetails
 * @see app/Http/Controllers/frontend/frontendController.php:186
 * @route '/promot/details/{id}/{slug}'
 */
    const promotDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: promotDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::promotDetails
 * @see app/Http/Controllers/frontend/frontendController.php:186
 * @route '/promot/details/{id}/{slug}'
 */
        promotDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: promotDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::promotDetails
 * @see app/Http/Controllers/frontend/frontendController.php:186
 * @route '/promot/details/{id}/{slug}'
 */
        promotDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: promotDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    promotDetails.form = promotDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::protfoliosDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/protfolio/details/{id}/{slug}'
 */
export const protfoliosDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: protfoliosDetails.url(args, options),
    method: 'get',
})

protfoliosDetails.definition = {
    methods: ["get","head"],
    url: '/protfolio/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::protfoliosDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/protfolio/details/{id}/{slug}'
 */
protfoliosDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return protfoliosDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::protfoliosDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/protfolio/details/{id}/{slug}'
 */
protfoliosDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: protfoliosDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::protfoliosDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/protfolio/details/{id}/{slug}'
 */
protfoliosDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: protfoliosDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::protfoliosDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/protfolio/details/{id}/{slug}'
 */
    const protfoliosDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: protfoliosDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::protfoliosDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/protfolio/details/{id}/{slug}'
 */
        protfoliosDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: protfoliosDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::protfoliosDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/protfolio/details/{id}/{slug}'
 */
        protfoliosDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: protfoliosDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    protfoliosDetails.form = protfoliosDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::casestudyDetails
 * @see app/Http/Controllers/frontend/frontendController.php:193
 * @route '/case-study/details/{id}/{slug}'
 */
export const casestudyDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: casestudyDetails.url(args, options),
    method: 'get',
})

casestudyDetails.definition = {
    methods: ["get","head"],
    url: '/case-study/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::casestudyDetails
 * @see app/Http/Controllers/frontend/frontendController.php:193
 * @route '/case-study/details/{id}/{slug}'
 */
casestudyDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return casestudyDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::casestudyDetails
 * @see app/Http/Controllers/frontend/frontendController.php:193
 * @route '/case-study/details/{id}/{slug}'
 */
casestudyDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: casestudyDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::casestudyDetails
 * @see app/Http/Controllers/frontend/frontendController.php:193
 * @route '/case-study/details/{id}/{slug}'
 */
casestudyDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: casestudyDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::casestudyDetails
 * @see app/Http/Controllers/frontend/frontendController.php:193
 * @route '/case-study/details/{id}/{slug}'
 */
    const casestudyDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: casestudyDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::casestudyDetails
 * @see app/Http/Controllers/frontend/frontendController.php:193
 * @route '/case-study/details/{id}/{slug}'
 */
        casestudyDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: casestudyDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::casestudyDetails
 * @see app/Http/Controllers/frontend/frontendController.php:193
 * @route '/case-study/details/{id}/{slug}'
 */
        casestudyDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: casestudyDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    casestudyDetails.form = casestudyDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::countryDetails
 * @see app/Http/Controllers/frontend/frontendController.php:200
 * @route '/our-preferable-country/details/{id}/{slug}'
 */
export const countryDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countryDetails.url(args, options),
    method: 'get',
})

countryDetails.definition = {
    methods: ["get","head"],
    url: '/our-preferable-country/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::countryDetails
 * @see app/Http/Controllers/frontend/frontendController.php:200
 * @route '/our-preferable-country/details/{id}/{slug}'
 */
countryDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return countryDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::countryDetails
 * @see app/Http/Controllers/frontend/frontendController.php:200
 * @route '/our-preferable-country/details/{id}/{slug}'
 */
countryDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countryDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::countryDetails
 * @see app/Http/Controllers/frontend/frontendController.php:200
 * @route '/our-preferable-country/details/{id}/{slug}'
 */
countryDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countryDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::countryDetails
 * @see app/Http/Controllers/frontend/frontendController.php:200
 * @route '/our-preferable-country/details/{id}/{slug}'
 */
    const countryDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: countryDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::countryDetails
 * @see app/Http/Controllers/frontend/frontendController.php:200
 * @route '/our-preferable-country/details/{id}/{slug}'
 */
        countryDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: countryDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::countryDetails
 * @see app/Http/Controllers/frontend/frontendController.php:200
 * @route '/our-preferable-country/details/{id}/{slug}'
 */
        countryDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: countryDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    countryDetails.form = countryDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::sectionsxDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/section/details/{id}/{slug}'
 */
export const sectionsxDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sectionsxDetails.url(args, options),
    method: 'get',
})

sectionsxDetails.definition = {
    methods: ["get","head"],
    url: '/section/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::sectionsxDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/section/details/{id}/{slug}'
 */
sectionsxDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return sectionsxDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::sectionsxDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/section/details/{id}/{slug}'
 */
sectionsxDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sectionsxDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::sectionsxDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/section/details/{id}/{slug}'
 */
sectionsxDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sectionsxDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::sectionsxDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/section/details/{id}/{slug}'
 */
    const sectionsxDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sectionsxDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::sectionsxDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/section/details/{id}/{slug}'
 */
        sectionsxDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sectionsxDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::sectionsxDetails
 * @see app/Http/Controllers/frontend/frontendController.php:0
 * @route '/section/details/{id}/{slug}'
 */
        sectionsxDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sectionsxDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sectionsxDetails.form = sectionsxDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::teamDetails
 * @see app/Http/Controllers/frontend/frontendController.php:212
 * @route '/team/details/{id}/{slug}'
 */
export const teamDetails = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teamDetails.url(args, options),
    method: 'get',
})

teamDetails.definition = {
    methods: ["get","head"],
    url: '/team/details/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::teamDetails
 * @see app/Http/Controllers/frontend/frontendController.php:212
 * @route '/team/details/{id}/{slug}'
 */
teamDetails.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                }

    return teamDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::teamDetails
 * @see app/Http/Controllers/frontend/frontendController.php:212
 * @route '/team/details/{id}/{slug}'
 */
teamDetails.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teamDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::teamDetails
 * @see app/Http/Controllers/frontend/frontendController.php:212
 * @route '/team/details/{id}/{slug}'
 */
teamDetails.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teamDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::teamDetails
 * @see app/Http/Controllers/frontend/frontendController.php:212
 * @route '/team/details/{id}/{slug}'
 */
    const teamDetailsForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: teamDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::teamDetails
 * @see app/Http/Controllers/frontend/frontendController.php:212
 * @route '/team/details/{id}/{slug}'
 */
        teamDetailsForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teamDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::teamDetails
 * @see app/Http/Controllers/frontend/frontendController.php:212
 * @route '/team/details/{id}/{slug}'
 */
        teamDetailsForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teamDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    teamDetails.form = teamDetailsForm
/**
* @see \App\Http\Controllers\frontend\frontendController::categoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
export const categoryPage = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryPage.url(args, options),
    method: 'get',
})

categoryPage.definition = {
    methods: ["get","head"],
    url: '/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::categoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
categoryPage.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return categoryPage.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::categoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
categoryPage.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryPage.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::categoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
categoryPage.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoryPage.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::categoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
    const categoryPageForm = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: categoryPage.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::categoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
        categoryPageForm.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categoryPage.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::categoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:56
 * @route '/{category}'
 */
        categoryPageForm.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categoryPage.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    categoryPage.form = categoryPageForm
/**
* @see \App\Http\Controllers\frontend\frontendController::subCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
export const subCategoryPage = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subCategoryPage.url(args, options),
    method: 'get',
})

subCategoryPage.definition = {
    methods: ["get","head"],
    url: '/{category}/{subcategory}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::subCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
subCategoryPage.url = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions) => {
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

    return subCategoryPage.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace('{subcategory}', parsedArgs.subcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::subCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
subCategoryPage.get = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subCategoryPage.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::subCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
subCategoryPage.head = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: subCategoryPage.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::subCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
    const subCategoryPageForm = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: subCategoryPage.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::subCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
        subCategoryPageForm.get = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subCategoryPage.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::subCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:81
 * @route '/{category}/{subcategory}'
 */
        subCategoryPageForm.head = (args: { category: string | number, subcategory: string | number } | [category: string | number, subcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subCategoryPage.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    subCategoryPage.form = subCategoryPageForm
/**
* @see \App\Http\Controllers\frontend\frontendController::childCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
export const childCategoryPage = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: childCategoryPage.url(args, options),
    method: 'get',
})

childCategoryPage.definition = {
    methods: ["get","head"],
    url: '/{category}/{subcategory}/{childcategory}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\frontend\frontendController::childCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
childCategoryPage.url = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions) => {
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

    return childCategoryPage.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace('{subcategory}', parsedArgs.subcategory.toString())
            .replace('{childcategory}', parsedArgs.childcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\frontend\frontendController::childCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
childCategoryPage.get = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: childCategoryPage.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\frontend\frontendController::childCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
childCategoryPage.head = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: childCategoryPage.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\frontend\frontendController::childCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
    const childCategoryPageForm = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: childCategoryPage.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\frontend\frontendController::childCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
        childCategoryPageForm.get = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: childCategoryPage.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\frontend\frontendController::childCategoryPage
 * @see app/Http/Controllers/frontend/frontendController.php:108
 * @route '/{category}/{subcategory}/{childcategory}'
 */
        childCategoryPageForm.head = (args: { category: string | number, subcategory: string | number, childcategory: string | number } | [category: string | number, subcategory: string | number, childcategory: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: childCategoryPage.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    childCategoryPage.form = childCategoryPageForm
const frontendController = { index, htmlSitemap, section, serviceDetails, blogDetails, eventDetails, postDetails, newsDetails, promotDetails, protfoliosDetails, casestudyDetails, countryDetails, sectionsxDetails, teamDetails, categoryPage, subCategoryPage, childCategoryPage }

export default frontendController