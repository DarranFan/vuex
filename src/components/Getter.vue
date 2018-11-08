<template>
    <div>
        {{aaa}}-----------------
        {{count}}
        <div>
            <button @click="$store.commit('add',10)">+</button> 
            <!-- 这是第一种调用store中发方法用 commit -->
            <button @click="$store.commit('reduce')">-</button>
        </div>
        <p @click="test">{{text}}</p>
        <p>第二种调用store中mutats中发方法引入mapmutations</p>
        <div>
            <button @click="add(20)">+</button>
            <button @click="reduce">-</button>
        </div>
        <p>getters下面的count</p>
        {{count}}
    </div>
</template>
<script>
    import store from '@/vuex/store'
    import {mapState} from 'vuex'  //这是第二种和第三种都需要把这个mapstate引入进来*****
    import {mapMutations} from 'vuex' //这是第二种调用store中mutations中发方法
    import {mapGetters} from 'vuex' //这是第二种调用store中getters里面的数据
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
        computed:{
            ...mapState(['count','text']),
            // count(){
            //     return this.$store.getters.count  //这是第一种调用store中getters里面的数据
            // }
            ...mapGetters(['count'])

        },  //这是第三种
        methods:{
            ...mapMutations(['add','reduce']),
            test(){
                alert(111)
            }
        },

        store
    }
</script>
