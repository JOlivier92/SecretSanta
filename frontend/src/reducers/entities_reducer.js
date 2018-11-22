import { combineReducers } from 'redux';
import roomReducer from './room_reducer'
import participantsReducer from './participants_reducer';
import adminReducer from './admin_reducer';

const entitiesReducer = combineReducers({
    rooms: roomReducer,
    participants: participantsReducer,
    admin: adminReducer
});

export default entitiesReducer;
