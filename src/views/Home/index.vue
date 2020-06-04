<template>
  <div class="gauge-container">
    <!-- 左侧 -->
    <div class="tabs-moves">
    </div>
    <div class="tabs-info"></div>
    <GaodeMap></GaodeMap>
  </div>
</template>

<script>
import GaodeMap from './component/gaodeMap'

export default {
  data: () => ({}),
  components: {
    GaodeMap
  }
}
</script>

<style lang="scss" scoped>
.gauge-container {
  @extend .screenMax;
  position: relative;
  .extend-move {
    @include radius();
    height: calc(100% - 145px);
    background: rgba(255, 255, 255, 0.92);
    z-index: 1;
    transition: box-shadow .5s;
    &:hover {
      box-shadow: $box-shadow-base;
    }
  }
  .tabs-moves {
    @include position($position: absolute, $left: 15px, $top: 15px);
    width: 260px;
    @extend .extend-move;
  }
  .tabs-info {
    @include position($position: absolute, $left: 290px, $top: 15px);
    width: calc(100% - 305px);
    @extend .extend-move;
  }
}
</style>
