import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::index
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:23
 * @route '/admin/dashboad/manage/setting/manage-footer/all'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/all',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::index
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:23
 * @route '/admin/dashboad/manage/setting/manage-footer/all'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::index
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:23
 * @route '/admin/dashboad/manage/setting/manage-footer/all'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::index
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:23
 * @route '/admin/dashboad/manage/setting/manage-footer/all'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::index
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:23
 * @route '/admin/dashboad/manage/setting/manage-footer/all'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::index
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:23
 * @route '/admin/dashboad/manage/setting/manage-footer/all'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::index
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:23
 * @route '/admin/dashboad/manage/setting/manage-footer/all'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::add
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:48
 * @route '/admin/dashboad/manage/setting/manage-footer/add'
 */
export const add = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})

add.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/add',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::add
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:48
 * @route '/admin/dashboad/manage/setting/manage-footer/add'
 */
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::add
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:48
 * @route '/admin/dashboad/manage/setting/manage-footer/add'
 */
add.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::add
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:48
 * @route '/admin/dashboad/manage/setting/manage-footer/add'
 */
add.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: add.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::add
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:48
 * @route '/admin/dashboad/manage/setting/manage-footer/add'
 */
    const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: add.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::add
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:48
 * @route '/admin/dashboad/manage/setting/manage-footer/add'
 */
        addForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::add
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:48
 * @route '/admin/dashboad/manage/setting/manage-footer/add'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::view
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:57
 * @route '/admin/dashboad/manage/setting/manage-footer/view/{id}/{slug}'
 */
export const view = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/view/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::view
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:57
 * @route '/admin/dashboad/manage/setting/manage-footer/view/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::view
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:57
 * @route '/admin/dashboad/manage/setting/manage-footer/view/{id}/{slug}'
 */
view.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::view
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:57
 * @route '/admin/dashboad/manage/setting/manage-footer/view/{id}/{slug}'
 */
view.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::view
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:57
 * @route '/admin/dashboad/manage/setting/manage-footer/view/{id}/{slug}'
 */
    const viewForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::view
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:57
 * @route '/admin/dashboad/manage/setting/manage-footer/view/{id}/{slug}'
 */
        viewForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::view
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:57
 * @route '/admin/dashboad/manage/setting/manage-footer/view/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::edit
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:69
 * @route '/admin/dashboad/manage/setting/manage-footer/edit/{id}/{slug}'
 */
export const edit = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/edit/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::edit
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:69
 * @route '/admin/dashboad/manage/setting/manage-footer/edit/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::edit
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:69
 * @route '/admin/dashboad/manage/setting/manage-footer/edit/{id}/{slug}'
 */
edit.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::edit
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:69
 * @route '/admin/dashboad/manage/setting/manage-footer/edit/{id}/{slug}'
 */
edit.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::edit
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:69
 * @route '/admin/dashboad/manage/setting/manage-footer/edit/{id}/{slug}'
 */
    const editForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::edit
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:69
 * @route '/admin/dashboad/manage/setting/manage-footer/edit/{id}/{slug}'
 */
        editForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::edit
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:69
 * @route '/admin/dashboad/manage/setting/manage-footer/edit/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::insert
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:113
 * @route '/admin/dashboad/manage/setting/manage-footer/submit'
 */
export const insert = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: insert.url(options),
    method: 'post',
})

insert.definition = {
    methods: ["post"],
    url: '/admin/dashboad/manage/setting/manage-footer/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::insert
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:113
 * @route '/admin/dashboad/manage/setting/manage-footer/submit'
 */
insert.url = (options?: RouteQueryOptions) => {
    return insert.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::insert
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:113
 * @route '/admin/dashboad/manage/setting/manage-footer/submit'
 */
insert.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: insert.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::insert
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:113
 * @route '/admin/dashboad/manage/setting/manage-footer/submit'
 */
    const insertForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: insert.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::insert
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:113
 * @route '/admin/dashboad/manage/setting/manage-footer/submit'
 */
        insertForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: insert.url(options),
            method: 'post',
        })
    
    insert.form = insertForm
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::update
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:161
 * @route '/admin/dashboad/manage/setting/manage-footer/update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/admin/dashboad/manage/setting/manage-footer/update',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::update
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:161
 * @route '/admin/dashboad/manage/setting/manage-footer/update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::update
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:161
 * @route '/admin/dashboad/manage/setting/manage-footer/update'
 */
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::update
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:161
 * @route '/admin/dashboad/manage/setting/manage-footer/update'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::update
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:161
 * @route '/admin/dashboad/manage/setting/manage-footer/update'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::active
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:206
 * @route '/admin/dashboad/manage/setting/manage-footer/active/{id}/{slug}'
 */
export const active = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/active/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::active
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:206
 * @route '/admin/dashboad/manage/setting/manage-footer/active/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::active
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:206
 * @route '/admin/dashboad/manage/setting/manage-footer/active/{id}/{slug}'
 */
active.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::active
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:206
 * @route '/admin/dashboad/manage/setting/manage-footer/active/{id}/{slug}'
 */
active.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::active
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:206
 * @route '/admin/dashboad/manage/setting/manage-footer/active/{id}/{slug}'
 */
    const activeForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::active
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:206
 * @route '/admin/dashboad/manage/setting/manage-footer/active/{id}/{slug}'
 */
        activeForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::active
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:206
 * @route '/admin/dashboad/manage/setting/manage-footer/active/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deactive
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:223
 * @route '/admin/dashboad/manage/setting/manage-footer/deactive/{id}/{slug}'
 */
export const deactive = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})

deactive.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/deactive/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deactive
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:223
 * @route '/admin/dashboad/manage/setting/manage-footer/deactive/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deactive
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:223
 * @route '/admin/dashboad/manage/setting/manage-footer/deactive/{id}/{slug}'
 */
deactive.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deactive
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:223
 * @route '/admin/dashboad/manage/setting/manage-footer/deactive/{id}/{slug}'
 */
deactive.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deactive.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deactive
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:223
 * @route '/admin/dashboad/manage/setting/manage-footer/deactive/{id}/{slug}'
 */
    const deactiveForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deactive.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deactive
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:223
 * @route '/admin/dashboad/manage/setting/manage-footer/deactive/{id}/{slug}'
 */
        deactiveForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deactive.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deactive
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:223
 * @route '/admin/dashboad/manage/setting/manage-footer/deactive/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:241
 * @route '/admin/dashboad/manage/setting/manage-footer/softdelete/{id}'
 */
export const softdelete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

softdelete.definition = {
    methods: ["delete"],
    url: '/admin/dashboad/manage/setting/manage-footer/softdelete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:241
 * @route '/admin/dashboad/manage/setting/manage-footer/softdelete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:241
 * @route '/admin/dashboad/manage/setting/manage-footer/softdelete/{id}'
 */
softdelete.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:241
 * @route '/admin/dashboad/manage/setting/manage-footer/softdelete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:241
 * @route '/admin/dashboad/manage/setting/manage-footer/softdelete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:256
 * @route '/admin/dashboad/manage/setting/manage-footer/delete/{id}'
 */
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/admin/dashboad/manage/setting/manage-footer/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:256
 * @route '/admin/dashboad/manage/setting/manage-footer/delete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:256
 * @route '/admin/dashboad/manage/setting/manage-footer/delete/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:256
 * @route '/admin/dashboad/manage/setting/manage-footer/delete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:256
 * @route '/admin/dashboad/manage/setting/manage-footer/delete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::recycle
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:272
 * @route '/admin/dashboad/manage/setting/manage-footer/recycle'
 */
export const recycle = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})

recycle.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/recycle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::recycle
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:272
 * @route '/admin/dashboad/manage/setting/manage-footer/recycle'
 */
recycle.url = (options?: RouteQueryOptions) => {
    return recycle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::recycle
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:272
 * @route '/admin/dashboad/manage/setting/manage-footer/recycle'
 */
recycle.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::recycle
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:272
 * @route '/admin/dashboad/manage/setting/manage-footer/recycle'
 */
recycle.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recycle.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::recycle
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:272
 * @route '/admin/dashboad/manage/setting/manage-footer/recycle'
 */
    const recycleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recycle.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::recycle
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:272
 * @route '/admin/dashboad/manage/setting/manage-footer/recycle'
 */
        recycleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recycle.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::recycle
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:272
 * @route '/admin/dashboad/manage/setting/manage-footer/recycle'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:306
 * @route '/admin/dashboad/manage/setting/manage-footer/bulk/action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/admin/dashboad/manage/setting/manage-footer/bulk/action',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:306
 * @route '/admin/dashboad/manage/setting/manage-footer/bulk/action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:306
 * @route '/admin/dashboad/manage/setting/manage-footer/bulk/action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:306
 * @route '/admin/dashboad/manage/setting/manage-footer/bulk/action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:306
 * @route '/admin/dashboad/manage/setting/manage-footer/bulk/action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::exportPdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:401
 * @route '/admin/dashboad/manage/setting/manage-footer/export/single/pdf/{id}/{slug}'
 */
export const exportPdf = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(args, options),
    method: 'get',
})

exportPdf.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/export/single/pdf/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::exportPdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:401
 * @route '/admin/dashboad/manage/setting/manage-footer/export/single/pdf/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::exportPdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:401
 * @route '/admin/dashboad/manage/setting/manage-footer/export/single/pdf/{id}/{slug}'
 */
exportPdf.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::exportPdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:401
 * @route '/admin/dashboad/manage/setting/manage-footer/export/single/pdf/{id}/{slug}'
 */
exportPdf.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportPdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::exportPdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:401
 * @route '/admin/dashboad/manage/setting/manage-footer/export/single/pdf/{id}/{slug}'
 */
    const exportPdfForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportPdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::exportPdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:401
 * @route '/admin/dashboad/manage/setting/manage-footer/export/single/pdf/{id}/{slug}'
 */
        exportPdfForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportPdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::exportPdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:401
 * @route '/admin/dashboad/manage/setting/manage-footer/export/single/pdf/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:430
 * @route '/admin/dashboad/manage/setting/manage-footer/export/excel'
 */
export const export_excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})

export_excel.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:430
 * @route '/admin/dashboad/manage/setting/manage-footer/export/excel'
 */
export_excel.url = (options?: RouteQueryOptions) => {
    return export_excel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:430
 * @route '/admin/dashboad/manage/setting/manage-footer/export/excel'
 */
export_excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:430
 * @route '/admin/dashboad/manage/setting/manage-footer/export/excel'
 */
export_excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_excel.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:430
 * @route '/admin/dashboad/manage/setting/manage-footer/export/excel'
 */
    const export_excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_excel.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:430
 * @route '/admin/dashboad/manage/setting/manage-footer/export/excel'
 */
        export_excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_excel.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:430
 * @route '/admin/dashboad/manage/setting/manage-footer/export/excel'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:437
 * @route '/admin/dashboad/manage/setting/manage-footer/export/csv'
 */
export const export_csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})

export_csv.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:437
 * @route '/admin/dashboad/manage/setting/manage-footer/export/csv'
 */
export_csv.url = (options?: RouteQueryOptions) => {
    return export_csv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:437
 * @route '/admin/dashboad/manage/setting/manage-footer/export/csv'
 */
export_csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:437
 * @route '/admin/dashboad/manage/setting/manage-footer/export/csv'
 */
export_csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_csv.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:437
 * @route '/admin/dashboad/manage/setting/manage-footer/export/csv'
 */
    const export_csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_csv.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:437
 * @route '/admin/dashboad/manage/setting/manage-footer/export/csv'
 */
        export_csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_csv.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:437
 * @route '/admin/dashboad/manage/setting/manage-footer/export/csv'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:415
 * @route '/admin/dashboad/manage/setting/manage-footer/export/pdf'
 */
export const export_pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})

export_pdf.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:415
 * @route '/admin/dashboad/manage/setting/manage-footer/export/pdf'
 */
export_pdf.url = (options?: RouteQueryOptions) => {
    return export_pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:415
 * @route '/admin/dashboad/manage/setting/manage-footer/export/pdf'
 */
export_pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:415
 * @route '/admin/dashboad/manage/setting/manage-footer/export/pdf'
 */
export_pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_pdf.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:415
 * @route '/admin/dashboad/manage/setting/manage-footer/export/pdf'
 */
    const export_pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_pdf.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:415
 * @route '/admin/dashboad/manage/setting/manage-footer/export/pdf'
 */
        export_pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_pdf.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:415
 * @route '/admin/dashboad/manage/setting/manage-footer/export/pdf'
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
* @see \App\Http\Controllers\backend\setting\ManageFooterController::ThemeChoose
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:82
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/choose/{id}/{slug}'
 */
export const ThemeChoose = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ThemeChoose.url(args, options),
    method: 'get',
})

ThemeChoose.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-footer/header/theme/choose/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::ThemeChoose
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:82
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/choose/{id}/{slug}'
 */
ThemeChoose.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return ThemeChoose.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::ThemeChoose
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:82
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/choose/{id}/{slug}'
 */
ThemeChoose.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ThemeChoose.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::ThemeChoose
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:82
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/choose/{id}/{slug}'
 */
ThemeChoose.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ThemeChoose.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::ThemeChoose
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:82
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/choose/{id}/{slug}'
 */
    const ThemeChooseForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ThemeChoose.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::ThemeChoose
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:82
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/choose/{id}/{slug}'
 */
        ThemeChooseForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ThemeChoose.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::ThemeChoose
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:82
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/choose/{id}/{slug}'
 */
        ThemeChooseForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ThemeChoose.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ThemeChoose.form = ThemeChooseForm
/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::themeUpdate
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:90
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/update'
 */
export const themeUpdate = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: themeUpdate.url(options),
    method: 'patch',
})

themeUpdate.definition = {
    methods: ["patch"],
    url: '/admin/dashboad/manage/setting/manage-footer/header/theme/update',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::themeUpdate
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:90
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/update'
 */
themeUpdate.url = (options?: RouteQueryOptions) => {
    return themeUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::themeUpdate
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:90
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/update'
 */
themeUpdate.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: themeUpdate.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::themeUpdate
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:90
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/update'
 */
    const themeUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: themeUpdate.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageFooterController::themeUpdate
 * @see app/Http/Controllers/backend/setting/ManageFooterController.php:90
 * @route '/admin/dashboad/manage/setting/manage-footer/header/theme/update'
 */
        themeUpdateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: themeUpdate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    themeUpdate.form = themeUpdateForm
const ManageFooterController = { index, add, view, edit, insert, update, active, deactive, softdelete, deleteMethod, recycle, bulkAction, exportPdf, export_excel, export_csv, export_pdf, ThemeChoose, themeUpdate, delete: deleteMethod }

export default ManageFooterController