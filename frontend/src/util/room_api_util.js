export const ADD_NEW_ROOM = "ADD_NEW_ROOM";
export const GET_ERRORS = "GET_ERRORS";

export const addNewRoom = payload => {
    return{
        type: ADD_NEW_ROOM,
        payload
    }
}


export const createNewRoom = requirements => dispatch => {
    axios
        .post("/api/room", requirements)
        .then(res => dispatch(addNewRoom(res)));
}