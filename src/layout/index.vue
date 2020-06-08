<template>
  <div class="layout-container">
    <!-- 头部 -->
    <layout-header></layout-header>
    <!-- 二级路由 -->
    <div class="router-view">
      <keep-alive :include="filterIncludeComponentName">
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- 导航条 -->
    <layout-footer class="layout-footer" />
  </div>
</template>

<script>
import LayoutFooter from './component/footer'
import LayoutHeader from './component/header'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    routerActive: [],
    activeKey: 'home',
    panes: []
  }),
  computed: {
    ...mapGetters(['cacheKeepMap']),
    tabBar () {
      return {
        marginBottom: 0
      }
    },
    /**
     * 从缓存路由中获取组件名称
     */
    filterIncludeComponentName () {
      const componentNames = []
      for (const key of this.cacheKeepMap.keys()) {
        componentNames.push(key)
      }
      return componentNames
    }
  },
  methods: {
    /**
     * 新增tab
     */
    changeTabView (targetKey, action) {
      console.log(targetKey, action)
    },
    changeViewPath (key) {
      console.log(key)
      this.$router.replace({ path: key })
    },
    onEdit () {}
  },
  components: {
    LayoutFooter,
    LayoutHeader
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  @include flex($direction: column, $align: flex-start);
  width: 100%;
  height: 100%;
  .router-view {
    flex: 1;
    height: inherit;
    width: inherit;
  }
  .layout-footer {
    @include position($position: absolute, $bottom: 20px);
  }
}
</style>

<style scoped>
.router-view >>> .ant-tabs-content, .ant-tabs-tabpane-active  {
  height: 100%;
}
.router-view >>> .ant-tabs-bar {
  margin-bottom: 0;
}
</style>
