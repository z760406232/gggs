<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Toast } from 'vant'
// import wx from 'weixin-js-sdk'
export default {
  data () {
    return {
      active: '',
      flag: false,
      id: 1,
      num: ''

    }
  },
  beforeCreate () {

  },
  created () {
    const config = {}
    config.url = window.location.href
    console.log(config.url)
    // console.log(window.location.hash)

    // 判断当前url是否存在?参数匹配符
    if (!config.url.match(/\?/)) {
      // console.log(111)
      location.replace(window.location.href.split('#')[0] + '?' + window.location.hash)
      // console.log(window.location.hash)
    }

    this.flag = false

    // weixinPay()
  },
  methods: {
    onClickLeft () {
      // 点击后退
      this.$router.go(-1)
      // location.reload()
    },
    onClickRight () {
      Toast('按钮')
    },
  }
}
</script>

<style lang="scss">
.border {
  border-bottom: 1px solid #ccc;
}
.paddTop {
  padding-top: 46px;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // overflow: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
