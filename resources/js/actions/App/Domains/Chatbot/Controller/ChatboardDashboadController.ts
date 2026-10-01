import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboard
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/chatbot/dashboad',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboard
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboard
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboard
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboard
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboard
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Domains\Chatbot\Controller\ChatboardDashboadController::dashboard
 * @see app/Domains/Chatbot/Controller/ChatboardDashboadController.php:16
 * @route '/site/manage/admin/chatbot/dashboad'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
const ChatboardDashboadController = { dashboard }

export default ChatboardDashboadController