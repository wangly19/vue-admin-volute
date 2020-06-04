<template>
  <div class="layout-container">
    <layout-header v-if="false"></layout-header>
    <a-tabs v-model="$route.path" hide-add
    size="small"
    class="router-view" :animated="true"
    @edit="onEdit">
        <a-tab-pane v-for="pane in keepList" :key="pane.path" :tab="pane.meta.title">
          <router-view></router-view>
        </a-tab-pane>
      </a-tabs>
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
    ...mapGetters(['keepList', 'currentRoutes']),
    tabBar () {
      return {
        marginBottom: 0
      }
    },
    filterRouter () {
      const path = []
      this.keepList.forEach(route => {
        path.push(route.item.path)
      })
      return path
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
  },
  created () {
    console.log(this.$router)
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
