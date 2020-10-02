import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showList: [],
        inputVal: '',
        amount: 0,
        list: [],
        type: '',
        id: 4

    },

    mutations: {
        getInfoList(state, list){
            state.list = list
            state.amount = list.length
        },

        inputChange(state, value){
            state.inputVal = value
        },

        addInfo(state){
            let todo = {
                id: state.id,
                info: state.inputVal.trim(),
                done: false
            }
            if(!state.inputVal.trim())return this.$message.error('不能为空哦！')
            state.list.unshift(todo)
            state.id++
            state.inputVal = ''
            state.amount++
        },

        removeById(state, id){    
            const i = state.list.findIndex(x => x.id === id)
            if(i !== -1){
                state.list.splice(i, 1)
                state.amount--
            }
        },

        handleChange(state,obj){
            const {isCheched, id} = obj
            console.log(isCheched)
            let index = state.list.findIndex(item=>item.id === id)
            state.list[index].done = isCheched
        },

        handlenav(state, tip){
            if(tip === 'finish'){
                state.type = 'finish'
                state.showList = state.list.filter(item=>item.done)
            }else if(tip === 'unfinish'){
                state.type = 'unfinish'
                state.showList = state.list.filter(item=>!item.done)
            }else{
                state.type = 'all'
                state.showList = state.list
            }
        },

        // removeFinish(state){
        //     state.list = state.list.map(item=>!item.done)
        // }
    },

    actions: {
        reqGetInfoList(context){
            axios.get('/list.json').then(res =>{
                const {data} = res
                context.commit('getInfoList', data)
                context.commit('handlenav', 'all')
            })
        }
    },

    getters: {
        showNum(state){
            return state.list.filter(item=>!item.done).length
        }     
    }
})