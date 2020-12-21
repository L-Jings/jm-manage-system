<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px" class="aside">
        <nav-left />
      </el-aside>
      <el-container>
        <el-header>
          <headers />
        </el-header>
        <el-main class="contbg">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavLeft from "@/components/navLeft";
import Headers from "@/components/header";

export default {
  components: {
    NavLeft, //侧边栏
    Headers, //头部
  },
};
</script>

<style scoped>
.aside {
  height: 100vh;
  background-color: #001529;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.contbg {
  background-color: #e9eef3;
  height: 80vh;
}
</style>