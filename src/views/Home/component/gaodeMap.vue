<template>
  <div class="gaode-map-container">
    <div class="loading-wrapper" v-show="spinning">
      <a-spin />
    </div>
    <el-amap class="amap-box" :vid="vid"
    :events="{ complete: setoutMap }">
      <el-amap-marker v-for="(marker, index) in markers"
      :position="marker.position" :events="{ click: markerClick }"
      :visible="marker.visible" :draggable="true"
      :vid="index" :key="index" />
    </el-amap>
  </div>
</template>

<script>
export default {
  name: 'GaodeMap',
  data: () => ({
    spinning: true,
    vid: 'amap-gaode',
    msg: 'vue-amap向你问好！',
    markers: [
      {
        position: [121.5273285, 31.21515044],
        visible: true
      }
    ]
  }),
  methods: {
    markerClick () {
      alert('click marker')
    },
    /**
     * 准备加载地图
     */
    setoutMap () {
      console.log('加载完成')
      this.spinning = false
    }
  }
}
</script>

<style lang="scss" scoped>
.gaode-map-container {
  position: relative;
  @extend .screenMax;
  .loading-wrapper {
    // @extend .screenMax;
    height: calc(100% - 50px);
    width: inherit;
    @include position($position: absolute, $left: 0, $top: 0);
    @include flex($justify: center, $align: center);
  }
}
</style>
