<template>

    <el-container>
<!--    头部-->
      <el-header>
        <i class="el-icon-platform-eleme"></i>
        电商后台管理系统
      </el-header>
<!--    页面主体-->
      <el-container>
<!--          侧边栏-->
        <el-aside width="200px">Aside</el-aside>
<!--          右侧文段内容-->
        <el-main>Main</el-main>

      </el-container>

      <el-button type="info" @click="logout">退出</el-button>
    </el-container>

</template>

<script>
export default {
  name: "Home",
  methods:{
    logout(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.el-container{
  height:100%
}
.el-header{
  background-color: #373d41;
}
.el-aside{
  background-color: #333744;
}
.el-main{
  background-color: #eaedf1;
}
</style>