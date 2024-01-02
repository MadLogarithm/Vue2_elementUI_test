<template>
  <div class="hello">
    <h3>todolist</h3>
    <ul>
      设置InfiList.vue中box-card内容
    </ul>
    <ul>
      页面的el-backtop总出bug，并且不太会解决
    </ul>
    <ul>
      模仿
      <a href="https://time.com/6342806/person-of-the-year-2023-taylor-swift/" target="_blank">2023时代年度人物</a>
      搭一个试试=>
      <RouterLink :to="{path:'/time_magazine'}">Click here</RouterLink>
      。
    </ul>
    <ul>
      ...
    </ul>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    components: { RouterLink }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>  
h3 {
  margin: 0 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 10px 20px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
