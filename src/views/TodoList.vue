<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ResponseStatus } from "@/types/ResponseEntity";
import { Todo } from "@/types/Todo";
import TodoService from "@/services/todo.service";
import ProfileComp from "@/components/ProfileComp.vue";
import draggable from "vuedraggable";

const notDone = ref<Todo[]>([]);
const doing = ref<Todo[]>([]);
const done = ref<Todo[]>([]);

onMounted(() => {
  getAllTodosGroupByStatus();
});

// 모든 Todo 조회
const getAllTodosGroupByStatus = async () => {
  try {
    const response = await TodoService.getAllTodosGroupByStatus();
    if (response.data._statusCode === ResponseStatus.OK) {
      if (response.data._data === null) return null;
      notDone.value = response.data._data.notDone; // ref객체의 불변성: 재할당은 되지만 값을 변경하는건 안됨
      doing.value = response.data._data.doing;
      done.value = response.data._data.done;
    }
  } catch (e) {
    console.log(e);
  }
};

function getAllTodosGroupByStatus2() {
  TodoService.getAllTodosGroupByStatus()
    .then((response) => {
      if (response.data._statusCode === ResponseStatus.OK) {
        if (response.data._data === null) return null;
        notDone.value = response.data._data.notDone;
        doing.value = response.data._data.doing;
        done.value = response.data._data.done;
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

// draggable
const log = (e) => {
  console.log(e);
};
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
                    :list="notDone"
                    group="people"
                    @change="log"
                    itemKey="id"
                  >
                    <template #item="{ element }">
                      <div class="task-box bg-white mb-3 p-3">
                        {{ element.content }}
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
                    :list="doing"
                    group="people"
                    @change="log"
                    itemKey="id"
                  >
                    <template #item="{ element }">
                      <div class="task-box bg-white mb-3 p-3">
                        {{ element.content }}
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
                  <draggable :list="done" group="people" itemKey="id">
                    <template #item="{ element }">
                      <div class="task-box bg-white mb-3 p-3">
                        {{ element.content }}
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
