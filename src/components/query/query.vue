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

        <!-- 查询结果 -->
        <div class="result" :style=" !isShow ? 'display: block;' : 'display: none;'">
            <div class="re_item" v-for="(item,index) in newslist" :key="index">
                <h2 class="re_title">{{item.name}}</h2>
                <p class="re_type"><b>{{item.type | isType}}</b></p>
                <p class="re_aipre"><b>智能预判：</b>{{item.aipre ? '预判结果' : '正常结果'}}</p>
                <p class="re_explain"><b>分类解释：</b>{{item.explain}}</p>
                <p class="re_contain"><b>包含类型：</b>{{item.contain}}</p>
                <p class="re_tip"><b>投放提示：</b>{{item.tip}}</p>
            </div>
        </div>


        <!-- 默认显示 -->
        <div class="hot_q" :style=" isShow ? 'display: block;' : 'display: none;'">
            <p class="hq_title hq_">热门查询</p>
            <p class="hq_txt">
                <span v-for="(item,index) in hotQuery" :key="index" @click="hotword(item)">{{item}}</span>
            </p>
        </div>

        <!-- 最新更新 -->
        <div class="hot_q last_q" :style=" isShow ? 'display: block;' : 'display: none;'">
            <p class="hq_title new_">最新更新</p>
            <p class="hq_txt">
                <span v-for="(item,index) in Newest" :key="index" @click="hotword(item)">{{item}}</span>
            </p>
        </div>

        <!-- 常见可回收物 -->
        <div class="hot_q _com">
            <p class="hq_title rec_">常见可回收物</p>
            <p class="hq_txt">
                <span v-for="(item,index) in com_re" :key="index" @click="hotword(item)">{{item}}</span>
            </p>
        </div>

        <!-- 常见有害垃圾 -->
        <div class="hot_q _com">
            <p class="hq_title harmful_">常见有害垃圾</p>
            <p class="hq_txt">
                <span v-for="(item,index) in com_harmful" :key="index" @click="hotword(item)">{{item}}</span>
            </p>
        </div>

        <!-- 常见湿垃圾 -->
        <div class="hot_q _com">
            <p class="hq_title wet_">常见湿垃圾</p>
            <p class="hq_txt">
                <span v-for="(item,index) in com_wet" :key="index" @click="hotword(item)">{{item}}</span>
            </p>
        </div>

        <!-- 常见干垃圾 -->
        <div class="hot_q _com">
            <p class="hq_title dry_">常见干垃圾</p>
            <p class="hq_txt">
                <span v-for="(item,index) in com_dry" :key="index" @click="hotword(item)">{{item}}</span>
            </p>
        </div>

        <!-- 结果标题 -->



    </div>
</template>

<script>
import qs from 'qs'
export default {
    data() {
        return {
            isShow: true,
            keyword: '',
            newslist: [],
            hotQuery: ['笔记本电脑','西瓜','手机','香蕉','奶茶','纸巾','塑料袋','瓶子','杯子','电脑','苹果','瓜子'],
            Newest: ['八宝粥','食品','蚕豆壳','货旧衣服','苹果皮','塑料盒','玻璃瓶','无人机','笔记本电源','碗碟','石膏'],
            com_re: ['手机','塑料','牛奶盒','塑料瓶','易拉罐','报纸','玻璃瓶','纸','玻璃','啤酒瓶','衣服','养乐多瓶','塑料盒','电脑','废纸','鼠标','饮料瓶','纸箱','酒瓶','玻璃杯','纸盒','纸张','洗发水瓶','旧衣服','书本','旧鞋子','笔记本电脑','玩具','A4纸','矿泉水瓶','电线','香水瓶','纸板箱','泡沫','纸袋','酸奶盒'],
            com_harmful:['杀虫喷雾','电池','除草剂罐','废电池','油漆桶','温度计','口服液瓶','杀虫剂','药品铝塑板','灯泡','胶囊药片底板','过期药品','油漆','药瓶','空药瓶','LED灯','x光片','指甲油','口服液瓶子','充电电池','药品','荧光灯','废药品','节能灯','杀虫剂罐','干电池','电池','灯管','底片','农药瓶','手机充电电池','药片','蓄电池'],
            com_wet: ['小龙虾','毛豆壳','苹果','瓜子壳','玉米','蛋壳','米','香蕉皮','鸡蛋壳','花生壳','桃核','西瓜皮','瓜子','鸡骨头','枣核','蟹壳','香蕉','玉米棒','鱼骨','西瓜','鱼骨头','树叶','苹果核','玉米芯','虾壳','鱼','果皮','果核','花甲','栗子壳','茶叶','螃蟹壳'],
            com_dry: ['榴莲壳','陶瓷花瓶','塑料袋','玉米叶','口罩','骨头','纸巾','头发','玉米皮','草席','贝壳','被污染的旧衣服','牙刷','卫生纸','烟头','湿纸巾','口红','餐巾纸','猫砂','打火机','指甲','口香糖','过期化妆品','大骨头','饼干包装袋','旧镜子','奶茶杯','陶瓷','回形针','面膜','眼镜']
        };
    },
    components: {},
    methods: {
        search(){
            let url = 'http://api.tianapi.com/txapi/lajifenlei/index';
            let keyword = document.getElementsByClassName('input')[0].value;
            this.keyword = keyword;
            let key = '7b2a2dd2403726c93b656f436f084341';
            if(keyword.trim() == ""){
                this.$alert('查询内容不能为空!', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                    }
                });
            }
            if(keyword.trim()){
                var data = qs.stringify({
                    "key": key,
                    "word": keyword,
                    "num": 10
                })
                this.axios({
                    url: url,
                    method: 'POST',
                    // data: `key=${key}&word=${keyword}&num=10`,
                    data: data,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }
                }).then(res=>{
                    if(typeof res.data.newslist === 'undefined'){
                        this.$alert('没有查到相关内容！', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                            }
                        });
                        return;
                    }
                    this.newslist = res.data.newslist;
                    this.isShow = false;
                })
            }
        },
        keyDown(){
            if(event.keyCode == 13){
                this.search();
            }
        },
        hotword(keyword){
            let url = 'http://api.tianapi.com/txapi/lajifenlei/index?key=7b2a2dd2403726c93b656f436f084341&word=' + keyword +'&num=10';
            this.axios.get(url).then(res=>{
                if(typeof res.data.newslist === 'undefined'){
                    alert('没有查到相关内容！')
                    return;
                }
                this.newslist = res.data.newslist;
                this.isShow = false;
                document.body.scrollTop = 300;
                document.documentElement.scrollTop = 300;
                this.$message({
                    message: '查询成功',
                    type: 'success'
                });
            })
            
        }
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
            height: 125%;
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
        .hq_{
            color: #ed462f;
        }
        .new_{
            color: #3F85F1;
        }
        .rec_{
            color: #2FA858;
        }
        .harmful_{
            color: #ec4335;
        }
        .wet_{
            color: #FCBC27;
        }
        .dry_{
            color: #3F85F1;
        }
        .hq_txt{
            padding-left: 23px;
            padding-right: 20px;
            color: #222;
            font-size: 16px;
            line-height: 32px;
            font-family: "Poppins", sans-serif;
            span{
                color: #222;
                margin: 0 10px;
                cursor: pointer;
            }
            span:nth-child(1){
                margin-left: 0;
            }
            span:hover{
                color: #f8b100;
            }
        }
    }
    .last_q{
        margin-bottom: 60px;
    }
    ._com{
        margin: 0 auto 60px;
    }

    .result{
        width: 1170px;
        padding: 60px 15px 0;
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
