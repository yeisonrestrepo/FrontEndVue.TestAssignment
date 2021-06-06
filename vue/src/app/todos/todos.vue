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
  data() {
    return {
      todos: [
        { title: "Create nice components", description: "chop chop chop" },
        { title: "Hook up logic", description: "This is where the fun begins" },
        { title: "Apply magic dust", description: "Sprinkle sprinkle" },
      ],
    };
  },
};
</script>
