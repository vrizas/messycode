import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  CREATE_THREAD: 'CREATE_THREAD',
  SEARCH_THREAD: 'SEARCH_THREAD'
}

function receiveThreadsActionCreator (threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

function createThreadActionCreator (thread) {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      thread
    }
  }
}

function searchThreadActionCreator (keyword) {
  return {
    type: ActionType.SEARCH_THREAD,
    payload: {
      keyword
    }
  }
}

function asyncCreateThread ({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const thread = await api.createThread({ title, body, category })
      dispatch(createThreadActionCreator(thread))
      alert('Thread created')
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

function asyncSearchThread (keyword) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const threads = await api.getAllThreads()
      dispatch(receiveThreadsActionCreator(threads))
      dispatch(searchThreadActionCreator(keyword))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveThreadsActionCreator,
  createThreadActionCreator,
  searchThreadActionCreator,
  asyncCreateThread,
  asyncSearchThread
}
