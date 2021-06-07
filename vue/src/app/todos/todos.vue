<template>
  <div>
    <app-header />
    <app-todo-form />
    <app-todo-list :list="todos" />
    <router-view />
  </div>
</template>

<script>
// import { mapState } from "vuex";
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
      // return [];
      return this.$store.state.todos
    }
  },
};
</script>
