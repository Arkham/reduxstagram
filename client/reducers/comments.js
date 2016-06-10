import _ from 'lodash';

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      return _.reject(state, (_, index) => {
        return index === action.index;
      });
    default:
      return sate;
  }

  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
