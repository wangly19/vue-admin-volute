<template>
  <div class="footer-container">
    <div class="mixin-svg" v-if="isZoom">
      <svg-icon name="mixinTool" className="mixin-icon" @click="zoomToolBar" />
    </div>
    <transition name="slide-fade" v-else>
      <div class="footer-view">
        <div class="zoom-icon">
          <a-icon type="fullscreen-exit" class="tagger-zoom" @click="zoomToolBar" />
        </div>
        <ul class="footer-menu">
          <template v-for="(item, index) in currentRoutes">
            <li class="footer-item" :class="[$route.path === item.children[0].path && 'item-active']"
              v-if="item.meta.isShow"
              @click="switchRouter(item.children[0], index)" :key="item.name">
              <a-dropdown placement="topCenter">
                <svg-icon name="home" className="tool-icon" />
                <a-menu slot="overlay">
                  <a-menu-item>
                    {{item.meta.title}}
                  </a-menu-item>
                  <a-menu-item>
                    个人信息
                  </a-menu-item>
                  <a-menu-item>
                    个人信息
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </li>
          </template>
        </ul>
        <div class="user-info">
          <a-dropdown placement="topCenter">
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" :size="40" />
            <a-menu slot="overlay">
              <a-menu-item>
                个人信息
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutFooter',
  data: () => ({
    isZoom: false,
    macIndex: 0
  }),
  computed: {
    ...mapGetters(['currentRoutes'])
  },
  methods: {
    switchRouter (item, index) {
      this.macIndex = index
      console.log(item)
      // this.$store.commit('pushKeepList', item)
      this.$router.push({ path: item.path })
    },
    zoomToolBar () {
      this.isZoom = !this.isZoom
    }
  }
}
</script>

<style lang="scss" scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
.footer-container {
  height: 60px;
  line-height: 60px;
  width: inherit;
  position: relative;
  .footer-view {
    margin-left: 40px;
    margin-right: 40px;
    padding: 0 $font-large;
    height: inherit;
    border-radius: 10px;
    background: $bg-color;
    @include flex($justify: space-between);
    .zoom-icon {
      flex: 0 0 300px;
      .tagger-zoom {
        text-align: left;
        font-size: 20px;
        cursor: pointer;
        padding: 10px;
        transition: transform .5s;
        &:hover {
          @include radius();
          transform: scale(1.25);
        }
      }
    }
    .user-info {
      flex: 0 0 300px;
      @include flex($justify: flex-end, $align: center);
    }
    .footer-menu {
      flex: 1;
      height: inherit;
      margin: 0;
      @include flex($justify: center);
      .footer-item {
        height: inherit;
        @include flex($align: center, $justify: flex-start);
        .tool-icon {
          width: 30px;
          height: 30px;
          cursor: pointer;
          transition: transform .5s;
          margin-right: $font-large;
          &:hover {
            border-radius: 50%;
            box-shadow: $box-shadow-base;
            transform: scale(1.25);
          }
        }
      }
        .item-active {
          position: relative;
          &::before {
            content: "";
            @include position($position: absolute, $bottom: 5px, $left: 0);
            width: 30px;
            height: 3px;
            background: $primary-color;
            @include radius();
          }
        }
    }
  }
  .mixin-svg {
    @include position($position: absolute, $right: 10px, $top: 50%);
    transform: translateY(-50%);
    background: $bg-color;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    @include flex($justify: center, $align: center);
    cursor: pointer;
    transform: all .6s;
    &:hover {
      box-shadow: $box-shadow-base;
    }
    .mixin-icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
