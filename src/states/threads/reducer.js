import { ActionType } from './action'

function threadsReducer (threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads
    case ActionType.CREATE_THREAD:
      return [action.payload.thread, ...threads]
    case ActionType.SEARCH_THREAD:
      return threads.filter(thread => thread.title.toLowerCase().includes(action.payload.keyword.toLowerCase()) || thread.category.toLowerCase().includes(action.payload.keyword.toLowerCase()))
    default:
      return threads
  }
}

export default threadsReducer
