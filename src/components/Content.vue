<template>
    <div class="content">
        <el-table class="table" :data="$store.state.showList" :row-key="getRowKey">
            <el-table-column prop="done" width="55">
                <template v-slot="scoped">
                <!-- `checked` 为 true 或 false -->
                    <el-checkbox :checked="scoped.row.done" @change="(e)=>handleChange(e,scoped.row.id)"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column prop="info" label="事件" align="center">
            </el-table-column>
            <el-table-column label="操作" show-overflow-tooltip width="80">
                <template scope="scope">
                    <el-button type="primary" icon="el-icon-delete" @click="removeById(scope.row.id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'
export default {
    
    mounted() {
        // 第二种触发actions方法
        // this.$store.dispatch('')

        this.reqGetInfoList()
    },
    methods:{
        // 第一种触发actions方法，用mapactions将actions中的方法映射成组件中普通的方法
        ...mapActions(['reqGetInfoList']),
        ...mapMutations(['removeById']),
       getRowKey(row){
           return row.id // 每条数据的唯一识别值
       },

       handleChange(e, id){
           let isCheched = e 
           this.$store.commit('handleChange', {isCheched, id})
       }
    },
    computed: {
        //第一种获取state方法
        // ...mapState(['list'])
    }
    
}
</script>

<style lang="less" scoped>
    .content{
        display: flex;
       align-items: center;
        flex-direction: column;
        .table{
            width: 450px;
        }
    }
</style>