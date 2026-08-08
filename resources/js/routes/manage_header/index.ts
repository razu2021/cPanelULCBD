import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::all
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:23
 * @route '/admin/dashboad/manage/setting/manage-header/all'
 */
export const all = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})

all.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/all',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::all
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:23
 * @route '/admin/dashboad/manage/setting/manage-header/all'
 */
all.url = (options?: RouteQueryOptions) => {
    return all.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::all
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:23
 * @route '/admin/dashboad/manage/setting/manage-header/all'
 */
all.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::all
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:23
 * @route '/admin/dashboad/manage/setting/manage-header/all'
 */
all.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: all.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::all
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:23
 * @route '/admin/dashboad/manage/setting/manage-header/all'
 */
    const allForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: all.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::all
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:23
 * @route '/admin/dashboad/manage/setting/manage-header/all'
 */
        allForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: all.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::all
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:23
 * @route '/admin/dashboad/manage/setting/manage-header/all'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::add
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:48
 * @route '/admin/dashboad/manage/setting/manage-header/add'
 */
export const add = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})

add.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/add',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::add
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:48
 * @route '/admin/dashboad/manage/setting/manage-header/add'
 */
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::add
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:48
 * @route '/admin/dashboad/manage/setting/manage-header/add'
 */
add.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::add
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:48
 * @route '/admin/dashboad/manage/setting/manage-header/add'
 */
add.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: add.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::add
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:48
 * @route '/admin/dashboad/manage/setting/manage-header/add'
 */
    const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: add.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::add
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:48
 * @route '/admin/dashboad/manage/setting/manage-header/add'
 */
        addForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::add
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:48
 * @route '/admin/dashboad/manage/setting/manage-header/add'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::view
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:57
 * @route '/admin/dashboad/manage/setting/manage-header/view/{id}/{slug}'
 */
export const view = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/view/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::view
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:57
 * @route '/admin/dashboad/manage/setting/manage-header/view/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::view
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:57
 * @route '/admin/dashboad/manage/setting/manage-header/view/{id}/{slug}'
 */
view.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::view
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:57
 * @route '/admin/dashboad/manage/setting/manage-header/view/{id}/{slug}'
 */
view.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::view
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:57
 * @route '/admin/dashboad/manage/setting/manage-header/view/{id}/{slug}'
 */
    const viewForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::view
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:57
 * @route '/admin/dashboad/manage/setting/manage-header/view/{id}/{slug}'
 */
        viewForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::view
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:57
 * @route '/admin/dashboad/manage/setting/manage-header/view/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::edit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:69
 * @route '/admin/dashboad/manage/setting/manage-header/edit/{id}/{slug}'
 */
export const edit = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/edit/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::edit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:69
 * @route '/admin/dashboad/manage/setting/manage-header/edit/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::edit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:69
 * @route '/admin/dashboad/manage/setting/manage-header/edit/{id}/{slug}'
 */
edit.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::edit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:69
 * @route '/admin/dashboad/manage/setting/manage-header/edit/{id}/{slug}'
 */
edit.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::edit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:69
 * @route '/admin/dashboad/manage/setting/manage-header/edit/{id}/{slug}'
 */
    const editForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::edit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:69
 * @route '/admin/dashboad/manage/setting/manage-header/edit/{id}/{slug}'
 */
        editForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::edit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:69
 * @route '/admin/dashboad/manage/setting/manage-header/edit/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::submit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:115
 * @route '/admin/dashboad/manage/setting/manage-header/submit'
 */
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/admin/dashboad/manage/setting/manage-header/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::submit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:115
 * @route '/admin/dashboad/manage/setting/manage-header/submit'
 */
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::submit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:115
 * @route '/admin/dashboad/manage/setting/manage-header/submit'
 */
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::submit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:115
 * @route '/admin/dashboad/manage/setting/manage-header/submit'
 */
    const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::submit
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:115
 * @route '/admin/dashboad/manage/setting/manage-header/submit'
 */
        submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(options),
            method: 'post',
        })
    
    submit.form = submitForm
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:165
 * @route '/admin/dashboad/manage/setting/manage-header/update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/admin/dashboad/manage/setting/manage-header/update',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:165
 * @route '/admin/dashboad/manage/setting/manage-header/update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:165
 * @route '/admin/dashboad/manage/setting/manage-header/update'
 */
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:165
 * @route '/admin/dashboad/manage/setting/manage-header/update'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:165
 * @route '/admin/dashboad/manage/setting/manage-header/update'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::active
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:211
 * @route '/admin/dashboad/manage/setting/manage-header/active/{id}/{slug}'
 */
export const active = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/active/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::active
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:211
 * @route '/admin/dashboad/manage/setting/manage-header/active/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::active
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:211
 * @route '/admin/dashboad/manage/setting/manage-header/active/{id}/{slug}'
 */
active.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::active
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:211
 * @route '/admin/dashboad/manage/setting/manage-header/active/{id}/{slug}'
 */
active.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::active
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:211
 * @route '/admin/dashboad/manage/setting/manage-header/active/{id}/{slug}'
 */
    const activeForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::active
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:211
 * @route '/admin/dashboad/manage/setting/manage-header/active/{id}/{slug}'
 */
        activeForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::active
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:211
 * @route '/admin/dashboad/manage/setting/manage-header/active/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deactive
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:228
 * @route '/admin/dashboad/manage/setting/manage-header/deactive/{id}/{slug}'
 */
export const deactive = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})

deactive.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/deactive/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deactive
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:228
 * @route '/admin/dashboad/manage/setting/manage-header/deactive/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deactive
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:228
 * @route '/admin/dashboad/manage/setting/manage-header/deactive/{id}/{slug}'
 */
deactive.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deactive
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:228
 * @route '/admin/dashboad/manage/setting/manage-header/deactive/{id}/{slug}'
 */
deactive.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deactive.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deactive
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:228
 * @route '/admin/dashboad/manage/setting/manage-header/deactive/{id}/{slug}'
 */
    const deactiveForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deactive.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deactive
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:228
 * @route '/admin/dashboad/manage/setting/manage-header/deactive/{id}/{slug}'
 */
        deactiveForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deactive.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deactive
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:228
 * @route '/admin/dashboad/manage/setting/manage-header/deactive/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:246
 * @route '/admin/dashboad/manage/setting/manage-header/softdelete/{id}'
 */
export const softdelete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

softdelete.definition = {
    methods: ["delete"],
    url: '/admin/dashboad/manage/setting/manage-header/softdelete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:246
 * @route '/admin/dashboad/manage/setting/manage-header/softdelete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:246
 * @route '/admin/dashboad/manage/setting/manage-header/softdelete/{id}'
 */
softdelete.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:246
 * @route '/admin/dashboad/manage/setting/manage-header/softdelete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::softdelete
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:246
 * @route '/admin/dashboad/manage/setting/manage-header/softdelete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:261
 * @route '/admin/dashboad/manage/setting/manage-header/delete/{id}'
 */
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/admin/dashboad/manage/setting/manage-header/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:261
 * @route '/admin/dashboad/manage/setting/manage-header/delete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:261
 * @route '/admin/dashboad/manage/setting/manage-header/delete/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:261
 * @route '/admin/dashboad/manage/setting/manage-header/delete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::deleteMethod
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:261
 * @route '/admin/dashboad/manage/setting/manage-header/delete/{id}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::recycle
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:277
 * @route '/admin/dashboad/manage/setting/manage-header/recycle'
 */
export const recycle = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})

recycle.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/recycle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::recycle
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:277
 * @route '/admin/dashboad/manage/setting/manage-header/recycle'
 */
recycle.url = (options?: RouteQueryOptions) => {
    return recycle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::recycle
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:277
 * @route '/admin/dashboad/manage/setting/manage-header/recycle'
 */
recycle.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::recycle
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:277
 * @route '/admin/dashboad/manage/setting/manage-header/recycle'
 */
recycle.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recycle.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::recycle
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:277
 * @route '/admin/dashboad/manage/setting/manage-header/recycle'
 */
    const recycleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recycle.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::recycle
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:277
 * @route '/admin/dashboad/manage/setting/manage-header/recycle'
 */
        recycleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recycle.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::recycle
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:277
 * @route '/admin/dashboad/manage/setting/manage-header/recycle'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:311
 * @route '/admin/dashboad/manage/setting/manage-header/bulk/action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/admin/dashboad/manage/setting/manage-header/bulk/action',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:311
 * @route '/admin/dashboad/manage/setting/manage-header/bulk/action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:311
 * @route '/admin/dashboad/manage/setting/manage-header/bulk/action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:311
 * @route '/admin/dashboad/manage/setting/manage-header/bulk/action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::bulkAction
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:311
 * @route '/admin/dashboad/manage/setting/manage-header/bulk/action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::single_pdf_export
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:406
 * @route '/admin/dashboad/manage/setting/manage-header/export/single/pdf/{id}/{slug}'
 */
export const single_pdf_export = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: single_pdf_export.url(args, options),
    method: 'get',
})

single_pdf_export.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/export/single/pdf/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::single_pdf_export
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:406
 * @route '/admin/dashboad/manage/setting/manage-header/export/single/pdf/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::single_pdf_export
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:406
 * @route '/admin/dashboad/manage/setting/manage-header/export/single/pdf/{id}/{slug}'
 */
single_pdf_export.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: single_pdf_export.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::single_pdf_export
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:406
 * @route '/admin/dashboad/manage/setting/manage-header/export/single/pdf/{id}/{slug}'
 */
single_pdf_export.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: single_pdf_export.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::single_pdf_export
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:406
 * @route '/admin/dashboad/manage/setting/manage-header/export/single/pdf/{id}/{slug}'
 */
    const single_pdf_exportForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: single_pdf_export.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::single_pdf_export
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:406
 * @route '/admin/dashboad/manage/setting/manage-header/export/single/pdf/{id}/{slug}'
 */
        single_pdf_exportForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: single_pdf_export.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::single_pdf_export
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:406
 * @route '/admin/dashboad/manage/setting/manage-header/export/single/pdf/{id}/{slug}'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:435
 * @route '/admin/dashboad/manage/setting/manage-header/export/excel'
 */
export const export_excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})

export_excel.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:435
 * @route '/admin/dashboad/manage/setting/manage-header/export/excel'
 */
export_excel.url = (options?: RouteQueryOptions) => {
    return export_excel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:435
 * @route '/admin/dashboad/manage/setting/manage-header/export/excel'
 */
export_excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:435
 * @route '/admin/dashboad/manage/setting/manage-header/export/excel'
 */
export_excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_excel.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:435
 * @route '/admin/dashboad/manage/setting/manage-header/export/excel'
 */
    const export_excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_excel.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:435
 * @route '/admin/dashboad/manage/setting/manage-header/export/excel'
 */
        export_excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_excel.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_excel
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:435
 * @route '/admin/dashboad/manage/setting/manage-header/export/excel'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:442
 * @route '/admin/dashboad/manage/setting/manage-header/export/csv'
 */
export const export_csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})

export_csv.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:442
 * @route '/admin/dashboad/manage/setting/manage-header/export/csv'
 */
export_csv.url = (options?: RouteQueryOptions) => {
    return export_csv.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:442
 * @route '/admin/dashboad/manage/setting/manage-header/export/csv'
 */
export_csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:442
 * @route '/admin/dashboad/manage/setting/manage-header/export/csv'
 */
export_csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_csv.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:442
 * @route '/admin/dashboad/manage/setting/manage-header/export/csv'
 */
    const export_csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_csv.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:442
 * @route '/admin/dashboad/manage/setting/manage-header/export/csv'
 */
        export_csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_csv.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_csv
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:442
 * @route '/admin/dashboad/manage/setting/manage-header/export/csv'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:420
 * @route '/admin/dashboad/manage/setting/manage-header/export/pdf'
 */
export const export_pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})

export_pdf.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:420
 * @route '/admin/dashboad/manage/setting/manage-header/export/pdf'
 */
export_pdf.url = (options?: RouteQueryOptions) => {
    return export_pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:420
 * @route '/admin/dashboad/manage/setting/manage-header/export/pdf'
 */
export_pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:420
 * @route '/admin/dashboad/manage/setting/manage-header/export/pdf'
 */
export_pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_pdf.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:420
 * @route '/admin/dashboad/manage/setting/manage-header/export/pdf'
 */
    const export_pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_pdf.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:420
 * @route '/admin/dashboad/manage/setting/manage-header/export/pdf'
 */
        export_pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_pdf.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::export_pdf
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:420
 * @route '/admin/dashboad/manage/setting/manage-header/export/pdf'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::choose_theme
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:82
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/choose/{id}/{slug}'
 */
export const choose_theme = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: choose_theme.url(args, options),
    method: 'get',
})

choose_theme.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/manage-header/header/theme/choose/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::choose_theme
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:82
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/choose/{id}/{slug}'
 */
choose_theme.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return choose_theme.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::choose_theme
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:82
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/choose/{id}/{slug}'
 */
choose_theme.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: choose_theme.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::choose_theme
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:82
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/choose/{id}/{slug}'
 */
choose_theme.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: choose_theme.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::choose_theme
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:82
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/choose/{id}/{slug}'
 */
    const choose_themeForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: choose_theme.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::choose_theme
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:82
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/choose/{id}/{slug}'
 */
        choose_themeForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: choose_theme.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::choose_theme
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:82
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/choose/{id}/{slug}'
 */
        choose_themeForm.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: choose_theme.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    choose_theme.form = choose_themeForm
/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::theme_update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:90
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/update'
 */
export const theme_update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: theme_update.url(options),
    method: 'patch',
})

theme_update.definition = {
    methods: ["patch"],
    url: '/admin/dashboad/manage/setting/manage-header/header/theme/update',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::theme_update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:90
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/update'
 */
theme_update.url = (options?: RouteQueryOptions) => {
    return theme_update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::theme_update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:90
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/update'
 */
theme_update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: theme_update.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::theme_update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:90
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/update'
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
* @see \App\Http\Controllers\backend\setting\ManageHeaderController::theme_update
 * @see app/Http/Controllers/backend/setting/ManageHeaderController.php:90
 * @route '/admin/dashboad/manage/setting/manage-header/header/theme/update'
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
const manage_header = {
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
choose_theme: Object.assign(choose_theme, choose_theme),
theme_update: Object.assign(theme_update, theme_update),
}

export default manage_header