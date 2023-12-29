<template>
<div id="app">
    <el-container class="home-container">
        <el-header>main</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu background-color="black"
                        text-color="white"
                        active-text-color="#409EFF"
                        :router="true"
                        >
                    <el-menu-item index="/home">
                        <template slot="title">
                            <i class="el-icon-s-home"></i>
                            <span>Home</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item>1</el-menu-item>
                </el-menu>
            </el-aside>
        </el-container>
    </el-container>
</div>
</template>

<script>
export default {
    methods: {},
    data() {
        return {
            value: true,
            isCollapse: false,
            count: 4,
            loading: false
        };
    }
}
</script>

<style>
.home-container {
flex-wrap: wrap;
height: 100%;
}
.el-header {
text-align: center;
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
</style>