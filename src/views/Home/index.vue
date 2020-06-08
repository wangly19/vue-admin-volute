<template>
  <div class="gauge-container">
    <!-- 左侧 -->
    <div class="tabs-moves">
      <a-alert message="流线" type="info"/>
      <a-list item-layout="horizontal" :data-source="cardData" class="card-list">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta>
            <div slot="description">
              <a-tag color="blue">#正常上报</a-tag>
              <a-tag color="red">#异常上报</a-tag>
            </div>
            <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
    <div class="tabs-info"></div>
    <GaodeMap></GaodeMap>
  </div>
</template>

<script>
import GaodeMap from './component/gaodeMap'

export default {
  name: 'DashHome',
  data: () => ({
    cardData: [{
      title: '# 林森的上报内容',
      description: '描述'
    }]
  }),
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
    height: calc(100% - 105px);
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
    .card-list {
      padding: 15px;
    }
  }
  .tabs-info {
    @include position($position: absolute, $left: 290px, $top: 15px);
    width: calc(100% - 305px);
    @extend .extend-move;
  }
}
</style>
