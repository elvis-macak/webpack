{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#resource}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/resource}}
{{#material}}
import VueMaterial from 'vue-material'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'vue-material/dist/vue-material.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/material}}

import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}


{{#resource}}
Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/resource}}

{{#material}}
Vue.use(VueMaterial){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/material}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#resource}}
  http: {
    root: '/api',
    headers: {
      Token: localStorage.auth_token{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {{/resource}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#resource}}
// Vue.http.get('/api/auth').catch(() => {
//   localStorage.auth_token = null{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
//   location.href = '/login'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/resource}}
