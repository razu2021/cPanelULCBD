import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\backend\setting\SitemapController::generate_sitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
export const generate_sitemap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generate_sitemap.url(options),
    method: 'get',
})

generate_sitemap.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SitemapController::generate_sitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
generate_sitemap.url = (options?: RouteQueryOptions) => {
    return generate_sitemap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SitemapController::generate_sitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
generate_sitemap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generate_sitemap.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SitemapController::generate_sitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
generate_sitemap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generate_sitemap.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SitemapController::generate_sitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
    const generate_sitemapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generate_sitemap.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SitemapController::generate_sitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
        generate_sitemapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generate_sitemap.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SitemapController::generate_sitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
        generate_sitemapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generate_sitemap.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    generate_sitemap.form = generate_sitemapForm
const sitemap = {
    generate_sitemap: Object.assign(generate_sitemap, generate_sitemap),
}

export default sitemap