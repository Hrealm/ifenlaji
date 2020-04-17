<template>
    <div class="container">
        <!-- <h2>新闻详情页面</h2> -->
        <!-- banner begin -->
        <div class="banner">
            <img src="/static/img/newsbanner.jpg" alt="" width="100%">
        </div>
        <!-- banner end -->

        <!-- news begin -->
        <div class="news">
            <div class="max1200">
                <div class="news-back">
                    <p>
                        <span class="news-centre" @click="goBack()">新闻中心</span> >
                        <span class="news-title">{{newsDetails.fTitle}}</span>
                    </p>
                </div>
                <div class="news-content">
                    <h2>{{newsDetails.fTitle}}</h2>
                    <p class="news-desc">
                        <span class="news-date">{{time | releaseTime}}</span>
                        <span>- - 中象福达</span>
                    </p>
                    <div class="news-article" v-html="newsDetails.fContent"></div>
                </div>
            </div>
        </div>
        <!-- news end -->

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsDetails: {},
            time: ''
        };
    },
    created(){
        let id = this.$route.query.id;
        let url = 'http://mgr.gdzxjy.cn/zxwebsite//zxnews/content/manager/news?fId=' + id;
        this.axios.get(url).then(res => {
            this.newsDetails = res.data.news;
            this.time = this.newsDetails.fReleaseTime;
            // console.log(typeof this.newsDetails.fReleaseTime);
        })
    },
    components: {},
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
    filters: {
        releaseTime: function(time){
            return time.substring(0,10);
        }
    }
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    min-height: 80vh;
    .banner{
        width: 100%;
    }
    .news{
        width: 100%;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .news-back{
                height: 77px;
                p{
                    height: 77px;
                    line-height: 77px;
                    font-size: 14px;
                    span{
                        color: #333;
                        cursor: pointer;
                    }
                    .news-centre{
                        position: relative;
                        padding-left: 18px;
                        margin-right: 5px;
                    }
                    .news-centre::before{
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        content: "";
                        background: url('/static/img/home.png') no-repeat left center;
                        display: inline-block;
                        width: 15px;
                        height: 15px;
                        // background-size: 100%;
                        
                    }
                    .news-title{
                        margin-left: 5px;
                        color: #141a88;
                    }
                }
            }
            .news-content{
                padding: 25px 50px;
                margin-bottom: 60px;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                h2{
                    font-size: 28px;
                    padding: 8px 0;
                    text-align: center;
                    color: #333;
                    font-weight: normal;
                    font-style: normal;
                }
                .news-desc{
                    font-size: 14px;
                    color: #ccc;
                    text-align: center;
                    margin-bottom: 20px;
                    // .news-date{
                    //     vertical-align: middle;
                    // }
                }
                .news-article{
                    line-height: 36px;
                }
            }
        }
    }
}

// 移动端适配
@media screen and (max-width: 760px){
    .container{
        .news{
            .max1200{
                width: 1100px;
            }
        }
    }
}
</style>
