<template>
    <div>
        {{aaa}}-----------------
        {{count}}
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
        <p>{{text}}</p>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    import {mapState} from 'vuex'  //这是第二种和第三种都需要把这个mapstate引入进来*****
    export default {
        name: 'VuexTest',
        data () {
            return {
                aaa: 11111
            }
        },
        // computed:{
        //     count () {
        //         return this.$store.state.count      //这是第一种而且比较麻烦
        //     }
        // },
        // computed:mapState({
        //     count:state=>state.count  //第二种
        // }),
        computed:mapState(['count','text']),  //这是第三种
        store
    }
</script>
