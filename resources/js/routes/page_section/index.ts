import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::all
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:26
 * @route '/admin/dashboad/manage/page-section/all'
 */
export const all = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})

all.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/all',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::all
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:26
 * @route '/admin/dashboad/manage/page-section/all'
 */
all.url = (options?: RouteQueryOptions) => {
    return all.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::all
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:26
 * @route '/admin/dashboad/manage/page-section/all'
 */
all.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::all
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:26
 * @route '/admin/dashboad/manage/page-section/all'
 */
all.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: all.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::all
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:26
 * @route '/admin/dashboad/manage/page-section/all'
 */
    const allForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: all.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::all
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:26
 * @route '/admin/dashboad/manage/page-section/all'
 */
        allForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: all.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::all
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:26
 * @route '/admin/dashboad/manage/page-section/all'
 */
        allForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: all.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    all.form = allForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::add
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:76
 * @route '/admin/dashboad/manage/page-section/add'
 */
export const add = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})

add.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/add',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::add
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:76
 * @route '/admin/dashboad/manage/page-section/add'
 */
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::add
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:76
 * @route '/admin/dashboad/manage/page-section/add'
 */
add.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::add
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:76
 * @route '/admin/dashboad/manage/page-section/add'
 */
add.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: add.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::add
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:76
 * @route '/admin/dashboad/manage/page-section/add'
 */
    const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: add.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::add
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:76
 * @route '/admin/dashboad/manage/page-section/add'
 */
        addForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::add
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:76
 * @route '/admin/dashboad/manage/page-section/add'
 */
        addForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    add.form = addForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::view
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:88
 * @route '/admin/dashboad/manage/page-section/view/{id}/{slug}'
 */
export const view = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/view/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::view
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:88
 * @route '/admin/dashboad/manage/page-section/view/{id}/{slug}'
 */
view.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::view
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:88
 * @route '/admin/dashboad/manage/page-section/view/{id}/{slug}'
 */
view.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::view
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:88
 * @route '/admin/dashboad/manage/page-section/view/{id}/{slug}'
 */
view.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::view
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:88
 * @route '/admin/dashboad/manage/page-section/view/{id}/{slug}'
 */
    const viewForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::view
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:88
 * @route '/admin/dashboad/manage/page-section/view/{id}/{slug}'
 */
        viewForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::view
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:88
 * @route '/admin/dashboad/manage/page-section/view/{id}/{slug}'
 */
        viewForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    view.form = viewForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::edit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:118
 * @route '/admin/dashboad/manage/page-section/edit/{id}/{slug}'
 */
export const edit = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/edit/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::edit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:118
 * @route '/admin/dashboad/manage/page-section/edit/{id}/{slug}'
 */
edit.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::edit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:118
 * @route '/admin/dashboad/manage/page-section/edit/{id}/{slug}'
 */
edit.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::edit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:118
 * @route '/admin/dashboad/manage/page-section/edit/{id}/{slug}'
 */
edit.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::edit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:118
 * @route '/admin/dashboad/manage/page-section/edit/{id}/{slug}'
 */
    const editForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::edit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:118
 * @route '/admin/dashboad/manage/page-section/edit/{id}/{slug}'
 */
        editForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::edit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:118
 * @route '/admin/dashboad/manage/page-section/edit/{id}/{slug}'
 */
        editForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::submit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:151
 * @route '/admin/dashboad/manage/page-section/submit'
 */
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/admin/dashboad/manage/page-section/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::submit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:151
 * @route '/admin/dashboad/manage/page-section/submit'
 */
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::submit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:151
 * @route '/admin/dashboad/manage/page-section/submit'
 */
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::submit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:151
 * @route '/admin/dashboad/manage/page-section/submit'
 */
    const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::submit
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:151
 * @route '/admin/dashboad/manage/page-section/submit'
 */
        submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(options),
            method: 'post',
        })
    
    submit.form = submitForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:235
 * @route '/admin/dashboad/manage/page-section/update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/admin/dashboad/manage/page-section/update',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:235
 * @route '/admin/dashboad/manage/page-section/update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:235
 * @route '/admin/dashboad/manage/page-section/update'
 */
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:235
 * @route '/admin/dashboad/manage/page-section/update'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:235
 * @route '/admin/dashboad/manage/page-section/update'
 */
        updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::active
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:296
 * @route '/admin/dashboad/manage/page-section/active/{id}/{slug}'
 */
export const active = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/active/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::active
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:296
 * @route '/admin/dashboad/manage/page-section/active/{id}/{slug}'
 */
active.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return active.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::active
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:296
 * @route '/admin/dashboad/manage/page-section/active/{id}/{slug}'
 */
active.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::active
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:296
 * @route '/admin/dashboad/manage/page-section/active/{id}/{slug}'
 */
active.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::active
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:296
 * @route '/admin/dashboad/manage/page-section/active/{id}/{slug}'
 */
    const activeForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::active
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:296
 * @route '/admin/dashboad/manage/page-section/active/{id}/{slug}'
 */
        activeForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::active
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:296
 * @route '/admin/dashboad/manage/page-section/active/{id}/{slug}'
 */
        activeForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    active.form = activeForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deactive
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:313
 * @route '/admin/dashboad/manage/page-section/deactive/{id}/{slug}'
 */
export const deactive = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})

deactive.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/deactive/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deactive
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:313
 * @route '/admin/dashboad/manage/page-section/deactive/{id}/{slug}'
 */
deactive.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return deactive.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deactive
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:313
 * @route '/admin/dashboad/manage/page-section/deactive/{id}/{slug}'
 */
deactive.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deactive
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:313
 * @route '/admin/dashboad/manage/page-section/deactive/{id}/{slug}'
 */
deactive.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deactive.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deactive
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:313
 * @route '/admin/dashboad/manage/page-section/deactive/{id}/{slug}'
 */
    const deactiveForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deactive.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deactive
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:313
 * @route '/admin/dashboad/manage/page-section/deactive/{id}/{slug}'
 */
        deactiveForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deactive.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deactive
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:313
 * @route '/admin/dashboad/manage/page-section/deactive/{id}/{slug}'
 */
        deactiveForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deactive.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    deactive.form = deactiveForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::softdelete
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:330
 * @route '/admin/dashboad/manage/page-section/softdelete/{id}'
 */
export const softdelete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

softdelete.definition = {
    methods: ["delete"],
    url: '/admin/dashboad/manage/page-section/softdelete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::softdelete
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:330
 * @route '/admin/dashboad/manage/page-section/softdelete/{id}'
 */
softdelete.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return softdelete.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::softdelete
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:330
 * @route '/admin/dashboad/manage/page-section/softdelete/{id}'
 */
softdelete.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::softdelete
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:330
 * @route '/admin/dashboad/manage/page-section/softdelete/{id}'
 */
    const softdeleteForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: softdelete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::softdelete
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:330
 * @route '/admin/dashboad/manage/page-section/softdelete/{id}'
 */
        softdeleteForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: softdelete.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    softdelete.form = softdeleteForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deleteMethod
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:345
 * @route '/admin/dashboad/manage/page-section/delete/{id}'
 */
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/admin/dashboad/manage/page-section/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deleteMethod
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:345
 * @route '/admin/dashboad/manage/page-section/delete/{id}'
 */
deleteMethod.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return deleteMethod.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deleteMethod
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:345
 * @route '/admin/dashboad/manage/page-section/delete/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deleteMethod
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:345
 * @route '/admin/dashboad/manage/page-section/delete/{id}'
 */
    const deleteMethodForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteMethod.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::deleteMethod
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:345
 * @route '/admin/dashboad/manage/page-section/delete/{id}'
 */
        deleteMethodForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteMethod.form = deleteMethodForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::recycle
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:361
 * @route '/admin/dashboad/manage/page-section/recycle'
 */
export const recycle = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})

recycle.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/recycle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::recycle
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:361
 * @route '/admin/dashboad/manage/page-section/recycle'
 */
recycle.url = (options?: RouteQueryOptions) => {
    return recycle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::recycle
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:361
 * @route '/admin/dashboad/manage/page-section/recycle'
 */
recycle.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::recycle
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:361
 * @route '/admin/dashboad/manage/page-section/recycle'
 */
recycle.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recycle.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::recycle
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:361
 * @route '/admin/dashboad/manage/page-section/recycle'
 */
    const recycleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recycle.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::recycle
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:361
 * @route '/admin/dashboad/manage/page-section/recycle'
 */
        recycleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recycle.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::recycle
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:361
 * @route '/admin/dashboad/manage/page-section/recycle'
 */
        recycleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recycle.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    recycle.form = recycleForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::bulkAction
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:395
 * @route '/admin/dashboad/manage/page-section/bulk/action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/admin/dashboad/manage/page-section/bulk/action',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::bulkAction
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:395
 * @route '/admin/dashboad/manage/page-section/bulk/action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::bulkAction
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:395
 * @route '/admin/dashboad/manage/page-section/bulk/action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::bulkAction
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:395
 * @route '/admin/dashboad/manage/page-section/bulk/action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::bulkAction
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:395
 * @route '/admin/dashboad/manage/page-section/bulk/action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::single_pdf_export
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:487
 * @route '/admin/dashboad/manage/page-section/export/single/pdf/{id}/{slug}'
 */
export const single_pdf_export = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: single_pdf_export.url(args, options),
    method: 'get',
})

single_pdf_export.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/export/single/pdf/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::single_pdf_export
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:487
 * @route '/admin/dashboad/manage/page-section/export/single/pdf/{id}/{slug}'
 */
single_pdf_export.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return single_pdf_export.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::single_pdf_export
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:487
 * @route '/admin/dashboad/manage/page-section/export/single/pdf/{id}/{slug}'
 */
single_pdf_export.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: single_pdf_export.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::single_pdf_export
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:487
 * @route '/admin/dashboad/manage/page-section/export/single/pdf/{id}/{slug}'
 */
single_pdf_export.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: single_pdf_export.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::single_pdf_export
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:487
 * @route '/admin/dashboad/manage/page-section/export/single/pdf/{id}/{slug}'
 */
    const single_pdf_exportForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: single_pdf_export.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::single_pdf_export
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:487
 * @route '/admin/dashboad/manage/page-section/export/single/pdf/{id}/{slug}'
 */
        single_pdf_exportForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: single_pdf_export.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::single_pdf_export
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:487
 * @route '/admin/dashboad/manage/page-section/export/single/pdf/{id}/{slug}'
 */
        single_pdf_exportForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: single_pdf_export.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    single_pdf_export.form = single_pdf_exportForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_excel
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:516
 * @route '/admin/dashboad/manage/page-section/export/excel'
 */
export const export_excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})

export_excel.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_excel
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:516
 * @route '/admin/dashboad/manage/page-section/export/excel'
 */
export_excel.url = (options?: RouteQueryOptions) => {
    return export_excel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_excel
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:516
 * @route '/admin/dashboad/manage/page-section/export/excel'
 */
export_excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_excel
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:516
 * @route '/admin/dashboad/manage/page-section/export/excel'
 */
export_excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_excel.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_excel
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:516
 * @route '/admin/dashboad/manage/page-section/export/excel'
 */
    const export_excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_excel.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_excel
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:516
 * @route '/admin/dashboad/manage/page-section/export/excel'
 */
        export_excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_excel.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_excel
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:516
 * @route '/admin/dashboad/manage/page-section/export/excel'
 */
        export_excelForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_excel.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    export_excel.form = export_excelForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_csv
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:523
 * @route '/admin/dashboad/manage/page-section/export/csv'
 */
export const export_csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})

export_csv.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_csv
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:523
 * @route '/admin/dashboad/manage/page-section/export/csv'
 */
export_csv.url = (options?: RouteQueryOptions) => {
    return export_csv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_csv
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:523
 * @route '/admin/dashboad/manage/page-section/export/csv'
 */
export_csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_csv
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:523
 * @route '/admin/dashboad/manage/page-section/export/csv'
 */
export_csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_csv.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_csv
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:523
 * @route '/admin/dashboad/manage/page-section/export/csv'
 */
    const export_csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_csv.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_csv
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:523
 * @route '/admin/dashboad/manage/page-section/export/csv'
 */
        export_csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_csv.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_csv
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:523
 * @route '/admin/dashboad/manage/page-section/export/csv'
 */
        export_csvForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_csv.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    export_csv.form = export_csvForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_pdf
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:501
 * @route '/admin/dashboad/manage/page-section/export/pdf'
 */
export const export_pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})

export_pdf.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_pdf
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:501
 * @route '/admin/dashboad/manage/page-section/export/pdf'
 */
export_pdf.url = (options?: RouteQueryOptions) => {
    return export_pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_pdf
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:501
 * @route '/admin/dashboad/manage/page-section/export/pdf'
 */
export_pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_pdf
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:501
 * @route '/admin/dashboad/manage/page-section/export/pdf'
 */
export_pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_pdf.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_pdf
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:501
 * @route '/admin/dashboad/manage/page-section/export/pdf'
 */
    const export_pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_pdf.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_pdf
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:501
 * @route '/admin/dashboad/manage/page-section/export/pdf'
 */
        export_pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_pdf.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::export_pdf
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:501
 * @route '/admin/dashboad/manage/page-section/export/pdf'
 */
        export_pdfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_pdf.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    export_pdf.form = export_pdfForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getCategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:58
 * @route '/admin/dashboad/manage/page-section/get/category/page'
 */
export const getCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCategory.url(options),
    method: 'get',
})

getCategory.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/get/category/page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getCategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:58
 * @route '/admin/dashboad/manage/page-section/get/category/page'
 */
getCategory.url = (options?: RouteQueryOptions) => {
    return getCategory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getCategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:58
 * @route '/admin/dashboad/manage/page-section/get/category/page'
 */
getCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCategory.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getCategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:58
 * @route '/admin/dashboad/manage/page-section/get/category/page'
 */
getCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCategory.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getCategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:58
 * @route '/admin/dashboad/manage/page-section/get/category/page'
 */
    const getCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCategory.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getCategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:58
 * @route '/admin/dashboad/manage/page-section/get/category/page'
 */
        getCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCategory.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getCategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:58
 * @route '/admin/dashboad/manage/page-section/get/category/page'
 */
        getCategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCategory.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getCategory.form = getCategoryForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getsubcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:63
 * @route '/admin/dashboad/manage/page-section/get/subcategory/page'
 */
export const getsubcategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getsubcategory.url(options),
    method: 'get',
})

getsubcategory.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/get/subcategory/page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getsubcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:63
 * @route '/admin/dashboad/manage/page-section/get/subcategory/page'
 */
getsubcategory.url = (options?: RouteQueryOptions) => {
    return getsubcategory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getsubcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:63
 * @route '/admin/dashboad/manage/page-section/get/subcategory/page'
 */
getsubcategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getsubcategory.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getsubcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:63
 * @route '/admin/dashboad/manage/page-section/get/subcategory/page'
 */
getsubcategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getsubcategory.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getsubcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:63
 * @route '/admin/dashboad/manage/page-section/get/subcategory/page'
 */
    const getsubcategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getsubcategory.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getsubcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:63
 * @route '/admin/dashboad/manage/page-section/get/subcategory/page'
 */
        getsubcategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getsubcategory.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getsubcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:63
 * @route '/admin/dashboad/manage/page-section/get/subcategory/page'
 */
        getsubcategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getsubcategory.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getsubcategory.form = getsubcategoryForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getchildcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:67
 * @route '/admin/dashboad/manage/page-section/get/childcategory/page'
 */
export const getchildcategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getchildcategory.url(options),
    method: 'get',
})

getchildcategory.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/get/childcategory/page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getchildcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:67
 * @route '/admin/dashboad/manage/page-section/get/childcategory/page'
 */
getchildcategory.url = (options?: RouteQueryOptions) => {
    return getchildcategory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getchildcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:67
 * @route '/admin/dashboad/manage/page-section/get/childcategory/page'
 */
getchildcategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getchildcategory.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getchildcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:67
 * @route '/admin/dashboad/manage/page-section/get/childcategory/page'
 */
getchildcategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getchildcategory.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getchildcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:67
 * @route '/admin/dashboad/manage/page-section/get/childcategory/page'
 */
    const getchildcategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getchildcategory.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getchildcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:67
 * @route '/admin/dashboad/manage/page-section/get/childcategory/page'
 */
        getchildcategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getchildcategory.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::getchildcategory
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:67
 * @route '/admin/dashboad/manage/page-section/get/childcategory/page'
 */
        getchildcategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getchildcategory.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getchildcategory.form = getchildcategoryForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::changeTheme
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:530
 * @route '/admin/dashboad/manage/page-section/change/section/theme/{id}/{slug}'
 */
export const changeTheme = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changeTheme.url(args, options),
    method: 'get',
})

changeTheme.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/page-section/change/section/theme/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::changeTheme
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:530
 * @route '/admin/dashboad/manage/page-section/change/section/theme/{id}/{slug}'
 */
changeTheme.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return changeTheme.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::changeTheme
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:530
 * @route '/admin/dashboad/manage/page-section/change/section/theme/{id}/{slug}'
 */
changeTheme.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changeTheme.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::changeTheme
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:530
 * @route '/admin/dashboad/manage/page-section/change/section/theme/{id}/{slug}'
 */
changeTheme.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: changeTheme.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::changeTheme
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:530
 * @route '/admin/dashboad/manage/page-section/change/section/theme/{id}/{slug}'
 */
    const changeThemeForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: changeTheme.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::changeTheme
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:530
 * @route '/admin/dashboad/manage/page-section/change/section/theme/{id}/{slug}'
 */
        changeThemeForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: changeTheme.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::changeTheme
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:530
 * @route '/admin/dashboad/manage/page-section/change/section/theme/{id}/{slug}'
 */
        changeThemeForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: changeTheme.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    changeTheme.form = changeThemeForm
/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::theme_update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:539
 * @route '/admin/dashboad/manage/page-section/theme/update'
 */
export const theme_update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: theme_update.url(options),
    method: 'patch',
})

theme_update.definition = {
    methods: ["patch"],
    url: '/admin/dashboad/manage/page-section/theme/update',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::theme_update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:539
 * @route '/admin/dashboad/manage/page-section/theme/update'
 */
theme_update.url = (options?: RouteQueryOptions) => {
    return theme_update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\PageSectionController::theme_update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:539
 * @route '/admin/dashboad/manage/page-section/theme/update'
 */
theme_update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: theme_update.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::theme_update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:539
 * @route '/admin/dashboad/manage/page-section/theme/update'
 */
    const theme_updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: theme_update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\cms\PageSectionController::theme_update
 * @see app/Http/Controllers/backend/cms/PageSectionController.php:539
 * @route '/admin/dashboad/manage/page-section/theme/update'
 */
        theme_updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: theme_update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    theme_update.form = theme_updateForm
const page_section = {
    all: Object.assign(all, all),
add: Object.assign(add, add),
view: Object.assign(view, view),
edit: Object.assign(edit, edit),
submit: Object.assign(submit, submit),
update: Object.assign(update, update),
active: Object.assign(active, active),
deactive: Object.assign(deactive, deactive),
softdelete: Object.assign(softdelete, softdelete),
delete: Object.assign(deleteMethod, deleteMethod),
recycle: Object.assign(recycle, recycle),
bulkAction: Object.assign(bulkAction, bulkAction),
single_pdf_export: Object.assign(single_pdf_export, single_pdf_export),
export_excel: Object.assign(export_excel, export_excel),
export_csv: Object.assign(export_csv, export_csv),
export_pdf: Object.assign(export_pdf, export_pdf),
getCategory: Object.assign(getCategory, getCategory),
getsubcategory: Object.assign(getsubcategory, getsubcategory),
getchildcategory: Object.assign(getchildcategory, getchildcategory),
changeTheme: Object.assign(changeTheme, changeTheme),
theme_update: Object.assign(theme_update, theme_update),
}

export default page_section