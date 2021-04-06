<template>
	<div class="regist">
		<!-- <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange" /> -->
		<van-nav-bar title="预约挂号" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<ul class="registul">
			<li>
				<router-link to="/regist/index">
					<span>周四</span>
					<p>4月01日</p>
					<em>有号</em>
				</router-link>
			</li>
			<li>
				<router-link to="/regist/index">周2</router-link>
			</li>
			<li>
				<a href="">周3</a>
			</li>
			<li>
				<a href="">周4</a>
			</li>

			<li>
				<a href="">周5</a>
			</li>
			<li>
				<a href="">周6</a>
			</li>
			<li>
				<a href="">周5</a>
			</li>
			<li>
				<a href="">周6</a>
			</li>
		</ul>
		<div class="nosignal">
			当天已无号，请查看其它日期号源
		</div>
		<!-- 	<div class="signalbox">
			<div class="am">
				上午号源
			</div>
			<div class="signalselect">
				<ul>
					<li>
						<div class="timeli">
							9:00 -- 10:00
						</div>
						<div class="doctor">
							<div class="wu" @click="ghwzh">
								<b>主任医师</b> | <span>吴正红</span>
								<div class="btn">
									<span>￥100</span>
									<b>剩余6</b>
								</div>
							</div>
							<div class="chen" @click="ghcjx">
								<b>主任医师</b> | <span>陈锦绣</span>
								<div class="btn">
									<span>￥100</span>
									<b>剩余6</b>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="timeli">
							10:00 -- 11:00
						</div>
						<div class="doctor">
							<div class="wu">
								<b>主任医师</b> | <span>吴正红</span>
								<div class="btn">
									<span>￥100</span>
									<b>剩余6</b>
								</div>
							</div>
							<div class="chen">
								<b>主任医师</b> | <span>陈锦绣</span>
								<div class="btn">
									<span>￥100</span>
									<b>剩余6</b>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="timeli">
							11:00 -- 12:00
						</div>
						<div class="doctor">
							<div class="wu">
								<b>主任医师</b> | <span>吴正红</span>
								<div class="btn">
									<span>￥100</span>
									<b>剩余6</b>
								</div>
							</div>
							<div class="chen">
								<b>主任医师</b> | <span>陈锦绣</span>
								<div class="btn">
									<span>￥100</span>
									<b>剩余6</b>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="af">
				下午号源
			</div> -->
		<!-- </div> -->
		<router-view></router-view>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';

	export default {
		data() {
			return {
				selectedId: 0,
				options: {
					activeColor: "#008792" //设置选中颜色
				},
				// 二级路由路径
				subRouteUrl: ['/home/index', '/home/index', '/home/box', '/home/mbaby', '/home/general', '/home/food',
					'/home/shirt', '/home/man', '/home/ele'
				]

			}
		},
		methods: {
			handleChange(item, index) {
				// console.log(item,index)        index为一个下标，通过定义的数组，取出对应下标的路由地址进行跳转
				// console.log(this.$router)
				//跳转到指定的路径this.$router.replace()
				// this.$router.replace('/me')        例如  这样就可以跳转到/me页面，就是个人中心页面
				this.$router.replace(this.subRouteUrl[index])
				console.log(this.$route);

			},
			ghwzh() {
				console.log('挂号吴正红')
			},
			ghcjx() {
				console.log('挂号陈锦绣')
			},
			onClickLeft() {
				this.$router.push('/home')
				
				// Toast('返回11');
			},
			onClickRight() {
				Toast('按钮');
			},
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
		background-color: rgba(255, 255, 255, .8);
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
</style>
