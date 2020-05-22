<template>
  <div class="layout-container">
    <a-tabs type="card" @change="callback" class="router-view" :animated="true"
    @tabClick="tabClickPath"
    size="small"
    :tabBarStyle="tabBar">
      <a-tab-pane :key="item.path" :tab="item.name" v-for="item in keepList">
        <keep-alive :include="keepList">
          <router-view />
        </keep-alive>
      </a-tab-pane>
    </a-tabs>
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
    ...mapGetters(['keepList']),
    tabBar () {
      return {
        marginBottom: 0
      }
    }
  },
  methods: {
    callback (key) {
      console.log('切换了')
      this.routerActive = [key]
    },
    tabClickPath (a) {
      this.$router.push({ path: a })
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
