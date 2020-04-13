import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@/assets/icons/iconfont.css'

Vue.use(ViewUI);

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

Vue.prototype.$config = config

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
