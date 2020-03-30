<template>
    <div class="container">
        <div class="banner">
            <div class="ban_bg"></div>
            <div class="searchInput">
                <input class="input" type="text" placeholder="搜索垃圾相关分类" @keydown="keyDown()">
                <button class="searchBtn" @click="searchSong()"><i class="icon-sousuo"></i></button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    min-height: 2000px;
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
}
</style>
