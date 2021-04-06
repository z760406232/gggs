<template>
	<div>
		<van-nav-bar title="订单列表" left-text="返回" left-arrow @click-left="onClickLeft" />

		<div class="list">
			<ul>
				<li class="about">
					<div class="listTime">2021/04/06 <span>9:14</span></div>
					<div class="listCard">
						<ul>
							<li>姓名: <span>张三</span></li>
							<li>性别: <span>男</span> </li>
							<li>身份证: <span>42011519961030156</span> </li>
							<li>手机号: <span>1851884541</span> </li>
							<li>地址: <span>北京-天安门</span> </li>
						</ul>
					</div>
				</li>
				<li class="about">
					<div class="listTime">2021/04/06 <span>9:14</span></div>
					<div class="listCard">
						<ul>
							<li>姓名: <span>张三</span></li>
							<li>性别: <span>男</span> </li>
							<li>身份证: <span>42011519961030156</span> </li>
							<li>手机号: <span>1851884541</span> </li>
							<li>地址: <span>北京-天安门</span> </li>
							<li v-bind:class="{ bRight: isActive }" v-show="isActive">已就诊</li>
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
				isActive: true
			}
			
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
