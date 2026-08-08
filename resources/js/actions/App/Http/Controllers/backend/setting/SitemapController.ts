import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\backend\setting\SitemapController::generateSitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
export const generateSitemap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateSitemap.url(options),
    method: 'get',
})

generateSitemap.definition = {
    methods: ["get","head"],
    url: '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\backend\setting\SitemapController::generateSitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
generateSitemap.url = (options?: RouteQueryOptions) => {
    return generateSitemap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\backend\setting\SitemapController::generateSitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
generateSitemap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateSitemap.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\backend\setting\SitemapController::generateSitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
generateSitemap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generateSitemap.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\backend\setting\SitemapController::generateSitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
    const generateSitemapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generateSitemap.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\backend\setting\SitemapController::generateSitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
        generateSitemapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateSitemap.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\backend\setting\SitemapController::generateSitemap
 * @see app/Http/Controllers/backend/setting/SitemapController.php:14
 * @route '/admin/dashboad/manage/setting/generate/sitemap/generate-sitemap'
 */
        generateSitemapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateSitemap.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    generateSitemap.form = generateSitemapForm
const SitemapController = { generateSitemap }

export default SitemapController