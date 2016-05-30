import _ from 'lodash';

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('increment likes');
      let copy = _.map(state, _.clone);
      copy[action.index].likes++;
      return copy;
      break;
    default:
      return state;
  }
}

export default posts;
