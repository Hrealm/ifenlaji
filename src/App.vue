<template>
    <div id="app">
		<!-- 导航 -->
		<header>
            <div class="banner"></div>
            <div class="nav">

            </div>
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
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}
header{
    width: 100%;
    
    .banner{
        width: 100%;
        height: 500px;
        background: url('/static/img/banner.jpg') no-repeat;
    }
}

</style>
