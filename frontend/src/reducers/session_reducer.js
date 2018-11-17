import { RECEIVE_CURRENT_ADMIN } from "../util/session_api_util";

const _nullAdmin = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullAdmin, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_ADMIN:
            return {
                id: action.payload.id,
                email: action.payload.email,
            };
        default:
            return state;
    }
};

export default sessionReducer;
