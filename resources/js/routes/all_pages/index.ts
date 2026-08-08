import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
export const categorypage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorypage.url(options),
    method: 'get',
})

categorypage.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
categorypage.url = (options?: RouteQueryOptions) => {
    return categorypage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
categorypage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorypage.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
categorypage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categorypage.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
    const categorypageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: categorypage.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
        categorypageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categorypage.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:18
 * @route '/admin/dashboad/manage/pages/category'
 */
        categorypageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categorypage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    categorypage.form = categorypageForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
export const categorypage_section = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorypage_section.url(args, options),
    method: 'get',
})

categorypage_section.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/category/page/{section}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
categorypage_section.url = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return categorypage_section.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
categorypage_section.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorypage_section.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
categorypage_section.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categorypage_section.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
    const categorypage_sectionForm = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: categorypage_section.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
        categorypage_sectionForm.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categorypage_section.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:31
 * @route '/admin/dashboad/manage/pages/category/page/{section}'
 */
        categorypage_sectionForm.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categorypage_section.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    categorypage_section.form = categorypage_sectionForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Subcategorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
export const Subcategorypage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Subcategorypage.url(options),
    method: 'get',
})

Subcategorypage.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/sub-category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Subcategorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
Subcategorypage.url = (options?: RouteQueryOptions) => {
    return Subcategorypage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Subcategorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
Subcategorypage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Subcategorypage.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Subcategorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
Subcategorypage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Subcategorypage.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Subcategorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
    const SubcategorypageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Subcategorypage.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Subcategorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
        SubcategorypageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Subcategorypage.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Subcategorypage
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:40
 * @route '/admin/dashboad/manage/pages/sub-category'
 */
        SubcategorypageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Subcategorypage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Subcategorypage.form = SubcategorypageForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::sub_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
export const sub_categorypage_section = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sub_categorypage_section.url(args, options),
    method: 'get',
})

sub_categorypage_section.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/sub-category/page/{section}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::sub_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
sub_categorypage_section.url = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return sub_categorypage_section.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::sub_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
sub_categorypage_section.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sub_categorypage_section.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::sub_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
sub_categorypage_section.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sub_categorypage_section.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::sub_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
    const sub_categorypage_sectionForm = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sub_categorypage_section.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::sub_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
        sub_categorypage_sectionForm.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sub_categorypage_section.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::sub_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:53
 * @route '/admin/dashboad/manage/pages/sub-category/page/{section}'
 */
        sub_categorypage_sectionForm.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sub_categorypage_section.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sub_categorypage_section.form = sub_categorypage_sectionForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Child_Category_page
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
export const Child_Category_page = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Child_Category_page.url(options),
    method: 'get',
})

Child_Category_page.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/child-category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Child_Category_page
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
Child_Category_page.url = (options?: RouteQueryOptions) => {
    return Child_Category_page.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Child_Category_page
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
Child_Category_page.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Child_Category_page.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Child_Category_page
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
Child_Category_page.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Child_Category_page.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Child_Category_page
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
    const Child_Category_pageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Child_Category_page.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Child_Category_page
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
        Child_Category_pageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Child_Category_page.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::Child_Category_page
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:63
 * @route '/admin/dashboad/manage/pages/child-category'
 */
        Child_Category_pageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Child_Category_page.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Child_Category_page.form = Child_Category_pageForm
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::child_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
export const child_categorypage_section = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: child_categorypage_section.url(args, options),
    method: 'get',
})

child_categorypage_section.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/pages/child-category/page/{section}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::child_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
child_categorypage_section.url = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return child_categorypage_section.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::child_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
child_categorypage_section.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: child_categorypage_section.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\pageManagementController::child_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
child_categorypage_section.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: child_categorypage_section.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::child_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
    const child_categorypage_sectionForm = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: child_categorypage_section.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::child_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
        child_categorypage_sectionForm.get = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: child_categorypage_section.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\pageManagementController::child_categorypage_section
 * @see app/Http/Controllers/backend/cms/pageManagementController.php:76
 * @route '/admin/dashboad/manage/pages/child-category/page/{section}'
 */
        child_categorypage_sectionForm.head = (args: { section: string | number } | [section: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: child_categorypage_section.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    child_categorypage_section.form = child_categorypage_sectionForm
const all_pages = {
    categorypage: Object.assign(categorypage, categorypage),
categorypage_section: Object.assign(categorypage_section, categorypage_section),
Subcategorypage: Object.assign(Subcategorypage, Subcategorypage),
sub_categorypage_section: Object.assign(sub_categorypage_section, sub_categorypage_section),
Child_Category_page: Object.assign(Child_Category_page, Child_Category_page),
child_categorypage_section: Object.assign(child_categorypage_section, child_categorypage_section),
}

export default all_pages