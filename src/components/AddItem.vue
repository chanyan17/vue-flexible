<template>
    <div class="container">
        <div class="header"><i class="el-icon-edit icon"></i> 添加待办事项</div>
        <div class="main">
            <div class="row">
                <div class="title">
                    <div class="tag bg-red"></div>
                    <span>时间</span>
                </div>
                <div class="control">
                    <el-input v-model="time" placeholder="请输入事项"></el-input>
                </div>
            </div>
            <div class="row">
                <div class="title">
                    <div class="tag bg-yellow"></div>
                    <span>地点</span>
                </div>
                <div class="control">
                    <el-input v-model="location" placeholder="请输入事项"></el-input>
                </div>
            </div>
            <div class="row">
                <div class="title">
                    <div class="tag bg-green"></div>
                    <span>事项</span>
                </div>
                <div class="control">
                    <el-input v-model="content" placeholder="请输入事项"></el-input>
                </div>
            </div>
            <div class="action">
                <div class="add" v-on:click="addItem">添加</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time: '',
            location: '',
            content: ''
        };
    },
    methods: {
        addItem: function() {
            this.$store.commit('addItem', {
                time: this.time,
                location: this.location,
                content: this.content
            });
            this.$router.push('/');
        }
    }
};
</script>
<style>
.main .el-input__inner {
    height: 80px;
    font-size: 36px;
     border-radius: 10px; /*no*/
}
</style>
<style scoped lang="less">
.container {
    padding: 30px;
    color: @font-color;
}
.header {
    background-color: #FFF;
    height: 80px;
    line-height: 80px;
    text-align: left;
    font-size: 48px;

    .icon {
        color: @action-color;
    }
}
.main {
    margin-top: 30px;
    .row {
        margin: 20px 0px;
    }
    .title {
        position: relative;
        padding-left: 26px;
        margin: 10px 0px;
        height: 50px;
        line-height: 50px;
        font-size: 36px;
    }
    .tag {
        position: absolute;
        left: 0;
        top: 0;
        width: 10px;
        height: 100%;
        background-color: #999;
    }
    .action {
        margin-top: 30px;
        .add {
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 36px;
            color: #FFF;
            background-color: @action-color;
            border-radius: 10px; /*no*/
        }
    }
}
</style>
