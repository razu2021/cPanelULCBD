import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::all
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:39
 * @route '/site/manage/admin/chatbot/intent/phrases/all'
 */
export const all = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})

all.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/all',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::all
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:39
 * @route '/site/manage/admin/chatbot/intent/phrases/all'
 */
all.url = (options?: RouteQueryOptions) => {
    return all.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::all
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:39
 * @route '/site/manage/admin/chatbot/intent/phrases/all'
 */
all.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::all
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:39
 * @route '/site/manage/admin/chatbot/intent/phrases/all'
 */
all.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: all.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::all
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:39
 * @route '/site/manage/admin/chatbot/intent/phrases/all'
 */
    const allForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: all.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::all
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:39
 * @route '/site/manage/admin/chatbot/intent/phrases/all'
 */
        allForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: all.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::all
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:39
 * @route '/site/manage/admin/chatbot/intent/phrases/all'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::add
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:58
 * @route '/site/manage/admin/chatbot/intent/phrases/add'
 */
export const add = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})

add.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/add',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::add
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:58
 * @route '/site/manage/admin/chatbot/intent/phrases/add'
 */
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::add
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:58
 * @route '/site/manage/admin/chatbot/intent/phrases/add'
 */
add.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::add
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:58
 * @route '/site/manage/admin/chatbot/intent/phrases/add'
 */
add.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: add.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::add
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:58
 * @route '/site/manage/admin/chatbot/intent/phrases/add'
 */
    const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: add.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::add
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:58
 * @route '/site/manage/admin/chatbot/intent/phrases/add'
 */
        addForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::add
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:58
 * @route '/site/manage/admin/chatbot/intent/phrases/add'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::view
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:72
 * @route '/site/manage/admin/chatbot/intent/phrases/view/{id}/{slug}'
 */
export const view = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/view/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::view
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:72
 * @route '/site/manage/admin/chatbot/intent/phrases/view/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::view
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:72
 * @route '/site/manage/admin/chatbot/intent/phrases/view/{id}/{slug}'
 */
view.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::view
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:72
 * @route '/site/manage/admin/chatbot/intent/phrases/view/{id}/{slug}'
 */
view.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::view
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:72
 * @route '/site/manage/admin/chatbot/intent/phrases/view/{id}/{slug}'
 */
    const viewForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::view
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:72
 * @route '/site/manage/admin/chatbot/intent/phrases/view/{id}/{slug}'
 */
        viewForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::view
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:72
 * @route '/site/manage/admin/chatbot/intent/phrases/view/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:96
 * @route '/site/manage/admin/chatbot/intent/phrases/edit/{id}/{slug}'
 */
export const edit = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/edit/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:96
 * @route '/site/manage/admin/chatbot/intent/phrases/edit/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:96
 * @route '/site/manage/admin/chatbot/intent/phrases/edit/{id}/{slug}'
 */
edit.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:96
 * @route '/site/manage/admin/chatbot/intent/phrases/edit/{id}/{slug}'
 */
edit.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:96
 * @route '/site/manage/admin/chatbot/intent/phrases/edit/{id}/{slug}'
 */
    const editForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:96
 * @route '/site/manage/admin/chatbot/intent/phrases/edit/{id}/{slug}'
 */
        editForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:96
 * @route '/site/manage/admin/chatbot/intent/phrases/edit/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::submit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:119
 * @route '/site/manage/admin/chatbot/intent/phrases/submit'
 */
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/site/manage/admin/chatbot/intent/phrases/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::submit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:119
 * @route '/site/manage/admin/chatbot/intent/phrases/submit'
 */
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::submit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:119
 * @route '/site/manage/admin/chatbot/intent/phrases/submit'
 */
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::submit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:119
 * @route '/site/manage/admin/chatbot/intent/phrases/submit'
 */
    const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(options),
        method: 'post',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::submit
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:119
 * @route '/site/manage/admin/chatbot/intent/phrases/submit'
 */
        submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(options),
            method: 'post',
        })
    
    submit.form = submitForm
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::update
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:143
 * @route '/site/manage/admin/chatbot/intent/phrases/update/{id}/{slug}'
 */
export const update = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/site/manage/admin/chatbot/intent/phrases/update/{id}/{slug}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::update
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:143
 * @route '/site/manage/admin/chatbot/intent/phrases/update/{id}/{slug}'
 */
update.url = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::update
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:143
 * @route '/site/manage/admin/chatbot/intent/phrases/update/{id}/{slug}'
 */
update.patch = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::update
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:143
 * @route '/site/manage/admin/chatbot/intent/phrases/update/{id}/{slug}'
 */
    const updateForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::update
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:143
 * @route '/site/manage/admin/chatbot/intent/phrases/update/{id}/{slug}'
 */
        updateForm.patch = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::active
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:165
 * @route '/site/manage/admin/chatbot/intent/phrases/active/{id}/{slug}'
 */
export const active = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/active/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::active
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:165
 * @route '/site/manage/admin/chatbot/intent/phrases/active/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::active
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:165
 * @route '/site/manage/admin/chatbot/intent/phrases/active/{id}/{slug}'
 */
active.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::active
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:165
 * @route '/site/manage/admin/chatbot/intent/phrases/active/{id}/{slug}'
 */
active.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::active
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:165
 * @route '/site/manage/admin/chatbot/intent/phrases/active/{id}/{slug}'
 */
    const activeForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::active
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:165
 * @route '/site/manage/admin/chatbot/intent/phrases/active/{id}/{slug}'
 */
        activeForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::active
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:165
 * @route '/site/manage/admin/chatbot/intent/phrases/active/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:182
 * @route '/site/manage/admin/chatbot/intent/phrases/deactive/{id}/{slug}'
 */
export const deactive = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})

deactive.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/deactive/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:182
 * @route '/site/manage/admin/chatbot/intent/phrases/deactive/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:182
 * @route '/site/manage/admin/chatbot/intent/phrases/deactive/{id}/{slug}'
 */
deactive.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:182
 * @route '/site/manage/admin/chatbot/intent/phrases/deactive/{id}/{slug}'
 */
deactive.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deactive.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:182
 * @route '/site/manage/admin/chatbot/intent/phrases/deactive/{id}/{slug}'
 */
    const deactiveForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deactive.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:182
 * @route '/site/manage/admin/chatbot/intent/phrases/deactive/{id}/{slug}'
 */
        deactiveForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deactive.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:182
 * @route '/site/manage/admin/chatbot/intent/phrases/deactive/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:198
 * @route '/site/manage/admin/chatbot/intent/phrases/softdelete/{id}'
 */
export const softdelete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

softdelete.definition = {
    methods: ["delete"],
    url: '/site/manage/admin/chatbot/intent/phrases/softdelete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:198
 * @route '/site/manage/admin/chatbot/intent/phrases/softdelete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:198
 * @route '/site/manage/admin/chatbot/intent/phrases/softdelete/{id}'
 */
softdelete.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:198
 * @route '/site/manage/admin/chatbot/intent/phrases/softdelete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:198
 * @route '/site/manage/admin/chatbot/intent/phrases/softdelete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:215
 * @route '/site/manage/admin/chatbot/intent/phrases/delete/{id}'
 */
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/site/manage/admin/chatbot/intent/phrases/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:215
 * @route '/site/manage/admin/chatbot/intent/phrases/delete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:215
 * @route '/site/manage/admin/chatbot/intent/phrases/delete/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:215
 * @route '/site/manage/admin/chatbot/intent/phrases/delete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:215
 * @route '/site/manage/admin/chatbot/intent/phrases/delete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:232
 * @route '/site/manage/admin/chatbot/intent/phrases/recycle'
 */
export const recycle = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})

recycle.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/recycle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:232
 * @route '/site/manage/admin/chatbot/intent/phrases/recycle'
 */
recycle.url = (options?: RouteQueryOptions) => {
    return recycle.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:232
 * @route '/site/manage/admin/chatbot/intent/phrases/recycle'
 */
recycle.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:232
 * @route '/site/manage/admin/chatbot/intent/phrases/recycle'
 */
recycle.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recycle.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:232
 * @route '/site/manage/admin/chatbot/intent/phrases/recycle'
 */
    const recycleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recycle.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:232
 * @route '/site/manage/admin/chatbot/intent/phrases/recycle'
 */
        recycleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recycle.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:232
 * @route '/site/manage/admin/chatbot/intent/phrases/recycle'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:258
 * @route '/site/manage/admin/chatbot/intent/phrases/bulk/action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/site/manage/admin/chatbot/intent/phrases/bulk/action',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:258
 * @route '/site/manage/admin/chatbot/intent/phrases/bulk/action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:258
 * @route '/site/manage/admin/chatbot/intent/phrases/bulk/action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:258
 * @route '/site/manage/admin/chatbot/intent/phrases/bulk/action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:258
 * @route '/site/manage/admin/chatbot/intent/phrases/bulk/action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::single_pdf_export
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:312
 * @route '/site/manage/admin/chatbot/intent/phrases/export/single/pdf/{id}/{slug}'
 */
export const single_pdf_export = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: single_pdf_export.url(args, options),
    method: 'get',
})

single_pdf_export.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/export/single/pdf/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::single_pdf_export
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:312
 * @route '/site/manage/admin/chatbot/intent/phrases/export/single/pdf/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::single_pdf_export
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:312
 * @route '/site/manage/admin/chatbot/intent/phrases/export/single/pdf/{id}/{slug}'
 */
single_pdf_export.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: single_pdf_export.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::single_pdf_export
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:312
 * @route '/site/manage/admin/chatbot/intent/phrases/export/single/pdf/{id}/{slug}'
 */
single_pdf_export.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: single_pdf_export.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::single_pdf_export
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:312
 * @route '/site/manage/admin/chatbot/intent/phrases/export/single/pdf/{id}/{slug}'
 */
    const single_pdf_exportForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: single_pdf_export.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::single_pdf_export
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:312
 * @route '/site/manage/admin/chatbot/intent/phrases/export/single/pdf/{id}/{slug}'
 */
        single_pdf_exportForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: single_pdf_export.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::single_pdf_export
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:312
 * @route '/site/manage/admin/chatbot/intent/phrases/export/single/pdf/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:340
 * @route '/site/manage/admin/chatbot/intent/phrases/export/excel'
 */
export const export_excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})

export_excel.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:340
 * @route '/site/manage/admin/chatbot/intent/phrases/export/excel'
 */
export_excel.url = (options?: RouteQueryOptions) => {
    return export_excel.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:340
 * @route '/site/manage/admin/chatbot/intent/phrases/export/excel'
 */
export_excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:340
 * @route '/site/manage/admin/chatbot/intent/phrases/export/excel'
 */
export_excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_excel.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:340
 * @route '/site/manage/admin/chatbot/intent/phrases/export/excel'
 */
    const export_excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_excel.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:340
 * @route '/site/manage/admin/chatbot/intent/phrases/export/excel'
 */
        export_excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_excel.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:340
 * @route '/site/manage/admin/chatbot/intent/phrases/export/excel'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:347
 * @route '/site/manage/admin/chatbot/intent/phrases/export/csv'
 */
export const export_csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})

export_csv.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:347
 * @route '/site/manage/admin/chatbot/intent/phrases/export/csv'
 */
export_csv.url = (options?: RouteQueryOptions) => {
    return export_csv.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:347
 * @route '/site/manage/admin/chatbot/intent/phrases/export/csv'
 */
export_csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:347
 * @route '/site/manage/admin/chatbot/intent/phrases/export/csv'
 */
export_csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_csv.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:347
 * @route '/site/manage/admin/chatbot/intent/phrases/export/csv'
 */
    const export_csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_csv.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:347
 * @route '/site/manage/admin/chatbot/intent/phrases/export/csv'
 */
        export_csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_csv.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:347
 * @route '/site/manage/admin/chatbot/intent/phrases/export/csv'
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
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:325
 * @route '/site/manage/admin/chatbot/intent/phrases/export/pdf'
 */
export const export_pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})

export_pdf.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/intent/phrases/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:325
 * @route '/site/manage/admin/chatbot/intent/phrases/export/pdf'
 */
export_pdf.url = (options?: RouteQueryOptions) => {
    return export_pdf.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:325
 * @route '/site/manage/admin/chatbot/intent/phrases/export/pdf'
 */
export_pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:325
 * @route '/site/manage/admin/chatbot/intent/phrases/export/pdf'
 */
export_pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_pdf.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:325
 * @route '/site/manage/admin/chatbot/intent/phrases/export/pdf'
 */
    const export_pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_pdf.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:325
 * @route '/site/manage/admin/chatbot/intent/phrases/export/pdf'
 */
        export_pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_pdf.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotIntentPhrasesController.php:325
 * @route '/site/manage/admin/chatbot/intent/phrases/export/pdf'
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
const chatbot_intent_phrases = {
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
}

export default chatbot_intent_phrases