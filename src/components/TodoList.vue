<template>
    <div class="wrapper">
        <el-row class="date-head">
            <el-col :span="12">
                <div class="ib vam day">12</div>
                <div class="ib vam year-month">
                    <span class="month">MAR</span>
                    <span class="year">2018</span>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="week">TUESDAY</div>
            </el-col>
        </el-row>
        <ul class="todo-list">
            <li v-for="item in data">
                <div class="color-tag" :class="'tag-'+item.tag"></div>
                <div class="content">
                    <div class="text">{{item.content}}</div>
                    <el-row class="info">
                        <el-col :span="12">
                            <div class="time"><i class="el-icon-time"></i> {{item.time}}</div>
                        </el-col>
                        <el-col :span="12">
                            <div class="location"><i class="el-icon-location-outline"></i> {{item.location}}</div>
                        </el-col>
                    </el-row>
                    <div class="icon">
                        <i class="el-icon-success"></i>
                    </div>
                </div>
            </li>
        </ul>
        <div class="add-item">
            <span><i class="el-icon-circle-plus"></i></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data () {
        return {
            data: [
                {
                    id: 1,
                    content: '与好朋友去吃自助餐',
                    time: '17:30',
                    location: '正佳广场',
                    tag: 'red'
                },
                {
                    id: 1,
                    content: '与好朋友去吃自助餐',
                    time: '17:30',
                    location: '正佳广场',
                    tag: 'green'
                },
                {
                    id: 1,
                    content: '与好朋友去吃自助餐',
                    time: '17:30',
                    location: '正佳广场',
                    tag: 'red'
                },
                {
                    id: 1,
                    content: '与好朋友去吃自助餐',
                    time: '17:30',
                    location: '正佳广场',
                    tag: 'yellow'
                },
                {
                    id: 1,
                    content: '与好朋友去吃自助餐',
                    time: '17:30',
                    location: '正佳广场',
                    tag: 'green'
                },
                {
                    id: 1,
                    content: '与好朋友去吃自助餐',
                    time: '17:30',
                    location: '正佳广场',
                    tag: 'red'
                },
                {
                    id: 1,
                    content: '与好朋友去吃自助餐',
                    time: '17:30',
                    location: '正佳广场',
                    tag: 'green'
                },
                {
                    id: 1,
                    content: '与好朋友去吃自助餐',
                    time: '17:30',
                    location: '正佳广场',
                    tag: 'yellow'
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrapper {
    position: relative;
    box-sizing: border-box;
    min-height: 100%;
    background-color: #F7F7F7;
}
.date-head {
    padding: 30px 80px;
    background-color: #FFF;
    color: @font-color;
    font-weight: bold;
}
.day {
    height: 75px;
    line-height: 75px;
    font-size: 64px; /*px*/
}
.year-month {
    margin-left: 20px;
    width: 75px;
    font-size: 30px; /*px*/
}
.year, .month {
    height: 37.5px;
    line-height: 37.5px;
}
.week {
    height: 75px;
    line-height: 75px;
    font-size: 32px; /*px*/
    text-align: right;
}
.todo-list {
    padding: 0px 30px;

    li {
        position: relative;
        margin: 30px 0px;
        padding-left: 30px;
        border-radius: 10px; /*no*/
        overflow: hidden;
    }

    .color-tag {
        position: absolute;
        left: 0;
        top: 0;
        width: 30px;
        height: 100%;
        background-color: #999;
    }
    
    .tag-red {
        background-color: #f25f5c;
    }
    .tag-yellow {
        background-color: #ffe066;
    }
    .tag-green {
        background-color: #70c1b3;
    }

    .content {
        position: relative;
        padding: 20px 75px 20px 20px;
        background-color: #FFF;
        line-height: 50px;
        font-size: 36px;/*px*/
        color: @font-color;

        .info {
            font-size: 24px;
        }

        .icon {
            position: absolute;
            right: 20px;
            top: 0;
            height: 100%;
            width: 36px;

            i {
                position: absolute;
                right: 0;
                top: 0;
                left: 0;
                bottom: 0;
                margin: auto;
                height: 40px;
                font-size: 40px;
            }
        }
    }
}
.add-item {
    position: fixed;
    bottom: 0px;
    width: 100%;
    text-align: center;
    font-size: 120px;
    color: @action-color;
}
</style>
