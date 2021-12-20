export const GET_DETAILS = "GET_DETAILS";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAILED = "GET_LIST_FAILED";

export const getDetails = () => {
    console.log("This is action page");
    return { type: GET_DETAILS, payload: "" };
};
export const getDetailsSuccessAction = (results: any) => {
    return { type: GET_LIST_SUCCESS, results };
};

export const getDetailsFailedAction = (err: any) => {
    return { type: GET_LIST_FAILED, err };
};
