import Swal from 'sweetalert2'
import { router } from '@inertiajs/vue3'
import { route } from 'ziggy-js'

interface ConfirmOptions {
  title?: string
  text?: string
  confirmText?: string
}

export function useConfirmDelete() {
  const confirmDelete = (
    routeName: string,
    id: number | string,
    options: ConfirmOptions = {}
  ) => {
    Swal.fire({
      title: options.title ?? 'Are you sure?',
      text: options.text ?? 'You want to delete this record?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: options.confirmText ?? 'Yes, delete it',
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(route(routeName, id), {
          preserveScroll: true,
        })
      }
    })
  }

  return { confirmDelete }
}
