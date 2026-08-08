import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
export const categoryPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryPage.url(options),
    method: 'get',
})

categoryPage.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
categoryPage.url = (options?: RouteQueryOptions) => {
    return categoryPage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
categoryPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryPage.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
categoryPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoryPage.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
    const categoryPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: categoryPage.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
        categoryPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categoryPage.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
        categoryPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categoryPage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    categoryPage.form = categoryPageForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
export const categoryPageSection = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryPageSection.url(args, options),
    method: 'get',
})

categoryPageSection.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/category/page/{section}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
categoryPageSection.url = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { section: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    section: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        section: args.section,
                }

    return categoryPageSection.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
categoryPageSection.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryPageSection.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
categoryPageSection.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoryPageSection.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
    const categoryPageSectionForm = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: categoryPageSection.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
        categoryPageSectionForm.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categoryPageSection.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
        categoryPageSectionForm.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categoryPageSection.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    categoryPageSection.form = categoryPageSectionForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
export const subCategoryPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subCategoryPage.url(options),
    method: 'get',
})

subCategoryPage.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/sub-category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
subCategoryPage.url = (options?: RouteQueryOptions) => {
    return subCategoryPage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
subCategoryPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subCategoryPage.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
subCategoryPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: subCategoryPage.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
    const subCategoryPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: subCategoryPage.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
        subCategoryPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subCategoryPage.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
        subCategoryPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subCategoryPage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    subCategoryPage.form = subCategoryPageForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
export const subCategoryPageSection = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subCategoryPageSection.url(args, options),
    method: 'get',
})

subCategoryPageSection.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/sub-category/page/{section}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
subCategoryPageSection.url = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { section: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    section: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        section: args.section,
                }

    return subCategoryPageSection.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
subCategoryPageSection.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subCategoryPageSection.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
subCategoryPageSection.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: subCategoryPageSection.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
    const subCategoryPageSectionForm = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: subCategoryPageSection.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
        subCategoryPageSectionForm.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subCategoryPageSection.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::subCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
        subCategoryPageSectionForm.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subCategoryPageSection.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    subCategoryPageSection.form = subCategoryPageSectionForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
export const childCategoryPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: childCategoryPage.url(options),
    method: 'get',
})

childCategoryPage.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/child-category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
childCategoryPage.url = (options?: RouteQueryOptions) => {
    return childCategoryPage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
childCategoryPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: childCategoryPage.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
childCategoryPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: childCategoryPage.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
    const childCategoryPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: childCategoryPage.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
        childCategoryPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: childCategoryPage.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
        childCategoryPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: childCategoryPage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    childCategoryPage.form = childCategoryPageForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
export const childCategoryPageSection = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: childCategoryPageSection.url(args, options),
    method: 'get',
})

childCategoryPageSection.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/child-category/page/{section}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
childCategoryPageSection.url = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { section: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    section: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        section: args.section,
                }

    return childCategoryPageSection.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
childCategoryPageSection.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: childCategoryPageSection.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
childCategoryPageSection.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: childCategoryPageSection.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
    const childCategoryPageSectionForm = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: childCategoryPageSection.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
        childCategoryPageSectionForm.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: childCategoryPageSection.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::childCategoryPageSection
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
        childCategoryPageSectionForm.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: childCategoryPageSection.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    childCategoryPageSection.form = childCategoryPageSectionForm
const pageManagementController = { categoryPage, categoryPageSection, subCategoryPage, subCategoryPageSection, childCategoryPage, childCategoryPageSection }

export default pageManagementController