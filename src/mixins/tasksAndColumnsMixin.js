export default {
  props: {
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    board: {
      type: Object,
      required: true
    }
  },
  methods: {
    moveTaskOrColumn(e, toTasks, toColumnIndex, toTaskIndex) {
      const type = e.dataTransfer.getData('type')
      if (type === 'task') {
        this.moveTask(
          e,
          toTasks,
          toTaskIndex !== undefined ? toTaskIndex : toTasks.length
        )
      } else {
        this.moveColum(e, toColumnIndex)
      }
    },
    moveColum(e, toColumnIndex) {
      const fromColumnIndex = e.dataTransfer.getData('from-column-index')
      this.$store.commit('MOVE_COLUMN', {
        fromColumnIndex,
        toColumnIndex
      })
    },
    moveTask(e, toTasks, toTaskIndex) {
      const fromColumnIndex = e.dataTransfer.getData('from-column-index')
      const fromTaskIndex = e.dataTransfer.getData('from-task-index')
      const fromTasks = this.board.columns[fromColumnIndex].tasks
      this.$store.commit('MOVE_TASK', {
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      })
    }
  }
}
