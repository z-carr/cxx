<template>
  <div class="bottom-tap">
    <router-link class="bottom-tap-item" to="/">首页</router-link>
    <router-link class="bottom-tap-item" to="/fine">发现</router-link>
    <router-link class="bottom-tap-item" to="/order">订单</router-link>
    <router-link class="bottom-tap-item" to="/my">我的</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.bottom-tap {
  position: fixed;
  width: 100%;
  height: 3rem;
  left: 0;
  bottom: 0;
  background-color: #ccc;
  display: flex;
}
.bottom-tap .bottom-tap-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
