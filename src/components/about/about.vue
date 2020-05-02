<template>
	<div class="container">
		<!-- banner -->
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

		<!-- 关于 about us -->
		<div class="about_con">
			<div class="a_section">
				<div class="a_left">
					<h2 class="a_title">About Us</h2>
					<h3>
						关于我们
						<br />使命与愿景
					</h3>
					<!-- <p class="a_desc">
                        平台致力于帮助每一个人提升环保价值观念。垃圾分类已经成为一个国家发展的必然路径。培养垃圾分类的好习惯，为改善生活环境作努力，为绿色发展可持续发展作贡献是每个公民的责任。随着国家相关垃圾分类政策的实施，每一个人都需要具备相应的垃圾分类知识才能响应国家的政策。因此，本平台将提供高精准的垃圾分类搜索功能；最新最权威的相关资讯及垃圾处理政策；垃圾回收处理商；全球可视化预测...
					</p>-->
					<p
						class="a_desc"
					>平台致力于帮助每一个人提升环保价值观念。垃圾分类已经成为一个国家发展的必然路径。培养垃圾分类的好习惯，为改善生活环境作努力，为绿色发展可持续发展作贡献是每个公民的责任。因此，本平台将提供高精准的垃圾分类搜索功能；最新最权威的相关资讯及垃圾处理政策；垃圾回收处理商；全球可视化预测...</p>
					<!-- <a href class="a_about">联 系 我 们</a> -->
					<el-button class="a_about" type="text" @click="centerDialogVisible = true">联 系 我 们</el-button>
				</div>
				<div class="a_right">
					<img class="a_bg" src="../../../static/img/index/new--about_bg.png" alt />
				</div>
			</div>
		</div>

		<!-- 弹出框 -->
		<el-dialog title="" :visible.sync="centerDialogVisible" width="30%" center>
			<el-tabs v-model="activeName">
				<el-tab-pane label="WeChat" name="first">
                    <el-image style="width: 280px; height: 280px; border-radius: 10px;" :src="vx_src"></el-image>
                </el-tab-pane>
				<el-tab-pane label="QQ" name="second">
                    <el-image style="width: 280px; height: 280px; border-radius: 10px;" :src="qq_src"></el-image>
                </el-tab-pane>
				<el-tab-pane label="Email" name="third">
                    <el-image style="width: 280px; height: 280px; border-radius: 10px;" :src="em_src"></el-image>
                </el-tab-pane>
			</el-tabs>
			<!-- <span slot="footer" class="dialog-footer">
				<el-button @click="centerDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
			</span> -->
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
            centerDialogVisible: false,
             activeName: 'first',
             vx_src: '/static/img/about/vx.png',
             qq_src: '/static/img/about/QQ.png',
             em_src: '/static/img/about/em.png'
		}
	},
	components: {},
	methods: {
		open() {}
	}
}
</script>

<style>
.el-dialog__header{
    padding: 0;
}
.el-dialog__headerbtn .el-dialog__close{
    display: none;
}
.el-tab-pane{
    text-align: center;
}
</style>

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
				font-family: 'Poppins', sans-serif;
				font-weight: 600;
				margin-bottom: 10px;
			}
			.desc {
				margin-bottom: 20px;
				line-height: 24px;
				font-size: 15px;
				a {
					color: #fff;
				}
				i {
					margin: 0 8px;
				}
			}
		}
	}
	.about_con {
		padding: 100px 0;
		.a_section {
			display: flex;
			align-items: center;
			width: 1170px;
			margin: 0 auto;
			.a_left {
				box-sizing: border-box;
				width: 50%;
				align-items: center;
				padding: 0 15px;
				.a_title {
					font-size: 36px;
					line-height: 50px;
					font-weight: 600;
					color: #222222;
					letter-spacing: 5px;
				}
				h3 {
					font-size: 32px;
					line-height: 42px;
					font-weight: 600;
					letter-spacing: 5px;
					color: #222222;
					margin-bottom: 10px;
				}
				.a_desc {
					padding: 18px 0px 30px;
					line-height: 28px;
					font-size: 15px;
					font-family: 'Poppins', sans-serif;
					font-weight: 300;
					color: #777777;
					padding-right: 50px;
					margin-bottom: 20px;
				}
				.a_about {
					font-size: 14px;
					font-weight: 500;
					line-height: 30px;
					background: #222222;
					color: #fff;
					text-transform: uppercase;
					padding: 5px 29px;
					border-radius: 0px;
					position: relative;
					z-index: 1;
					-webkit-transition: all 0.3s linear;
					-o-transition: all 0.3s linear;
					transition: all 0.3s linear;
					overflow: hidden;
					border: 0px;
					display: inline-block;
					text-align: center;
				}
				.a_about:hover {
					color: #fff;
					background: #f8b100;
				}
			}
			.a_right {
				box-sizing: border-box;
				width: 50%;
				padding: 0 15px;
				.a_bg {
					width: 100%;
					height: auto;
				}
			}
		}
	}
}
</style>
