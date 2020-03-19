<template>
    <div id="app">
		<!-- 导航 -->
		<header>
            <div class="nav">
                <div class="logo"></div>
                <div class="nav-list clearFix">
                    <ul class="clearFix">
                       <li>
                            <router-link :to="{name: 'index'}">
                                <span>首页</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'query'}">
                                <span>分类查询</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'news'}">
                                <span>新闻中心</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'recycle'}">
                                <span>垃圾回收</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'about'}">
                                <span>关于</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

		</header>

        <router-view />
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style scoped lang="scss">
#app {
    position: relative;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}

header{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    z-index: 2;
    .nav{
        width: 1090px;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
        background: #fff;
        padding: 0px 25px;
        .logo{
            float: left;
            width: 230px;
            height: 80px;
            background: url('../static/img/logo.png') no-repeat 0 50%;
            background-size: 65%;
        }
        .nav-list{
            float: right;
            ul{
                li{
                    float: left;
                    margin-left: 30px;
                    a{
                        color: #222;
                        font: 550 14px/80px "Poppins", sans-serif;
                    }
                }
            }
        }
    }
}


</style>
