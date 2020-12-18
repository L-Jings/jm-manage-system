<template>
  <div class="login">
    <el-row type="flex" justify="center">
      <el-card class="box-card">
        <div slot="header">
          <h3 class="title">金满金融管理系统</h3>
        </div>
        <div>
          <el-form
            :model="loginForm"
            status-icon
            :rules="rules"
            ref="loginForm"
            label-width="100px"
          >
            <el-form-item label="用户名:" prop="username">
              <el-input
                type="text"
                v-model="loginForm.username"
                label-width="180px"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                autocomplete="off"
                label-width="180px"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')"
                >登录</el-button
              >
              <el-button type="primary">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import {post} from '@/utils/http'
import {setToken} from '@/utils/auth'

export default {
  data() {
    const usernameReg = /^\w{4,8}$/;
    //处理用户名校验
    const checkUserName = (rule, value, callback) => {
      if (!value) {
        // 如果没输入用户名
        return callback(new Error("请输入用户名！"));
      }
      if (usernameReg.test(value)) {
        //通过检验
        return callback();
      }
      return callback(new Error("用户名格式输入不正确！"));
    };
    //处理密码校验
    const checkPassWord = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码！"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        //表单属性值
        username: "",
        password: "",
      },
      rules: {
        //表单属性检验规则
        username: [
          { required: true, trigger: "change", validator: checkUserName },
        ],
        password: [
          { required: true, trigger: "change", validator: checkPassWord },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          post('/login',this.loginForm).then((res) => {
            console.log(res)
              setToken(res.token); //存储token
              this.$router.push('/');
          }).catch((error) => {
            this.$message.error(error)
          })
        } 
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  margin-top: 200px;
  .el-form-item {
    margin-right: 60px;
  }
  .title {
    text-align: center;
  }
}
</style>