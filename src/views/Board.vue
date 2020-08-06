<template>
  <div class="board">
    <div class="flex flex-row items-start ">
      <div
        class="column"
        v-for="(column, $index) of board.columns"
        :key="$index"
      >
        <div class="flex items-center mb-2 font-bold">
          {{ column.name }}
        </div>
        <div class="list-reset">
          <div
            class="task"
            v-for="task of column.tasks"
            :key="task.id"
            @click="gotToTask(task)"
          >
            <span class="w-full flex-no-shrink font-bold">
              {{ task.name }}
            </span>
            <p
              class="w-full flex-no-shrink  mt-1 text-sm"
              v-if="task.description"
            >
              {{ task.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="task-bg" v-if="isTaskOpen" @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['board']),
    isTaskOpen() {
      return this.$route.name === 'task'
    }
  },
  methods: {
    gotToTask(task) {
      this.$router.push({
        name: 'task',
        params: {
          id: task.id
        }
      })
    },
    close() {
      this.$router.push({ name: 'board' })
    }
  }
}
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0, 0, 0, 0.5);
}
</style>
