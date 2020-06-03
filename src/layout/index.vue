<template>
  <div class="layout-container">
    <div class="route-view">
      <router-view></router-view>
    </div>
    <layout-footer class="layout-footer" />
  </div>
</template>

<script>
import LayoutFooter from './component/footer'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    routerActive: []
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
    }
  },
  components: {
    LayoutFooter
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
.router-view >>> .ant-tabs-card-content, .ant-tabs-tabpane-active  {
  height: 100%;
}
</style>
