import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:138
 * @route '/livewire-b2187a3f/update'
 */
export const handleUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdate.url(options),
    method: 'post',
})

handleUpdate.definition = {
    methods: ["post"],
    url: '/livewire-b2187a3f/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:138
 * @route '/livewire-b2187a3f/update'
 */
handleUpdate.url = (options?: RouteQueryOptions) => {
    return handleUpdate.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:138
 * @route '/livewire-b2187a3f/update'
 */
handleUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdate.url(options),
    method: 'post',
})

    /**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:138
 * @route '/livewire-b2187a3f/update'
 */
    const handleUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: handleUpdate.url(options),
        method: 'post',
    })

            /**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:138
 * @route '/livewire-b2187a3f/update'
 */
        handleUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: handleUpdate.url(options),
            method: 'post',
        })
    
    handleUpdate.form = handleUpdateForm
const HandleRequests = { handleUpdate }

export default HandleRequests