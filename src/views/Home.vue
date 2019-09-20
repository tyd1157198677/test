<template>
  <div id="Home">
    <el-container class="el-container">
      <el-aside width="200" height="100%">
        <div class="right-top"><!-- loog图片标题 -->
          <p>
            <img src="../assets/favicon.jpg" />
          </p>
          <b v-show="title">智学无忧教育</b>
        </div>
        <!-- 二级展开 -->
        <el-menu
          :default-active="tyd"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">在线测试</span>
            </template>
            <el-menu-item-group v-for="(value,index) in Test" :key="index">
              <el-menu-item :index="value.navItem" @click="addTab(value.name,value.navItem)">{{value.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">基础数据</span>
            </template>
            <el-menu-item-group v-for="(value,index) in baseDate" :key="index">
              <el-menu-item :index="value.navItem" @click="addTab(value.name,value.navItem)">
                {{value.name}}
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部 -->
        <el-header style="display: flex;">
          <div class="top" @click="tiggle">
            <i class="el-icon-caret-left"></i>
          </div>
          <!-- tab 标签页 -->
          <el-tabs style="width:100%;overflow:hidden;margin-left:20px;" @tab-click="clickShow(editableTabsValue)" v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >{{item.content}}</el-tab-pane>
          </el-tabs>
          <div class="titleTop">
             <i class="el-icon-s-custom" style="margin-right: 15px"></i>
             <span>退出</span>
             <i class="el-icon-s-custom el-iconp"></i>
          </div>
        </el-header>
        <!-- 中间主页面 -->
        <el-main>
          <router-view name="key" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
//遇到的问题：1，跳转路由时在在配置路由时要在component后面加s 2，对于element-ui组件里面的属性和方法不熟悉
//没解决的问题：1，点击tab路由跳转到指定页面，对应的跳到左边指定导航 2左边导航栏点击时的小三角
export default {
  data() {
    return {
      tyd:'', //路由
      title: true,//标题隐藏或显示
      isCollapse: false,//控制是否展开
      editableTabsValue: "Home",
      editableTabs: [
        {
          name:"Home",
          // navItem:"/",
          title:"首页"
        }
      ],//接收顶部tab的数值
      tabIndex: 2,
      stuName:"",//接收传过来的名字
      routs:'',//接收传过来的路由
        Test: [
        { name: "老师出卷", navItem: "MakeTestPaper" },
        { name: "试卷管理", navItem: "TestPaperManage" },
        { name: "安排测试", navItem: "TestResult" },
        { name: "批阅试卷", navItem: "TestSetter" },
        { name: "测试成绩", navItem: "ViewTestPaper" }
        ],
        baseDate: [
          { name: "班级管理", navItem: "ClassManage" },
          { name: "学生管理", navItem: "ModifyPassword" },
          { name: "老师管理", navItem: "StudentManage" },
          { name: "修改密码", navItem: "TeacherManage" }
        ]
    };
  },
  methods: {
      addTab(uname,url) {//  添加 tab
      // console.log(uname,url)
       this.editableTabsValue = url; //选中当前路由并且样式赋值；
      for (var i = 0; i < this.editableTabs.length; i++) {
        //循环
        if (this.editableTabs[i].title == uname) {
          return;
        }
      }
      this.editableTabs.push({
        title: uname,
        name: url
      });
    },

    tiggle() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.title = false;
      } else {
        this.title = true;
      }
    },
    clickShow(y){//跳转页面
      // console.log(y)
      this.tyd=y
      this.$router.push('/'+y)
    },
    removeTab(targetName) {//删除tab
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              this.$router.push(nextTab.name)
              this.tyd=nextTab.name
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
  }
</script>
<style lang="less" scoped>
#Home {
  height: 100%;
}
/deep/.el-container {
  height: 100%;
}

.el-header,.el-footer {
  border-bottom: 1px solid #ccc;
  padding: 0px;
  line-height: 60px;
  display: flex;
}

.el-aside {
  background-color: #545c64;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}

.right-top {// 右边
  width: 100%;
  height: 60px;
  background-color: #ffeb3a;
  display: flex;
  img {
  border-radius: 50%;
  border: 1px solid #7ab162;
  width: 40px;
  height: 40px;
  margin: auto;
  box-shadow: 0px 0px 10px 5px #7ab162;
    }
  b {
    height: 60px;
    line-height: 60px;
    color: #079787;
    font-size: 18px;
  }
  p {
  display: inline-block;
  width: 40%;
  height: 100%;
  display: flex;
  }
}
.index{
  display: inline-block;
  border: 1px solid #ccc;
  width: 85px;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  vertical-align: bottom;
  margin-bottom: -20px;
  text-align: center;
  margin-top: 18px;
  margin-left: 2%;
}
.top {
  width: 40px;
  height: 100%;
  display: flex;
  background-color: #008181;
  i {
  color: white;
  font-size: 28px;
  margin: auto;
}
}  
/deep/.el-menu {
  background-color: #545c64;
  color: white;
}
/deep/.el-tabs{width: 60%;
  line-height: 0px;
  margin-top: 18px;
 }
/deep/.el-tabs--card>.el-tabs__header{
  margin: 0px;border: 0px;
  }
/deep/.el-submenu__title,
/deep/.el-icon-menu {
  color: #ffffff;
}
/deep/.el-menu-item {
  color: white;
}
.titleTop{
  width: 150px;
  display: inline-block;
  float: right;
  flex: none;
}
/deep/.el-submenu__title {
  width: 200px;
}
.el-iconp{
    display: inline-block;
    width:40px;
    height: 40px;
    border-radius: 50%;
    background: #ccc;
    color:white;
    text-align: center;
    line-height: 40px;
    font-size: 30px;
    margin-left: 20px;
    margin-top: 12px;
  }



</style>