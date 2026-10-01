import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboad
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
export const dashboad = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboad.url(options),
    method: 'get',
})

dashboad.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/dashboad',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboad
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
dashboad.url = (options?: RouteQueryOptions) => {
    return dashboad.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboad
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
dashboad.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboad.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboad
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
dashboad.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboad.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboad
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
    const dashboadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboad.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboad
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
        dashboadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboad.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboad
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
        dashboadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboad.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboad.form = dashboadForm
const chatboad = {
    dashboad: Object.assign(dashboad, dashboad),
}

export default chatboad