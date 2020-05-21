<template>
  <header class="header-component">
    <div class="logo"></div>
    <a-menu theme="light" mode="horizontal" class="header-component__menu">
      <a-menu-item v-for="(item, index) in $t('header.menu')" :key="index">
        {{item}}
      </a-menu-item>
    </a-menu>
  </header>
</template>

<script>
export default {
  name: 'login-header'
}

</script>

<style lang="scss">
  .header-component {
    @include flex($justify: space-between, $align: center);
    padding: 0 $font-large 0 $font-large;
    background: $light-color;
    min-height: 64px;
    line-height: 64px;
    border: 1px solid $border-color;
    width: inherit;
    .logo {
      @include radius();
      position: relative;
      min-width: 200px;
      height: 30px;
      background: $border-color;
    }
    &__menu {
      line-height: inherit;
      border: none;
    }
  }

</style>
