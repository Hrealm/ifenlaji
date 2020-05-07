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
                    <div class="_item" v-for="item in rec_category" :key="item.id">
                        <img :src="item.bg_img" alt="">
                        <div class="desc">
                            <p class="cn_t _t">{{item.cn_title}}</p>
                            <p class="en_t _t">{{item.en_title}}</p>
                        </div>
                        <div class="_line">
                            <img :src="item._line" alt="">
                        </div>
                    </div>
                </div>
                <div class="r_title"></div>
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
                    id: 1,
                    types: '',
                    cn_title: '电池塑料回收',
                    en_title: 'Battery plastic recovery',
                    bg_img: '/static/img/recycle/bpr.jpg',
                    _line: '/static/img/recycle/div_line.jpg'
                },
                {
                    id: 2,
                    types: '',
                    cn_title: '各类金属回收',
                    en_title: 'Metal recovery',
                    bg_img: '/static/img/recycle/mr.jpg',
                    _line: '/static/img/recycle/div_line.jpg'
                },
                {
                    id: 3,
                    types: '',
                    cn_title: '书本纸张回收',
                    en_title: 'Book paper recycling',
                    bg_img: '/static/img/recycle/bookpr.jpg',
                    _line: '/static/img/recycle/div_line.jpg'
                },
                {
                    id: 4,
                    types: '',
                    cn_title: '机械工业回收',
                    en_title: 'Mechanical industrial recovery',
                    bg_img: '/static/img/recycle/mir.jpg',
                    _line: '/static/img/recycle/div_line.jpg'
                }
            ]
        };
    },
    components: {}
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
                    .img{
                        width: 50px;
                        height: 50px;
                        margin-bottom: 3px;
                    }
                    .i_name{
                        font-weight: bold;
                        color: #5A5A5A;
                        font-family: 微软雅黑;
                        font-size: 16px;
                        line-height: 32px;
                        white-space: normal;
                        background-color: #FFFFFF;
                        margin-bottom: 10px;
                    }
                    .i_desc{
                        margin-top: 10px;
                        line-height: 1.5;
                        font-family: 'Microsoft YaHei';
                        font-size: 14px;
                        color: #666666;
                    }
                }
            }
        }
    }
    .recovery{
        width: 100%;
        padding: 80px 0;
        background-color: #353535;
        .r_con{
            width: 1140px;
            padding: 0 15px;
            margin: 0 auto;
            .r_left{
                float: left;
                font-size: 0;
                ._item{
                    position: relative;
                    top: 0;
                    float: left;
                    margin-right: 60px;
                    cursor: pointer;
                    transition: all .3s;
                    .desc{
                        position: absolute;
                        bottom: 18px;
                        width: 100%;
                        text-align: center;
                        color: #fff;
                        z-index: 47;
                        ._t{
                            color: #666666;
                            font-size: 14px;
                            line-height: 3;
                        }
                    }
                    ._line{
                        position: absolute;
                        bottom: 55px;
                        width: 100%;
                        text-align: center;
                    }
                }
                ._item:hover{
                    top:-10px;
                    transition: all .3s;
                    box-shadow: 0 2px 10px #eee;
                }
            }
        }
    }
}
</style>
