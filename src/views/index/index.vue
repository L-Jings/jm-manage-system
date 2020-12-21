<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="6">
        <el-card shadow="always" class="in">
          <div style="float: left">
            <p>本月进件</p>
            <p style="font-weight: bold">6588</p>
            <p>
              +20.12%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="out">
          <div style="float: left">
            <p>本月放款 (元)</p>
            <p style="font-weight: bold">121000000</p>
            <p>
              +1.25%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allin">
          <div style="float: left">
            <p>累计进件</p>
            <p style="font-weight: bold">128700</p>
            <p>
              +11.48%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allout">
          <div style="float: left">
            <p>累计放款</p>
            <p style="font-weight: bold">923380079</p>
            <p>
              -2.06%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
    </el-row>
    <!--
        进件统计分析
        -->
    <el-row :gutter="24" class="mt">
      <el-col :span="18">
        <el-card>
          <div slot="header" style="text-align: center; line-height: 50px">
            <span>进件统计分析</span>
            <template>
                <div ref="analysis" style="height: 240px"></div>
            </template>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>11111</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted() {
      console.log(this.$echarts)
      this.$nextTick(() => {
          this.drawline();
      })
  },
  methods: {
    drawline() {
      let myChart = this.$echarts.init(this.$refs["analysis"]);
      let option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.ico {
  float: right;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.3);
}
p {
  line-height: 30px;
  color: #fff;
  font-size: 16px;
}
.in {
  background: #4f88ff;
}
.out {
  background: #f26075;
}
.allin {
  background: #5050ff;
}
.allout {
  background: #f49b3b;
}
</style>