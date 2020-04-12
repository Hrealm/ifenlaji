<template>
    <div class="container">
        <!-- banner -->
        <div class="banner">
            <div class="ban_bg"></div>
        </div>
        <!-- 答题内容 -->
        <div class="test_con" v-if="state === 'start'">
            <!-- 答题卡 -->
            <div class="answerCard">
                <h2 class="card-title">答题卡</h2>
                <ul class="answer-list clearFix">
                    <li class="item" v-for="(q, index) in forms" :key="index">
                        <button class="round-btn unknown" :class="{finish: isDone(q), current: index === formIndex}" @click="selectIndex(index)">
                            <span class="btn_txt">{{''+(index + 1)}}</span>
                        </button>
                    </li>
                </ul>
            </div>
            <!-- 答题区 -->
            <div class="exam_box">
                <em class="ex_type">{{ type }}</em>
                <h3 class="ex_title">{{ form.content }}</h3>
                <ul class="ex_options">
                    <li class="ex_item" v-for="(option, index) in form.options"
                        :key="index"
                        :class="{selected: isSelected(form, index)}"
                        @click="doOption(index)">
                        {{ option }}
                    </li>
                </ul>
                <div class="btn_row">
                    <el-button type="plain" size="small" @click="prevForm" :disabled="formIndex === 0">上一题</el-button>
                    <el-button type="primary" size="small" @click="nextForm" :disabled="formIndex === forms.length - 1">下一题</el-button>
                    <el-button type="success" size="small" @click="commit">交 卷</el-button>
                    <el-button type="plain" size="small" icon="el-icon-refresh" @click="restart" >刷新题库</el-button>
                </div>
            </div>
        </div>

        <!-- 成绩单 -->
        <div class="transcript" v-if="state === 'end'">
            <div class="ts_wrap">
                <h2 class="card-title">提交结果</h2>
                <div class="result">本次测试分数为：{{ score }} 分</div>
                <ul class="answer-list">
                    <li class="ts_item"
                        v-for="(q, index) in forms" :key="index"
                        :class="{success: isSuccess(q)}">
                        <h3>问题 {{index+1}}：{{ q.content }}</h3>
                        <h3>答案：{{ numberToLetter(q.answer) }}. {{ q.options[q.answer] }}</h3>
                        <div v-if="q.type === 'single'">
                            <div v-if="q.userAnswer || q.userAnswer === 0">
                                <div> 你的回答：{{ numberToLetter(q.userAnswer) }}. {{ q.options[q.userAnswer] }}</div>
                            </div>
                            <div v-else class="y_an">你还没有回答</div>
                        </div>
                        <div class="ts_icon">
                            <i :class="isSuccess(q) ? 'el-icon-circle-check ts_true':'el-icon-circle-close ts_false'"></i>
                        </div>
                    </li>
                </ul>
                <div class="res">
                    <el-button type="primary" icon="el-icon-thumb" @click="restart">再来一次</el-button>
                </div>
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
                },
                {
                    id: '6',
                    type: 'single',
                    content: '花生壳',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 0,
                    userAnswer: null
                },
                {
                    id: '7',
                    type: 'single',
                    content: '枣核',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 0,
                    userAnswer: null
                },
                {
                    id: '8',
                    type: 'single',
                    content: '打火机',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 0,
                    userAnswer: null
                },
                {
                    id: '9',
                    type: 'single',
                    content: '茶叶',
                    options: ['可回收物', '有害垃圾', '湿垃圾', '干垃圾'],
                    answer: 0,
                    userAnswer: null
                }
            ],
            form: {},
            state: 'start', // 'start', 'end',
            com_re: ['手机','塑料','牛奶盒','塑料瓶','易拉罐','报纸','玻璃瓶','纸','玻璃','啤酒瓶','衣服','养乐多瓶','塑料盒','电脑','废纸','鼠标','饮料瓶','纸箱','酒瓶','玻璃杯','纸盒','纸张','洗发水瓶','旧衣服','书本','旧鞋子','笔记本电脑','玩具','A4纸','矿泉水瓶','电线','香水瓶','纸板箱','泡沫','纸袋','酸奶盒'],
            com_harmful:['杀虫喷雾','电池','除草剂罐','废电池','油漆桶','温度计','口服液瓶','杀虫剂','药品铝塑板','灯泡','胶囊药片底板','过期药品','油漆','药瓶','空药瓶','LED灯','x光片','指甲油','口服液瓶子','充电电池','药品','荧光灯','废药品','节能灯','杀虫剂罐','干电池','电池','灯管','底片','农药瓶','手机充电电池','药片','蓄电池'],
            com_wet: ['小龙虾','毛豆壳','苹果','瓜子壳','玉米','蛋壳','米','香蕉皮','鸡蛋壳','花生壳','桃核','西瓜皮','瓜子','鸡骨头','枣核','蟹壳','香蕉','玉米棒','鱼骨','西瓜','鱼骨头','树叶','苹果核','玉米芯','虾壳','鱼','果皮','果核','花甲','栗子壳','茶叶','螃蟹壳'],
            com_dry: ['榴莲壳','陶瓷花瓶','塑料袋','玉米叶','口罩','骨头','纸巾','头发','玉米皮','草席','贝壳','被污染的旧衣服','牙刷','卫生纸','烟头','湿纸巾','口红','餐巾纸','猫砂','打火机','指甲','口香糖','过期化妆品','大骨头','饼干包装袋','旧镜子','奶茶杯','陶瓷','回形针','面膜','眼镜']
        }
    },
    created(){
        this.form = this.forms[this.formIndex];
    },
    computed: {
        type() {
            let types = {
                single: '单选题',
                multiple: '多选题',
                fill: '填空题',
                aq: '问答题',
                judgment: '判断题',
                join: '连线题',
                code: '编程题' // Attachment
            }
            return types[this.form.type]
        },
        score() {
            let successCount = 0
            for (let form of this.forms) {
                if (form.userAnswer === form.answer) {
                    successCount++
                }
            }
            return parseInt(100 * successCount / this.forms.length)
            // return 10
        },
    },
    components: {},
    methods: {
        isDone(form) {
            if (form.type === 'single') {
                return form.userAnswer || form.userAnswer === 0
            }
            return false
        },
        selectIndex(index) {
            this.formIndex = index
            this.form = this.forms[this.formIndex]
        },
        isSelected(form, index) {
            if (form.type === 'single') {
                return form.userAnswer === index
            }
            return false
        },
        doOption(index){
            // 用户答案传入forms 题库
            this.forms[this.formIndex].userAnswer = index
            // console.log(this.forms.userAnswer,this.forms);
        },
        prevForm() {
            this.formIndex--
            this.form = this.forms[this.formIndex]
        },
        nextForm() {
            this.formIndex++
            this.form = this.forms[this.formIndex]
        },
        commit(){
            this.$confirm('交卷后将不可在修改, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.state = 'end'
                // console.log(this.forms);
                
                this.$message({
                    type: 'success',
                    message: '提交成功'
                });
            }).catch(() => {
                // this.$message({
                //     type: 'info',
                //     message: '已取消'
                // });          
            });
        },
        isSuccess(form) {
            // console.log('判断')
            if (form.type === 'single') {
                // console.log('单选题' + form.userAnswer === form.answer)
                return form.userAnswer === form.answer
            }
            return false
        },
        numberToLetter(number) {
            let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            return arr[number]
        },
        restart(){
            // 清空回答-并获取随机题库
            for (let form of this.forms) {
                form.userAnswer = null
                // 获取垃圾类别随机数
                let r_category = Math.floor(Math.random() * 4);
                // 根据随机数获取相应垃圾作为题目
                switch(r_category){
                    case 0 :
                        form.answer = 0;
                        form.content = this.com_re[Math.floor(Math.random() * this.com_re.length)];
                        break;
                    case 1 :
                        form.answer = 1;
                        form.content = this.com_harmful[Math.floor(Math.random() * this.com_harmful.length)];
                        break;
                    case 2 :
                        form.answer = 2;
                        form.content = this.com_wet[Math.floor(Math.random() * this.com_wet.length)];
                        break;
                    case 3 :
                        form.answer = 3;
                        form.content = this.com_dry[Math.floor(Math.random() * this.com_dry.length)];
                        break;
                    default :
                        break;
                }
            }
            this.formIndex = 0
            this.form = this.forms[this.formIndex]
            this.state = 'start'      
            // console.log(this.forms);
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
            .answer-list{
                .item{
                    float: left;
                    margin-right: 16px;
                    margin-bottom: 16px;
                    .round-btn{
                        width: 48px;
                        height: 48px;
                        min-width: inherit;
                        border-radius: 50%;
                        border: none;
                        cursor: pointer;
                        background-color: #fff;
                        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
                        .btn_txt{
                            font-size: 15px;
                        }
                    }
                    .round-btn:hover{
                        background-color: #E5E5E5;
                    }
                    .round-btn:focus{
                        outline:none;
                    }
                    .current{
                        border: 1px solid #55a532;
                        // border: 1px solid #000;
                    }
                    .finish{
                        color: #fff;
                        // background-color: #55a532;
                        background-color: #67C23A;
                    }
                    .finish:hover{
                        // background-color: #55a532;
                        background-color: #67C23A;
                        opacity: .7;
                    }
                }
            }
        }
        .exam_box{
            padding: 16px;
            margin-bottom: 24px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);
            .ex_type{
                padding: 4px 7px;
                line-height: 1.5;
                font-size: 12px;
                font-style: normal;
                background-color: #bdbdbd;
                color: #fff;
                border-radius: 3px;
                overflow: hidden;
            }
            .ex_title{
                font-size: 30px;
                margin: 16px 0;
                padding-left: 8px;
                font-weight: inherit;
            }
            .ex_options{
                .ex_item{
                    padding: 16px;
                    margin-bottom: 8px;
                    cursor: pointer;
                    border: 1px solid #f1f1f1;
                }
                .selected{
                    border: 1px solid #55a532;
                }
            }
            .btn_row{
                margin: 20px 0 5px;
            }
        }
    }
    .transcript{
        width: 1110px;
        padding: 60px 15px;
        margin: 0 auto;
        .ts_wrap{
            padding: 16px 26px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);
            .card-title{
                font-size: 26px;
                margin: 10px 0;
                // padding-left: 10px;
                font-weight: inherit;
                text-align: center;
            }
            .result{
                // padding-left: 10px;
                margin: 20px;
                text-align: center;
            }
            .answer-list{
                .ts_item{
                    position: relative;
                    padding: 16px;
                    padding-left: 25px;
                    line-height: 32px;
                    margin-bottom: 16px;
                    border-radius: 8px;
                    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.07647), 0 1px 4px rgba(0, 0, 0, 0.117647);
                    h3{
                        font-size: 18px;
                        font-weight: inherit;
                    }
                    .y_an{
                        font-size: 18px;
                    }
                    .ts_icon{
                        position:absolute;
                        top: 50%;
                        right:3%;
                        transform: translateY(-50%);
                        text-align: center;
                        i{
                            font-size: 52px;
                            margin-top: 5px;
                        }
                        .ts_true{
                            color: #55a532;
                            // background-color: #55a532;
                            // color: #fff;
                            // border-radius: 50%;
                        }
                        .ts_false{
                            color: red;
                            // background-color: red;
                            // color: #fff;
                            // border-radius: 50%;
                        }
                    }
                }
            }
            .res{
                margin: 25px 0 10px;
                text-align: center;
            }
        }
    }
}
</style>