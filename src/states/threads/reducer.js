import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_TALK:
      return [action.payload.talk, ...threads];
    case ActionType.TOGGLE_LIKE_TALK:
      return threads.map((talk) => {
        if (talk.id === action.payload.talkId) {
          return {
            ...talk,
            likes: talk.likes.includes(action.payload.userId)
              ? talk.likes.filter((id) => id !== action.payload.userId)
              : talk.likes.concat([action.payload.userId]),
          };
        }
        return talk;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
