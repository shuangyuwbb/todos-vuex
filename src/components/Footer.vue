<template>
    <div class="footer">
        <div class="footer-nav">
            <ul>
                <li>剩余{{showNum}}</li>
                <li><el-button  :type="type=='all'?'primary':'default'" @click="handlenav('all')">所有</el-button></li>
                <li><el-button  :type="type=='unfinish'?'primary':'default'" @click="handlenav('unfinish')">未完成</el-button></li>
                <li><el-button  :type="type=='finish'?'primary':'default'" @click="handlenav('finish')">已完成</el-button></li>
                <li>清楚已完成</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapState(['amount', 'type']),
        ...mapGetters(['showNum'])
    },
    methods: {
        handlenav(str){
            this.$store.commit('handlenav',str)
        }
    }
}
</script>

<style lang="less" scoped>
    .footer{
            display: flex;
            justify-content: center;
        .footer-nav{
            width: 450px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            ul{
                width: 450px;
                 display: flex;
                padding: 0 5px;
                list-style: none;
                align-items: center;
                justify-content: space-between;
                li{
                    justify-content: space-between;
                }
            }
        }
    }
</style>