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
    </ul>
    <ul>
      建个简单后端试试=>
      <el-button @click="getHello" size="mini" round>test</el-button>
      <el-button @click="resetHello" size="mini" round>reset</el-button>
      {{ responseMessage }}
    </ul>
    <ul>
      后端和数据库建立连接，前端调用数据库表格：
      <el-button @click="getTableData" size="mini" round>test</el-button>
      <el-button @click="resetTableData" size="mini" round>reset</el-button>
      <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
    </el-table>
    </ul>
    <ul>
      ...
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: "HelloWorld",
    data() {
      return {
        responseMessage: 'null',
        tableData: []
      };
    },
    props: {
        msg: String,
    },
    methods: {
      getHello() {
        axios.get('http://localhost:8080/hello')
          .then(response => {
            this.responseMessage = response.data;
          })
          .catch(error => {
            this.responseMessage = error;
            console.error('Error fetching hello:', error);
          });
      },
      resetHello() {
        this.responseMessage = 'null';
      },
      getTableData() {
        axios.get('http://localhost:8080/getUser')
          .then(response => {
            this.tableData = this.parseData(response.data);
          })
          .catch(error => {
            console.error('Error fetching hello:', error);
          });
      },
      resetTableData() {
        this.tableData = [];
      },
      parseData(data) {
        return data.map(item => {
          return {
            id: item[0],
            name: item[1],
            email: item[2]
          };
        });
      }
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
