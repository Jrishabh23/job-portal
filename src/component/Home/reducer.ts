import { GET_DETAILS, GET_LIST_FAILED, GET_LIST_SUCCESS } from "./action";
const result = {
    isFetching: false,
    response: [],
};
const listReducers = (state: any = result, action: any) => {
    switch (action.type) {
        case GET_DETAILS:
            return { ...state, isFetching: true };
        case GET_LIST_SUCCESS:
            return { ...state, isFetching: false, response: action.results };
        case GET_LIST_FAILED:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};
export default listReducers;
