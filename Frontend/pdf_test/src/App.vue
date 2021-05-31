<template>
  <div id="nav">
    <router-link class="tab-bar-item" to="/">
      <div class="icon"><i class="iconfont icon-biaoqiankuozhan_shouye-186"></i></div>
      <div>首页</div>
    </router-link>
    <router-link class="tab-bar-item" to="/info"
      ><div class="icon"><i class="iconfont icon-jieshao"></i></div>
      <div>介绍</div></router-link
    >
    <router-link class="tab-bar-item" to="/meeting"
      ><div class="icon"><i class="iconfont icon-huiyi"></i></div>
      <div>会议</div></router-link
    >
    <router-link class="tab-bar-item" to="/Poll"
      ><div class="icon"><i class="iconfont icon-zu"></i></div>
      <div>投票</div></router-link
    >
    <router-link class="tab-bar-item" to="/Row"
      ><div class="icon"><i ></i></div>
      <div>测试</div></router-link
    >
  </div>
  <router-view />
</template>

<style lang="scss">
@import "assets/css/base.css"; //引入全局CSS
@import "assets/css/iconfont.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #f6f6f6;
  display: flex;
  position: relative;
  left:0;
  right: 0;
  top: 0;

  box-shadow: 0 10px 1px rgba(100, 100, 100, 0.1);

  a {
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 50px;
    font-size: var(--font-size);
  }

  .tab-bar-item .icon {
    width: 24px;
    height: 24px;
    margin-top: 4px;
    vertical-align: middle;
    display: inline-block;
  }
}
</style>
