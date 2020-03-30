<template>
    <div class="container">

        <!-- banner -->
        <div class="banner">
            <div class="ban-bg"></div>
            <div class="content">
                <h6>给我一处归宿 还你一片清洁</h6>
                <h2>从现在开始</h2>
                <p class="desc">习近平：培养垃圾分类的好习惯 为改善生活环境作努力 <br>
                 为绿色发展可持续发展作贡献</p>
                <router-link :to="{name: 'query'}">
                    <span>Get Started</span>
                </router-link>
            </div>
        </div>

        <!-- 垃圾分类 Garbage classification -->
        <div class="g-con">
            <div class="g-section">
                <div class="g-title">
                    <h2>Garbage Classification</h2>
                    <p class="g-desc clearFix">
                        <em class="line fl"></em>
                        <span>日常生活垃圾分为四类</span>
                        <em class="line fr"></em>
                    </p>
                </div>
                <div class="g-class">
                    <div class="g-class-item g-recycle">
                        <figure>
                            <img src="../../../static/img/index/recycle.png" alt="" width="100%" height="100%">
                        </figure>
                        <div class="g-desc">
                            废纸、废塑料、废玻璃制品、废金属、废织物等适宜回收，并且可以回收重复利用的生活废弃物。
                        </div>
                        <!-- <div class="txt-btn">

                        </div> -->
                    </div>
                    <div class="g-class-item g-wet">
                        <figure>
                            <img src="../../../static/img/index/wet.png" alt="" width="100%" height="100%">
                        </figure>
                        <div class="g-desc">
                            易腐垃圾，如食材废弃料、剩饭剩菜、过期食品、水果皮、干果垃圾，废弃植物、中药残渣等生活废弃物品。
                        </div>
                    </div>
                    <div class="g-class-item g-dry">
                        <figure>
                            <img src="../../../static/img/index/dry.png" alt="" width="100%" height="100%">
                        </figure>
                        <div class="g-desc">
                            生活中的其它垃圾，并且不属于“湿垃圾”、“有害垃圾”、“可回收垃圾”的垃圾分类，也叫其它垃圾。
                        </div>
                    </div>
                    <div class="g-class-item g-harmful">
                        <figure>
                            <img src="../../../static/img/index/harmful.png" alt="" width="100%" height="100%">
                        </figure>
                        <div class="g-desc">
                            废电池、费灯泡灯管、废药品、废油漆，以及有损人身体健康或者对环境直接或者间接会造成污染，有潜在危害的生活用品。
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 垃圾分类的好处 Benefits of Garbage classification -->
        <div class="b-con">
            <div class="b-con-bg"></div>
            <div class="b-section">
                <div class="b-title">
                    <h2>Benefits of Garbage Classification</h2>
                    <p class="b-desc">垃圾分类的定义及好处</p>
                </div>
                <div class="b-dh">
                    <div class="b-dh-item">
                        <h4>什么是垃圾分类</h4>
                        <p class="b_item_desc">垃圾分类就是将垃圾分门别类地投放，并通过分类地清运和回收使之重新变成资源。从国内外各城市对生活垃圾分类的方法来看，大致都是根据垃圾的成分构成、产生量，结合本地垃圾的资源利用和处理方式来进行分类。如德国一般分为纸、玻璃、金属、塑料等；澳大利亚一般分为可堆肥垃圾，可回收垃圾，不可回收垃圾；日本一般分为可燃垃圾，不可燃垃圾等。</p>
                    </div>
                    <div class="b-dh-item">
                        <h4>减少环境污染</h4>
                        <!-- <p class="b_item_desc">由于我国垃圾没有进行分类处理，现代的垃圾含有化学物质，有的会导致人们发病率提升。如果通过填埋或者堆放处理垃圾，即使远离生活场所对垃圾进行填埋，并且采用了相应的隔离技术，也难以杜绝有害物质渗透，这些有害物质会随着地球的循环而进入到整个生态圈中，污染水源和土地，通过植物或者动物，最终影响到人们的身体健康。</p> -->
                        <p class="b_item_desc">由于我国垃圾没有进行分类处理，现代的垃圾含有化学物质，有的会导致人们发病率提升。目前都是采取填埋或者堆放处理垃圾，这也难以杜绝有害物质渗透，进而污染水源和土地，通过植物或者动物，最终影响到人们的身体健康。</p>
                    </div>
                    <div class="b-dh-item">
                        <h4>节省土地资源</h4>
                        <!-- <p class="b_item_desc">垃圾填埋和垃圾堆放等垃圾处理方式占用土地资源，垃圾填埋场都属于不可复场所，即填埋场不能够重新作为生活小区。且生活垃圾中有些物质不易降解，使土地受到严重侵蚀。将垃圾分类，去掉可以回收的、不易降解的物质，减少垃圾数量达60%以上。</p> -->
                        <p class="b_item_desc">垃圾填埋和垃圾堆放等垃圾处理方式占用土地资源，垃圾填埋场都属于不可复场所。且生活垃圾中有些物质不易降解，使土地受到严重侵蚀。将垃圾分类，去掉可以回收的、不易降解的物质，减少垃圾数量达60%以上。</p>
                    </div>
                    <div class="b-dh-item">
                        <h4>再生资源的利用</h4>
                        <!-- <p class="b_item_desc">垃圾的产生是源于人们没有利用好资源，将自己不用的资源当成垃圾抛弃，这种废弃资源的方式对于整个生态系统的损失都是不可以估计的。在垃圾处理之前，通过垃圾分类回收，就可以将垃圾变废为宝，如回收纸张能够保护森林，减少森林资源的浪费；回收果皮蔬菜等生物垃圾，就可以作为绿色肥料，让土地能够更加肥沃。</p> -->
                        <p class="b_item_desc">垃圾的产生是源于人们没有利用好资源，将自己不用的资源当成垃圾抛弃，这种废弃资源的方式对于整个生态系统的损失都是不可以估计的。在垃圾处理之前，通过垃圾分类回收，就可以将垃圾变废为宝。</p>
                    </div>
                    <div class="b-dh-item">
                        <h4>提高民众价值观念</h4>
                        <!-- <p class="b_item_desc">垃圾分类是处理垃圾公害的最佳解决方法和最佳的出路。进行垃圾分类已经成为一个国家发展的必然路径。垃圾分类能够使得民众学会节约资源、利用资源，养成良好的生活习惯，提高个人最终的素质素养。一个人能够养成良好的垃圾分类习惯，那么他也就会关注环境保护问题，在生活中注意资源的珍贵性，养成节约资源的习惯。</p> -->
                        <p class="b_item_desc">垃圾分类是处理垃圾公害的最佳解决方法和最佳的出路。进行垃圾分类已经成为一个国家发展的必然路径。垃圾分类能够使得民众学会节约资源、利用资源，养成良好的生活习惯，提高个人最终的素质素养。</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 关于 about us -->
        <div class="about_con">
            <div class="a_section">
                <div class="a_left">
                    <h2 class="a_title">
                        About Us
                    </h2>
                    <h3>
                        关于我们
                        <br>
                        使命与愿景
                    </h3>
                    <!-- <p class="a_desc">
                        平台致力于帮助每一个人提升环保价值观念。垃圾分类已经成为一个国家发展的必然路径。培养垃圾分类的好习惯，为改善生活环境作努力，为绿色发展可持续发展作贡献是每个公民的责任。随着国家相关垃圾分类政策的实施，每一个人都需要具备相应的垃圾分类知识才能响应国家的政策。因此，本平台将提供高精准的垃圾分类搜索功能；最新最权威的相关资讯及垃圾处理政策；垃圾回收处理商；全球可视化预测...
                    </p> -->
                    <p class="a_desc">
                        平台致力于帮助每一个人提升环保价值观念。垃圾分类已经成为一个国家发展的必然路径。培养垃圾分类的好习惯，为改善生活环境作努力，为绿色发展可持续发展作贡献是每个公民的责任。因此，本平台将提供高精准的垃圾分类搜索功能；最新最权威的相关资讯及垃圾处理政策；垃圾回收处理商；全球可视化预测...
                    </p>
                    <a href="" class="a_about">More about us</a>
                </div>
                <div class="a_right">
                    <img class="a_bg" src="../../../static/img/index/about_bg.jpg" alt="">
                </div>
            </div>
        </div>

        <!-- 宣传视频 video -->
        <div class="v_con">
            <div class="v_section">
                <div class="v_title">
                    <h2>Small Animation</h2>
                    <p class="v_desc">垃圾分类 从我做起</p>
                </div>
                <div class="v_video">
                    <video controls name="media">
                        <source src="../../../static/video/b9a296fa-376c-11ea-ac79-02fd9f9a6e20.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>

        <!-- 新闻资讯 Latest News & Events -->
        <div class="n_con">
            <div class="n_section">
                <div class="n_title">
                    <h2>Latest News & Events</h2>
                    <p class="n_desc">最新新闻和事件</p>
                </div>
                <div class="n_wrap">
                    <div class="n_item" v-for="item in newList" :key="item.id">
                        <div class="n_cover">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="n_info">
                            <div class="n_tags">
                                <span v-for="(item,index) in item.tags" :key="index">{{item}}</span>
                            </div>
                            <a href="">
                                <h4 class="n_title">{{item.title}}</h4>
                            </a>
                            <p class="n_desc">{{item.desc}}</p>
                            <h6 class="n_date">{{item.date}}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            newList: [
                {
                    id: 1,
                    img: '/static/img/index/blog-1.jpg',
                    tags: ['新闻','指导手册'],
                    title: '生活垃圾分类指导手册',
                    desc: '生活垃圾分类关系到我们生活环境改善，关系垃圾能不能减量化、资源化、无害化处理，是衡量城市文明程度的标志，也是改善生活方式、提升生活品质。践行绿色发展理念、建设美丽泉城的必然选择...',
                    date: '2020-03-30'
                },
                {
                    id: 2,
                    img: '/static/img/index/blog-1.jpg',
                    tags: ['新闻','垃圾分类'],
                    title: '生活垃圾分类指导手册',
                    desc: '生活垃圾分类关系到我们生活环境改善，关系垃圾能不能减量化、资源化、无害化处理，是衡量城市文明程度的标志，也是改善生活方式、提升生活品质。践行绿色发展理念、建设美丽泉城的必然选择...',
                    date: '2020-03-30'
                },
                {
                    id: 3,
                    img: '/static/img/index/blog-1.jpg',
                    tags: ['新闻','垃圾分类'],
                    title: '生活垃圾分类指导手册',
                    desc: '生活垃圾分类关系到我们生活环境改善，关系垃圾能不能减量化、资源化、无害化处理，是衡量城市文明程度的标志，也是改善生活方式、提升生活品质。践行绿色发展理念、建设美丽泉城的必然选择...',
                    date: '2020-03-30'
                }
            ]
        };
    },
    components: {}
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    // height: 5000px;
    .banner{
        position: relative;
        width: 100%;
        height: 800px;
        overflow: hidden;
        background: #04091e;
        z-index: 1;
        .ban-bg{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 100%;
            height: 1000px;
            background: url('/static/img/index/banner_bg.jpg') no-repeat scroll center 0/cover;
            opacity: 0.5;
            z-index: -1;
        }
        .content{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 1170px;
            text-align: center;
            color: #fff;
            letter-spacing: 5px;
            h6{
                font-size: 16px;
                margin: 0 0 8px;
                line-height: 30px;
                text-transform: uppercase;
                letter-spacing: 5px;
                font-weight: 400;
            }
            h2{
                padding: 8px 0;
                margin: 0 0 8px;
                font-size: 60px;
                line-height: 60px;
                font-weight: 700;
                letter-spacing: 10px;
            }
            .desc{
                font-weight: 300;
                font-size: 16px;
                line-height: 24px;
                padding: 10px 0px 20px;
                margin-bottom: 30px;
            }
            a{
                display: inline-block;
                font-size: 14px;
                line-height: 30px;
                text-transform: uppercase;
                color: #fff;
                font-weight: 600;
                background: #f3c300;
                padding: 5px 30px;
                letter-spacing: 1.5px;
            }
        }
    }
    .g-con{
        width: 100%;
        padding: 88px 0 100px;
        background: #fff;
        .g-section{
            width: 1140px;
            padding: 0 15px;
            margin: 0 auto;
            .g-title{
                width: 100%;
                margin-bottom: 60px;
                text-align: center;
                h2{
                    color: #222222;
                    font-size: 36px;
                    line-height: 45px;
                    font-weight: 600;
                    font-family: "Poppins", sans-serif;
                    margin-bottom: 8px;
                }
                .g-desc{
                    width: 360px;
                    margin: 0 auto;
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                    color: #777;
                    line-height: 33px;
                    margin-top: 15px;
                    letter-spacing: 2px;
                    .line{
                        display: block;
                        width: 55px;
                        height: 2px;
                        margin-top: 16px;
                        background: #ccc;
                    }
                }
            }
            .g-class{
                display: flex;
                width: 1170px;
                flex-direction: row;
                align-content: space-around;
                margin: 0 auto;
                margin-left: -15px;;
                .g-class-item{
                    width: 25%;
                    height: 335px;
                    margin: 0 15px;
                    padding: 0 20px;
                    border-radius: 10px;
                    figure{
                        width: 160px;
                        height: 160px;
                        margin: 25px auto 2px;
                    }
                    .g-desc{
                        color: #fff;
                        text-align: center;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 25px;
                        text-indent: 1.5em;
                        opacity: .9;
                    }
                }
                .g-recycle{
                    background-color: #215287;
                }
                .g-wet{
                    background-color: #62423A;
                }
                .g-dry{
                    background-color: #2E2C2A;
                }
                .g-harmful{
                    background-color: #EA3E30;
                }
            }
        }
    }
    .b-con{
        position: relative;
        width: 100%;
        padding: 100px 0;
        z-index: 1;
        background: #04091e;
        overflow: hidden;
        .b-con-bg{
            background: url('/static/img/index/b-con-bg.jpg') no-repeat scroll center 0/cover;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 125%;
            bottom: 0;
            z-index: -1;
            transform: translateY(-14.8511px);
            opacity: 0.15;
        }
        .b-section{
            width: 1140px;
            padding: 0 15px;
            margin: 0 auto;
            .b-title{
                width: 100%;
                margin-bottom: 60px;
                text-align: center;
                h2{
                    color: #fff;
                    font-size: 36px;
                    line-height: 45px;
                    font-weight: 600;
                    font-family: "Poppins", sans-serif;
                    margin-bottom: 8px;
                }
                .b-desc{
                    width: 360px;
                    margin: 0 auto;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    color: #777;
                    line-height: 33px;
                    margin-top: 15px;
                    letter-spacing: 2px;
                }
            }
            .b-dh{
                display: flex;
                flex-wrap: wrap;
                margin-left: -15px;
                width: 1170px;
                .b-dh-item{
                    margin: 0 15px;
                    width: 40.4284191%;
                    border: 1px solid #777777;
                    border-radius: 10px;
                    background-color: rgba(249, 249, 255, 0.102);
                    padding: 31px 40px 37px;
                    color: #fff;
                    margin-bottom: 30px;
                    h4{
                        padding-bottom: 18px;
                        color: #fff;
                        font-size: 18px;
                        line-height: 38px;
                        font-weight: 600;
                        margin-bottom: 0px;
                    }
                    .b_item_desc{
                        font-size: 15px;
                        line-height: 28px;
                        margin-bottom: 0px;
                    }
                }
                .b-dh-item:nth-child(1){
                    width: 100%;
                }
            }
        }
    }
    .about_con{
        padding: 100px 0;
        .a_section{
            display: flex;
            align-items: center;
            width: 1170px;
            margin: 0 auto;
            .a_left{
                box-sizing: border-box;
                width: 50%;
                align-items: center;
                padding: 0 15px;
                .a_title{
                    font-size: 36px;
                    line-height: 50px;
                    font-weight: 600;
                    color: #222222;
                    letter-spacing: 5px;
                }
                h3{
                    font-size: 32px;
                    line-height: 42px;
                    font-weight: 600;
                    letter-spacing: 5px;
                    color: #222222;
                    margin-bottom: 10px;
                }
                .a_desc{
                    padding: 18px 0px 30px;
                    line-height: 28px;
                    font-size: 15px;
                    font-family: "Poppins", sans-serif;
                    font-weight: 300;
                    color: #777777;
                    padding-right: 50px;
                    margin-bottom: 20px;
                }
                .a_about{
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 30px;
                    background: #222222;
                    color: #fff;
                    text-transform: uppercase;
                    padding: 5px 29px;
                    border-radius: 0px;
                    position: relative;
                    z-index: 1;
                    -webkit-transition: all 0.3s linear;
                    -o-transition: all 0.3s linear;
                    transition: all 0.3s linear;
                    overflow: hidden;
                    border: 0px;
                    display: inline-block;
                    text-align: center;
                }
                .a_about:hover{
                    color: #fff;
                    background: #f8b100;
                }
            }
            .a_right{
                box-sizing: border-box;
                width: 50%;
                padding: 0 15px;
                .a_bg{
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    .v_con{
        padding: 88px 0;
        background: #f9f9ff;
        .v_section{
            width: 1140px;
            padding: 0 15px;
            margin: 0 auto;
            .v_title{
                width: 100%;
                margin-bottom: 60px;
                text-align: center;
                h2{
                    font-size: 36px;
                    line-height: 45px;
                    font-weight: 600;
                    color: #222222;
                    margin-bottom: 8px;
                }
                .v_desc{
                    margin: 0 auto;
                    font-size: 23px;
                    font-weight: bold;
                    text-align: center;
                    color: #777;
                    line-height: 33px;
                    letter-spacing: 2px;
                }
            }
            .v_video{
                // width: 850px;
                width: 1000PX;
                margin: 0 auto;
                
                video{
                    width: 100%;
                    border: none;
                    // border-radius: 20px;
                }
            }
        }
    }
    .n_con{
        padding: 88px 0;
        background: #fff;
        .n_section{
            width: 1140px;
            padding: 0 15px;
            margin: 0 auto;
            .n_title{
                width: 100%;
                margin-bottom: 60px;
                text-align: center;
                h2{
                    font-size: 36px;
                    line-height: 45px;
                    font-weight: 600;
                    color: #222222;
                    margin-bottom: 8px;
                    font-family: "Poppins", sans-serif;
                }
                .n_desc{
                    margin: 0 auto;
                    font-size: 23px;
                    font-weight: bold;
                    text-align: center;
                    color: #777;
                    line-height: 33px;
                    letter-spacing: 2px;
                }
            }
            .n_wrap{
                display: flex;
                width: 1170px;
                margin-left: -15px;
                .n_item{
                    width: 33.333%;
                    padding: 0 15px;
                    .n_cover{
                        width: 100%;
                        height: 260px;
                        overflow: hidden;
                        img{
                            transition: all 0.7s linear;
                        }

                    }
                    .n_cover:hover img{
                        transform: scale(1.23) rotate(10deg);
                    }
                    .n_info{
                        padding-top: 30px;
                        .n_tags{
                            width: 100%;
                            height: 31px;
                            span{
                                font-size: 12px;
                                font-weight: 500;
                                line-height: 20px;
                                border: 1px solid #eeeeee;
                                display: inline-block;
                                padding: 2px 18px;
                                text-align: center;
                                color: #222;
                                margin-right: 10px;
                                transition: all 0.3s linear;
                                cursor: pointer;
                                // transform: translateX(0);
                            }
                            span:hover{
                                color: #000;
                                background: #f3c300;
                                // transform: translateY(-5%);
                            }
                        }
                        a{
                            .n_title{
                                line-height: 24px;
                                padding: 12px 0px 15px;
                                font-size: 18px;
                                font-weight: 550;
                                color: #222222;
                                margin-bottom: 0px;
                                transition: all 0.3s linear;
                                text-align: start;
                            }
                            .n_title:hover{
                                color: #52c5fd;
                            }
                        }
                        .n_desc{
                            margin-bottom: 1rem;
                            line-height: 24px;
                            font-size: 14px;
                            font-family: "Poppins", sans-serif;
                            font-weight: 300;
                            color: #777777;
                        }
                        .n_date{
                            font-size: 13px;
                            line-height: 24px;
                            font-weight: 400;
                            color: #222222;
                            margin-bottom: 0.5rem;
                            font-family: "Poppins", sans-serif;
                        }
                    }
                }
            }
        }
    }
}
</style>
