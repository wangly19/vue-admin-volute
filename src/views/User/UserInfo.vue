<template>
  <div class="userinfo-container">
    <a-input-search placeholder="input search text" style="width: 200px" />
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  created () {
    console.log('userinfo')
  }
}
</script>

<style lang="scss" scoped>
  .userinfo-container {
    @include viewGlobalStyle();
  }
</style>
