<template>
	<div>
		<van-nav-bar title="添加就诊人" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="brtable">
			<span>就诊人信息</span>
		</div>
		<div class="formactive">
			<van-form @submit="onSubmit">
				<!-- 姓名 -->
				<van-field v-model="username" name="username" label="就诊人姓名" placeholder="请输入就诊人姓名"
					:rules="[{ required: true, message: '请填写就诊人姓名' }]" />
				<!-- 身份证 -->
				<van-field v-model="idcard" name="idcard" label="身份证号" placeholder="请输入身份证号"
					:rules="[{ pattern: ID, message: '请填写身份证号' }]" />
				<!-- 性别 -->
				<van-field name="radio" label="单选框">
					<template #input>
						<van-radio-group v-model="radio" direction="horizontal">
							<van-radio name="1">男性</van-radio>
							<van-radio name="2">女性</van-radio>
						</van-radio-group>
					</template>
				</van-field>
				<!-- 出生日期 -->

				<!-- 手机号 -->
				<van-field v-model="value1" name="phone" label="手机号" placeholder="请输入手机号"
					:rules="[{ pattern, message: '请输入正确的手机号' }]" />
				<!-- 当前住址 -->
				<!-- <van-field readonly clickable name="area" :value="value" label="地区选择" placeholder="点击选择省市区"
					@click="showArea = true" />
				<van-popup v-model="showArea" position="bottom">
					<van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
				</van-popup> -->
				<!-- 详细地址 -->
				<!-- <van-field v-model="address" name="address" label="地址" placeholder="请输入地址"
					:rules="[{required: true, message: '请输入地址' }]" -->
				<div style="margin: 16px;">
					<van-button round block type="info" native-type="submit">提交</van-button>
				</div>
			</van-form>
		</div>
	</div>
</template>

<script>
	import AeraInfo from '../assets/js/area.js'
	export default {
		data() {
			return {
				username: '',
				idcard: '',
				radio: '1',
				value1: '',
				showCalendar: false,
				pattern: /\d{6}/,
				ID:  /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
				value: '',
				showArea: false,
				areaList: AeraInfo, // 数据格式见 Area 组件文档
				address: '',
				int: '',
				datatime: '',
				week: '',
				doctor: ''
			}
		},
		created() {
			this.int = this.$route.query.int
			this.datatime = this.$route.query.datetime
			this.week = this.$route.query.week
			this.doctor = this.$route.query.doctor
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onSubmit(values) {
				window.localStorage.setItem('username', values.username)
				window.localStorage.setItem('idcard', values.idcard)
				window.localStorage.setItem('radio', values.radio)
				window.localStorage.setItem('phone', values.phone)
				this.$router.push({
					path: '/added',
					query: {
						int:this.int,
						datetime: this.datatime,
						week: this.week
					}
				})
				console.log('submit', values);
			},
			onConfirm(values) {
				this.value = values
					.filter((item) => !!item)
					.map((item) => item.name)
					.join('/');
				this.showArea = false;
			},
		}
	}
</script>

<style scoped>
	.brtable {
		height: 50px;
		line-height: 50px;
		background-color: #F6F6F6;
	}

	.brtable span {
		margin-left: 15px;
		font-size: 14px;
		font-weight: bold;
	}
</style>
