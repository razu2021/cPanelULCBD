import { computed } from 'vue'

// Define the shape of props
interface DataTableProps {
  alldata?: {
    data?: any[],
    links?: any[],
    from?: number,
    to?: number,
    total?: number,
    current_page?: number,
    last_page?: number,
    per_page?: number,
    first_page_url?: string,
    last_page_url?: string,
    next_page_url?: string,
    prev_page_url?: string,
    path?: string
  }
}



export function useDataTable(props:DataTableProps){

    //------------------------------- 
    //get table row (current page onlu )
    // Using computed to automatically update when props.alldata is chenged 
    //------------------------------- 
    const rows = computed(()=>props.alldata?.data?? [])

    //------------------------------- 
    // Using computed for Reactivity and pagination links for navigation  only
    //------------------------------- 
    const links = computed(()=>props.alldata?.links?? [])

    //------------------------------- 
    //Using Computed for get extra information for UI Logic ,, pagination  
    //------------------------------- 
    const meta = computed(()=>({
    from: props.alldata?.from ?? 0 ,
    to: props.alldata?.to ?? 0 ,
    total: props.alldata?.total ?? 0 ,
    current_page: props.alldata?.current_page ?? 0 ,
    last_page: props.alldata?.last_page ?? 0 ,
    per_page: props.alldata?.per_page ?? 0 ,
    first_page_url: props.alldata?.first_page_url ?? '' ,
    last_page_url: props.alldata?.last_page_url ?? '' ,
    next_page_url: props.alldata?.next_page_url ?? '' ,
    prev_page_url: props.alldata?.prev_page_url ?? '',
    path:props.alldata?.path ?? '' 
    }))

    return { rows, links, meta }

}

