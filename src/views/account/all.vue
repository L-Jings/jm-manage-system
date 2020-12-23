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
          <el-button type="primary" @click="newAdd">新建角色</el-button>
          <el-button :disabled="!selection.length">启动</el-button>
          <el-button :disabled="!selection.length">冻结</el-button>
          <el-button :disabled="!selection.length">删除</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-table
        :data="tableData"
        style="width: 100%"
        @select="select"
        @select-all="selectAll"
      >
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="account" label="账户"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="character" label="角色"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column prop="reason" label="创建原因"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            {{ scope.row.status === 1 ? "启用" : "禁用" }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button size="mini" type="danger">删除</el-button>
            <el-button size="mini">{{
              scope.row.status === 1 ? "禁用" : "启用"
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!--弹窗-->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form" :rules="rules" ref="forms">
        <el-form-item label="角色" label-width="100px" prop="character">
          <el-select
            v-model="form.character"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option label="业务人员" value="1"></el-option>
            <el-option label="审核人员" value="2"></el-option>
            <el-option label="风控经理" value="3"></el-option>
            <el-option label="管理员" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" label-width="100px" prop="remark">
          <el-input v-model="form.remark" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建原因" label-width="100px" prop="reason">
          <el-input
            type="textarea"
            v-model="form.reason"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onOk">确 定</el-button>
      </div>
    </el-dialog>
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
      dialogVisible: false,
      form: {
        character: "",
        remark: "",
        reason: "",
      },
      rules: {
        character: [
          { required: true, message: "请选择角色", trigger: "change" },
        ],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
        reason: [
          { required: true, message: "请输入创建原因", trigger: "blur" },
        ],
      },
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
      //选择
      this.selection = selection;
    },
    selectAll(selection) {
      //全选
      this.selection = selection;
    },
    newAdd() {
      //新增角色
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs["forms"].resetFields();
      })
    },
    onOk() {
      this.$refs["forms"].validate((valid) => {
        if (valid) {
          //发送请求
          this.$message.success("创建成功");
          this.getTableData();
          this.dialogVisible = false;
          this.$refs["forms"].resetFields();
        }
      });
    },
    handleEdit(row) {
      //表单编辑
      this.dialogVisible = true;
      this.form = {
        character: row.character,
        remark: row.remark,
        reason: row.reason,
      };
    },
  },
};
</script>
