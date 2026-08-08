import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::index
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:27
 * @route '/admin/dashboad/manage/section/features/all'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/all',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::index
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:27
 * @route '/admin/dashboad/manage/section/features/all'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::index
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:27
 * @route '/admin/dashboad/manage/section/features/all'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::index
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:27
 * @route '/admin/dashboad/manage/section/features/all'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::index
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:27
 * @route '/admin/dashboad/manage/section/features/all'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::index
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:27
 * @route '/admin/dashboad/manage/section/features/all'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::index
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:27
 * @route '/admin/dashboad/manage/section/features/all'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::add
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:52
 * @route '/admin/dashboad/manage/section/features/add/{id}/{slug}/{model}'
 */
export const add = (args: { id: string | number, slug: string | number, model: string | number } | [id: string | number, slug: string | number, model: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(args, options),
    method: 'get',
})

add.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/add/{id}/{slug}/{model}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::add
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:52
 * @route '/admin/dashboad/manage/section/features/add/{id}/{slug}/{model}'
 */
add.url = (args: { id: string | number, slug: string | number, model: string | number } | [id: string | number, slug: string | number, model: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    slug: args[1],
                    model: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                slug: args.slug,
                                model: args.model,
                }

    return add.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{model}', parsedArgs.model.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::add
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:52
 * @route '/admin/dashboad/manage/section/features/add/{id}/{slug}/{model}'
 */
add.get = (args: { id: string | number, slug: string | number, model: string | number } | [id: string | number, slug: string | number, model: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::add
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:52
 * @route '/admin/dashboad/manage/section/features/add/{id}/{slug}/{model}'
 */
add.head = (args: { id: string | number, slug: string | number, model: string | number } | [id: string | number, slug: string | number, model: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: add.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::add
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:52
 * @route '/admin/dashboad/manage/section/features/add/{id}/{slug}/{model}'
 */
    const addForm = (args: { id: string | number, slug: string | number, model: string | number } | [id: string | number, slug: string | number, model: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: add.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::add
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:52
 * @route '/admin/dashboad/manage/section/features/add/{id}/{slug}/{model}'
 */
        addForm.get = (args: { id: string | number, slug: string | number, model: string | number } | [id: string | number, slug: string | number, model: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::add
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:52
 * @route '/admin/dashboad/manage/section/features/add/{id}/{slug}/{model}'
 */
        addForm.head = (args: { id: string | number, slug: string | number, model: string | number } | [id: string | number, slug: string | number, model: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    add.form = addForm
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::view
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:69
 * @route '/admin/dashboad/manage/section/features/view/{id}/{slug}'
 */
export const view = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/view/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::view
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:69
 * @route '/admin/dashboad/manage/section/features/view/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::view
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:69
 * @route '/admin/dashboad/manage/section/features/view/{id}/{slug}'
 */
view.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::view
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:69
 * @route '/admin/dashboad/manage/section/features/view/{id}/{slug}'
 */
view.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::view
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:69
 * @route '/admin/dashboad/manage/section/features/view/{id}/{slug}'
 */
    const viewForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::view
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:69
 * @route '/admin/dashboad/manage/section/features/view/{id}/{slug}'
 */
        viewForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::view
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:69
 * @route '/admin/dashboad/manage/section/features/view/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::edit
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:82
 * @route '/admin/dashboad/manage/section/features/edit/{id}/{slug}'
 */
export const edit = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/edit/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::edit
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:82
 * @route '/admin/dashboad/manage/section/features/edit/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::edit
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:82
 * @route '/admin/dashboad/manage/section/features/edit/{id}/{slug}'
 */
edit.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::edit
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:82
 * @route '/admin/dashboad/manage/section/features/edit/{id}/{slug}'
 */
edit.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::edit
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:82
 * @route '/admin/dashboad/manage/section/features/edit/{id}/{slug}'
 */
    const editForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::edit
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:82
 * @route '/admin/dashboad/manage/section/features/edit/{id}/{slug}'
 */
        editForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::edit
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:82
 * @route '/admin/dashboad/manage/section/features/edit/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::insert
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:101
 * @route '/admin/dashboad/manage/section/features/submit'
 */
export const insert = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: insert.url(options),
    method: 'post',
})

insert.definition = {
    methods: ["post"],
    url: '/admin/dashboad/manage/section/features/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::insert
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:101
 * @route '/admin/dashboad/manage/section/features/submit'
 */
insert.url = (options?: RouteQueryOptions) => {
    return insert.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::insert
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:101
 * @route '/admin/dashboad/manage/section/features/submit'
 */
insert.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: insert.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::insert
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:101
 * @route '/admin/dashboad/manage/section/features/submit'
 */
    const insertForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: insert.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::insert
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:101
 * @route '/admin/dashboad/manage/section/features/submit'
 */
        insertForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: insert.url(options),
            method: 'post',
        })
    
    insert.form = insertForm
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::update
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:152
 * @route '/admin/dashboad/manage/section/features/update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/admin/dashboad/manage/section/features/update',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::update
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:152
 * @route '/admin/dashboad/manage/section/features/update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::update
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:152
 * @route '/admin/dashboad/manage/section/features/update'
 */
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::update
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:152
 * @route '/admin/dashboad/manage/section/features/update'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::update
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:152
 * @route '/admin/dashboad/manage/section/features/update'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::active
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:202
 * @route '/admin/dashboad/manage/section/features/active/{id}/{slug}'
 */
export const active = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/active/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::active
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:202
 * @route '/admin/dashboad/manage/section/features/active/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::active
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:202
 * @route '/admin/dashboad/manage/section/features/active/{id}/{slug}'
 */
active.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::active
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:202
 * @route '/admin/dashboad/manage/section/features/active/{id}/{slug}'
 */
active.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::active
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:202
 * @route '/admin/dashboad/manage/section/features/active/{id}/{slug}'
 */
    const activeForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::active
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:202
 * @route '/admin/dashboad/manage/section/features/active/{id}/{slug}'
 */
        activeForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::active
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:202
 * @route '/admin/dashboad/manage/section/features/active/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deactive
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:218
 * @route '/admin/dashboad/manage/section/features/deactive/{id}/{slug}'
 */
export const deactive = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})

deactive.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/deactive/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deactive
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:218
 * @route '/admin/dashboad/manage/section/features/deactive/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deactive
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:218
 * @route '/admin/dashboad/manage/section/features/deactive/{id}/{slug}'
 */
deactive.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deactive
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:218
 * @route '/admin/dashboad/manage/section/features/deactive/{id}/{slug}'
 */
deactive.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deactive.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deactive
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:218
 * @route '/admin/dashboad/manage/section/features/deactive/{id}/{slug}'
 */
    const deactiveForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deactive.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deactive
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:218
 * @route '/admin/dashboad/manage/section/features/deactive/{id}/{slug}'
 */
        deactiveForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deactive.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deactive
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:218
 * @route '/admin/dashboad/manage/section/features/deactive/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::softdelete
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:234
 * @route '/admin/dashboad/manage/section/features/softdelete/{id}'
 */
export const softdelete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

softdelete.definition = {
    methods: ["delete"],
    url: '/admin/dashboad/manage/section/features/softdelete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::softdelete
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:234
 * @route '/admin/dashboad/manage/section/features/softdelete/{id}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::softdelete
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:234
 * @route '/admin/dashboad/manage/section/features/softdelete/{id}'
 */
softdelete.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::softdelete
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:234
 * @route '/admin/dashboad/manage/section/features/softdelete/{id}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::softdelete
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:234
 * @route '/admin/dashboad/manage/section/features/softdelete/{id}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deleteMethod
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:249
 * @route '/admin/dashboad/manage/section/features/delete/{id}'
 */
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/admin/dashboad/manage/section/features/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deleteMethod
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:249
 * @route '/admin/dashboad/manage/section/features/delete/{id}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deleteMethod
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:249
 * @route '/admin/dashboad/manage/section/features/delete/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deleteMethod
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:249
 * @route '/admin/dashboad/manage/section/features/delete/{id}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::deleteMethod
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:249
 * @route '/admin/dashboad/manage/section/features/delete/{id}'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::recycle
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:278
 * @route '/admin/dashboad/manage/section/features/recycle'
 */
export const recycle = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})

recycle.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/recycle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::recycle
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:278
 * @route '/admin/dashboad/manage/section/features/recycle'
 */
recycle.url = (options?: RouteQueryOptions) => {
    return recycle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::recycle
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:278
 * @route '/admin/dashboad/manage/section/features/recycle'
 */
recycle.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::recycle
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:278
 * @route '/admin/dashboad/manage/section/features/recycle'
 */
recycle.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recycle.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::recycle
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:278
 * @route '/admin/dashboad/manage/section/features/recycle'
 */
    const recycleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recycle.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::recycle
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:278
 * @route '/admin/dashboad/manage/section/features/recycle'
 */
        recycleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recycle.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::recycle
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:278
 * @route '/admin/dashboad/manage/section/features/recycle'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::bulkAction
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:312
 * @route '/admin/dashboad/manage/section/features/bulk/action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/admin/dashboad/manage/section/features/bulk/action',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::bulkAction
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:312
 * @route '/admin/dashboad/manage/section/features/bulk/action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::bulkAction
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:312
 * @route '/admin/dashboad/manage/section/features/bulk/action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::bulkAction
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:312
 * @route '/admin/dashboad/manage/section/features/bulk/action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::bulkAction
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:312
 * @route '/admin/dashboad/manage/section/features/bulk/action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::exportPdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:417
 * @route '/admin/dashboad/manage/section/features/export/single/pdf/{id}/{slug}'
 */
export const exportPdf = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(args, options),
    method: 'get',
})

exportPdf.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/export/single/pdf/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::exportPdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:417
 * @route '/admin/dashboad/manage/section/features/export/single/pdf/{id}/{slug}'
 */
exportPdf.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return exportPdf.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::exportPdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:417
 * @route '/admin/dashboad/manage/section/features/export/single/pdf/{id}/{slug}'
 */
exportPdf.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::exportPdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:417
 * @route '/admin/dashboad/manage/section/features/export/single/pdf/{id}/{slug}'
 */
exportPdf.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportPdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::exportPdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:417
 * @route '/admin/dashboad/manage/section/features/export/single/pdf/{id}/{slug}'
 */
    const exportPdfForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportPdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::exportPdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:417
 * @route '/admin/dashboad/manage/section/features/export/single/pdf/{id}/{slug}'
 */
        exportPdfForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportPdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::exportPdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:417
 * @route '/admin/dashboad/manage/section/features/export/single/pdf/{id}/{slug}'
 */
        exportPdfForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportPdf.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportPdf.form = exportPdfForm
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_excel
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:446
 * @route '/admin/dashboad/manage/section/features/export/excel'
 */
export const export_excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})

export_excel.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_excel
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:446
 * @route '/admin/dashboad/manage/section/features/export/excel'
 */
export_excel.url = (options?: RouteQueryOptions) => {
    return export_excel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_excel
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:446
 * @route '/admin/dashboad/manage/section/features/export/excel'
 */
export_excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_excel
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:446
 * @route '/admin/dashboad/manage/section/features/export/excel'
 */
export_excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_excel.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_excel
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:446
 * @route '/admin/dashboad/manage/section/features/export/excel'
 */
    const export_excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_excel.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_excel
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:446
 * @route '/admin/dashboad/manage/section/features/export/excel'
 */
        export_excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_excel.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_excel
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:446
 * @route '/admin/dashboad/manage/section/features/export/excel'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_csv
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:453
 * @route '/admin/dashboad/manage/section/features/export/csv'
 */
export const export_csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})

export_csv.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_csv
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:453
 * @route '/admin/dashboad/manage/section/features/export/csv'
 */
export_csv.url = (options?: RouteQueryOptions) => {
    return export_csv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_csv
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:453
 * @route '/admin/dashboad/manage/section/features/export/csv'
 */
export_csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_csv
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:453
 * @route '/admin/dashboad/manage/section/features/export/csv'
 */
export_csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_csv.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_csv
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:453
 * @route '/admin/dashboad/manage/section/features/export/csv'
 */
    const export_csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_csv.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_csv
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:453
 * @route '/admin/dashboad/manage/section/features/export/csv'
 */
        export_csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_csv.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_csv
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:453
 * @route '/admin/dashboad/manage/section/features/export/csv'
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
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_pdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:431
 * @route '/admin/dashboad/manage/section/features/export/pdf'
 */
export const export_pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})

export_pdf.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/section/features/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_pdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:431
 * @route '/admin/dashboad/manage/section/features/export/pdf'
 */
export_pdf.url = (options?: RouteQueryOptions) => {
    return export_pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_pdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:431
 * @route '/admin/dashboad/manage/section/features/export/pdf'
 */
export_pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_pdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:431
 * @route '/admin/dashboad/manage/section/features/export/pdf'
 */
export_pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_pdf.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_pdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:431
 * @route '/admin/dashboad/manage/section/features/export/pdf'
 */
    const export_pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_pdf.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_pdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:431
 * @route '/admin/dashboad/manage/section/features/export/pdf'
 */
        export_pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_pdf.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\cms\manage\FeatureController::export_pdf
 * @see app/Http/Controllers/backend/cms/manage/FeatureController.php:431
 * @route '/admin/dashboad/manage/section/features/export/pdf'
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
const FeatureController = { index, add, view, edit, insert, update, active, deactive, softdelete, deleteMethod, recycle, bulkAction, exportPdf, export_excel, export_csv, export_pdf, delete: deleteMethod }

export default FeatureController