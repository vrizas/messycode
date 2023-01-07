import { ActionType } from './action'

function threadsReducer (threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads
    case ActionType.CREATE_THREAD:
      return [action.payload.thread, ...threads]
    case ActionType.SEARCH_THREAD:
      return threads.filter(thread => thread.title.toLowerCase().includes(action.payload.keyword.toLowerCase()) || thread.category.toLowerCase().includes(action.payload.keyword.toLowerCase()))
    case ActionType.TOGGLE_LIKE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            likes: thread.likes.includes(action.payload.userId)
              ? thread.likes.filter((id) => id !== action.payload.userId)
              : thread.likes.concat([action.payload.userId])
          }
        }
        return thread
      })
    default:
      return threads
  }
}

export default threadsReducer
