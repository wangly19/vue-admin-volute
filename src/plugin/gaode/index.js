import VueAMap from 'vue-amap'
import Vue from 'vue'

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '664729790b973a4e6598375000d72439',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMapCircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
