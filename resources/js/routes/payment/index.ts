import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\gateway\paymentController::checkout
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
export const checkout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkout.url(options),
    method: 'get',
})

checkout.definition = {
    methods: ["get","head"],
    url: '/payment/checkout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\gateway\paymentController::checkout
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
checkout.url = (options?: RouteQueryOptions) => {
    return checkout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\gateway\paymentController::checkout
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
checkout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkout.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\gateway\paymentController::checkout
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
checkout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: checkout.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\gateway\paymentController::checkout
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
    const checkoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: checkout.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\gateway\paymentController::checkout
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
        checkoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: checkout.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\gateway\paymentController::checkout
 * @see app/Http/Controllers/gateway/paymentController.php:14
 * @route '/payment/checkout'
 */
        checkoutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: checkout.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    checkout.form = checkoutForm
/**
* @see \App\Http\Controllers\gateway\paymentController::process
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
export const process = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/payment/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\gateway\paymentController::process
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
process.url = (options?: RouteQueryOptions) => {
    return process.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\gateway\paymentController::process
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
process.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\gateway\paymentController::process
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
    const processForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: process.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\gateway\paymentController::process
 * @see app/Http/Controllers/gateway/paymentController.php:21
 * @route '/payment/process'
 */
        processForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: process.url(options),
            method: 'post',
        })
    
    process.form = processForm
const payment = {
    checkout: Object.assign(checkout, checkout),
process: Object.assign(process, process),
}

export default payment