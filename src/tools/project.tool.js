/**
 * 重写Map响应式
 */
export class ObserveMap {
  map = null
  constructor (map) {
    this.map = new Map(map)
  }

  set (key, value) {
    this.map.set(key, value)
    console.log(this.map)
    return this.map
  }

  remove (key) {
    this.map.remove(key)
    return this.map
  }
}
