<template>
  <div class="regist">
    <!-- <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange" /> -->
    <van-nav-bar
      title="预约挂号"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <ul class="registul">
      <li v-for="(item, index) in MsgList" :key="index">
        <div
          :class="{ active: index === currentIndex }"
          @click="checkTime(item.datetime, item.week, index)"
        >
          <span>{{ item.week | weeked }}</span>
          <p>{{ item.datetime | time }}</p>
          <em>{{ item.disp }}</em>
        </div>
      </li>
    </ul>
    <!-- ---------------- -->
    <!-- 		<div class="nosignal">
			当天已无号，请查看其它日期号源
		</div> -->
    <!-- ---------------- -->

    <div class="signalbox">
      <div class="am">上午号源</div>
      <div class="signalselect">
        <ul>
          <li v-for="(item, index) in AMList" :key="index">
            <div class="timeli">
              {{ item.timehoure }}
            </div>
            <div class="doctor">
              <div
                :class="{ wu: isActive, you: isChose }"
                @click="ghwzh(item.timenum)"
              >
                <span>{{ item.doctor }}</span>
                <div class="btn">
                  <span>￥{{ item.hind }}</span>
                  <b>剩余{{ item.num }}</b>
                </div>
              </div>
              <!-- 		<div class="chen" @click="ghcjx">
								<b>主任医师</b> | <span>陈锦绣</span>
								<div class="btn">
									<span>￥100</span>
									<b>剩余6</b>
								</div>
							</div> -->
            </div>
          </li>
        </ul>
      </div>
      <div class="af">下午号源</div>
      <div class="signalselect">
        <ul>
          <li v-for="(item, index) in PMList" :key="index">
            <div class="timeli">
              {{ item.timehoure }}
            </div>
            <div class="doctor">
              <div
                :class="{ wu: isActive, you: isChose }"
                @click="item.num == 0 ? checknone() : ghwzh(item.timenum)"
              >
                <span>{{ item.doctor }}</span>
                <div class="btn">
                  <span>￥{{ item.hind }}</span>
                  <b>剩余{{ item.num }}</b>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
      selectedId: 0,
      options: {
        activeColor: "#008792" //设置选中颜色
      },
      // 二级路由路径
      subRouteUrl: ['/home/index', '/home/index', '/home/box', '/home/mbaby', '/home/general', '/home/food',
        '/home/shirt', '/home/man', '/home/ele'
      ],
      MsgList: [],
      First: [],
      AMList: [],
      PMList: [],
      isActive: false,
      isChose: true,
      doctor: '',
      time: '',
      week: '',
      datetime: '',
      currentIndex: 0
    }
  },
  created () {
    // console.log('尽量');
    this.$axios.get('/hospital/v1/visitime').then(res => {
      if (res.data.code === 200) {
        // console.log(res.data.timelater)
        this.MsgList = res.data.timelater
        this.First = res.data.timelater[0]
        // console.log(this.First.datetime)
        // this.$router.push({
        // 	name: 'RegistIndex',
        // 	query: {
        // 		datetime: this.First.datetime,
        // 		week: this.First.week
        // 	}
        // }).catch(err => {
        // 	console.log('输出报错', err)
        // })
      }
    })
    // console.log(this.datetime)
    this.getAPM()
  },
  methods: {
    getAPM () {
      this.datetime = this.$route.query.datetime;
      this.week = this.$route.query.week;
      // console.log(this.$route.query.week)
      this.$axios.post('/hospital/v1/visitime', {
        datetime: this.datetime,
        week: this.week,
      }).then(res => {
        if (res.data.code === 200) {
          // console.log(res.data.AM)
          this.AMList = res.data.AM
          this.PMList = res.data.PM
        }

      })
    },
    handleChange (item, index) {
      // console.log(item,index)        index为一个下标，通过定义的数组，取出对应下标的路由地址进行跳转
      // console.log(this.$router)
      //跳转到指定的路径this.$router.replace()
      // this.$router.replace('/me')        例如  这样就可以跳转到/me页面，就是个人中心页面
      this.$router.replace(this.subRouteUrl[index])
      // console.log(this.$route);

    },
    ghwzh (int) {
      // console.log(this.week);
      // console.log(this.week,this.datetime);
      this.$router.push({
        path: '/added',
        query: {
          int,
          datetime: this.datetime,
          week: this.week
        }
      })
      // console.log('挂号吴正红')
    },
    ghcjx () {
      // console.log('挂号陈锦绣')
    },
    onClickLeft () {
      this.$router.push('/home')

      // Toast('返回11');
    },
    onClickRight () {
      Toast('按钮');
    },
    checkTime (time, week, index) {
      this.currentIndex = index;
      // console.log(987);
      // console.log(time);
      this.datetime = time
      this.week = week
      // console.log(week);
      this.$axios.post('/hospital/v1/visitime', {
        datetime: time,
        week: this.week,
      }).then(res => {
        if (res.data.code === 200) {
          this.AMList = res.data.AM
          this.PMList = res.data.PM
          // console.log(res.data.AM)
          // console.log(res.data.PM)
          this.$router.push({
            name: 'RegistIndex',
            query: {
              datetime: time,
              week: this.week
            }
          }).catch(err => {
            console.log('输出报错', err)
          })
        }

      })

      // console.log(time, week)
    },
    // 没有号源
    checknone () {
      Toast('号源已无，请选择其他时间段')
    }
  },
  filters: {
    time: function (value) {
      // console.log(value.slice(5))
      return value.slice(5)
    },
    weeked: function (ee) {
      switch (ee) {
        case "Wed":
          ee = '周三';
          break;
        case "Thu":
          ee = '周四';
          break;
        case "Fri":
          ee = '周五';
          break;
        case "Sat":
          ee = '周六';
          break;
        case "Sun":
          ee = '周日';
          break;
        case "Mon":
          ee = '周一';
          break;
        case "Tue":
          ee = '周二';
          break;
      }
      return ee;
    }
  }
}
</script>

<style scoped="scoped">
@import url(../assets/clean.css);

.home {
  background: #009ad6;
  width: 100%;
  height: 100%;
}

.registul {
  overflow-x: auto;
  list-style: none;
  white-space: nowrap;
  width: auto;
  background-color: rgba(255, 255, 255, 0.8);
  /* overflow: hidden; */
  border-bottom: 1px solid #eee;
  box-shadow: 0 0px 6px 1px #eee;
  padding: 14px 10px;
  box-sizing: border-box;
}

.registul li {
  width: 50px;
  font-size: 14px;
  color: #2c3e50;
  margin-left: 20px;
  display: inline-block;
}

.registul li a {
  color: #2c3e50;
}

a:active {
  text-decoration: none;
}

.nosignal {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  box-shadow: 0 0px 6px 1px #eee;
}

.am,
.af {
  height: 50px;
  line-height: 50px;
  text-align: start;
  padding-left: 10px;
  background-color: #ccc;
}

.signalselect ul li {
  width: 100%;
  height: 60px;
}

.timeli {
  width: 30%;
  height: 60px;
  line-height: 60px;
  float: left;
  text-align: center;
}

.doctor {
  width: 70%;
  float: left;
}

.doctor .wu,
.doctor .chen {
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
}

.btn {
  display: inline-block;
  float: right;
}

.btn span,
.btn b {
  margin-right: 15px;
}

.btn b {
  color: crimson;
}

.nosignal {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  box-shadow: 0 0px 6px 1px #eee;
}

.am,
.af {
  height: 50px;
  line-height: 50px;
  text-align: start;
  padding-left: 10px;
  background-color: #ccc;
}

.signalselect ul li {
  width: 100%;
  height: 60px;
}

.timeli {
  width: 30%;
  height: 60px;
  line-height: 60px;
  float: left;
  text-align: center;
}

.doctor {
  width: 70%;
  float: left;
}

.doctor .wu,
.doctor .chen {
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
}

.btn {
  display: inline-block;
  float: right;
}

.btn span,
.btn b {
  margin-right: 15px;
}

.btn b {
  color: crimson;
}

.you {
  height: 60px;
  line-height: 60px;
}

.registul .active {
  color: red;
}
</style>
