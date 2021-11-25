<template>
  <div class="login_container">
    <div class="login_box">
      <!--      头像区-->
      <div class="avatar_box">
        <img src="../assets/avatar.png">
      </div>
      <!--      表单区-->
      <div>  <!--:rules="rules" 添加表单验证规则;:model="loginFrom 表单数据绑定-->
        <el-form
            ref="loginFormRef"
            class="login_form"
            label-width="0px"
            :model="loginFrom"
            :rules="loginFormRules">
          <!--          用户名-->
          <el-form-item prop="username">  <!--prop="userName":限制规则-->  <!--prefix-icon:添加前置图标-->
            <el-input
                prefix-icon="el-icon-user"
                v-model="loginFrom.username"></el-input>
          </el-form-item>
          <!--          密码-->
          <el-form-item prop="password">
            <el-input
                type="password"
                prefix-icon="el-icon-lock"
                v-model="loginFrom.password"></el-input>
          </el-form-item>
          <!--          按钮区-->
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      //表单的数据绑定对象
      loginFrom: {
        username: 'admin',
        password: '123456'
      },
      //表单的验证规则对象
      loginFormRules: {
        username: [
          {required: true, message: '请输入登录名称', trigger: 'blur'},//必选项；错误提示，失去焦点触发
          {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'} //长度限制；错误提示，失去焦点触发
        ],
        password: [
          {required: true, message: '请输入登录密码', trigger: 'blur'},//必选项；错误提示，失去焦点触发
          {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'} //长度限制；错误提示，失去焦点触发
        ],
      }
    }
  },
  methods: {
    resetLoginForm() {
      //这个是el-form里面的一个函数resetFields()，重置表单【需要ref获取form对象】
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      //validate(valid=>{})表单的预验证，倘若loginFormRules不通过，则valid就是false
      this.$refs.loginFormRef.validate((valid) => {
        if (!valid) return;
        this.$http.post('/login', this.loginFrom).then(res => {
          console.log(res.data)
          //登录失败的判断
          if (res.data.meta.status == 400) { //这里面用了el的弹框组件
            this.$message.error('登录失败')
          }
          //登录成功的判断
          else {
            this.$message.success('登陆成功')
            window.sessionStorage.setItem('token',res.data.data.token) //同时给浏览器存储一个token
            this.$router.push('/home')
          }

        })

      })
    }

  }
}

</script>

<style scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  /*设置居中*/
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  background-color: #fff;
  /*添加阴影*/
  box-shadow: 0 0 10px #ddd;
  /*图片中上方定位*/
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: -25% /* 不知道为啥这里不是50%*/
}

.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.btns {
  /*按钮居右对齐*/
  display: flex;
  justify-content: flex-end;
}
</style>