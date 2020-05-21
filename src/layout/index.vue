<template>
  <div class="layout-container">
    <!-- <layout-menu /> -->
    <a-tabs class="router-view" size="small" type="card">
      <a-tab-pane key="1" tab="内网中心">
        <router-view/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="大数据可视化">
        <router-view/>
      </a-tab-pane>
    </a-tabs>
    <layout-footer class="layout-footer" />
  </div>
</template>

<script>
import LayoutFooter from './component/footer'
// import LayoutMenu from './component/menu'
export default {
  components: {
    LayoutFooter
    // LayoutMenu
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  // @include flex($direction: column);
  width: 100%;
  height: 100%;
  // .router-view {
  //   flex: 1;
  // }
  .layout-footer {
    @include position($position: absolute, $bottom: 20px);
  }
}
</style>
