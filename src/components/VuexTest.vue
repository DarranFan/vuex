<template>
    <div>
        {{aaa}}-----------------
        {{count}}
    </div>
</template>
<script>
    export default {
        name: 'VuexTest',
        data () {
            return {
                aaa: 11111
            }
        },
        computed:{
            count () {
                return this.$store.state.count
            }
        }
    }
</script>
