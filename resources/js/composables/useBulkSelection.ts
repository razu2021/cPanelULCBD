import { ref, computed, Ref } from 'vue'
import Swal from 'sweetalert2'
import { router } from '@inertiajs/vue3'
import { route } from 'ziggy-js' 
import axios from 'axios'



interface Item {
  id: number
  [key: string]: any
}


export function useBulkSelection(items: Item[],bulkroute:Ref<string>){

    const BulkRoute =  bulkroute.value ;

    // ---- select IDs
    const selectedIds = ref<number[]>([]);


    //--------- master checkbox logic
    const isAnySelected = computed<boolean>(() => selectedIds.value.length > 0)


    //--- toggle all items 
    
    const toggleSelectAll = (allItems: Item[]) =>{
        selectedIds.value = isAnySelected.value ? [] : allItems.map(i => i.id)
    }



    // --- bulk action with sweet alert 

    const bulkAction = (actionType: string , allItems: Item[]) =>{

    if(!selectedIds.value.length) return




    /**======================= Export PDF, Excel, CSV File Only ========= */
    type ExportAction = 'export_pdf' | 'export_excel' | 'export_csv'


    const typeMap: Record<ExportAction, { mime: string; ext: string }> = {
      export_pdf: {
        mime: 'application/pdf',
        ext: 'pdf',
      },
      export_excel: {
        mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ext: 'xlsx',
      },
      export_csv: {
        mime: 'text/csv',
        ext: 'csv',
      },
    }


    if (actionType.startsWith('export')) {

      // 🔐 Type narrow করা
      if (!(actionType in typeMap)) {
        Swal.fire('Error!', 'Invalid export type', 'error')
        return
      }

      const exportType = actionType as ExportAction
      const { mime, ext } = typeMap[exportType]

      Swal.fire({
        title: `Export ${exportType.replace('_', ' ').toUpperCase()}?`,
        text: `You are going to export ${selectedIds.value.length} item(s).`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes, export!',
        cancelButtonText: 'Cancel',
      }).then(result => {
        if (result.isConfirmed) {
          axios.post(
            route(BulkRoute), // ✅ ref হলে .value
            {
              ids: selectedIds.value,
              action: exportType,
            },
            { responseType: 'blob' }
          )
          .then(res => {
            const url = window.URL.createObjectURL(
              new Blob([res.data], { type: mime })
            )
            const link = document.createElement('a')
            link.href = url
            link.download = `items_${Date.now()}.${ext}`
            document.body.appendChild(link)
            link.click()
            link.remove()
            
            // ✅ SUCCESS ALERT (onSuccess equivalent)

            Swal.fire(
              'Success!',
              `${exportType.replace('_', ' ').toUpperCase()} exported successfully.`,
              'success'
            )

            selectedIds.value = []
          })
          .catch(() => {
            Swal.fire('Error!', 'Export failed.', 'error')
          })
        }
      })

      return
    }


  
    //**================= Other action , Active, InActive , Delete , Heard Delete, Restore Etc ============ */

    Swal.fire({
      title: 'Are you sure?',
      text: `You are going to ${actionType} ${selectedIds.value.length} item(s).`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        router.post(route(BulkRoute), {
          ids: selectedIds.value,
          action: actionType
        }, {
          onSuccess: () => {
            Swal.fire('Success!', `${actionType} action performed.`, 'success')
            selectedIds.value = []
          },
          onError: () => {
            Swal.fire('Error!', 'Something went wrong.', 'error')
          }
        })
      }
    })

    }



  return {
    selectedIds,
    isAnySelected,
    toggleSelectAll,
    bulkAction,
    name
  }










}