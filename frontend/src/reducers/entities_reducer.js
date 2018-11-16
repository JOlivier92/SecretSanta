import { combineReducers } from 'redux';
import participantsReducer from './participants_reducer';


const entitiesReducer = combineReducers({
  participants: participantsReducer
});

export default entitiesReducer;
