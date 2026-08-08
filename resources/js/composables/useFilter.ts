import { reactive, watch } from 'vue'
import { router } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import { debounce } from 'lodash'


// define props teype or shap 

interface FilterProps{
    filters?:{
        search?:string
        status?:number
    }
}

export function useFilter(props:FilterProps, RouteName:string){

    const form = reactive({
    search: props.filters?.search ??  '',
    status: props.filters?.status ?? '' 
    })

    //------------------------------- 
    // Watch User interections , when typing->backend call -> props change .->computed update ->UI Change . 
    //------------------------------- 
    watch(
    form,
    debounce((newForm) => {
        router.get(
        route(RouteName),
        { search: newForm.search, status: newForm.status },
        {
            preserveState: true,
            replace: true,
        }
        )
    }, 400),
    { deep: true } 
    )

    return {form}

}