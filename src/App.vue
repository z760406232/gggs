<template>
	<div id="app">
		<transition>
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	export default {
		created() {
			const config = {}
			config.url = window.location.href
			// console.log(config.url)
			// console.log(window.location.hash)

			// 判断当前url是否存在?参数匹配符
			if (!config.url.match(/\?/)) {
				// console.log(111)
				location.replace(window.location.href.split('#')[0] + '?' + window.location.hash)
				// console.log(window.location.hash)
			}
		}
	}
</script>
<style lang="scss">
	html {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		// text-align: center;
		color: #2c3e50;
		width: 100%;
		height: 100%;
	}
</style>
