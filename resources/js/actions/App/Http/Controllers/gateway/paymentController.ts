import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\gateway\paymentController::checkoutPage
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
export const checkoutPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkoutPage.url(options),
    method: 'get',
})

checkoutPage.definition = {
    methods: ["get","head"],
    url: '/payment/checkout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\gateway\paymentController::checkoutPage
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
checkoutPage.url = (options?: RouteQueryOptions) => {
    return checkoutPage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\gateway\paymentController::checkoutPage
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
checkoutPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkoutPage.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\gateway\paymentController::checkoutPage
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
checkoutPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: checkoutPage.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\gateway\paymentController::checkoutPage
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
    const checkoutPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: checkoutPage.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\gateway\paymentController::checkoutPage
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
        checkoutPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: checkoutPage.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\gateway\paymentController::checkoutPage
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
        checkoutPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: checkoutPage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    checkoutPage.form = checkoutPageForm
/**
* @see \App\Http\Controllers\gateway\paymentController::paymentProcess
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
export const paymentProcess = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: paymentProcess.url(options),
    method: 'post',
})

paymentProcess.definition = {
    methods: ["post"],
    url: '/payment/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\gateway\paymentController::paymentProcess
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
paymentProcess.url = (options?: RouteQueryOptions) => {
    return paymentProcess.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\gateway\paymentController::paymentProcess
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
paymentProcess.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: paymentProcess.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\gateway\paymentController::paymentProcess
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
    const paymentProcessForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: paymentProcess.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\gateway\paymentController::paymentProcess
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
        paymentProcessForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: paymentProcess.url(options),
            method: 'post',
        })
    
    paymentProcess.form = paymentProcessForm
const paymentController = { checkoutPage, paymentProcess }

export default paymentController