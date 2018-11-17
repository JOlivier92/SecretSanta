import { combineReducers } from 'redux';
import {roomReducer} from './room_reducer'
import participantsReducer from './participants_reducer';

const entitiesReducer = combineReducers({
    rooms: roomReducer,
     participants: participantsReducer
});

export default entitiesReducer;
