<template>
  <div id="homeLayout">
    <h3>这是主页、关于我们等页面的layout</h3>
    <router-link :to="{name: 'home'}">主页</router-link>
    <router-link :to="{name: 'about'}">关于我们</router-link>
    <router-link :to="{name: 'dashboard'}">控制面板</router-link>
    <router-link :to="{name: 'test'}">测试</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "homeLayout",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
</style>
