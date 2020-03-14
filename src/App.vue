<template>
    <div id="app">
		<!-- 导航 -->
		<header>
            <!-- <div class="banner"></div> -->
            <div class="nav">
                <!-- <div class="logo">iFENLAJI</div> -->
                <div class="logo"></div>
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
                <div class="_end"></div>
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
    float: left;
    width: 100%;
    .nav{
        position: relative;
        width: 1000px;
        height: 131px;
        margin: 0 auto;
        padding-top: 22px;
        background-color: #fff;
        border-radius: 0 0 20px 20px;
        .logo{
            width: 230px;
            height: 60px;
            margin: 0 auto;
            background: url('../static/img/ifenlaji.png') no-repeat;
            background-size: 100%;
        }
        .navInfo{
            margin-top: 16px;
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
        ._end{
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            margin: 0 auto;
            width: 150px;
            height: 6px;
            background-color: #A1E45A;
        }
    }
}

</style>
