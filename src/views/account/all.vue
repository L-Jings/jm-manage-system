<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card style="margin-bottom: 10px">
      <el-row>
        <el-col :span="8">
          <el-input placeholder="手机号、姓名、角色类型" v-model="searchVal">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="search"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="8" style="text-align: right">
          <el-button type="primary">新建角色</el-button>
          <el-button :disabled="!selection.length">启动</el-button>
          <el-button :disabled="!selection.length">冻结</el-button>
          <el-button :disabled="!selection.length">删除</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-table :data="tableData" style="width: 100%" @select="select">
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="account" label="账户"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="character" label="角色"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column prop="reason" label="创建原因"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb";
import { get } from "@/utils/http.js";

export default {
  mixins: [breadCrumb], //混入
  data() {
    return {
      searchVal: "",
      tableData: [],
      total: 0, //数据总数
      selection: [], //选择的项目
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    search() {
      //input搜索，需要后端接口
      console.log(this.searchVal);
    },
    getTableData() {
      get("/all").then((res) => {
        this.tableData = res.data.list;
        this.total = res.data.total;
      });
    },
    select(selection) {
      this.selection = selection;
    },
  },
};
</script>

<style lang="less" scoped>
</style>