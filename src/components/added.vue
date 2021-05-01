<template>
  <div>
    <van-nav-bar
      title="预约挂号"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="contact">
      <div class="conbox">
        <div>
          <van-contact-card
            v-show="username == null"
            type="add"
            @click="onAdd"
          />
        </div>
        <van-contact-card
          v-show="username !== null"
          type="edit"
          :name="currentContact.name"
          :tel="currentContact.tel"
          @click="onAdd"
        />
      </div>
      <!-- 添加就诊人弹框 -->
      <van-action-sheet v-model="show" title="标题">
        <div class="peoplbox">
          <div class="card">
            <h3>{{ this.username }}</h3>
            <b
              >居民身份证 <span>{{ this.idcard }}</span>
            </b>
          </div>
        </div>
        <div class="content" @click="addpeopl">
          <van-icon name="plus" />添加就诊人
        </div>
      </van-action-sheet>
    </div>
    <div class="brtable">
      <span>挂号信息</span>
    </div>
    <div class="cell">
      <van-cell title="就诊日期" :value="patdat" />
      <van-cell title="就诊医院" value="草本兴中医诊所" />
      <van-cell title="就诊科室" value="儿科" />
      <van-cell title="医生姓名" :value="doctor" />
      <van-cell title="挂号费" :value="hind" />
    </div>
    <div class="brtable">
      <span>预约规则</span>
    </div>
    <div class="textcell">
      <span
        >1.受疫情影响，来自或去过中/高地区的患者就诊必须持有武汉市7日内正规机构核酸检测阴性结果证明，否则将不能正常就诊，请主动配合入口处管理和预检分诊。</span
      >
      <br />
      <span>
        2.为减少院内聚集，避免交叉感染风险，每位患者仅允许一位家属陪同。
      </span>
    </div>
    <div class="bottbtn">
      <van-button type="info" @click="payMoney">提交</van-button>
    </div>
  </div>
</template>

<script>
import {
  Toast
} from 'vant';

export default {
  data () {
    return {
      show: false,
      doctor: '',
      int: '',
      datetime: '',
      week: '',
      patdat: '',
      hind: '',
      statu: true,
      currentContact: {
        name: '',
        tel: '',
      },
      username: '',
      idcard: '',
      appId: '',
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      idcardAge: ''
    }
  },
  created () {
    this.int = this.$route.query.int
    // console.log(this.int)
    this.datetime = this.$route.query.datetime
    this.week = this.$route.query.week
    // this.statu = window.localStorage.getItem('statu')
    // console.log(this.statu)
    this.username = window.localStorage.getItem('username')
    this.idcard = window.localStorage.getItem('idcard')
    const phone = window.localStorage.getItem('phone')
    this.currentContact.name = this.username
    // console.log(this.username)
    // console.log(this.currentContact.name)
    this.currentContact.tel = phone
    this.doctor = window.localStorage.getItem('doctor')
    this.patdat = window.localStorage.getItem('patdat')
    this.getlist()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onAdd () {
      this.show = true
      // this.$router.push('/contcact')
      Toast('新增');
    },
    // 添加就诊人
    addpeopl () {
      this.$router.push({
        path: '/contcact',
        query: {

          datetime: this.datetime,
          week: this.week,
          doctor: this.doctor
        }
      })
    },
    getlist () {
      // console.log(this.datetime, '123', this.week);
      this.$axios.get('hospital/v1/checkorder', {
        params: {
          int: this.int,
          datetime: this.datetime,
          week: this.week
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.doctor = res.data.data.mrsdoc
          this.patdat = res.data.data.patdat
          this.hind = res.data.data.hind
          window.localStorage.setItem('doctor', this.doctor)
          window.localStorage.setItem('patdat', this.patdat)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    payMoney () {
      const username = window.localStorage.getItem('username')
      const idcard = window.localStorage.getItem('idcard')
      const radio = window.localStorage.getItem('radio')
      const phone = window.localStorage.getItem('phone')

      this.currentContact.name = username
      // console.log(username)
      this.currentContact.tel = phone
      const y = new Date().getFullYear();

      const n = idcard.slice(6, 10)
      this.idcardAge = y - n
      if (this.currentContact.name == '') {
        // alert('未进入')
        Toast({
          message: '请填写就诊人信息'
        })
      } else {
        // alert('进入')
        // alert(username)
        // alert(this.idcardAge)
        // alert(phone)
        // alert(radio)
        // alert(this.int)
        // alert(this.datetime)
        // alert(this.doctor)
        this.$axios.post('hospital/v1/checkorder', {
          pater: username,
          patage: this.idcardAge,
          pathone: phone,
          patsexer: radio,
          pattime: this.int,
          patdat: this.datetime,
          mrsdoc: this.doctor
        }).then(res => {
          if (res.data.code === 200) {
            // alert('进入且200')
            this.appId = res.data.data.appId
            this.timeStamp = res.data.data.timeStamp
            this.nonceStr = res.data.data.nonceStr
            this.package = res.data.data.package
            this.signType = res.data.data.signType
            this.paySign = res.data.data.paySign
            // alert('商户ID:' + this.appId)
            // alert('时间戳' + this.timeStamp)
            // alert('随机串' + this.nonceStr)
            // alert('package' + this.package)
            // alert('微信签名方式' + this.signType)
            // alert('微信签名' + this.paySign)
            this.weixinPay()
          }
        })
      }

    },
    // 解决微信内置对象报错
    weixinPay (params) {
      // alert('第一步');
      // var that = this
      if (typeof WeixinJSBridge === 'undefined') {
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(params), false)
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady(params))
          document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady(params))
        }
      } else {
        this.onBridgeReady()
      }
    },
    // 微信内置浏览器类，weChatParameter对象中的参数是3.步骤代码中从后端获取的数据
    onBridgeReady () {
      // Toast('第二步');
      // alert('调起支付')
      // --------------
      window.WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
        debug: true,
        // ---------
        appId: this.appId, // 公众号名称，由商户传入
        timeStamp: this.timeStamp, // 时间戳，自1970年以来的秒数
        nonceStr: this.nonceStr, // 随机串
        package: this.package,
        signType: this.signType, // 微信签名方 式：
        paySign: this.paySign // 微信签名
      },
        function (res) {
          // alert('res打印' + res)
          // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          if (res.err_msg === 'get_brand_wcpay_request:ok') { // 支付成功后的操作
            // alert('支付成功')
            Toast({
              message: '支付成功',
              duration: 2000
            })
            window.location.href = 'https://hospital.shamohot.com/?#/home'
          } else if (res.err_msg === 'get_brand_wcpay_request:cancel') { // 取消支付的操作
            // alert('取消支付')
            Toast({
              message: '取消支付',
              duration: 2000
            })
            // window.location.href = 'https://www.shamohot.com/?#/car/payment'
          } else { // 支付失败的操作
            // alert('支付失败')
            Toast({
              message: '支付失败',
              duration: 2000 
            })
          }
        }
      )
    },
  },
};
</script>

<style scoped>
.contact {
  /* width: ; */
  /* border: 1px solid #000000; */
  width: 100%;
  height: 130px;
  background-color: #9fc1fe;
  /* position: absolute; */
  box-sizing: border-box;
}

.conbox {
  /* background-color: #FFFFFF; */
  padding: 25px 0;
  margin: auto;
  width: 90%;
  height: 80px;
  line-height: 80px;
  border-radius: 5px;
}

.van-contact-card {
  border-radius: 10px;
}

.brtable {
  height: 50px;
  line-height: 50px;
  background-color: #f6f6f6;
}

.brtable span {
  margin-left: 15px;
  font-size: 14px;
  font-weight: bold;
}

.van-cell__title {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

.van-cell__value {
  -webkit-box-flex: 3;
  -webkit-flex: 3;
  flex: 3;
  text-align: start;
}

.textcell span {
  margin: 10px 15px;
  font-size: 12px;
}

.bottbtn {
  margin-top: 20px;
  text-align: center;
}

.content {
  padding: 16px 16px 50px;
  text-align: center;
}

.van-action-sheet {
  background-color: #eee;
}

.peoplbox {
  padding: 15px;
  /* height: 50px;
		line-height: 50px; */
  font-size: 14px;
}

.peoplbox .card {
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
}

.peoplbox .card h3,
.peoplbox .card b {
  margin: 7px 0;
  font-weight: 400;
}

.van-icon {
  vertical-align: text-top;
}
</style>
