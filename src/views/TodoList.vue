<script lang="ts">
import { defineComponent } from "vue";
import ProfileComp from "@/components/ProfileComp.vue";
import draggable from "vuedraggable";

export default defineComponent({
  name: "TodoList",
  components: {
    ProfileComp,
    draggable,
  },
  data() {
    return {
      todo: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      working: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
      done: [
        { name: "item1", id: 8 },
        { name: "item2", id: 9 },
        { name: "item3", id: 10 },
      ],
    };
  },
  methods: {
    // add: function () {
    //   this.list.push({ name: "Juan" });
    // },
    // replace: function () {
    //   this.list = [{ name: "Edgard" }];
    // },
    // clone: function (el) {
    //   return {
    //     name: el.name + " cloned",
    //   };
    // },
    // log: function (evt) {
    //   window.console.log(evt);
    // },
  },
});
</script>

<template>
  <div class="row">
    <div class="col-4">
      <ProfileComp />
    </div>
    <div class="col-8">
      <div class="card">
        <div class="card-header">
          <div class="d-flex align-items-center justify-content-between">
            나의 할일 목록
            <router-link to="/" class="btn btn-info btn-sm">
              <font-awesome-icon icon="plus" />
            </router-link>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <div class="kanban-card card bg-danger">
                <div class="card-header text-white h4 pb-3">To Do</div>
                <div class="card-body">
                  <draggable
                    :list="todo"
                    group="people"
                    @change="log"
                    itemKey="id"
                  >
                    <template #item="{ element, index }">
                      <div class="task-box bg-white mb-3 p-3">
                        {{ element.name }} {{ index }}
                      </div>
                    </template>
                  </draggable>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="kanban-card card bg-warning">
                <div class="card-header text-white h4 pb-3">Working</div>
                <div class="card-body">
                  <draggable
                    :list="working"
                    group="people"
                    @change="log"
                    itemKey="id"
                  >
                    <template #item="{ element, index }">
                      <div class="task-box bg-white mb-3 p-3">
                        {{ element.name }} {{ index }}
                      </div>
                    </template>
                  </draggable>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="kanban-card card bg-success">
                <div class="card-header text-white h4 pb-3">Done</div>
                <div class="card-body">
                  <draggable
                    :list="done"
                    group="people"
                    @change="log"
                    itemKey="id"
                  >
                    <template #item="{ element, index }">
                      <div class="task-box bg-white mb-3 p-3">
                        {{ element.name }} {{ index }}
                      </div>
                    </template>
                  </draggable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kanban-card {
  .card-header {
    font-weight: 700;
  }
  .card-body > div {
    margin-bottom: -1rem;
  }
  .task-box {
    cursor: pointer;
  }
}
</style>
