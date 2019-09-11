<template>
  <div id="app">
    <div class="row">
      <div class="col col-12">
        <h1>My fancy todo app</h1>
      </div>
    </div>

    <form>
      <div class="row">
        <div class="col col-5">
          <div class="form-group">
            <label for="input-1">Title</label>
            <input class="input-block" type="text" id="input-1">
          </div>
        </div>
        <div class="col col-5">
          <div class="form-group">
            <label for="input-2">Description</label>
            <input class="input-block" type="text" id="input-2">
          </div>
        </div>
        <div class="col col-2">
          <div class="form-group">
            <label>&nbsp;</label>
            <button type="submit" class="input-block btn-primary btn-small">Add</button>
          </div>
        </div>
      </div>
    </form>

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
            <tr>
              <td>1</td>
              <td>Create nice components</td>
              <td><small>chop chop chop</small></td>
              <td>
                <button class="btn-danger btn-small">Delete</button> &nbsp;
                <button class="btn-secondary btn-small">Edit</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Hook up logic</td>
              <td><small>This is where the fun begins</small></td>
              <td>
                <button class="btn-danger btn-small">Delete</button> &nbsp;
                <button class="btn-secondary btn-small">Edit</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Apply magic dust</td>
              <td><small>Sprinkle sprinkle</small></td>
              <td>
                <button class="btn-danger btn-small">Delete</button> &nbsp;
                <button class="btn-secondary btn-small">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
