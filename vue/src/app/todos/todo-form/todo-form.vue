<template>
  <form>
    <div class="row">
      <div class="col col-5">
        <div class="form-group">
          <label for="input-1">Title</label>
          <input class="input-block" type="text" id="input-1" />
        </div>
      </div>
      <div class="col col-5">
        <div class="form-group">
          <label for="input-2">Description</label>
          <input class="input-block" type="text" id="input-2" />
        </div>
      </div>
      <div class="col col-2">
        <div class="form-group">
          <label>&nbsp;</label>
          <button type="submit" class="input-block btn-primary btn-small">
            Add
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "app-todo-form",
};
</script>
