<template>
    <div id="app">
        <counter/>
    </div>
</template>

<script>

import Vue from 'vue'

import Counter from './vue/counter.vue'

export default {
    name: 'App',
    components: { Counter },
    data () {
        return {
        }
    },
};

</script>


<style lang="scss">
    
</style>
