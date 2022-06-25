import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { authentication } from './modules/authentication';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    authentication: authentication,
  },
  devtools: false,
};

export default new Vuex.Store<RootState>(store);
