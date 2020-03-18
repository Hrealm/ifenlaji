<template>
    <div class="container">
        <div class="banner">
            <div class="ban-bg"></div>
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
    height: 5000px;
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
    }
}
</style>
