<template>
<div id="app">
    <el-container class="home-container" >
        <el-header>main</el-header>
        <el-container style="height:648px">
            <el-aside width="250px">
            <!-- <div class="toggle-botton" @click="toggleCollapse">|||</div> -->
                <el-menu background-color=black text-color="#fff" active-text-color="#409EFF" :router="true">
                    <el-menu-item index="/home">home</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <span>二</span>
                        </template>
                        <el-menu-item>1</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <span>三</span>
                        </template>
                        <el-menu-item index="/list">1</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <span>四</span>
                        </template>
                        <el-menu-item>1</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
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
.el-header {
background-color: #2c3e50;
color: white;
}
.el-main {
background-color: aliceblue;
color: black;
}
.el-aside {
background-color: black;
color: white;
text-align: center;
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
