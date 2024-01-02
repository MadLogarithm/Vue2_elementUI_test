<template>
<div class="intro" style="height: 100%; overflow:auto">
    <el-container class="home-container">
        <el-header>1</el-header>
        <el-main style="height: 1200px">1</el-main>
    </el-container>
    {{ showBackTop }}
    <el-backtop target=".intro" v-if="showBackTop" :visibility="100"></el-backtop>
</div>
</template>

<script>
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
      } else {
        this.showBackTop = false;
      }
    }
  }
}
</script>

<style lang="less" scoped>
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