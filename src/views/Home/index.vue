<template>
  <div class="home">
    <a-breadcrumb>
      <a-breadcrumb-item
        v-for="[key, value] in hashMap" :key="key">
        <span @click="readyMap(key, value)">{{value.name}}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- map -->
    <div id="map" style="width: 500px;height: 500px;"></div>
  </div>
</template>

<script>
import JiangxiMap from '@/plugin/map/province/jiangxi.json'
import Cache from '@/tools/test.ts'
import echarts from 'echarts'
const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  }
}
export default {
  name: 'dash',
  data: () => ({
    cityMap: null,
    hashMap: new Map([[1, { name: '江西省', value: 360000 }]])
  }),
  methods: {
    // 返回主视图
    rendHEAD () {
      const mapName = []
      JiangxiMap.features.forEach(city => {
        // 或许市名称
        mapName.push({
          name: city.properties.name,
          value: city.id,
          zoom: 1
        })
      })
      echarts.registerMap('江西省', JiangxiMap)
      this.renderMap('江西省', mapName)
    },
    // 绘制市级别地图
    rendCity (name, value) {
      const fileName = value
      const cityData = require(`@/plugin/map/city/${fileName}.json`)
      echarts.registerMap(name, cityData)
      const countyName = []
      cityData.features.forEach(county => {
        countyName.push({
          name: county.properties.name,
          value: null,
          data: county,
          parent: value,
          zoom: 2
        })
      })
      this.renderMap(name, countyName)
    },
    setHashMap (zoom, name, value) {
      // 默认为江西省
      this.hashMap.set(1, {
        name: '江西省',
        value: '360000'
      })
      // 添加一个HasStack
      this.hashMap.set(zoom, {
        name: name,
        value: value
      })
      // 删除下一个HashStack, 保持值唯一
      this.hashMap.delete(zoom + 1)
      // 重新生成HashMap
      this.hashMap = new Map(this.hashMap)
      // 抛出Map
      this.$emit('changeCity', {
        name,
        value
      })
    },
    clearHashMap () {
      this.hashMap.clear()
      this.hashMap.set(1, {
        name: '江西省',
        value: '360000'
      })
      this.hashMap = new Map(this.hashMap)
    },
    readyMap (key, { name, value }) {
      switch (key) {
        case 1:
          this.rendHEAD()
          this.clearHashMap()
          break
        case 2:
          this.rendCity(name, value)
          this.setHashMap(key, name, value)
          break
        default:
          break
      }
      // console.log('1111')
    },
    // 注册地图
    registerMap () {
      console.log('开始注册地图')
      this.rendHEAD()
      this.cityMap.on('click', $mod => {
        const { name, value } = $mod.data
        switch ($mod.data.zoom) {
          case 1:
            this.rendCity(name, value)
            this.setHashMap($mod.data.zoom + 1, name, value)
            break
          case 2: {
            const oneMap = {
              type: 'FeatureCollection',
              features: [$mod.data.data],
              value: null,
              parent: value,
              zoom: 3
            }
            echarts.registerMap(name, oneMap)
            this.renderMap(name, [{
              name: name,
              parent: value,
              zoom: 3
            }])
            this.setHashMap($mod.data.zoom + 1, name, value)
          } break
          case 3:
            this.rendHEAD()
            this.clearHashMap()
            break
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
                color: '#303753',
                fontSize: 13
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#2a8ab3',
                fontSize: 16
              }
            }
          },
          data: cityNameList,
          itemStyle: {
            normal: {
              areaColor: 'rgb(78, 163, 151)',
              borderWidth: 2,
              borderColor: 'rgb(34, 195, 170)',
              label: {
                show: true,
                textStyle: {
                  color: 'rgb(0, 152, 217)',
                  fontSize: 12
                }
              }
            },
            emphasis: {
              areaColor: '#0f6471',
              label: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 15
                }
              }
            }
          }
        }
      ]
      this.cityMap.setOption(option)
    }
  },
  mounted () {
    Cache.get()
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
