<script setup>
import {AlignLeft, Redo, Undo,AlignRight,AlignCenter,AlignJustify, RotateCcw } from 'lucide-vue-next';
import { ref, onBeforeUnmount, watch } from 'vue' // watch add kora hoyeche
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import ImageResizer from 'tiptap-extension-resize-image'
import TextAlign from '@tiptap/extension-text-align'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { Color } from '@tiptap/extension-color'
import { TextStyle,FontSize ,FontFamily} from '@tiptap/extension-text-style'
import { Highlight } from '@tiptap/extension-highlight'
import Youtube from '@tiptap/extension-youtube'

// ==== gate data from parent page . create edit . settings etc 
const props = defineProps({
  modelValue: String, 
})

//==== send data in parent page 
const emit = defineEmits(['update:modelValue']) 

// Editor Setup
const editor = useEditor({
  extensions: [
    StarterKit.configure({
      link: false,
    }),
    TextStyle, 
    FontSize,
    FontFamily,
    Color,
    Highlight.configure({ 
      multicolor: true 
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        class: 'text-blue-600 underline cursor-pointer',
      },
    }),
    ImageResizer.configure({
      inline: true,
      allowBase64: true,
      minWidth: 50,
      maxWidth: '100%',
      maxHeight: 800,
    }),
    Table.configure({
      resizable: true, 
      allowTableNodeSelection: true,
    }),
    TableRow,
    TableHeader,
    TableCell,

    // ---  youtube video configaration 
    Youtube.configure({
      controls: true,    // YouTube player-er control thakbe
      nocookie: true,    // Privacy-er jonno bhalo
      allowFullscreen: true,
      width: 640,        // Default width
      height: 480,       // Default height
    }),

  ],
  editorProps: {
    attributes: {
      class: 'prose prose-slate max-w-none focus:outline-none min-h-[400px] p-5',
    },
  },
  // Initial content parent theke ashbe
  content: props.modelValue, 
  onUpdate: ({ editor }) => {
    // Editor update hole parent-er v-model update hobe
    emit('update:modelValue', editor.getHTML())
  },


})

// Jodi parent page (Create/Edit) theke content change hoy (External update)
watch(() => props.modelValue, (value) => {
  if (!editor.value) return
  const isSame = editor.value.getHTML() === value
  if (isSame) return
  editor.value.commands.setContent(value, false)
})

onBeforeUnmount(() => {
  if (editor.value) editor.value.destroy()
})

// --- Link Logic ---
const isLinkModalOpen = ref(false)
const linkUrl = ref('')

const openLinkModal = () => {
  const previousUrl = editor.value.getAttributes('link').href
  linkUrl.value = previousUrl || ''
  isLinkModalOpen.value = true
}

const setLink = () => {
  if (linkUrl.value === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
  } else {
    editor.value.chain().focus().extendMarkRange('link').setLink({ href: linkUrl.value }).run()
  }
  isLinkModalOpen.value = false
}

// --- Image Logic ---
const isImageModalOpen = ref(false)
const imageUrl = ref('')

const openImageModal = () => {
  imageUrl.value = ''
  isImageModalOpen.value = true
}

const addImage = () => {
  if (imageUrl.value) {
    editor.value.chain().focus().setImage({ src: imageUrl.value }).run()
  }
  isImageModalOpen.value = false
}


// ---------- youtube video add
const isYoutubeModalOpen = ref(false)
const youtubeUrl = ref('')

const openYoutubeModal = () => {
  youtubeUrl.value = ''
  isYoutubeModalOpen.value = true
}

const addYoutubeVideo = () => {
  if (youtubeUrl.value) {
    // YouTube URL theke video embed korar command
    editor.value?.commands.setYoutubeVideo({
      src: youtubeUrl.value,
      width: 640,
      height: 480,
    })
  }
  isYoutubeModalOpen.value = false
}

// font size 
// Tiptap.vue script section
const sizes = [
  '12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px'
]

// Current font size check korar logic (Optional but pro)
const getCurrentFontSize = () => {
  return editor.value?.getAttributes('textStyle').fontSize || ''
}

// Font list setup (Apnar pochondo moto font add korte paren)
const fontFamilies = [
  { name: 'Default', value: '' },
  { name: 'Inter', value: 'Inter' },
  { name: 'Comic Sans', value: 'Comic Sans MS, Comic Sans' },
  { name: 'Serif', value: 'serif' },
  { name: 'Monospace', value: 'monospace' },
  { name: 'Cursive', value: 'cursive' },
]

</script>

<template>
  <div class="editor-wrapper mt-1 w-full rounded-xl border border-slate-300 bg-white text-sm">
    <div v-if="editor" class="toolbar p-2 border-b border-slate-200 flex flex-wrap gap-1 bg-slate-50 rounded-t-xl">
      <button type="button" @click="editor.chain().focus().undo().run()"><Undo/></button>
      <button type="button" @click="editor.chain().focus().redo().run()"><Redo/></button>
      <div class="w-px h-6 bg-slate-300 mx-1"></div>
      
      <button type="button" @click="editor.chain().focus().setParagraph().run()" :class="{ 'active': editor.isActive('paragraph') }">P</button>
      <button type="button" v-for="i in 3" :key="i" @click="editor.chain().focus().toggleHeading({ level: i }).run()" :class="{ 'active': editor.isActive('heading', { level: i }) }">
        H{{ i }}
      </button>

      <div class="w-px h-6 bg-slate-300 mx-1"></div>

      <button type="button" @click="editor.chain().focus().toggleBold().run()" :class="{ 'active': editor.isActive('bold') }"><b>B</b></button>
      <button type="button" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'active': editor.isActive('italic') }"><i>I</i></button>
      <button type="button" @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'active': editor.isActive('underline') }"><u>U</u></button>
      <button type="button" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'active': editor.isActive('strike') }"><del>Del</del></button>

      <div class="w-px h-6 bg-slate-300 mx-1"></div>

      <button type="button" @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'active': editor.isActive({ textAlign: 'left' }) }"><AlignLeft/></button>
      <button type="button" @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'active': editor.isActive({ textAlign: 'center' }) }"><AlignCenter/></button>
      <button type="button" @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'active': editor.isActive({ textAlign: 'right' }) }"><AlignRight/></button>
      <button type="button" @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'active': editor.isActive({ textAlign: 'justify' }) }"><AlignJustify/></button>

      <div class="w-px h-6 bg-slate-300 mx-1"></div>

      <button type="button" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'active': editor.isActive('bulletList') }"> Bullet</button>
      <button type="button" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'active': editor.isActive('orderedList') }">Ordered</button>
      <button type="button" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'active': editor.isActive('blockquote') }">Quote</button>
      <button type="button" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'active': editor.isActive('codeblock') }">Code</button>
      
      <div class="w-px h-6 bg-slate-300 mx-1"></div>

      <button type="button" @click="openLinkModal" :class="{ 'active': editor.isActive('link') }">Link </button>
      <button type="button" @click="openImageModal">Image </button>
      <button  type="button" @click="openYoutubeModal" class="p-2 border rounded hover:bg-red-50 text-red-600 font-bold" title="Insert YouTube Video" > Video </button>
      <div class="w-px h-6 bg-slate-300 mx-1"></div>


      <!-- color -->
    <div v-if="editor" class="flex items-center gap-2">
      <input  type="color" @input="editor.chain().focus().setColor($event.target.value).run()" :value="editor.getAttributes('textStyle').color || '#000000'" title="Change Text Color"/>
      <input  type="color"  @input="editor.chain().focus().toggleHighlight({ color: $event.target.value }).run()" :value="editor.getAttributes('highlight').color || '#ffff00'" title="Change Background Color"/>
      <button type="button"  @click="editor.chain().focus().unsetColor().unsetHighlight().run()"  class="p-1 border rounded text-xs bg-gray-100 hover:bg-gray-200"> <RotateCcw/> </button>
    </div>



  <!-- font size -->
   <div class="flex items-center gap-2 border-l pl-2">
      <select  class="bg-white border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block p-1 w-24" @change="editor.chain().focus().setFontSize($event.target.value).run()" :value="getCurrentFontSize()" >
        <option value="">Default Size</option>
        <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
      </select>

      <button  type="button" @click="editor.chain().focus().unsetFontSize().run()" class="p-1 text-gray-500 hover:bg-gray-100 rounded" title="Clear Font Size" >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- font family  -->
     <div class="flex items-center gap-2 border-l pl-2">
        <select class="bg-white border border-gray-300 text-gray-900 text-xs rounded p-1 w-32" @change="editor.chain().focus().setFontFamily($event.target.value).run()">
          <option v-for="font in fontFamilies" :key="font.name" :value="font.value">{{ font.name }}</option>
        </select>
        <button   type="button" @click="editor.chain().focus().unsetFontFamily().run()" class="p-1 border rounded text-xs hover:bg-gray-100" title="Reset Font Family"> <RotateCcw/></button>
      </div>

      <!-- insert table and manage  -->
      <button  type="button" @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()" class="p-2 border rounded hover:bg-slate-200"> Table </button>

      <div v-if="editor && editor.isActive('table')" class="table-controls flex gap-2 mt-2 p-2 bg-blue-300 rounded-lg">
        <button type="button" @click="editor.chain().focus().addColumnAfter().run()" class="px-2 py-1 border bg-white">Add Col Right</button>
        <button type="button" @click="editor.chain().focus().addRowAfter().run()" class="px-2 py-1 border bg-white">Add Row Down</button>
        <button type="button" @click="editor.chain().focus().deleteColumn().run()" class="px-2 py-1 border bg-white text-red-500">Del Col</button>
        <button type="button" @click="editor.chain().focus().deleteRow().run()" class="px-2 py-1 border bg-white text-red-500">Del Row</button>
        <button type="button" @click="editor.chain().focus().deleteTable().run()" class="px-2 py-1 border bg-red-500 text-white">Delete Table</button>
      </div>


    </div>



    <EditorContent :editor="editor" class="editor-content prose lg:prose-xl overflow-hidden" />





    <!-- ========= link modal  -->

    <div v-if="isLinkModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div class="bg-white p-6 rounded-xl shadow-xl w-96">
        <h3 class="text-lg font-bold mb-4">Insert Link</h3>
        <input v-model="linkUrl" type="url" class="w-full px-4 py-2 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://..." @keyup.enter="setLink" />
        <div class="flex justify-end gap-2">
          <button @click="isLinkModalOpen = false" class="px-4 py-2 text-gray-600">Cancel</button>
          <button @click="setLink" class="px-4 py-2 bg-blue-600 text-white rounded-lg">Apply</button>
        </div>
      </div>
    </div>

    <!-- image modal  -->
    <div v-if="isImageModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div class="bg-white p-6 rounded-xl shadow-xl w-96">
        <h3 class="text-lg font-bold mb-4">Insert Image URL</h3>
        <input v-model="imageUrl" type="text" class="w-full px-4 py-2 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://image-url.jpg" @keyup.enter="addImage" />
        <div class="flex justify-end gap-2">
          <button @click="isImageModalOpen = false" class="px-4 py-2 text-gray-600">Cancel</button>
          <button @click="addImage" class="px-4 py-2 bg-green-600 text-white rounded-lg">Add Image</button>
        </div>
      </div>
    </div>
    <!-- === video modal ====== -->
     <div v-if="isYoutubeModalOpen" class="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div class="bg-white p-6 rounded-xl shadow-2xl w-96 border border-slate-200">
          <div class="flex items-center gap-2 mb-4 text-red-600">
            <span class="text-2xl">📺</span>
            <h3 class="text-lg font-bold">Embed YouTube Video</h3>
          </div>
          
          <p class="text-xs text-gray-500 mb-2">Paste the YouTube video link below:</p>
          
          <input 
            v-model="youtubeUrl" 
            type="url" 
            class="w-full px-4 py-2 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-red-500 border-slate-300" 
            placeholder="https://www.youtube.com/watch?v=..." 
            @keyup.enter="addYoutubeVideo" 
          />
          
          <div class="flex justify-end gap-2">
            <button 
              @click="isYoutubeModalOpen = false" 
              class="px-4 py-2 text-gray-600 hover:bg-slate-100 rounded-lg transition"
            >
              Cancel
            </button>
            <button 
              @click="addYoutubeVideo" 
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md transition"
            >
              Insert Video
            </button>
          </div>
        </div>
      </div>
      <!-- ============ al modal end her =========== -->
  </div>
</template>

<style scoped>
.toolbar button {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.toolbar button:hover {
  background: #e2e8f0;
}

.toolbar button.active {
  background: #3b82f6;
  color: white;
}

:deep(.ProseMirror) {
  outline: none !important;
  min-height: 400px;
}

/* --- Image Resize Handles Styling --- */
/* Image Resizer Container */
:deep(.ProseMirror .image-resizer) {
  display: inline-block;
  position: relative;
  line-height: 0;
}

/* Resize Handles (The Dots) */
:deep(.ProseMirror .image-resizer__handler) {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #3b82f6 !important; /* Blue Color */
  border: 1.5px solid white !important;
  border-radius: 2px;
  z-index: 100;
  cursor: nwse-resize;
}

/* Dot Position - Bottom Right */
:deep(.ProseMirror .image-resizer__handler--bottom-right) {
  bottom: -6px;
  right: -6px;
}
/* Image-ke editor-er bhetore rakhar main trick */
:deep(.ProseMirror img) {
  max-width: 100% !important; /* Screen-er baire jabe na */
  height: auto !important;    /* Aspect ratio thik rakhbe */
  display: block;
  margin: 1rem auto;          /* Majhkhan-e thakbe */
}

/* Resize container-keo 100% width-e rakha */
:deep(.ProseMirror .image-resizer) {
  max-width: 100% !important;
  display: inline-block;
  position: relative;
}
/* Image outline when selected or resizing */
:deep(.ProseMirror .image-resizer img) {
  outline: 1px solid transparent;
  transition: outline 0.2s;
}

:deep(.ProseMirror .image-resizer--resizing img) {
  outline: 2px solid #3b82f6 !important;
}
/* Alignment classes jodi TextAlign use koren */
:deep(.ProseMirror img[data-text-align="left"]) {
  margin-right: auto;
  margin-left: 0;
}
:deep(.ProseMirror img[data-text-align="center"]) {
  margin-left: auto;
  margin-right: auto;
}
:deep(.ProseMirror img[data-text-align="right"]) {
  margin-left: auto;
  margin-right: 0;
}


/* ====== table css ====== */
/* Table Layout and Borders */
:deep(.ProseMirror table) {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  margin: 1rem 0;
  overflow: hidden;
}

:deep(.ProseMirror td),
:deep(.ProseMirror th) {
  min-width: 1em;
  border: 1px solid #ced4da; /* Border thickness barate paren */
  padding: 8px 10px;
  vertical-align: top;
  box-sizing: border-box;
  position: relative;
}

:deep(.ProseMirror th) {
  font-weight: bold;
  text-align: left;
  background-color: #f1f5f9;
}
/* ----- color ------ */
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
input[type="color"]::-webkit-color-swatch {
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Highlight style editor-er bhitore */
:deep(.ProseMirror mark) {
  padding: 0 2px;
  border-radius: 2px;
}

/* -------- youtube video size  */
/* YouTube Video Container */
:deep(.ProseMirror iframe) {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  margin: 1.5rem auto;
  display: block;
}

/* Editor-er bhitore video selection style */
:deep(.ProseMirror-selectednode iframe) {
  outline: 3px solid #3b82f6;
}

/* font family  */
/* Editor-er bhitore font apply hobar jonno */
.ProseMirror {
  font-family: 'Inter', sans-serif; /* Default Font */
}

/* Custom fonts jodi PC-te thake ba Google Fonts theke ashe */
:deep(.ProseMirror span[style*="font-family"]) {
  /* Tiptap automatic inline style boshabe */
}


/* code block  */
/* Code Block Styling */
:deep(.ProseMirror pre) {
  background: #1e293b; /* Dark theme background */
  color: #e2e8f0;      /* Light text color */
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  margin: 1rem 0;
  overflow-x: auto;
}

:deep(.ProseMirror pre code) {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
}
</style>