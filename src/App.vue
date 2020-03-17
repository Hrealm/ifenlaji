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



            <!-- <div class="banner"></div> -->
            <!-- <div class="nav">
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
            </div> -->
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
    width: 100%;
    height: 162px;
    background: url('../static/img/common/navshadow.png') top center no-repeat;
    background-size: 100% 100%;
    font-size: 16px;
    background-color: transparent!important;
    z-index: 9999;
    top: 0;

    .nav{
        width: 1200px;
        height: 60px;
        margin: 0 auto;
        line-height: 60px;
        .logo{
            float: left;
            width: 230px;
            height: 60px;
            background: url('../static/img/ifenlaji.png') no-repeat;
            background-size: 100%;
        }
        .nav-list{
            float: right;
            ul{
                li{
                    float: left;
                    a{
                        padding: 0 20px;
                        color: #fff;
                        font-size: 16px;
                        font-family: HiraginoSansGB-W3,Hiragino Sans GB,"SimSun";
                        // font-weight: 500;
                    }
                }
            }
        }
    }
}


// header{
//     float: left;
//     width: 100%;
//     .nav{
//         position: relative;
//         width: 1000px;
//         height: 131px;
//         margin: 0 auto;
//         padding-top: 22px;
//         background-color: #fff;
//         border-radius: 0 0 20px 20px;
//         .logo{
//             width: 230px;
//             height: 60px;
//             margin: 0 auto;
//             background: url('../static/img/ifenlaji.png') no-repeat;
//             background-size: 100%;
//         }
//         .navInfo{
//             margin-top: 11px;
//             padding: 0 20px;
//             p{
//                 margin-top: 18px;
//                 width: 192px;
//                 border-bottom: 1px solid #9EA8B1;
//             }
//             .nav-list{
//                 width: 100%;
//                 ul{
//                     width: 50%;
//                     margin: 0 auto;
//                     li{
//                         float: left;
//                         width: 90px;
//                         height: 35px;
//                         margin: 0 3px;
//                         text-align: center;
//                         line-height: 35px;
//                         a{
//                             color: #37566b;
//                             span{
//                                 font-size: 14px;
//                                 // color: #37566b;
//                                 font-weight: 600;
//                             }
//                         }
//                         a:hover{
//                             // color: #ffffff;
//                             // background-color: transparent;
                            
//                             // height: 34px;
//                             // color: #fff;
//                             // background-color: #7EB923;
//                             // border-radius: 15px;

//                         }

//                     }
//                     li:hover{
//                         background-image: url('../static/img/nav-bg.png');
//                         a{
//                             color: #fff;
//                         }
//                     }
//                 }
//             }
//         }
//         ._end{
//             position: absolute;
//             left: 0;
//             right: 0;
//             bottom: -2px;
//             margin: 0 auto;
//             width: 150px;
//             height: 6px;
//             background-color: #A1E45A;
//         }
//     }
// }

</style>
