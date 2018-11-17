import { combineReducers } from 'redux';
import {roomReducer} from './room_reducer'

const entitiesReducer = combineReducers({
    rooms: roomReducer
});

export default entitiesReducer;
