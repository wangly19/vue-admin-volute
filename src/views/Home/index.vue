<template>
  <div class="home">
    {{test}}
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
