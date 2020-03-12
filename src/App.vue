<template>
    <div id="app">
		<!-- 导航 -->
		<header>
            <!-- <div class="banner"></div> -->
            <div class="nav">
                <div class="logo">iFENLAJI</div>
                <div class="navInfo">
                    <p class="left-line fl"></p>
                    <p class="right-line fr"></p>
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
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}
header{
    width: 100%;
    .nav{
        float: left;
        width: 1000px;
        height: 153px;
        margin-left: 438px;
        // background-color: #2c3e50;
        background-color: #fff;
        border-radius: 0 0 20px 20px;
        // opacity: .2;
        .logo{
            width: 100%;
            text-align: center;
            font-size: 46px;
            font-weight: 550;
            margin-top: 22px;
            color: #A6BAC3;
        }
        .navInfo{
            margin-top: 25px;
            padding: 0 20px;
            p{
                margin-top: 10px;
                width: 192px;
                border-bottom: 1px solid #9EA8B1;
            }

            .nav-list{
                width: 100%;
                ul{
                    width: 50%;
                    margin: 0 auto;
                    li{
                        float: left;
                        padding: 0 25px;
                        span{
                            font-size: 14px;
                            color: #37566b;
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
}

</style>
