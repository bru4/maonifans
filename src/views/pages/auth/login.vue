<template>
  <div class="login" id="login">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
      <h2 class="title">用户登录</h2>

      <el-form-item prop="account">
        <el-input v-model="loginForm.account" placeholder="用户账号">
          <template slot="prepend">
            <i class="fa fa-user-o"></i>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="用户密码">
          <template slot="prepend">
            <i class="fa fa-key"></i>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="submit-btn" :loading="loading" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
export default {
  name: "login",
  data: function data() {
    return {
      loading: false,
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [{
          required: true,
          message: '请输入用户账号（必填）',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 10,
          message: '请输入用户账号（长度6-10）',
          trigger: 'blur'
        }
        ],
        password: [{
          required: true,
          message: '请输入用户密码（必填）',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 10,
          message: '请输入用户密码（长度6-10）',
          trigger: 'blur'
        }
        ]
      }
    }
  },
  methods: {
    submitForm: function (formName) {
      var _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.loading = true
          this.$store.dispatch('login', _this.loginForm).then(() => {
            _this.loading = false
            _this.$router.push({ path: '/' })
          }).catch((error) => {
            _this.$message.error(error);
            _this.loading = false;
          })
        } else {
          console.log('error submit');
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #2D394B;
  overflow: hidden;
  .login-form {
    width: 300px;
    margin: 0 auto;
    margin-top: 200px;
    .title {
      color: #fff;
      text-align: center;
    }
    .submit-btn {
      width: 100%;
    }
  }
}
</style>
