<template>
  <div>
    <app-header />
    <app-todo-form />
    <app-todo-list :list="todos" />
    <router-view />
  </div>
</template>

<script>
import { AppHeader } from "../shared/components";
import AppTodoForm from "./todo-form/todo-form.vue";
import AppTodoList from "./todo-list/todo-list.vue";

export default {
  name: "app-todos",
  components: {
    AppHeader,
    AppTodoForm,
    AppTodoList,
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
};
</script>
