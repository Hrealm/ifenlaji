<template>
	<div class="container">
		<div class="hd_title">
			<p class="center">
				一个全球天气状况的视觉化
				<br />超级计算机预报
				<br />每三小时更新一次
			</p>
			<!-- <p class="center">&nbsp;</p>
			<p class="center">
				现在估算的海洋平面
				<br />每五天更新一次
			</p> -->
			<!-- <p class="center">&nbsp;</p>
			<p class="center">
				海洋平面温度和
				<br />大概值取自每天平局数（1981-2011）
				<br />每天更新
			</p> -->
			<p class="center">&nbsp;</p>
			<p class="center">
				海浪
				<br />每3个小时更新
			</p>
			<p class="center">&nbsp;</p>
			<p class="center">
				极光
				<br />每三十分钟更新一次
			</p>
		</div>
		<div class="e_con">
			<div class="e_w">
				<iframe src="https://earth.nullschool.net/zh-cn/" frameborder="no" scrolling="auto"></iframe>
				<!-- <iframe src="https://baidu.com/" frameborder="no" scrolling="auto"></iframe> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	components: {}
}
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	min-height: 100vh;
	background: #000;
	.hd_title {
		width: 100%;
		padding: 180px 0 20px;
		.center {
			text-align: center;
			color: #eeeeee;
			opacity: 0.9;
			font-size: 28px;
			line-height: 45px;
			font-family: NotoSansCJKsc-Light-sub, mplus-2p-light-sub, system-ui,
				sans-serif;
			font-weight: 400;
		}
	}
	.e_con {
		width: 100%;
        padding: 50px 0 100px;
		.e_w {
			width: 1140px;
			margin: auto;
			iframe {
				width: 1140px;
				height: 800px;
			}
		}
	}
}
</style>
