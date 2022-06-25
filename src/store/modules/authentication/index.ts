import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { getters } from '@/store/modules/authentication/getters';
import { actions } from '@/store/modules/authentication/action';
import { mutations } from '@/store/modules/authentication/mutations';
import { AuthState } from './types';

export const state: AuthState = {
};

export const authentication: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
