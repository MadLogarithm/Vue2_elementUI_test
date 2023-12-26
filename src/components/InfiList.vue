<template>
<div class="infinite-list-wrapper" style="height: 100%; overflow:auto">
    <ul
    class="list"
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled">
    <li v-for="i in count" class="list-item" :key="i">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>卡片{{ i }}</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 2" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
        </el-card>
    </li>
    </ul>
    <p v-if="loading">
    <i class="el-icon-loading" style="font-size: 20px;"></i>
    <el-skeleton :rows="1" animated />
    <el-skeleton :rows="1" animated />
    </p>
    <p v-if="noMore">没有更多了</p>
</div>
</template>

<script>
export default {
    methods: {
    toggleCollapse() {
        this.isCollapse = !this.isCollapse
    },
    load() {
        this.loading = true
        setTimeout(() => {
        this.count += 2
        this.loading = false
        }, 2000)
    }
    },
    data() {
        return {
            value: true,
            isCollapse: false,
            count: 4,
            loading: false
        };
    },
    computed: {
    noMore() {
        return this.count >= 20
    },
    disabled() {
        return this.loading || this.noMore
    }
    }
}
</script>

<style>
.home-container {
flex-wrap: wrap;
height: 100%;
}
html,body,#app {
margin: 0;
padding: 0;
height: 100%;
}
.toggle-botton {
background-color: black;
color: white;
font-size: 10px;
line-height: 24px;
text-align: center;
letter-spacing: 0.2em;
cursor: pointer;  
}
.text {
font-size: 14px;
}
.item {
margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
display: table;
content: "";
}
.clearfix:after {
clear: both
}
.box-card {
width: 480px;
}
</style>
