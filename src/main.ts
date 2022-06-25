import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import shield from "@drumont/shield/dist/types/main";

import shieldPlugin from "@/plugins/shield/shield";
import App from './App.vue';
import router from './router'
import store from './store';

Vue.config.productionTip = false;

const containerSelector = '#appPlace'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h: any) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecycle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */

        },
      });
    },
    router,
    store,
    el: containerSelector
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export function mount(props: any): any {
  const tokens = props.authentication_tokens
  console.log('Mes tokens: ', tokens);
  Vue.use(shield, tokens)
  return vueLifecycles.mount(props);
}
export const unmount = vueLifecycles.unmount;
