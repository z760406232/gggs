<template>
	<div class="signalbox">
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
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			ghwzh() {
				this.$router.push('/added')
				console.log('挂号吴正红')
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
</style>
