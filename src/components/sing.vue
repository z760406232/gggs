<template>
	<div class="signalbox">
		<div class="am">
			上午号源
		</div>
		<div class="signalselect">
			<ul>
				<li v-for="(item , index) in AMList" :key="index">
					<div class="timeli">
						{{item.timehoure }}
					</div>
					<div class="doctor">
						<div :class="{wu:isActive,you:isChose}" @click="ghwzh(item.timenum)">
							<b>主任医师</b> | <span>{{item.doctor}}</span>
							<div class="btn">
								<span>￥{{item.hind}}</span>
								<b>剩余{{item.num}}</b>
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
				<!-- <li>
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
				</li> -->
			</ul>
		</div>
		<div class="af">
			下午号源
		</div>
		<div class="signalselect">
			<ul>
				<li v-for="(item , index) in PMList" :key="index">
					<div class="timeli">
						{{item.timehoure }}
					</div>
					<div class="doctor">
						<div :class="{wu:isActive,you:isChose}" @click="ghwzh(item.timenum,item.doctor)">
							<b>主任医师</b> | <span>{{item.doctor}}</span>
							<div class="btn">
								<span>￥{{item.hind}}</span>
								<b>剩余{{item.num}}</b>
							</div>
						</div>
					</div>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				AMList: [],
				PMList: [],
				isActive: false,
				isChose: true,
				doctor: '',
				datetime: '',
				week: ''
			}
		},
		created() {
			this.$axios.get('/hospital/v1/visitime').then(res => {
				if (res.data.code === 200) {
					// console.log(res.data.timelater)
					this.MsgList = res.data.timelater
					this.First = res.data.timelater[0]
					// console.log(this.First.datetime)
					this.$router.push({
						name: 'RegistIndex',
						query: {
							datetime: this.First.datetime,
							week: this.First.week
						}
					}).catch(err => {
						console.log('输出报错', err)
					})
				}

			})
			this.datetime = this.$route.query.datetime;
			// console.log(this.datetime,123)
			this.week = this.$route.query.week;
			this.$axios.post('/hospital/v1/visitime', {
				datetime: this.datetime,
				week: this.week,
			}).then(res => {
				if (res.data.code === 200) {
					console.log(res.data.AM)
					this.AMList = res.data.AM
					this.PMList = res.data.PM
				}

			})
		},
		methods: {
			ghwzh(int, doc) {
				// console.log(this.week, '654');
				window.localStorage.setItem('doctor', doc)
				this.$router.push({
					path: '/added',
					query: {
						int,
						datetime: this.datetime,
						week: this.week
					}
				})
			},
			ghcjx() {
				console.log('挂号陈锦绣')
			}
		}
	}
</script>

<style scoped>
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
</style>
