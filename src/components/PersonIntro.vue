<template>
<div class="intro" style="height: 100%; overflow:auto;">
    <el-container class="home-container">
    <el-header style="position: relative;">
        <RouterLink :to="{path: '/home'}" style="position: absolute; left: 10px; top: 10px;">
            <el-button type="text" index="/home" style="color: aliceblue;">Home</el-button>
        </RouterLink>
        <div style="text-align: center; top: 10px;">main</div>
    </el-header>
    <el-main style="height: 1200px; display: flex;">1</el-main>
    </el-container>
    {{ showBackTop }}
    <el-backtop target=".intro" v-if="showBackTop" :visibility="100"></el-backtop>
</div>
</template>
  
<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            showBackTop: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 100) {
                this.showBackTop = true;
            }
            else {
                this.showBackTop = false;
            }
        }
    },
    components: { RouterLink }
}
</script>

<style lang="less" scoped>
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
text-align: left;
    .el-menu {
        border-right: 0px;
    }
}
html,body,#app {
margin: 0;
padding: 0;
height: 100%;
}
</style>