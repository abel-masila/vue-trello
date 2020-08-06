import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin, uuid } from './utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  getters: {
    getTask(state) {
      return id => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    }
  },
  mutations: {
    CREATE_TASK(state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    UPDATE_TASK(state, { task, key, value }) {
      task[key] = value
      // Vue.set(task, key, value)
    },
    MOVE_TASK(state, { fromTasks, toTasks, taskIndex }) {
      const taskTomve = fromTasks.splice(taskIndex, 1)[0]
      toTasks.push(taskTomve)
    },
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns
      const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
      columnList.splice(toColumnIndex, 0, columnToMove)
    }
  }
})
