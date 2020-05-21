import Vue from 'vue'
import I18n from 'vue-i18n'
Vue.use(I18n)

const i18n = new I18n({
  locale: 'zh_CN',
  messages: {
    zh_CN: require('./locale/chinese'),
    en_US: require('./locale/english')
  }
})

export default i18n
