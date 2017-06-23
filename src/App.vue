<template>

<div class="app" id="app">
    <router-view></router-view>
</div>

</template>

<script>

export default {
    name: 'app',
    mounted: function mounted() {
      this.init()
    },
    methods: {
      init: function() {
        console.log('store', this.$store)
        console.log('router', this.$router)
      }
    }
}

</script>
