<template>
  <div class="home">
    1111
  </div>
</template>

<script>
export default {
  computed: {
    test () {
      console.log(this.$route)
      return 111
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  @include viewGlobalStyle();
}
</style>
