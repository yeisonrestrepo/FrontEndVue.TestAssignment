<template>
  <div class="row">
    <div class="col col-12">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in list" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.title }}</td>
            <td>
              <small>{{ item.description }}</small>
            </td>
            <td>
              <button class="btn-danger btn-small">Delete</button> &nbsp;
              <button class="btn-secondary btn-small">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-todo-list",
  props: { list: Array },
};
</script>
