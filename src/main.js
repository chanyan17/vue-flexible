// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)

const store = new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        addItem (state, item) {
            state.list.push(item)
        }
    }
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
