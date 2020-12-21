<template>
  <div>
    <div class="head">
      <el-dropdown @command="change">
        <span class="el-dropdown-link">
          欢迎你，{{ nickname
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">修改密码</el-dropdown-item>
          <el-dropdown-item command="c">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <p class="date">
      今天是你在金满的<span class="tips">{{ days }}</span
      >天
    </p>
  </div>
</template>

<script>
import { removeToken } from "@/utils/auth";
import { get } from "@/utils/http";

export default {
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    get("/in").then((res) => {
      this.time = res.time;
    });
  },
  computed: {
    nickname() {
      //获取nickname
      return sessionStorage.getItem("nickname");
    },
    days() {
      let target = new Date(this.time); //目标时间
      let now = new Date(); //当前时间
      return Math.floor((now - target) / 1000 / 60 / 60 / 24);
    },
  },
  methods: {
    change(command) {
      if (command === "c") {
        //退出登录
        removeToken(); //移除token
        this.$router.push("/login"); //回到登录页
      }
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  float: right;
  line-height: 60px;
  margin-left: 20px;
}
.date {
  float: right;
  line-height: 60px;
}
.tips {
  color: #40a9ff;
  font-size: 24px;
}
</style>