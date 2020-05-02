<template>
	<div class="container">
		<div class="banner">
			<div class="ban-bg"></div>
			<div class="b_content">
				<h2>About Us</h2>
				<p class="desc">
					<router-link :to="{name: 'index'}">
						<span>Home</span>
					</router-link>
                    <i class="el-icon-right"></i>
					<span>About</span>
				</p>
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
	min-height: 1000px;
	.banner {
		position: relative;
		padding: 172px 0px 84px;
		background: #04091e;
		z-index: 1;
		overflow: hidden;
		.ban-bg {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: 100%;
			height: 125%;
			background: url('/static/img/about/about_banner.jpg') no-repeat
				scroll center 0 / cover;
			opacity: 0.5;
			z-index: -1;
		}
		.b_content {
			width: 1170px;
			margin: 0 auto;
			text-align: center;
			color: #fff;
			h2 {
				display: block;
				font-size: 36px;
				line-height: 45px;
				color: #fff;
                font-family: "Poppins", sans-serif;
                font-weight: 600;
                margin-bottom: 10px;
			}
            .desc{
                margin-bottom: 20px;
                line-height: 24px;
                font-size: 15px;
                a{
                    color: #fff;
                }
                i{
                    margin: 0 8px;
                }
            }
		}
	}
}
</style>
