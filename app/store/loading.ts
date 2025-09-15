import { defineStore } from 'pinia'
export const useLoadingStore = defineStore('loading',{
    state:()=>({
        loading:true as boolean,
        enableLoading:true,
    }),
    actions:{
        setLoading(loading:boolean){
            this.loading=loading;
        }
    }
})
