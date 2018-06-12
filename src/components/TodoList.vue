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
            <router-link to="/add_item" class="add-item">
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </router-link>
        </el-row>
        <ul class="todo-list">
            <li v-for="item in list">
                <div class="color-tag" :class="'bg-'+item.tag"></div>
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
        
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data () {
        return {
            list: []
        }
    },
    methods: {
        getList: function() {
            this.list = this.$store.state.list;
            console.log(this.list);
        }
    },
    mounted: function() {
        this.getList();
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
    position: relative;
    padding: 30px 195px 30px 80px;
    background-color: #FFF;
    color: @font-color;
    font-weight: bold;
}
.add-item {
    position: absolute;
    right: 40px;
    top: 50%;
    margin-top: -40px;
    height: 80px;
    line-height: 80px;
    color: @action-color;

    button {
        font-size: 36px;
        background-color: @action-color;
        border-color: @action-color;
    }
}
.day {
    height: 75px;
    line-height: 75px;
    font-size: 64px; /*px*/
}
.year-month {
    margin-left: 10px;
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
    text-align: center;
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
</style>
