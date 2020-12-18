<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
          <nav-left />
      </el-aside>
      <el-container>
        <el-header>
            <headers />
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavLeft from '@/components/navLeft'
import Headers from '@/components/header'

export default {
    components: {
        NavLeft, //侧边栏
        Headers, //头部
    }
};
</script>

<style lang="scss">
</style>