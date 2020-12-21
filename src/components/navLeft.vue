<template>
  <div>
    <el-menu background-color="#001529" text-color="#fff">
      <menus v-for="(item, index) in menuData" :key="index" :menu="item" />
    </el-menu>
  </div>
</template>

<script>
import { get } from "@/utils/http";
import menus from "./menu";
export default {
  data() {
    return {
      menuData: [],
    };
  },
  mounted() {
    get("/menu").then((res) => {
      // console.log(res);
      this.menuData = res.data;
    });
  },
  components: {
    menus,
  },
};
</script>

<style scoped>
  ::v-deep .el-menu-item{
      width: 200px;
  }
  ::v-deep .el-submenu {
      width: 200px;
  }
</style>