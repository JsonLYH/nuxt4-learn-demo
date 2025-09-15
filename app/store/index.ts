import { defineStore } from 'pinia'
export const useTestStore = defineStore('test',{
    state:()=>({
        count:0 as number
    }),
    getters:{
        countGetter:(state:any)=>{
            return state.count;
        }
    },
    actions:{
        increment(){
            this.count++
        }
    },
    persist:true
})
