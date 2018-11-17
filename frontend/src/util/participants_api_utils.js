import axios from "axios";

export const ADD_NEW_PARTICIPANT = "ADD_NEW_PARTICIPANT";
export const GET_ERRORS = "GET_ERRORS";

export const addNewParticipant = payload => {
    return{
        type: ADD_NEW_PARTICIPANT,
        payload
    }
}


export const createNewParticipant = user => dispatch => {
    axios
        .post("/api/participant", user)
        .then(res => dispatch(addNewParticipant(res)));
}