<template>
<div class="infinite-list-wrapper" style="height: 100%; overflow:auto">
    <ul
    class="list"
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled">
    <li v-for="i in count" class="list-item" :key="i">
        <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
            <el-avatar :size="small" :src="circleUrl"></el-avatar>
            <span class="card-head">卡片{{ i }}</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 2" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
        </el-card>
    </li>
    </ul>
    <p v-if="loading">
    <i class="el-icon-loading" style="font-size: 20px;"></i>Loading...
    <el-skeleton style="width: 240px; height: 240px;" animated />
    </p>
    <p v-if="noMore">没有更多了</p>
    <template>
        <el-backtop target=".infinite-list-wrapper"></el-backtop>
    </template>
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
            loading: false,
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
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

<style lang="less" scoped>
html,body,#app {
margin: 0;
padding: 0;
height: 100%;
}
.text {
font-size: 14px;
}
.item {
margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
display: flex;
align-items: center;
content: "";
}
.clearfix:after {
clear: both
}
.box-card {
padding: 20px;
margin-bottom: 20px;
width: 600px;
}
.card-head {
text-align: center;
}
.list-item {
list-style: none;
}
</style>
