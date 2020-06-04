<template>
  <div class="userinfo-container">
  </div>
</template>

<script>
export default {
  name: 'userinfo',
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
