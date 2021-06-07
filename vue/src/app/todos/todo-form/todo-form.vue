<template>
  <form @submit.prevent="!isEditable ? addNewTodo() : editExistingTodo()">
    <div class="row">
      <div class="col col-5">
        <div class="form-group">
          <label for="input-1">Title</label>
          <input
            class="input-block"
            type="text"
            id="input-1"
            v-model="todo.title"
          />
        </div>
      </div>
      <div class="col col-5">
        <div class="form-group">
          <label for="input-2">Description</label>
          <input
            class="input-block"
            type="text"
            id="input-2"
            v-model="todo.description"
          />
        </div>
      </div>
      <div class="col col-2">
        <div class="form-group">
          <label>&nbsp;</label>
          <button type="submit" class="input-block btn-primary btn-small">
            {{ !isEditable ? 'Add' : 'Edit'}}
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "app-todo-form",
  data() {
    return {
      todo: {
        title: "",
        description: null
      },
      editableTodoObj: {}
    };
  },
  methods: {
    addNewTodo() {
        if (this.todo.title && this.todo.description) {
            this.$store.dispatch("ADD_NEW_TODO_OBJECT", this.todo)
            this.todo = {}
        }
    },
    editExistingTodo() {
        if (this.todo.title && this.todo.description) {
            this.$store.dispatch("UPDATE_TODO_OBJECT", {todo: this.todo, index: this.editableTodoObj.index});
            this.todo = {}
        }
    }
  },
  computed: {
      isEditable() {
          const isEditable = this.$store.state.editableTodo.index !== null;
            if (isEditable) {
                Object.assign(this.todo, this.$store.state.editableTodo.todo);
                Object.assign(this.editableTodoObj, this.$store.state.editableTodo);
            }

          return isEditable;
      }
  },
};
</script>
