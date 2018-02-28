<template>
<div class="main" >
  <el-container  direction="vertical" style="height: 100%; border: 1px solid #eee" >
      <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
  <el-container direction="horizontal">
  <el-aside width="40"  style="background-color: rgb(238, 241, 246)">
    <!--
<el-radio-group size="mini" v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>-->
<el-switch   v-model="isCollapse"  active-color="#ff4949"  inactive-color="#13ce66"></el-switch>
    <el-menu :unique-opened="false"  :default-openeds="['1', '2']" @select="handleSelect" @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
      <el-submenu  v-for="menu in elMenus" :key="menu.index" v-bind:index="menu.index" >
         <template slot="title">{{menu.title}}</template>
        <el-menu-item v-for="item in menu.items" :key="item.itemIndex" v-bind:index="item.itemIndex" >{{item.itemName}}</el-menu-item>
      </el-submenu>
    </el-menu>

  </el-aside>
   <el-container  direction="vertical" >
     <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
            <el-breadcrumb separator="/">
                  <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
     <el-main>
     <!--   -->
        <router-view></router-view>
     </el-main>
     <el-footer style="height:30px;border: 1px solid #eee;">footer</el-footer>
   </el-container>
</el-container>
</el-container>
</div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapse: true,
      searchCriteria: '',
      breadcrumbItems: ['test1'],
      elMenus: [
        {
          title: 'test1',
          index: '1',
          items: [
            { itemIndex: '1-1', itemName: 'GridTableDemo' },
            { itemIndex: '1-2', itemName: 'demo' },
            { itemIndex: '1-3', itemName: 'FormLayout' }
          ]
        },
        {
          title: 'test2',
          index: '2',
          items: [
            { itemIndex: '2-1', itemName: 'GridTableDemo' },
            { itemIndex: '2-2', itemName: 'GridTableDemo' },
            { itemIndex: '2-3', itemName: 'GridTableDemo' }
          ]
        },
        {
          title: 'test3',
          index: '3',
          items: [
            { itemIndex: '3-1', itemName: 'GridTableDemo' },
            { itemIndex: '3-2', itemName: 'GridTableDemo' },
            { itemIndex: '3-3', itemName: 'GridTableDemo' }
          ]
        },
        {
          title: 'test4',
          index: '4',
          items: [
            { itemIndex: '4-1', itemName: 'GridTableDemo' },
            { itemIndex: '4-2', itemName: 'GridTableDemo' },
            { itemIndex: '4-3', itemName: 'GridTableDemo' }
          ]
        }
      ]
    }
  },

  methods: {
    handleIconClick (ev) {
      console.log(ev)
    },
    handleSelect (key, keyPath) {
      switch (key) {
        case '1-1':
          this.$router.push('/GridTable')
          this.breadcrumbItems = ['GridTable']
          break
        case '1-2':
          this.$router.push('/demo')
          this.breadcrumbItems = ['demo']
          break
        case '1-3':
          this.$router.push('/FormLayout')
          this.breadcrumbItems = ['FormLayout']
          break
        default:
          console.log(key)
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-main{
    padding-top: 10px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 10px;
}
.el-aside {
  color: #333;
}
.el-footer {
  background-color: #b3c0d1;
}
</style>
