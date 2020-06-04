<template>
  <div class="header-container">
    <ul class="header-menu">
      <li class="header-menu__item">
        <a-tag color="#108ee9">
          #108ee9
        </a-tag>
      </li>
    </ul>
    <!-- <span class="tip-user">
      欢迎你：赵天翼
    </span> -->
  </div>
</template>

<style lang="scss" scoped>
$base-height: 40px;
.header-container {
  height: $base-height;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1.1px solid $border-color;
  @include flex($justify: space-between, $align: center);
}
</style>
