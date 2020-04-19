<template>
    <div class="container">
        <!-- <h1>新闻中心</h1> -->
        <!-- banner begin -->
        <div class="banner">
            <img src="/static/img/new1.jpg" width="100%" height="100%">
            <div class="banner-text">
                <h2>新闻中心</h2>
                <h3>news centre</h3>
            </div>
        </div>
        <!-- banner end -->

        <!-- 最新新闻 & 新闻列表-->
        <!-- latest news begin -->
        <div class="latest-news">
            <div class="max1200">
                <ul>
                    <li class="news-item" v-for="(item,index) in newsList" :key="index">
                        <div class="news-box clearFix">
                            <div class="news-cover">
                                <img :src="item.fImage" alt="" width="100%" height="100%" v-lazy="item.fImage">
                            </div>
                            <div class="news-content fl">
                                <b class="news-date">{{item.fReleaseTime | releaseTime}}</b>
                                <router-link class="router-newsTitle" :to="{name:'newsDetails', query:{id:item.fId}}" active-class="">
                                    <h2 class="news-title">{{item.fTitle}}</h2>
                                </router-link>    
                                <p class="news-tags">{{item.fTags}}</p>
                                <router-link class="router-more" :to="{name:'newsDetails', query:{id:item.fId}}" active-class="">
                                    <span class="news-more">MORE</span>
                                </router-link>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- 新闻动态 -->
                <div class="news-dynamic">
                    <h2>最新资讯</h2>
                    <h3>logistics redefined</h3>
                </div>
                <!-- 分页请求 -->
                <div class="news-pagination">
                    <!-- <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination> -->
                    <el-pagination
                        background
                        @current-change = "currentChange"
                        @prev-click = 'prevClick'
                        @next-click = 'nextClick'
                        layout="prev, pager, next"
                        :total='total'>
                    </el-pagination>
                </div>
            </div>
        </div>
        <!-- latest news end -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            newsList: [],
            total: null,
            pageSize: 6
        };
    },
    created(){
        // let url = 'http://mgr.gdzxjy.cn/zxwebsite//zxnews/content/manager/newsList?page=1&pagesize=' + this.pageSize;
        let url = 'http://localhost:8899/inewsList';
        this.axios.get(url).then(res => {
            this.newsList = res.data.Rows;
            this.total = res.data.Total;
            // console.log(this.newsList);
        })
    },
    components: {},
    filters: {
        releaseTime: function(time){
            return time.substring(0,10);
        }
    },
    methods: {
        // 当前页面
        currentChange(val){
            this.pageSize = 6 * val;
            this.getNewsContent();
        },

        // 上一页
        prevClick(){
            this.pageSize -= 6;
            this.getNewsContent();
        },
        // 下一页
        nextClick(){
            this.pageSize += 6;
            this.getNewsContent();
        },
        // 获取新闻列表
        getNewsContent(){
            // let url = 'http://mgr.gdzxjy.cn/zxwebsite//zxnews/content/manager/newsList?page=1&pagesize=' + this.pageSize;
            // this.axios.get(url).then(res => {
            //     let array = res.data.Rows;
            //     if(this.pageSize !== 6) array.splice(0,this.pageSize-6);
            //     this.newsList = array;
            // })
            // document.body.scrollTop = 500;
            // document.documentElement.scrollTop = 500;
        }
    }
};
</script>



<style scoped lang="scss">
.container{
    width: 100%;
    min-height: 100vh;
    // height: 3000px;
    .banner{
        position: relative;
        width: 100%;
        margin-top: -1px;
        .banner-text{
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            width: 1200px;
            margin: auto;
            transform: translateY(-50%);
            color: #fff;
            // padding-left: 50px;
            h2{
                line-height: 47.5px;
                font-size: 47.5px;
                font-style: normal;
                font-weight: 700;
                letter-spacing: 10px;
                padding-bottom: 20px;
            }
            h3{
                font-size: 25.7px;
                font-weight: 400;
                font-style: normal;
                letter-spacing: 2px;
                text-transform: uppercase;
            }
        }
    }
    .latest-news{
        width: 100%;
        margin-top: 40px;
        .max1200{
            position: relative;
            width: 1200px;
            margin: 0 auto;
            ul{
                li.news-item{
                    width: 1200px;
                    // padding: 10px 45px;
                    margin-bottom: 35px;
                    // margin-left: 350px;
                    // box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
                    border-radius: 4px;
                    .news-box{
                        width: 100%;
                        border-radius: 4px;
                        .news-cover{
                            float: left;
                            width: 260px;
                            height: 180px;
                            border-radius: 4px;
                            img{
                                border-radius: 4px;
                            }
                        }
                       .news-content{
                           width: 70%;
                           margin-left: 55px;
                           padding: 12px 0;
                           .news-date{
                               display: block;
                               font-size: 14px;
                               color: #141a88;
                               line-height: 26px;
                               font-weight: 300;
                               font-style: normal;
                           }
                           a.router-newsTitle{
                               display: inline-block;
                               color: inherit;
                               font-size: inherit;
                           }
                           .news-title{
                               position: relative;
                               display: inline-block;
                               font-size: 22px;
                               color: #141a88;
                               font-weight: 400;
                               font-style: normal;
                               line-height: 31px;
                               padding: 7px 0;
                           }
                           .news-title::before{
                               content: '';
                               display: block;
                               position: absolute;
                               bottom: 6px;
                               left: 100%;
                               width: 0;
                               z-index: 1;
                               border-bottom: 2px solid #141a88;
                               transition: width 350ms, left 350ms;
                           }
                           .news-title:hover::before{
                               left: 0;
                               width: 100%;
                               transition: width 350ms;
                           }
                           .news-tags{
                               color: #999;
                               font-size: 18px;
                               line-height: 26px;
                           }
                           a.router-more{
                               display: block;
                               width: 80px;
                           }
                           .news-more{
                            //    display: none;
                               display: block;
                               margin-top: 10px;
                               width: 80px;
                               height: 24px;
                               line-height: 26px;
                               text-align: center;
                               color: #fff;
                               font-size: 10px;
                               background-color: #0875FF;
                               cursor: pointer;
                               border-radius: 22px;
                               transition: .2s all;
                           }
                           .news-more:hover{
                               border-radius: 5px;
                           }
                       }
                    }
                }
                li.news-item:nth-child(1){
                    width: 1150px;
                    padding: 25px 25px;
                    margin: 0;
                    margin-bottom: 210px;
                    // box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
                    border-radius: 4px;
                    .news-box{
                        width: 100%;
                        border-radius: 4px;
                        .news-cover{
                            float: right;
                            width: 500px;
                            height: 300px;
                            border-radius: 4px;
                            img{
                                border-radius: 4px;
                            }
                        }
                       .news-content{
                           width: 50%;
                           margin-right: 0;
                           margin-left: 25px;
                           padding: 25px 0;
                           .news-date{
                               display: block;
                               font-size: 18px;
                               color: #141a88;
                               line-height: 32px;
                               font-weight: 300;
                               font-style: normal;
                           }
                           .news-title{
                               display: inline-block;
                               font-size: 26px;
                               color: #141a88;
                               font-weight: 400;
                               font-style: normal;
                               line-height: 34px;
                               padding: 20px 0;
                           }
                           .news-title::before{
                               content: '';
                               display: block;
                               position: absolute;
                               bottom: 15px;
                               left: 100%;
                               width: 0;
                               z-index: 1;
                               border-bottom: 2px solid #141a88;
                               transition: width 350ms, left 350ms;
                           }
                           .news-title:hover::before{
                               left: 0;
                               width: 100%;
                               transition: width 350ms;
                           }
                           .news-tags{
                               color: #999;
                               font-size: 22px;
                               line-height: 32px;
                           }
                           .news-more{
                               display: block;
                               margin-top: 20px;
                               width: 100px;
                               height: 26px;
                               line-height: 26px;
                               text-align: center;
                               color: #fff;
                               font-size: 10px;
                               background-color: #0875FF;
                               cursor: pointer;
                               border-radius: 22px;
                               transition: .2s all;
                           }
                           .news-more:hover{
                               border-radius: 5px;
                           }
                       }
                    }
                }
            }
            .news-dynamic{
                position: absolute;
                top: 420px;
                h2{
                    position: absolute;
                    top: 37px;
                    line-height: 47.5px;
                    font-size: 47.5px;
                    font-style: normal;
                    font-weight: 700;
                    z-index: 9;
                }
                h3{
                    color: #E5E5E5;
                    font-size: 46px;
                    font-style: normal;
                    font-weight: 700;
                    text-transform: uppercase;
                    transform: scale(1, 1.5);
                    // letter-spacing: 2px;
                }
            }
            .news-pagination{
                margin: 40px 0 40px;
                text-align: center;
            }
        }
    }
}

// 移动端适配
@media screen and (max-width: 760px){
    .container{
        .banner{
            .banner-text{
                width: 1100px;
            }
        }
        .latest-news{
            .max1200{
                width: 1100px;
                ul{
                    li.news-item{
                        width: 1100px;
                        margin-bottom: 45px;
                        box-shadow: 0px 0px 36px rgba(0,0,0,0.1);
                    }
                    li.news-item:nth-child(1){
                        width: 1050px;
                        box-shadow: 0px 0px 36px rgba(0,0,0,0.1);
                    }
                }
            }
        }
    }
}
</style>

<style lang="scss">
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #0875FF;
    color: #ffffff !important;
}
.el-pager li.active::before {
    content: '';
    width: 0 !important;
}
</style>
