import {
  RECEIVE_PARTICIPANTS,
  RECEIVE_PARTICIPANT,
} from '../actions/participant_actions';

const participantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PARTICIPANTS:
      return {};
    case RECEIVE_PARTICIPANT:
      return {};
    default:
      return state;
  }
};

export default participantsReducer;
