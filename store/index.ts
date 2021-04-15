import { getAccessorType } from 'typed-vuex'
import * as user from '@/store/user';
import * as todo from '@/store/todo';
import * as age from '@/store/age';

import { Store } from 'vuex'
// import { initializeStores } from '~/utils/store-accessor'
// const initializer = (store: Store<any>) => initializeStores(store)
// export const plugins = [initializer]
// export * from '~/utils/store-accessor'

export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {}

export const accessorType = getAccessorType({
    state,
    getters,
    mutations,
    actions,
    modules: {
        user,
        todo,
        age
    },
})