<template>
	<div>
		<!-- 1234565 -->
	</div>
</template>

<script>
	export default {
		created() {
			window.location.href =
				'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb1930d8dccd1fb1f&redirect_uri=https://register.caobenxing.com/hospital/v1/returnwx&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
			// this.$router.push('/home')
		}
	} 
</script>

<style>
	/* 	div {
		background-color: #000000;
	} */
</style>
