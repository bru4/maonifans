<template>
<el-row class="main-layout" id="mainLayout">
  <el-col class="left" :span="3">
    <el-menu theme="dark" :router="true" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/panel/dashboard"><i class="fa fa-dashboard"></i>控制面板</el-menu-item>
      <el-menu-item index="/panel/profile"><i class="fa fa-user-o"></i>个人信息</el-menu-item>
    </el-menu>
  </el-col>
  <el-col class="right" :span="21" :offset="3">
    <el-row class="head">
      <el-col :span="22">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>未写动态</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="2">
        <el-dropdown @command="clickDropDown">
          <span class="el-dropdown-link">
            {{currentUser.name}}
            <i class="fa fa-caret-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item divided command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>

    <transition name="fade" mode="out-in">
      <router-view class="layout-content"></router-view>
    </transition>
  </el-col>
</el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "mainLayout",
  data: function data() {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
    ])
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickDropDown: function(command) {
      switch (command) {
        case 'logout':
          this.logout()
          break
        default:
          break
      }
    },
    logout: function(){
      var _this = this
      this.$store.dispatch('logout').then(() => {
        _this.$router.push({ path: '/' })
      }).catch((error) => {
        _this.$message.error(error);
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.main-layout{
  width: 100%;
  min-height: 100%;
  .left{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    >.el-menu{
      height: 100%;
      border-radius: 0;
    }
    .fa{
      vertical-align: baseline;
      margin-right: 10px;
    }
  }
  .right{
    min-height: 100%;

    >.head{
      background-color: #EEF1F6;
      padding: 15px;
      .el-dropdown-link{
        cursor: pointer;
      }
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active 在 <2.1.8 中 */ {
      opacity: 0
    }

    .layout-content{
      padding: 15px;
    }
  }
}
</style>
