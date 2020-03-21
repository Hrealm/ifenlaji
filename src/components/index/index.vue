<template>
    <div class="container">
        <!-- banner -->
        <div class="banner">
            <div class="ban-bg"></div>
            <div class="content">
                <h6>给我一处归宿 还你一片清洁</h6>
                <h2>从现在开始</h2>
                <p class="desc">习近平：培养垃圾分类的好习惯 为改善生活环境作努力 <br>
                 为绿色发展可持续发展作贡献</p>
                <router-link :to="{name: 'query'}">
                    <span>Get Started</span>
                </router-link>
            </div>
        </div>

        <!-- Garbage classification -->
        <div class="g-con">
            <div class="g-section">
                <div class="g-title">
                    <h2>Garbage Classification</h2>
                    <p class="g-desc clearFix">
                        <em class="line fl"></em>
                        <span>日常生活垃圾分为四类</span>
                        <em class="line fr"></em>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    height: 5000px;
    .banner{
        position: relative;
        width: 100%;
        height: 800px;
        overflow: hidden;
        background: #04091e;
        z-index: 1;
        .ban-bg{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 100%;
            height: 1000px;
            background: url('/static/img/index/banner_bg.jpg') no-repeat scroll center 0/cover;
            opacity: 0.5;
            z-index: -1;
        }
        .content{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 1170px;
            text-align: center;
            color: #fff;
            letter-spacing: 5px;
            h6{
                font-size: 16px;
                margin: 0 0 8px;
                line-height: 30px;
                text-transform: uppercase;
                letter-spacing: 5px;
                font-weight: 400;
            }
            h2{
                padding: 8px 0;
                margin: 0 0 8px;
                font-size: 60px;
                line-height: 60px;
                font-weight: 700;
                letter-spacing: 10px;
            }
            .desc{
                font-weight: 300;
                font-size: 16px;
                line-height: 24px;
                padding: 10px 0px 20px;
                margin-bottom: 30px;
            }
            a{
                display: inline-block;
                font-size: 14px;
                line-height: 30px;
                text-transform: uppercase;
                color: #fff;
                font-weight: 600;
                background: #f3c300;
                padding: 5px 30px;
                letter-spacing: 1.5px;
            }
        }
    }
    .g-con{
        width: 100%;
        padding: 88px 0;
        background: #fff;
        .g-section{
            width: 1140px;
            padding: 0 15px;
            margin: 0 auto;
            .g-title{
                width: 100%;
                margin-bottom: 75px;
                text-align: center;
                h2{
                    color: #222222;
                    font-size: 36px;
                    line-height: 45px;
                    font-weight: 600;
                    font-family: "Poppins", sans-serif;
                    margin-bottom: 8px;
                }
                .g-desc{
                    width: 360px;
                    margin: 0 auto;
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                    color: #777;
                    line-height: 33px;
                    margin-top: 15px;
                    letter-spacing: 2px;
                    .line{
                        display: block;
                        width: 55px;
                        height: 2px;
                        margin-top: 16px;
                        background: #ccc;
                    }
                }
            }
        }
    }
}
</style>
