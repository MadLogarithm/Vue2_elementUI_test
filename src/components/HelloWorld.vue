<template>
  <div class="hello">
    <h3>todolist</h3>
    <ul>
      设置InfiList.vue中box-card内容
    </ul>
    <ul>
      ...
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
