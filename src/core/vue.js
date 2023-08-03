import {createPinia} from "pinia"
import {createApp} from "vue"

export default () =>{
    const vue = createApp({})
    const pinia = createPinia()

    vue.use(pinia)
    console.log("vue        導入完成")
}