<template>
  <div class="Login">
    <div class="note" :style ="note">
      <div class="loginIndex">
        <div class="loginLeft">
          <div class="img">
            <img src="../assets/favicon.jpg" alt="" >
          </div>
          <div class="zxwy">
            智学无忧后台系统
          </div>
          <div class="zxwyIt">
            做最有态度 良心 责任的IT教育
          </div>
        </div>
        <div class="middle"></div>
        <div class="loginRight">
          <div class="rightMiddle">
            <el-input
              placeholder="请输入手机号"
              v-model="user" class="text1">
              <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
            </el-input>
            <el-input
              placeholder="请输入密码"
              v-model="password" class="text2" type="password">
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
            <el-checkbox class="text3" v-model="checked">记住密码</el-checkbox>
            <el-button type="success" class="Alogin" @click="login">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   export default {
      name: 'Login',
      data() {
        return {
          user: '',//用户名
          password: '',//密码
          checked:'',//记住密码
          userToken: '',//用户令牌
          note: {//背景图片
            backgroundImage: "url(" + require("../assets/background.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto"
              }
            }
          },
        methods: {
          login () {
            let _this = this;
      

axios.get('http://192.168.1.188/api/OAuth/authenticate', {
                    params: {
                        'userId': vm.loginForm.user,
                        'createDt': new Date()
                    }
                })
              .then(function (response) {
                   console.log(response.data);
                  _this.$router.push('/')
                 _this.userToken = 'Bearer' + res.data.data.body.token;
                          })
            if (this.user === '' || this.password === '') {
              alert('账号或密码不能为空');
            } else {
              // _this.axios.get(`http://192.168.1.188/api/OAuth/authenticate?stuMobile=${_this.users}&stuPassword${_this.password}`)
              // .then(function (response) {
              //      console.log(response.data);
              //     _this.$router.push('/')
              //    _this.userToken = 'Bearer' + res.data.data.body.token;
              //             })
              // _this.axios.get('/api/OAuth/authenticate?stuMobile=${_this.users}&stuPassword${_this.password}')
              // .then(res => {
              //   console.log(res.data);
              //   _this.$router.push('/')
              //   _this.userToken = 'Bearer' + res.data.data.body.token;
              //   alert('登陆成功');
              // }).catch(error => {
              //   alert('账号或密码错误');
              //   console.log(error);
              // });
            }
          }
        }
        }
</script>
<style lang="less" scoped>
    .Login{
      width: 100%;
      height: 100%;
    }
    .note{
      width: 100%;
      height: 100%;
      display: flex;
    }
    .loginIndex{
      display: flex;
      width: 500px;
      height: 300px;
      border-radius: 5px; 
      margin: auto;
      background: rgb(186, 206, 200);
      box-shadow: 0px 0px 20px 10px rgb(75, 75, 240);
    }
    .middle{
      width: 2px;
      height: 100%;
      background:linear-gradient(#ccf, rgb(47, 122, 47),#ccf);
      margin-left: 25%;
    }
    .img{
      margin-top: 40px;
      margin-left: 60%;
      width: 80px;
      height: 80px;
      background: #fff;
      border-radius: 50%;
      text-align: center;
      line-height: 80px;
    }
    .img img{
      margin-top: 10px
    }
    .zxwy{
      width: 150%;
      margin-left: 30%;
      margin-top: 10%;
      font-size: 20px;
      font-weight: 800;
      color: rgb(47, 122, 47);
    }
    .loginLeft{
      width: 25%
    }
    .loginRight{
      width: 48%;
      margin-left: 1%;

    }
    .zxwyIt{
      margin-top: 20%;
      font-size: 15px;
      margin-left: 20%;
      width: 200%;
      color: #666;
    }
    .rightMiddle{
      margin: 10%;
      
    }
    .text1,.text2{
      margin-top: 15%;
      border: 1px solid green;
    }
    .text3{
      margin-top: 10%;
    }
    .el-input__icon,.el-icon-lock{
      color: green;
      font-size: 25px;
      text-align: center;
    }
    .Alogin{
      display: block;
      width: 170px;
      margin-left: 8%;
      margin-top: 8%;
    }
</style>
