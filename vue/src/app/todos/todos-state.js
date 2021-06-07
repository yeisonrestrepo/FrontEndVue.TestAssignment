const defaultTodoState = {
	todo: {},
	index: null,
};

export const todosState = {
	todos: [
		{
			title: "Create nice components",
			description: "chop chop chop",
		},
		{
			title: "Hook up logic",
			description: "This is where the fun begins",
		},
		{
			title: "Apply magic dust",
			description: "Sprinkle sprinkle",
		},
	],
	editableTodo: {
		todo: {},
		index: null,
	},
};

export const todosMutations = {
	ADD_OBJECT_TO_LIST(state, newTodo) {
		state.todos.push(newTodo);
	},

	SET_EDITABLE_VALUE(state, payload) {
		Object.assign(state.editableTodo, payload);
	},

	DELETE_OBJECT_BY_ID(state, todoId) {
		state.todos.splice(todoId, 1);
	},

	UPDATE_VALUE(state, payload) {
		Object.assign(state.todos[payload.index], payload.todo);
	},

	RESET_SELECTED_VALUE(state) {
		Object.assign(state.editableTodo, defaultTodoState);
	},
};

export const todosActions = {
	ADD_NEW_TODO_OBJECT({ commit }, newTodo) {
		commit("ADD_OBJECT_TO_LIST", newTodo);
	},

	DELETE_TODO_OBJECT({ commit }, todoId) {
		commit("DELETE_OBJECT_BY_ID", todoId);
	},

	LOAD_EDITABLE_TODO({ commit }, payload) {
		commit("SET_EDITABLE_VALUE", payload);
	},

	UPDATE_TODO_OBJECT({ commit }, payload) {
		commit("UPDATE_VALUE", payload);
		commit("RESET_SELECTED_VALUE");
	},
};
