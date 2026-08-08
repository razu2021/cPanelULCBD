import { onMounted, ref } from "vue";

export function useImageUploads(form: any , feild:string , initialImage: string | null = null){

    //----- image previews 
    const preview = ref<string | null> ('');

    //---old image previews 
    onMounted(()=>{
        if(initialImage){
            preview.value = initialImage;
        }
    })

    //--------- uploads function -------
    const handleUpload = (event: Event)=>{
        // ---- find input 
        const input = event.target as HTMLInputElement 

        const file = input.files?.[0];

        if(!file) return ;

        form[feild] = file ;
        if(preview.value){
            URL.revokeObjectURL(preview.value);
        }

        preview.value = URL.createObjectURL(file);
    }


    //------ clear previews 
    const clearPreview = ()=>{
        if(preview.value){
                URL.revokeObjectURL(preview.value);
                preview.value = null ;

            }
        }

    //=========== return useable variables =====

    return {
        preview,
        handleUpload,
        clearPreview,
    };



}