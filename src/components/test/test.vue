<template>
    <div class="container">
        <!-- banner -->
        <div class="banner">
            <div class="ban_bg"></div>
        </div>
        <!-- test content -->
        <div class="test_con">
            <!-- 答题卡 -->
            <div class="answerCard">
                <h2 class="card-title">答题卡</h2>
                <ul class="answer-list">
                    <li class="item" v-for="(q, index) in forms" :key="index">
                        
                     <!-- <ui-raised-button class="round-btn unknown"
                                      :class="{finish: isDone(q), current: index === formIndex}"
                                      :label="'' + (index + 1)"
                                      @click="selectIndex(index)" /> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formIndex: 0,
            forms: [
                {
                    id: '0',
                    type: 'single',
                    content: '水果',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 2,
                    userAnswer: null
                },
                {
                    id: '1',
                    type: 'single',
                    content: '电池',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 1,
                    userAnswer: null
                },
                {
                    id: '2',
                    type: 'single',
                    content: '口罩',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 3,
                    userAnswer: null
                },
                {
                    id: '3',
                    type: 'single',
                    content: '头发',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 3,
                    userAnswer: null
                },
                {
                    id: '4',
                    type: 'single',
                    content: '指甲',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 3,
                    userAnswer: null
                },
                {
                    id: '5',
                    type: 'single',
                    content: '笔记本电脑',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 0,
                    userAnswer: null
                }
            ]
        }
    },
    components: {},
    methods: {
        isDone(form) {
            if (form.type === 'single') {
                return form.userAnswer || form.userAnswer === 0
            }
            // if (form.type === 'multiple') {
            //     return form.userAnswer && form.userAnswer.length
            // }
            // if (form.type === 'aq') {
            //     return form.userAnswer
            // }
            // if (form.type === 'fill') {
            //     let answer = this.getFillUserAnswer(form)
            //     for (let item of answer) {
            //         if (!item) {
            //             return false
            //         }
            //     }
            //     return true
            // }
            // if (form.type === 'judgment') {
            //     return form.userAnswer === true || form.userAnswer === false
            // }
            return false
        }
    }
}
</script>

<style lang="scss" scoped>
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
            background: url('/static/img/test/test-banner.png') no-repeat;
            background-position: center top;
            background-size: 100%;
        }
    }
    .test_con{
        width: 1110px;
        padding: 60px 15px;
        margin: 0 auto;
        .answerCard{
            padding: 16px;
            margin-bottom: 16px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);
            .card-title{
                padding: 0;
                margin: 0;
                font-weight: 400;
                font-size: 18px;
                margin-bottom: 16px;
            }
        }
    }
}
</style>