<template>
    <div>
        {{aaa}}-----------------
        {{$store.state.count}}
        <div>
            vuex提供了commit的方法来执行store中mutations里的方法
        </div>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    export default {
        name: 'VuexTest',
        data () {
            return {
                aaa: 11111
            }
        },
        computed:{
            // count () {
            //     return this.$store.state.count
            // }
        },
        store
    }
</script>
