export interface authsetting{
    key:string,
    name:string,
}


export const groups: authsetting[] = [
    {
        key: 'GOOGLE',
        name : 'GOOGLE'
    },
    {
        key: 'FACEBOOK',
        name : 'FACEBOOK'
    },
    {
        key: 'GITHUB',
        name : 'GITHUB'
    },
   
   
];

//---------- api keys list 

export const apikeys: authsetting[] = [
    {
        key: 'google_client_id',
        name : 'Google Client ID'
    },
    {
        key: 'google_client_secret',
        name : 'Google Client Secret'
    },
    {
        key: 'google_redirect_uri',
        name : 'Google Redirect URL'
    },

    {
        key: 'facebook_app_id',
        name : 'Facebook App ID'
    },
    {
        key: 'facebook_app_secret',
        name : 'Facebook App Secret'
    },
    {
        key: 'github_client_id',
        name : 'GitHub Client ID'
    },


   
];