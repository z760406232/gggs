<template>
	<div>
		<van-nav-bar title="订单列表" left-text="返回" left-arrow @click-left="onClickLeft" />

		<div class="list">
			<ul>
				<li class="about" v-for="(item,index) in List" :key="index">
					<div class="listTime">就诊时间 : {{item.time}}</div>
					<div class="listCard">
						<ul>
							<li>姓名: <span>{{item.name}}</span></li>
							<li>性别: <span>{{item.sex}}</span> </li>
							<li>订单号: <span>{{item.id}}</span> </li>
							<li>手机号: <span>{{item.phone}}</span> </li>
							<li>手机号: <span>{{item.ordtime}}</span> </li>
							<li>付款金额: <span>{{item.money}}</span> </li>
							<li class="bRight"><span>{{item.status}}</span> </li>
						</ul>
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
				msg: 234,
				isActive: true,
				List: []
			}

		},
		created() {
			this.$axios.get('/hospital/v1/disp').then(res => {
				if (res.data.code === 200) {
					this.List = res.data.data
				}
			})
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.list {
		width: 90%;
		margin: 0 auto;
	}

	.list .about {
		margin-top: 20px;
		box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
		border-radius: 4px;
		border: 1px solid #ebeef5;
		background-color: #fff;
		overflow: hidden;
		color: #303133;
		transition: .3s;
	}

	.list .listTime {
		padding: 18px 20px;
		border-bottom: 1px solid #ebeef5;
		box-sizing: border-box;
		font-size: 16px;
		font-weight: bold;
	}

	.list .listCard {
		padding: 20px;
		font-size: 14px;
	}

	.bRight {
		text-align: right;
		color: red;
		font-weight: bold;
	}
</style>
