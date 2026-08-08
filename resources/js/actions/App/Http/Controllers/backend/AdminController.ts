import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\backend\AdminController::adminDashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
export const adminDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminDashboard.url(options),
    method: 'get',
})

adminDashboard.definition = {
    methods: ["get","head"],
    url: '/site/manage/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\AdminController::adminDashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
adminDashboard.url = (options?: RouteQueryOptions) => {
    return adminDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\AdminController::adminDashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
adminDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminDashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\AdminController::adminDashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
adminDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adminDashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\AdminController::adminDashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
    const adminDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: adminDashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\AdminController::adminDashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
        adminDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: adminDashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\AdminController::adminDashboard
 * @see app/Http/Controllers/backend/AdminController.php:15
 * @route '/site/manage/admin/dashboard'
 */
        adminDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: adminDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    adminDashboard.form = adminDashboardForm
const AdminController = { adminDashboard }

export default AdminController