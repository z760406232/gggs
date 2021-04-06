<template>
	<div>
		<van-nav-bar title="预约挂号" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="contact">
			<div class="conbox">
				<van-contact-card type="add" @click="onAdd" />
			</div>
			<!-- 添加就诊人弹框 -->
			<van-action-sheet v-model="show" title="标题">
				<div class="peoplbox">
					<div class="card">
						<h3>赵磊</h3>
						<b>居民身份证 <span>420115199610311615</span> </b>
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
			<van-cell title="就诊日期" value="2021年4月20日 周二 9:00-10:00" />
			<van-cell title="就诊医院" value="内容" />
			<van-cell title="就诊科室" value="内容" />
			<van-cell title="医生姓名" value="内容" />
			<van-cell title="医生职称" value="内容" />
			<van-cell title="挂号费" value="100" />
		</div>
		<div class="brtable">
			<span>医院预约规则</span>
		</div>
		<div class="textcell">
			<span>1.受疫情影响，来自或去过中/高地区的患者就诊必须持有武汉市7日内正规机构核酸检测阴性结果证明，否则将不能正常就诊，请主动配合入口处管理和预检分诊。</span>
			<br>
			<span>
				2.为减少院内聚集，避免交叉感染风险，每位患者仅允许一位家属陪同。
			</span>
		</div>
		<div class="bottbtn">
			<van-button type="info">提交</van-button>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';

	export default {
		data() {
			return {
				show: false,
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onAdd() {
				this.show = true
				// this.$router.push('/contcact')
				Toast('新增');
			},
			// 添加就诊人
			addpeopl() {
				this.$router.push('/contcact')
			}
		},
	};
</script>

<style scoped>
	.contact {
		/* width: ; */
		/* border: 1px solid #000000; */
		width: 100%;
		height: 130px;
		background-color: #9FC1FE;
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
		background-color: #F6F6F6;
	}

	.brtable span {
		margin-left: 15px;
		font-size: 14px;
		font-weight: bold;
	}

	..van-cell__title {
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
