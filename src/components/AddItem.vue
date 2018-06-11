<template>
    <div class="container">
        <div class="header">添加待办事项</div>
        <div class="main">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="title">时间</div>
                </el-col>
                <el-col :span="16" class="grid-content">
                    <div class="block">
                        <el-date-picker
                        v-model="time"
                        type="datetime"
                        placeholder="选择日期时间"
                        default-time="12:00:00">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="title">地点</div>
                </el-col>
                <el-col :span="16" class="grid-content">
                    <el-input v-model="location" placeholder="请输入地点"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="title">待办事项</div>
                </el-col>
                <el-col :span="16" class="grid-content">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入事项"
                        v-model="content">
                    </el-input>
                </el-col>
            </el-row>
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
    }
};
</script>
<style scoped lang="less">
.container {
    padding: 30px;
    color: @font-color;
}
.header {
    background-color: #FFF;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 60px;
}
.main {
    padding: 30px;
    font-size: 40px;
}
.title {
    text-align: right;
}
.grid-content {
    min-height: 100px;
}
</style>
