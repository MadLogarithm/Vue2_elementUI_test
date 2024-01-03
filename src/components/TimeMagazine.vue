<template>
<div class="time-magazine">
    <el-container>
        <el-header class="transparent-navbar">
            <el-menu mode="horizontal" class="navbar" :style="{ 'background-color': menuTransparentNavbar ? 'transparent' : 'white' }" text-color="#000" active-text-color="#ffd04b" :router="true">
            <el-menu-item index="/home">Home</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Sections</template>
                <el-menu-item index="2-1">Politics</el-menu-item>
                <el-menu-item index="2-2">Business</el-menu-item>
                <el-menu-item index="2-3">Entertainment</el-menu-item>
                <el-menu-item index="/list">List</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">About</el-menu-item>
            </el-menu>
        </el-header>
    <el-main style="height: 1200px;">
        <!-- 在这里放置文章内容 -->
        <div class="article-content">
        <p>这里是文章的内容...</p>
        <p>{{ menuTransparentNavbar }}</p>
        <p>{{ menuTransparentNavbar }}</p>
        <p>{{ menuTransparentNavbar }}</p>
        <p>{{ menuTransparentNavbar }}</p>
        <p>{{ menuTransparentNavbar }}</p>
        <p>{{ menuTransparentNavbar }}</p>
        <p>{{ menuTransparentNavbar }}</p>
        <p>{{ menuTransparentNavbar }}</p>
        <p>{{ menuTransparentNavbar }}</p>
        </div>
        <el-backtop :bottom="50" :right="50"></el-backtop>
    </el-main>
    <el-footer>
        <!-- 在这里放置页脚内容 -->
        <p>© 2023 Logar. All rights reserved.</p>
    </el-footer>
    </el-container>
</div>
</template>

<script>
export default {
name: 'TimeMagazine',
data() {
    return {
    // 在这里添加页面数据
        menuTransparentNavbar: true
    };
},
mounted() {
     // 添加滚动事件监听器来控制导航栏透明度
    window.addEventListener('scroll', this.handleScroll);
},
beforeDestroy() {
    // 在组件销毁前移除滚动事件监听器，以避免内存泄漏
    window.removeEventListener('scroll', this.handleScroll);
},
methods: {
    // 根据滚动位置控制导航栏透明度
    handleScroll() {
        if (window.scrollY > 100) {
            this.menuTransparentNavbar = false;
        }
        else {
            this.menuTransparentNavbar = true;
        }
    }
}
};
</script>

<style>
/* 在这里添加样式 */
.time-magazine {
height: 100vh;
display: flex;
flex-direction: column;
}
.transparent-navbar {
position: fixed;
top: 0;
width: 100%;
z-index: 1000;
background-color: transparent; /* 将悬浮顶栏的背景色设为透明 */
}
.article-content {
padding: 20px;
}
.navbar {
position: fixed;
top: 0;
width: 100%;
z-index: 1000;
}
</style>
