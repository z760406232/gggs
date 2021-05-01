<template>
  <div class="about">
    <van-button type="primary" @click="GoJump">开始诊断</van-button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    GoJump () {
      this.$router.push('/table')
    }
  }
}
</script>

<style lang="scss" scoped>
.van-button {
  position: absolute;
  bottom: 25%;
  left: 40%;
}
</style>

