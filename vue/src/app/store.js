import Vue from "vue";
import Vuex from "vuex";

import { todosState, todosMutations, todosActions }  from './todos'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {...todosState},
	mutations: {...todosMutations},
	actions: {...todosActions}
});
