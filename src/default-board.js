import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description:
            't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        },
        {
          description:
            't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
          name: 'second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description:
            't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description:
            't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description:
            't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
