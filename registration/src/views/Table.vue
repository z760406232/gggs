<template>
  <!-- paddTop -->
  <div class="dangers paddTop">
    <van-nav-bar title="AI智能诊断" class="border" fixed>
      <template #left>
        <span @click="onClickLeft" left-arrow>返回</span>
      </template>
    </van-nav-bar>
    <h3 class="h3T">如出现以下情况请及时去医院就医！</h3>
    <div class="dangers-box">
      <div v-for="(item, index) in formData" :key="index">
        <van-cell>
          <template #title>
            <span>( {{ index + 1 }} ) </span>
            <span>
              <i>
                <van-tag type="danger">危险症状</van-tag>
              </i>
            </span>
            <span class="custom-title">{{ item.describe }}</span>
          </template>
        </van-cell>
      </div>
    </div>

    <!-- <van-radio-group v-model="radio">
      <van-radio name="1" checked-color="#07c160">单选框 1</van-radio>
    </van-radio-group> -->
    <div class="v-btn">
      <van-button to="/home/diag2" type="primary">确认无以上症状</van-button>
    </div>
    <!-- </el-card> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {},
      radio: 1

    }
  },
  created () {
    this.getDangers()
  },
  methods: {
    getDangers () {
      this.dialogVisible = true
      this.$http.get('wdiag/v1/dangers').then(res => {
        // console.log(res)
        if (res.body.code === 200) {
          this.formData = res.body.data
          // console.log(this.formData)
        }
      })
    },
    back () {
      // 点击后退
      this.$router.go(-1)
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.h3T {
  text-align: center;
  font-weight: bold;
  color: red;
}
.dangers {
  // margin-bottom: 70px;
  font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑",
    Arial, sans-serif;
}
.custom-title {
  text-align: none !important;
}
.van-tag {
  margin-right: 8px;
}
.v-btn {
  text-align: center;
}
.dangers .van-cell {
  background: rgb(157, 156, 112, 0.1);
}
.dangers-box {
  border: 5px dashed #c36660;
  margin: 20px;
  border-radius: 15px;
}
</style>
