import { defineStore } from 'pinia'


export const useParamsStore = defineStore('paramsLink', {
    state: () => ({
        paramsValue: '',
    }),
    actions: {
        SetParamsValue(id) {
            this.paramsValue = id
        }
    }

})