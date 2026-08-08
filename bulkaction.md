অবশ্যই! 😎
আমি তোমাকে **Vue 3 + TypeScript + Inertia + SweetAlert + Bulk Selection + Bulk Action** পুরো **start থেকে end** ধাপে ধাপে **Bangla ভাষায় Markdown সহ** বুঝিয়ে দিচ্ছি।
আমি চেষ্টা করব একদম সহজভাবে, যেন তুমি copy-paste করে একেবারে ready-to-use system বানাতে পারো।

---

# 📝 Bulk Action System – Step by Step (Bangla Explanation)

---

## 1️⃣ সমস্যার ধরন

তুমি চাইছো:

1. একটি **table** যেখানে অনেক row আছে
2. প্রতিটি row এর পাশে **checkbox** থাকবে
3. **Boss checkbox** (Header checkbox) যা:

   * একবারে সব row select/deselect করবে
   * v-model এর মাধ্যমে বোঝাবে "কোনো row selected আছে কি না"
4. **Bulk Action dropdown**:

   * Active / Inactive / Restore / Delete
   * Action করার আগে **SweetAlert confirm** দেখাবে
   * Action করার পরে success message দেখাবে
5. সব logic **reusable composable** হিসেবে থাকবে
6. TypeScript compatibility

---

## 2️⃣ Table Structure (HTML / Vue Template)

```vue
<table class="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <!-- Boss checkbox -->
      <th>
        <input type="checkbox"
               :checked="isAnySelected"
               @change="toggleSelectAll(props.alldata)" />
      </th>
      <th>ID</th>
      <th>Category Name</th>
      <th>Title</th>
      <th>Status</th>
      <th>Manage</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="item in props.alldata" :key="item.id">
      <td>
        <!-- Row checkbox -->
        <input type="checkbox" :value="item.id" v-model="selectedIds" />
      </td>
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.title }}</td>
      <td>{{ item.public_status === 1 ? 'Active' : 'Inactive' }}</td>
      <td>
        <!-- Row actions if needed -->
      </td>
    </tr>
  </tbody>
</table>
```

**ব্যাখ্যা:**

* Row checkbox → শুধু **v-model selectedIds** এর সাথে bind
* Boss checkbox → get/set computed ব্যবহার করতে হবে

---

## 3️⃣ Props and TypeScript Interface

```ts
<script lang="ts" setup>
interface Category {
  id: number
  name: string
  title: string
  public_status: number
}

const props = defineProps<{ alldata: Category[] }>()
</script>
```

* প্রতিটি row type safe
* TypeScript error কমবে

---

## 4️⃣ Bulk Selection Composable (TypeScript)

```ts
// composables/useBulkSelection.ts
import { ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { router } from '@inertiajs/vue3'

interface Item {
  id: number
  [key: string]: any
}

export function useBulkSelection() {
  const selectedIds = ref<number[]>([])

  // Boss checkbox logic
  const isAnySelected = computed<boolean>({
    get: () => selectedIds.value.length > 0,
    set: (val: boolean) => {
      // true → সব select, false → সব deselect
      selectedIds.value = val ? props.alldata.map((i: Item) => i.id) : []
    }
  })

  // Toggle all items manually
  const toggleSelectAll = (allItems: Item[]) => {
    selectedIds.value = selectedIds.value.length > 0 ? [] : allItems.map(i => i.id)
  }

  // Bulk action with SweetAlert
  const bulkAction = (actionType: string) => {
    if (!selectedIds.value.length) return

    Swal.fire({
      title: 'Are you sure?',
      text: `You are going to ${actionType} ${selectedIds.value.length} item(s).`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        router.post(route('category_page.bulkAction'), {
          ids: selectedIds.value,
          action: actionType
        }, {
          onSuccess: () => {
            Swal.fire('Success!', `${actionType} action performed.`, 'success')
            selectedIds.value = [] // reset selection
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
    bulkAction
  }
}
```

**ব্যাখ্যা:**

* `selectedIds` → সব selected row এর ID রাখবে
* `isAnySelected` → Boss checkbox read/write logic
* `toggleSelectAll()` → header checkbox click এ সব row select/deselect
* `bulkAction()` → selectedIds + actionType server এ পাঠাবে
* SweetAlert confirm before backend call
* Success এ selectedIds reset হবে

---

## 5️⃣ Vue Template + Composable Integration

```vue
<script lang="ts" setup>
import { useBulkSelection } from '@/composables/useBulkSelection'

interface Category {
  id: number
  name: string
  title: string
  public_status: number
}

const props = defineProps<{ alldata: Category[] }>()
const { selectedIds, isAnySelected, toggleSelectAll, bulkAction } = useBulkSelection()
</script>

<!-- Boss checkbox -->
<input type="checkbox"
       :checked="isAnySelected"
       @change="toggleSelectAll(props.alldata)" />

<!-- Row checkboxes -->
<tr v-for="item in props.alldata" :key="item.id">
  <td><input type="checkbox" :value="item.id" v-model="selectedIds" /></td>
  <td>{{ item.id }}</td>
  <td>{{ item.name }}</td>
  <td>{{ item.title }}</td>
  <td>{{ item.public_status === 1 ? 'Active' : 'Inactive' }}</td>
</tr>

<!-- Bulk Action Dropdown -->
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Bulk Action</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem @click="bulkAction('active')">Active</DropdownMenuItem>
    <DropdownMenuItem @click="bulkAction('inactive')">Inactive</DropdownMenuItem>
    <DropdownMenuItem @click="bulkAction('restore')">Restore</DropdownMenuItem>
    <DropdownMenuItem @click="bulkAction('delete')">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

**ব্যাখ্যা:**

* Dropdown এ প্রতিটি action → `bulkAction('action')`
* SweetAlert confirm + backend call + success message

---

## 6️⃣ Laravel Controller Example

```php
public function bulkAction(Request $request){
    $ids = $request->ids; // array of IDs
    $action = $request->action;

    switch($action){
        case 'active':
            CategoryPage::whereIn('id', $ids)->update(['public_status' => 1]);
            break;
        case 'inactive':
            CategoryPage::whereIn('id', $ids)->update(['public_status' => 0]);
            break;
        case 'restore':
            CategoryPage::withTrashed()->whereIn('id', $ids)->restore();
            break;
        case 'delete':
            CategoryPage::whereIn('id', $ids)->delete();
            break;
        default:
            return response()->json(['message'=>'Invalid action'], 400);
    }

    return response()->json(['message'=>'Action '.$action.' performed successfully']);
}
```

**ব্যাখ্যা:**

* Single function সব action handle করে → DRY
* `whereIn` ensures multiple IDs handled correctly
* Soft delete restore possible

---

## 7️⃣ Summary / Flow

1. User selects row checkbox → `selectedIds` update
2. Boss checkbox tick → সব row select / untick → selectedIds update
3. User clicks dropdown action → SweetAlert confirm
4. User confirms → router.post() backend call
5. Backend performs action → success response
6. Frontend shows SweetAlert success → reset `selectedIds` → Boss checkbox unchecked

---

✅ এই system:

* Fully reusable composable
* TypeScript compatible
* SweetAlert confirm + success
* Boss + Row checkbox logic
* All bulk actions single function handle

---

যদি চাও, আমি এখন এই composable এর **advanced version বানিয়ে দেখাই**, যেখানে:

* Boss checkbox **indeterminate state**
* Pagination support
* Partial selection support

তাহলে একদম **production-ready bulk management** ready হবে।

চাও কি আমি সেটা বানাই?
