<template>
  <div id="app">
    <el-button>默认按钮</el-button>
    <el-button type="primary" @click="getMsg">主要按钮</el-button>
    <el-button type="success" @click="getToken">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <ul>
      <li><router-link to="/home">主页</router-link></li>  
      <li><router-link to="/news">新闻</router-link></li> 
    </ul>
    <div>
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    getToken(){
      this.$http
      .post('http://www.mybanxue.com/app/user/login.do',"username=15989346035&pwd=e10adc3949ba59abbe56e057f20f883e&skey=skey&type=1")
      .then((res)=>{
          console.log(res.data.data/*.token*/)
      })
      .catch((err)=>{
          console.log(err)
      })
    },
    getMsg(){
      this.$http.post("http://msg.cn")
      .then((res) => { 
        console.log(res.data); 
      })
      .catch((err)=>{
          console.log(err)
      })   
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.router-link-active{
  font-size: 20px;
  color:#f50;
}
</style>
