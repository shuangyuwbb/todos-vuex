<template>
    <div class="header">
        <div class="header-content">
            <el-input :value="inputVal" @input="handleChange"/>
            <el-button type="primary" @click="addInfo">添加事件</el-button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {

    computed: {
        ...mapState(['inputVal'])
    },
    mounted() {

    },
    methods: {
        ...mapMutations(['addInfo', 'inputChange']),
        handleChange(e){
            this.inputChange(e)
        }
    }
}
</script>

<style lang="less" scoped>
    .header{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .header-content{
            width: 450px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>