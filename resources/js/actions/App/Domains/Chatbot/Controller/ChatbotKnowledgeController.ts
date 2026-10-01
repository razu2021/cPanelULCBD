import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::index
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:38
 * @route '/site/manage/admin/chatbot/knowledge/all'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/all',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::index
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:38
 * @route '/site/manage/admin/chatbot/knowledge/all'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::index
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:38
 * @route '/site/manage/admin/chatbot/knowledge/all'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::index
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:38
 * @route '/site/manage/admin/chatbot/knowledge/all'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::index
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:38
 * @route '/site/manage/admin/chatbot/knowledge/all'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::index
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:38
 * @route '/site/manage/admin/chatbot/knowledge/all'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::index
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:38
 * @route '/site/manage/admin/chatbot/knowledge/all'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::add
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:57
 * @route '/site/manage/admin/chatbot/knowledge/add'
 */
export const add = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})

add.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/add',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::add
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:57
 * @route '/site/manage/admin/chatbot/knowledge/add'
 */
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::add
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:57
 * @route '/site/manage/admin/chatbot/knowledge/add'
 */
add.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::add
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:57
 * @route '/site/manage/admin/chatbot/knowledge/add'
 */
add.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: add.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::add
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:57
 * @route '/site/manage/admin/chatbot/knowledge/add'
 */
    const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: add.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::add
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:57
 * @route '/site/manage/admin/chatbot/knowledge/add'
 */
        addForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::add
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:57
 * @route '/site/manage/admin/chatbot/knowledge/add'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::view
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:71
 * @route '/site/manage/admin/chatbot/knowledge/view/{id}/{slug}'
 */
export const view = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/view/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::view
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:71
 * @route '/site/manage/admin/chatbot/knowledge/view/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::view
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:71
 * @route '/site/manage/admin/chatbot/knowledge/view/{id}/{slug}'
 */
view.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::view
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:71
 * @route '/site/manage/admin/chatbot/knowledge/view/{id}/{slug}'
 */
view.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::view
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:71
 * @route '/site/manage/admin/chatbot/knowledge/view/{id}/{slug}'
 */
    const viewForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::view
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:71
 * @route '/site/manage/admin/chatbot/knowledge/view/{id}/{slug}'
 */
        viewForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::view
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:71
 * @route '/site/manage/admin/chatbot/knowledge/view/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:95
 * @route '/site/manage/admin/chatbot/knowledge/edit/{id}/{slug}'
 */
export const edit = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/edit/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:95
 * @route '/site/manage/admin/chatbot/knowledge/edit/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:95
 * @route '/site/manage/admin/chatbot/knowledge/edit/{id}/{slug}'
 */
edit.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:95
 * @route '/site/manage/admin/chatbot/knowledge/edit/{id}/{slug}'
 */
edit.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:95
 * @route '/site/manage/admin/chatbot/knowledge/edit/{id}/{slug}'
 */
    const editForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:95
 * @route '/site/manage/admin/chatbot/knowledge/edit/{id}/{slug}'
 */
        editForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::edit
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:95
 * @route '/site/manage/admin/chatbot/knowledge/edit/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::insert
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:119
 * @route '/site/manage/admin/chatbot/knowledge/submit'
 */
export const insert = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: insert.url(options),
    method: 'post',
})

insert.definition = {
    methods: ["post"],
    url: '/site/manage/admin/chatbot/knowledge/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::insert
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:119
 * @route '/site/manage/admin/chatbot/knowledge/submit'
 */
insert.url = (options?: RouteQueryOptions) => {
    return insert.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::insert
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:119
 * @route '/site/manage/admin/chatbot/knowledge/submit'
 */
insert.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: insert.url(options),
    method: 'post',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::insert
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:119
 * @route '/site/manage/admin/chatbot/knowledge/submit'
 */
    const insertForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: insert.url(options),
        method: 'post',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::insert
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:119
 * @route '/site/manage/admin/chatbot/knowledge/submit'
 */
        insertForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: insert.url(options),
            method: 'post',
        })
    
    insert.form = insertForm
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::update
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:143
 * @route '/site/manage/admin/chatbot/knowledge/update/{id}/{slug}'
 */
export const update = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/site/manage/admin/chatbot/knowledge/update/{id}/{slug}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::update
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:143
 * @route '/site/manage/admin/chatbot/knowledge/update/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::update
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:143
 * @route '/site/manage/admin/chatbot/knowledge/update/{id}/{slug}'
 */
update.patch = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::update
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:143
 * @route '/site/manage/admin/chatbot/knowledge/update/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::update
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:143
 * @route '/site/manage/admin/chatbot/knowledge/update/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::active
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:165
 * @route '/site/manage/admin/chatbot/knowledge/active/{id}/{slug}'
 */
export const active = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/active/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::active
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:165
 * @route '/site/manage/admin/chatbot/knowledge/active/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::active
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:165
 * @route '/site/manage/admin/chatbot/knowledge/active/{id}/{slug}'
 */
active.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::active
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:165
 * @route '/site/manage/admin/chatbot/knowledge/active/{id}/{slug}'
 */
active.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::active
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:165
 * @route '/site/manage/admin/chatbot/knowledge/active/{id}/{slug}'
 */
    const activeForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::active
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:165
 * @route '/site/manage/admin/chatbot/knowledge/active/{id}/{slug}'
 */
        activeForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::active
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:165
 * @route '/site/manage/admin/chatbot/knowledge/active/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:182
 * @route '/site/manage/admin/chatbot/knowledge/deactive/{id}/{slug}'
 */
export const deactive = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})

deactive.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/deactive/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:182
 * @route '/site/manage/admin/chatbot/knowledge/deactive/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:182
 * @route '/site/manage/admin/chatbot/knowledge/deactive/{id}/{slug}'
 */
deactive.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactive.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:182
 * @route '/site/manage/admin/chatbot/knowledge/deactive/{id}/{slug}'
 */
deactive.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deactive.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:182
 * @route '/site/manage/admin/chatbot/knowledge/deactive/{id}/{slug}'
 */
    const deactiveForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deactive.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:182
 * @route '/site/manage/admin/chatbot/knowledge/deactive/{id}/{slug}'
 */
        deactiveForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deactive.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deactive
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:182
 * @route '/site/manage/admin/chatbot/knowledge/deactive/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:198
 * @route '/site/manage/admin/chatbot/knowledge/softdelete/{id}'
 */
export const softdelete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

softdelete.definition = {
    methods: ["delete"],
    url: '/site/manage/admin/chatbot/knowledge/softdelete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:198
 * @route '/site/manage/admin/chatbot/knowledge/softdelete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:198
 * @route '/site/manage/admin/chatbot/knowledge/softdelete/{id}'
 */
softdelete.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: softdelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:198
 * @route '/site/manage/admin/chatbot/knowledge/softdelete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::softdelete
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:198
 * @route '/site/manage/admin/chatbot/knowledge/softdelete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:215
 * @route '/site/manage/admin/chatbot/knowledge/delete/{id}'
 */
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/site/manage/admin/chatbot/knowledge/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:215
 * @route '/site/manage/admin/chatbot/knowledge/delete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:215
 * @route '/site/manage/admin/chatbot/knowledge/delete/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:215
 * @route '/site/manage/admin/chatbot/knowledge/delete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::deleteMethod
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:215
 * @route '/site/manage/admin/chatbot/knowledge/delete/{id}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:232
 * @route '/site/manage/admin/chatbot/knowledge/recycle'
 */
export const recycle = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})

recycle.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/recycle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:232
 * @route '/site/manage/admin/chatbot/knowledge/recycle'
 */
recycle.url = (options?: RouteQueryOptions) => {
    return recycle.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:232
 * @route '/site/manage/admin/chatbot/knowledge/recycle'
 */
recycle.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recycle.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:232
 * @route '/site/manage/admin/chatbot/knowledge/recycle'
 */
recycle.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recycle.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:232
 * @route '/site/manage/admin/chatbot/knowledge/recycle'
 */
    const recycleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recycle.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:232
 * @route '/site/manage/admin/chatbot/knowledge/recycle'
 */
        recycleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recycle.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::recycle
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:232
 * @route '/site/manage/admin/chatbot/knowledge/recycle'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:258
 * @route '/site/manage/admin/chatbot/knowledge/bulk/action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/site/manage/admin/chatbot/knowledge/bulk/action',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:258
 * @route '/site/manage/admin/chatbot/knowledge/bulk/action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:258
 * @route '/site/manage/admin/chatbot/knowledge/bulk/action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:258
 * @route '/site/manage/admin/chatbot/knowledge/bulk/action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::bulkAction
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:258
 * @route '/site/manage/admin/chatbot/knowledge/bulk/action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::exportPdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:312
 * @route '/site/manage/admin/chatbot/knowledge/export/single/pdf/{id}/{slug}'
 */
export const exportPdf = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(args, options),
    method: 'get',
})

exportPdf.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/export/single/pdf/{id}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::exportPdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:312
 * @route '/site/manage/admin/chatbot/knowledge/export/single/pdf/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::exportPdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:312
 * @route '/site/manage/admin/chatbot/knowledge/export/single/pdf/{id}/{slug}'
 */
exportPdf.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::exportPdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:312
 * @route '/site/manage/admin/chatbot/knowledge/export/single/pdf/{id}/{slug}'
 */
exportPdf.head = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportPdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::exportPdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:312
 * @route '/site/manage/admin/chatbot/knowledge/export/single/pdf/{id}/{slug}'
 */
    const exportPdfForm = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportPdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::exportPdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:312
 * @route '/site/manage/admin/chatbot/knowledge/export/single/pdf/{id}/{slug}'
 */
        exportPdfForm.get = (args: { id: string | number, slug: string | number } | [id: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportPdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::exportPdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:312
 * @route '/site/manage/admin/chatbot/knowledge/export/single/pdf/{id}/{slug}'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:340
 * @route '/site/manage/admin/chatbot/knowledge/export/excel'
 */
export const export_excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})

export_excel.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:340
 * @route '/site/manage/admin/chatbot/knowledge/export/excel'
 */
export_excel.url = (options?: RouteQueryOptions) => {
    return export_excel.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:340
 * @route '/site/manage/admin/chatbot/knowledge/export/excel'
 */
export_excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:340
 * @route '/site/manage/admin/chatbot/knowledge/export/excel'
 */
export_excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_excel.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:340
 * @route '/site/manage/admin/chatbot/knowledge/export/excel'
 */
    const export_excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_excel.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:340
 * @route '/site/manage/admin/chatbot/knowledge/export/excel'
 */
        export_excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_excel.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_excel
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:340
 * @route '/site/manage/admin/chatbot/knowledge/export/excel'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:347
 * @route '/site/manage/admin/chatbot/knowledge/export/csv'
 */
export const export_csv = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})

export_csv.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/export/csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:347
 * @route '/site/manage/admin/chatbot/knowledge/export/csv'
 */
export_csv.url = (options?: RouteQueryOptions) => {
    return export_csv.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:347
 * @route '/site/manage/admin/chatbot/knowledge/export/csv'
 */
export_csv.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_csv.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:347
 * @route '/site/manage/admin/chatbot/knowledge/export/csv'
 */
export_csv.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_csv.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:347
 * @route '/site/manage/admin/chatbot/knowledge/export/csv'
 */
    const export_csvForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_csv.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:347
 * @route '/site/manage/admin/chatbot/knowledge/export/csv'
 */
        export_csvForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_csv.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_csv
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:347
 * @route '/site/manage/admin/chatbot/knowledge/export/csv'
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
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:325
 * @route '/site/manage/admin/chatbot/knowledge/export/pdf'
 */
export const export_pdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})

export_pdf.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/knowledge/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:325
 * @route '/site/manage/admin/chatbot/knowledge/export/pdf'
 */
export_pdf.url = (options?: RouteQueryOptions) => {
    return export_pdf.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:325
 * @route '/site/manage/admin/chatbot/knowledge/export/pdf'
 */
export_pdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_pdf.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:325
 * @route '/site/manage/admin/chatbot/knowledge/export/pdf'
 */
export_pdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_pdf.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:325
 * @route '/site/manage/admin/chatbot/knowledge/export/pdf'
 */
    const export_pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: export_pdf.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:325
 * @route '/site/manage/admin/chatbot/knowledge/export/pdf'
 */
        export_pdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: export_pdf.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatbotKnowledgeController::export_pdf
 * @see app/Domains/Chatbot/Controller/ChatbotKnowledgeController.php:325
 * @route '/site/manage/admin/chatbot/knowledge/export/pdf'
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
const ChatbotKnowledgeController = { index, add, view, edit, insert, update, active, deactive, softdelete, deleteMethod, recycle, bulkAction, exportPdf, export_excel, export_csv, export_pdf, delete: deleteMethod }

export default ChatbotKnowledgeController