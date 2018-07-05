<template>
    <div class="foot">
        <router-link to="/#" tag="span">我的好友</router-link>
        <router-link to='/login' tag="span">登录页</router-link>
        <router-link to='/login32' tag="span">登录页</router-link>
        <router-link to='/login3' tag="span">登录页</router-link>
        <router-link to='/login1' tag="span">登录页</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@rem: 75rem;
.foot {
  width: 100%;
  height: 72 / @rem;
  display: flex;
  // background:linear-gradient(-135deg, transparent 15px, #162e48 0); // 15px的透明色
  //  background:linear-gradient(-135deg, #f00 15px, #162e48 0);     // 15px红色
}
.foot > span {
  height: 100%;
  flex: 1;
  text-align: center;
  line-height: 72 / @rem;
     background:linear-gradient(-135deg, #f00 15px, #162e48 0);     // 15px红色
}
.router-link-active {
  color: rgb(0, 162, 255);
}
</style>
