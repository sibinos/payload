import { CollectionConfig } from 'payload/types';
 export const  Customers:CollectionConfig={
       slug:'customers',
       auth:true,
       fields:[
        {
            name:'first name',
            type:'text',
            required:true
        },
        {
            name:'last name',
            type:'text',
            required:true
        }
       ]
}
