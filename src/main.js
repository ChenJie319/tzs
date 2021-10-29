// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './../theme/index.less'

// element-ui
import { Radio, Checkbox } from 'element-ui'
import './../theme/element-variables.scss'

// iview
Vue.use(iView)

// element-ui
Vue.use(Radio)
Vue.use(Checkbox)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
