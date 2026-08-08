export interface trackings{
    key:string,
    name:string,
}


export const groups: trackings[] = [
    {
        key: 'TRACKING',
        name : 'TRACKING'
    },
   
   
];

//---------- api keys list 

export const apikeys: trackings[] = [
    {
        key: 'google_analytics_id',
        name : 'Google Analytics ID'
    },
    {
        key: 'google_tag_manager',
        name : 'Google Tag Manager'
    },
    {
        key: 'meta_pixcel',
        name : 'Meta Pixcel ID'
    },
    {
        key: 'custom_header_script',
        name : 'Custom_header_script'
    },
    {
        key: 'custom_footer_script',
        name : 'Custom_footer_script'
    },
];