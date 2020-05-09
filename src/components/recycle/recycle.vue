<template>
    <div class="container">
        <!-- banner -->
        <div class="banner">
            <div class="ban_bg"></div>
        </div>
        <!-- business 业务 -->
        <div class="business">
            <div class="title">
                <p class="t_cn">业务</p>
                <p class="t_en">CORE BUSINESS</p>
            </div>
            <div class="b_con">
                <ul>
                    <li v-for="item in businessArray" :key="item.id">
                        <div class="img">
                            <img :src="item.img" alt />
                        </div>
                        <p class="i_name">{{item.name}}</p>
                        <p class="i_desc">{{item.desc}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 垃圾回收 -->
        <div class="recovery">
            <div class="r_con clearFix">
                <div class="r_left">
                    <div
                        class="_item"
                        v-for="item in rec_category"
                        :key="item.id"
                        @click="getShop(item.id)"
                    >
                        <img :src="item.bg_img" alt />
                        <div class="desc">
                            <p class="cn_t _t">{{item.cn_title}}</p>
                            <p class="en_t _t">{{item.en_title}}</p>
                        </div>
                        <div class="_line">
                            <img :src="item._line" alt />
                        </div>
                    </div>
                </div>
                <div class="r_title">
                    <p class="r_cn_t">垃圾回收</p>
                    <p class="r_en_t">Recycle Trash</p>
                    <p class="r_more">敬请期待</p>
                </div>
            </div>
        </div>

        <!-- 垃圾回收商 -->
        <div class="shop">
            <div class="s_con clearFix">
                <div class="_img fl">
                    <img :src="c_shop.img" alt />
                </div>
                <div class="cp_info fl">
                    <p class="cp _info">
                        <span class="_key">商&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家：</span>
                        <span class="_value">{{c_shop.cp}}</span>
                    </p>
                    <p class="cg _info">
                        <span class="_key">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
                        <span class="_value">{{c_shop.cg}}</span>
                    </p>
                    <p class="sa _info">
                        <span class="_key">服务区域：</span>
                        <span class="_value">{{c_shop.sa}}</span>
                    </p>
                    <p class="tp _info">
                        <span class="_key">联系人：</span>
                        <span class="_value">{{c_shop.tp}}</span>
                    </p>
                    <p class="ph" @click="getPh">
                        <span class="_phTip" v-if="isPh">查看电话号码</span>
                        <span class="_ph" v-else>{{c_shop.ph}}</span>
                    </p>
                </div>
                <div class="credit fl" :class="'credit_bpr'"></div>

                <!-- <div class="score-num fl">
                    <div class="score-desc">信用总分</div>
                    <div
                        id="main"
                        style="width: 600px; height: 400px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
                        _echarts_instance_="ec_1589018352362"
                    >
                        <div
                            style="position: relative; width: 600px; height: 400px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"
                        >
                            <canvas
                                data-zr-dom-id="zr_0"
                                width="600"
                                height="400"
                                style="position: absolute; left: 0px; top: 0px; width: 600px; height: 400px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"
                            ></canvas>
                        </div>
                        <div
                            style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(50, 50, 50, 0.7); border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 5px; left: 322px; top: 193px; pointer-events: none;"
                        >: 245分</div>
                    </div>
                </div>-->

                <div class="prompt"></div>
                <div class="t_score">商家信用总分</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            businessArray: [
                {
                    id: 1,
                    name: "水处理",
                    img: "/static/img/recycle/water.jpg",
                    desc:
                        "水处理包括市政污水处理、工业高难、降水、市政给水、乡镇污水处理、海外项目"
                },
                {
                    id: 2,
                    name: "固废处理",
                    img: "/static/img/recycle/solid_waste.jpg",
                    desc:
                        "固废处理包括静脉产业、垃圾综合处理、焚烧发电、清洁能源、餐厨垃圾、再生资源、市政污泥、环境修复。"
                },
                {
                    id: 3,
                    name: "再生资源",
                    img: "/static/img/recycle/recycled.jpg",
                    desc:
                        "再生资源包括湘潭再生资源回收体系项目、废旧轮胎再生橡胶、湖北咸宁市报废汽车资源再利用项目。"
                },
                {
                    id: 4,
                    name: "新能源及绿色产品开发",
                    img: "/static/img/recycle/new_energy.jpg",
                    desc:
                        "新能源及绿色产品开发包括锂电池等相关项目，新的项目持续开发中，致力于环境保护"
                }
            ],
            rec_category: [
                {
                    id: 0,
                    types: "",
                    cn_title: "电池塑料回收",
                    en_title: "Battery plastic recovery",
                    bg_img: "/static/img/recycle/bpr.jpg",
                    _line: "/static/img/recycle/div_line.jpg"
                },
                {
                    id: 1,
                    types: "",
                    cn_title: "各类金属回收",
                    en_title: "Metal recovery",
                    bg_img: "/static/img/recycle/mr.jpg",
                    _line: "/static/img/recycle/div_line.jpg"
                },
                {
                    id: 2,
                    types: "",
                    cn_title: "书本纸张回收",
                    en_title: "Book paper recycling",
                    bg_img: "/static/img/recycle/bookpr.jpg",
                    _line: "/static/img/recycle/div_line.jpg"
                },
                {
                    id: 3,
                    types: "",
                    cn_title: "机械工业回收",
                    en_title: "Mechanical industrial recovery",
                    bg_img: "/static/img/recycle/mir.jpg",
                    _line: "/static/img/recycle/div_line.jpg"
                }
            ],
            shops: [
                {
                    id: 0,
                    cp: "广州鑫林回收",
                    cg: "电池塑料回收",
                    sa: "南海  顺德  禅城  三水  高明  佛山 周边",
                    tp: "汤先生",
                    ph: "4008194789",
                    img: "/static/img/recycle/s_bpr.jpg"
                },
                {
                    id: 1,
                    cp: "满记再生资源回收",
                    cg: "金属回收",
                    sa: "白云  天河  番禺  海珠  花都  越秀  增城",
                    tp: "钟先生",
                    ph: "4008587262",
                    img: "/static/img/recycle/s_mr.jpg"
                },
                {
                    id: 2,
                    cp: "广州源宝再生资源回收有限公司",
                    cg: "废纸回收",
                    sa: "天河  海珠  越秀  白云  荔湾  黄埔  番禺",
                    tp: "李先生",
                    ph: "4008588713",
                    img: "/static/img/recycle/s_bookpr.jpg"
                },
                {
                    id: 3,
                    cp: "广州恒泰废品回收有限公司",
                    cg: "机械工业回收",
                    sa: "天河  海珠  越秀  白云  荔湾  番禺  黄埔",
                    tp: "王先生",
                    ph: "4008984165",
                    img: "/static/img/recycle/s_mir.jpg"
                }
            ],
            c_shop: {
                id: 1,
                cp: "广州鑫林回收",
                cg: "电池塑料回收",
                sa: "南海  顺德  禅城  三水  高明  佛山 周边",
                tp: "汤先生",
                ph: "4008194789",
                img: "/static/img/recycle/s_bpr.jpg"
            },
            isPh: true,
            _credit: 'credit_bpr'
        };
    },
    components: {},
    methods: {
        getPh() {
            this.isPh = false;
        },
        getShop(i) {
            this.c_shop = this.shops[i];
            this.isPh = true;
        }
    }
};
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    min-height: 100vh;
    .banner {
        position: relative;
        width: 100%;
        height: 421px;
        overflow: hidden;
        .ban_bg {
            width: 100%;
            height: 125%;
            background: url("/static/img/recycle/banner-bg.jpg") no-repeat;
            background-position: center top;
        }
    }
    .business {
        width: 1140px;
        padding: 60px 15px;
        margin: 0 auto;
        .title {
            text-align: center;
            .t_cn {
                line-height: 45px;
                font-size: 24px;
                font-family: 微软雅黑;
            }
            .t_en {
                line-height: 28px;
                font-size: 14px;
                text-transform: uppercase;
                font-family: 微软雅黑;
                color: #cccccc;
            }
        }
        .b_con {
            width: 100%;
            margin: 60px 0;
            ul {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                // align-items: center;
                li {
                    width: 20%;
                    .img {
                        width: 50px;
                        height: 50px;
                        margin-bottom: 3px;
                    }
                    .i_name {
                        font-weight: bold;
                        color: #5a5a5a;
                        font-family: 微软雅黑;
                        font-size: 16px;
                        line-height: 32px;
                        white-space: normal;
                        background-color: #ffffff;
                        margin-bottom: 10px;
                    }
                    .i_desc {
                        margin-top: 10px;
                        line-height: 1.5;
                        font-family: "Microsoft YaHei";
                        font-size: 14px;
                        color: #666666;
                    }
                }
            }
        }
    }
    .recovery {
        width: 100%;
        padding: 80px 0;
        background-color: #353535;
        .r_con {
            width: 1140px;
            padding: 0 15px;
            margin: 0 auto;
            .r_left {
                float: left;
                font-size: 0;
                ._item {
                    position: relative;
                    z-index: 3;
                    top: 0;
                    float: left;
                    margin-right: 60px;
                    cursor: pointer;
                    transition: all 0.3s;
                    .desc {
                        position: absolute;
                        bottom: 18px;
                        width: 100%;
                        text-align: center;
                        color: #fff;
                        z-index: 47;
                        ._t {
                            color: #666666;
                            font-size: 14px;
                            line-height: 3;
                        }
                    }
                    ._line {
                        position: absolute;
                        bottom: 55px;
                        width: 100%;
                        text-align: center;
                    }
                }
                ._item:hover {
                    top: -10px;
                    transition: all 0.3s;
                    box-shadow: 0 2px 10px #eee;
                }
            }
            .r_title {
                position: relative;
                z-index: 1;
                height: 530px;
                .r_cn_t {
                    color: #ffffff;
                    font-family: "Microsoft YaHei";
                    line-height: normal;
                    white-space: pre-wrap;
                    font-size: 24px;
                }
                .r_en_t {
                    color: #cccccc;
                    font-family: "Microsoft YaHei";
                    line-height: normal;
                    white-space: pre-wrap;
                    font-size: 16px;
                    line-height: 35px;
                }
                .r_more {
                    position: absolute;
                    width: 24px;
                    text-align: center;
                    padding: 10px 5px;
                    color: #656565;
                    border: 2px solid #656565;
                    cursor: pointer;
                    bottom: 0px;
                    right: 66px;
                    font-size: 16px;
                }
                .r_more:hover {
                    background-color: #fff;
                    border: 2px solid #fff;
                }
            }
        }
    }
    .shop {
        width: 100%;
        .s_con {
            position: relative;
            width: 1140px;
            padding: 80px 15px;
            margin: 0 auto;
            font-size: 0;
            ._img {
                width: 290px;
                height: 220px;
                margin-right: 80px;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.117647);
                overflow: hidden;
                text-align: center;
                // cursor: pointer;
                img {
                    margin-left: -2px;
                    margin-top: -1.8px;
                }
            }
            .cp_info {
                padding: 0 15px;
                ._info {
                    padding: 8px 0;
                    line-height: 25px;
                    font-size: 17px;
                    ._key {
                        display: inline-block;
                        width: 100px;
                        color: #666;
                        margin-right: 10px;
                        text-align: justify;
                        text-align-last: justify;
                    }
                    .__value {
                        color: #000;
                    }
                }
                .ph {
                    width: 200px;
                    height: 45px;
                    background-color: #ff552e;
                    text-align: center;
                    line-height: 45px;
                    margin-top: 11px;
                    cursor: pointer;
                    ._ph {
                        font-size: 20px;
                        color: #fff;
                    }
                    ._phTip {
                        font-size: 18px;
                        color: #fff;
                    }
                }
            }
            // .score-num {
            //     width: 354px;
            //     height: 326px;
            //     background: #fafafa;
            //     .score-desc {
            //         margin-top: 20px;
            //         margin-left: 30px;
            //         font-family: HiraginoSansGB-W3;
            //         font-size: 12px;
            //         color: #666;
            //     }
            // }
            .credit {
                width: 354px;
                height: 220px;
                // background: url("/static/img/recycle/credit_bpr.png") no-repeat -42px -36px;
                background-size: 130%;
                // background-color: #fafafa;
            }
            .credit_mir {
                background: url("/static/img/recycle/credit_mir.png") no-repeat -42px -36px;
                background-size: 130%;
            }
            .credit_bookpr {
                background: url("/static/img/recycle/credit_bookpr.png") no-repeat -42px -36px;
                background-size: 130%;
            }
            .credit_bpr {
                background: url("/static/img/recycle/credit_bpr.png") no-repeat -42px -36px;
                background-size: 130%;
            }
            .credit_mr {
                background: url("/static/img/recycle/credit_mr.png") no-repeat -42px -36px;
                background-size: 130%;
            }
            .prompt {
                width: 100%;
                height: 80px;
                margin-top: 280px;
                background: url("/static/img/recycle/pt.jpg") no-repeat;
            }
        }
        .t_score {
            position: absolute;
            bottom: 210px;
            right: 150px;
            font-size: 12px;
            color: #666;
            z-index: 99;
        }
    }
}
</style>
