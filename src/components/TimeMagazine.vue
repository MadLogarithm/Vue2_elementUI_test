<template>
<div class="time-magazine">
    <el-container>
        <el-header class="transparent-navbar">
            <el-menu mode="horizontal" class="navbar" background-color="transparent" text-color="#000" active-text-color="#ffd04b">
            <el-menu-item index="1">Home</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Sections</template>
                <el-menu-item index="2-1">Politics</el-menu-item>
                <el-menu-item index="2-2">Business</el-menu-item>
                <el-menu-item index="2-3">Entertainment</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">About</el-menu-item>
            </el-menu>
        </el-header>
    <el-main>
        <!-- 在这里放置文章内容 -->
        <div class="article-content">
        <p>这里是文章的内容...</p>
        </div>
    </el-main>
    <el-footer>
        <!-- 在这里放置页脚内容 -->
        <p>© 2023 Time Magazine. All rights reserved.</p>
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
    };
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
