<template>
  <div class="header-container">
    <ul class="header-menu">
      <router-link class="header-menu__item" :to="value.path"
        :class="$route.name === label && 'is-active'"
        tag="li" v-for="[label, value] in cacheKeepMap" :key="label">
        <a-badge :status="$route.name === label ? 'processing' : 'default'" />
        <span class="tag-text">{{value.meta.title}}</span>
        <a-icon type="close"
        @click.stop="onCloseTag(label)"
        class="close-btn" />
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cacheKeepMap'])
  },
  methods: {
    closeKeepLive (e) {
      console.log(e)
    },
    onCloseTag (key) {
      console.log(this.keepList, key)
      this.$store.commit('clearKeepStack', key)
      console.log(this.keepList, this.cacheKeepMap)
    }
  }
}
</script>

<style lang="scss" scoped>
$base-height: 40px;
.header-container {
  height: $base-height;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1.1px solid $border-color;
  display: grid;
  grid-template-columns: 1fr 200px;
  .trans {
    transition: all .5s;
  }
  .header-menu {
    @include flex($justify: flex-start, $align: center);
    @extend .trans;
    overflow: auto;
    .is-active {
      border: 1px solid $primary-color;
    }
    &__item {
      @include flex($justify: flex-start, $align: center);
      @include radius();
      cursor: pointer;
      height: 25px;
      border: 1px solid $border-color;
      padding: 0 10px;
      margin-right: 10px;
      @extend .trans;
      .tag-text {
        color: $text-color;
        font-size: 12px;
      }
      .close-btn {
        @extend .trans;
        margin-left: 5px;
        font-size: 10px;
        cursor: pointer;
        &:hover {
          color: #F50;
          transform: scale(1.2);
        }
      }
      &:hover {
        border: 1px solid $primary-color;
      }
    }
  }
}
</style>
