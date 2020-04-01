<template>
    <div class="container">
        <!-- banner -->
        <div class="banner">
            <div class="ban_bg"></div>
            <div class="searchInput">
                <input class="input" type="text" placeholder="查询 垃圾相关分类" @keydown="keyDown()">
                <button class="searchBtn" @click="search()"><i class="icon-sousuo"></i></button>
            </div>
        </div>

        <!-- 默认显示 -->
        <div class="hot_q">
            <p class="hq_title">热门查询</p>
            <p class="hq_txt">
                <span v-for="(item,index) in hotQuery" :key="index">{{item}}</span>
            </p>
        </div>


        <!-- 结果标题 -->


        <!-- 查询结果 -->
        <div class="result">
            <div class="re_item" v-for="(item,index) in newslist" :key="index">
                <h2 class="re_title">{{item.name}}</h2>
                <p class="re_type"><b>{{item.type | isType}}</b></p>
                <p class="re_aipre"><b>智能预判：</b>{{item.aipre ? '预判结果' : '正常结果'}}</p>
                <p class="re_explain"><b>分类解释：</b>{{item.explain}}</p>
                <p class="re_contain"><b>包含类型：</b>{{item.contain}}</p>
                <p class="re_tip"><b>投放提示：</b>{{item.tip}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: '',
            newslist: [],
            hotQuery: ['笔记本电脑','西瓜','手机','香蕉','奶茶','纸巾','塑料袋','瓶子','杯子','电脑','苹果','瓜子']
        };
    },
    components: {},
    methods: {
        search(){
            let keyword = document.getElementsByClassName('input')[0].value;
            this.keyword = keyword;
            let key = '7b2a2dd2403726c93b656f436f084341';
            if(keyword.trim() == ""){
                alert('搜索内容不能为空!');
            }
            if(keyword.trim()){
                let url = 'http://api.tianapi.com/txapi/lajifenlei/index?key='+ key +'&word=' + keyword +'&num=10';
                this.axios.get(url).then(res=>{
                    if(typeof res.data.newslist === 'undefined'){
                        alert('没有查到相关内容！')
                        return;
                    }
                    this.newslist = res.data.newslist;
                    // console.log(this.newslist,res.data.code)
                })
                    // 发送 POST 请求
                    //     (function submit() {
                    //       $.ajax({
                    //         type: "POST",
                    //         url: "http://api.tianapi.com/txapi/lajifenlei/index",
                    //         data: {
                    //           key: "7b2a2dd2403726c93b656f436f084341",
                    //           word: "眼镜",
                    //           num: "10"
                    //         },
                    //         // dataType: "JSON",
                    //         success: function(result) {
                    //             console.log(result)
                    //         }
                    //       });
                    //     })()

            }
        },
        keyDown(){
            if(event.keyCode == 13){
                this.search();
            }
        },
        
    },
    filters: {
        isType: function(type){
            var _type = '';
            switch(type){
                case 0 :
                    _type = '可回收物';
                    break;
                case 1 :
                    _type = '有害垃圾';
                    break;
                case 2 :
                    _type = '湿垃圾（厨余垃圾）';
                    break;
                case 3 :
                    _type = '干垃圾（其他垃圾）';
                    break;
                default :
                    break;
            }
            return _type;
        }
    }
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    min-height: 100vh;
    .banner{
        position: relative;
        width: 100%;
        height: 421px;
        overflow: hidden;
        .ban_bg{
            width: 100%;
            height: 421px;
            background: url('/static/img/query/banner-bg.jpg') no-repeat;
            background-position: center top;
        }
        .searchInput{
            position: absolute;
            top: 80px;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            width: 639px;
            height: 50px;
            padding: 0 50px 0 15px;
            line-height: 50px;
            background-color: #fff;
            border-radius: 3px;
            font-size: 0;
            .input{
                width: 600px;
                height: 50px;
                border: 0 none;
                font-size: 14px;
                background: 0 0;
                font-family: poppin,Tahoma,Arial,sans-serif;
            }
            .input:focus {
                outline: 0;
            }
            .searchBtn{
                position: absolute;
                top: 0;
                right: 0;
                width: 50px;
                height: 50px;
                border: 0 none;
                background-color: #fff;
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
                cursor: pointer;
                color: #7f7f7f;
                i{
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    background: url('/static/img/query/sousuo.png') no-repeat 8px 8px;
                    background-size: 65%;
                }
            }
            .searchBtn:hover{
                color: #31C27C;
            }
            .searchBtn:focus{
                outline: 0;
            }
        }
    }
    .hot_q{
        width: 1110px;
        padding: 20px 15px;
        margin: 60px auto 0;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
        border-radius: 2px;
        .hq_title{
            color: #222222;
            font-size: 26px;
            line-height: 45px;
            font-weight: 400;
            font-family: "Poppins", sans-serif;
            margin-bottom: 8px;
        }
        .hq_txt{
            color: #222;
            font-size: 16px;
            line-height: 32px;
            font-family: "Poppins", sans-serif;
            span{
                color: #222;
                margin: 0 15px;
                cursor: pointer;
            }
            span:hover{
                color: #f8b100;
            }
        }
    }

    .result{
        width: 1170px;
        padding: 60px 15px;
        margin: 0 auto;
        .re_item{
            box-sizing: border-box;
            // width: 100%;
            margin: 0 15px;
            padding: 25px 30px;
            margin-bottom: 60px;
            border-radius: 2px;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
            .re_title{
                color: #222222;
                font-size: 32px;
                line-height: 45px;
                font-weight: 400;
                font-family: "Poppins", sans-serif;
                margin-bottom: 8px;
            }
            p{
                font-size: 16px;
                color: #777;
                line-height: 33px;
                letter-spacing: 2px;
            }
            .re_type{
                color: #f8b100;
                font-size: 18px;
            }
        }
    }
}
</style>
