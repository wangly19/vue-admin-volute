<template>
  <div class="home">
    1
    <div id="map" style="width: 500px;height: 500px;"></div>
  </div>
</template>

<script>
import JiangxiMap from '../../plugin/map/province/jiangxi.json'
import echarts from 'echarts'
const option = {
  backgroundColor: '#000',
  title: {
    text: 'Echarts3 中国地图下钻至县级',
    subtext: '三级下钻',
    link: ' http://www.ldsun.com',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'normal'
    },
    subtextStyle: {
      color: '#ccc',
      fontSize: 13,
      fontWeight: 'normal'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {
        readOnly: false
      },
      restore: {},
      saveAsImage: {}
    },
    iconStyle: {
      normal: {
        color: '#fff'
      }
    }
  },
  animationDuration: 1000,
  animationEasing: 'cubicOut',
  animationDurationUpdate: 1000
}
export default {
  name: 'dash',
  data: () => ({
    cityMap: null
  }),
  methods: {
    // 注册地图
    registerMap () {
      console.log('开始注册地图')
      const mapName = []
      JiangxiMap.features.forEach(city => {
        // 或许市名称
        mapName.push({
          name: city.properties.name,
          value: city.id
        })
      })
      echarts.registerMap('江西省', JiangxiMap)
      this.renderMap('江西省', mapName)
      this.cityMap.on('click', $mod => {
        if ($mod.data.value) {
          /**
           * 获取点击的市模块是否有子类
           */
          const fileName = $mod.data.value
          const cityData = require(`@/plugin/map/city/${fileName}.json`)
          console.log(cityData)
          echarts.registerMap($mod.data.name, cityData)
          const countyName = []
          cityData.features.forEach(county => {
            console.log(county)
            countyName.push({
              name: county.properties.name,
              value: null,
              data: county,
              parent: $mod.data.value
            })
          })
          this.renderMap($mod.data.name, countyName)
        } else {
          console.log($mod.data)
          const oneMap = {
            type: 'FeatureCollection',
            features: [$mod.data.data]
          }
          echarts.registerMap($mod.data.name, oneMap)
          this.renderMap($mod.data.name, [$mod.data.name])
        }
      })
    },
    // 运行地图
    renderMap (mapName, cityNameList) {
      option.series = [
        {
          name: mapName,
          type: 'map',
          mapType: mapName,
          nameMap: mapName,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#999',
                fontSize: 13
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 13
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: 'dodgerblue'
              },
              emphasis: {
                areaColor: 'darkorange'
              }
            }
          },
          data: cityNameList
        }
      ]
      this.cityMap.setOption(option)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.cityMap = echarts.init(document.getElementById('map'))
      this.registerMap()
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  @include viewGlobalStyle();
}
</style>
