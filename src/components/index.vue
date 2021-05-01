<template>
	<div class="hello">
		<div class="topimg">
			<img src="../assets/img/top.png" alt="">
		</div>
		<div class="center">
			<div class="firstbox">
				<div class="iconimg">
					<img src="../assets/img/man.png" alt="">
				</div>
				<div class="guahao" @click="regist">
					预约挂号
				</div>
			</div>
			<div class="seconbox">
				<div class="iconimg">
					<img src="../assets/img/woman.png" alt="">
				</div>
				<div class="dingdan" @click="dingdan">
					订单查询
				</div>
			</div>
		</div>
		<div class="bottombox">
			<!-- 	<div class="botmimg1">
				<img src="../assets/img/bottom.png" alt="">
			</div> -->
			<div class="botmimg2">
				悟道科技·服务健康
			</div>
		</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				datatime: '',
				week: '',
				MsgList: '',
				First: ''
			}
		},
		created() {
			this.$axios.get('/hospital/v1/visitime').then(res => {
				if (res.data.code === 200) {
					// console.log(res.data.timelater)
					this.MsgList = res.data.timelater
					this.First = res.data.timelater[0]
					// console.log(this.First.datetime,12313)
				}

			})
		},
		methods: {
			regist() {
				// console.log(this.First.datetime);
				this.$router.push({
					path: '/regist',
					query: {
						datetime: this.First.datetime,
						week: this.First.week
					}
				})
			},
			dingdan() {
				this.$router.push('/orderlist')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		width: 100%;
		height: 100%;
		margin: 0;
		background-image: linear-gradient(#07CCFE, #3784D6);
	}

	.topimg {
		padding-top: 10%;
		text-align: center;
	}

	.topimg img {
		max-width: 200px;
		max-height: 150px;
		/* background-color: #07C160; */
	}

	.center {
		/* border: 1px solid #ED6A0C; */
		padding: 10px 40px;
		width: 300px;
		margin: auto;
	}

	.firstbox {
		width: 100%;
		display: flex;

	}

	.firstbox .iconimg img,
	.seconbox .iconimg img {
		width: 100px;
		height: 100px;
		/* background-color: #07C160; */
	}

	.guahao,
	.dingdan {
		height: 40px;
		line-height: 40px;
		font-size: 24px;
		color: #FFFFFF;
		padding: 5px;
		border: 2px solid #FFFFFF;
		border-radius: 10px;
		text-align: center;
		margin: auto;
		letter-spacing: 5px;
	}

	.seconbox {
		clear: both;
		width: 100%;
		display: flex;
	}

	.firstbox,
	.seconbox {
		margin-top: 50px;
	}

	.bottombox {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80px;
		/* background-color: #fff; */
	}

	.bottombox .botmimg2 {
		width: 100%;
		height: 80px;
		font-size: 28px;
		font-weight: bold;
		line-height: 80px;
		text-align: center;
		color: #07C160;
		letter-spacing: 8px;
	}
</style>
