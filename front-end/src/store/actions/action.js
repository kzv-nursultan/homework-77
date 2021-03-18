import axiosPosts from "../../axiosPosts";

export const POST_DATA_REQUEST = "POST_DATA_REQUEST";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const SET_ERROR = "SET_ERROR";

export const postDataRequest = () => (
    {type: POST_DATA_REQUEST}
);
export const postDataSuccess = () => (
    {type: POST_DATA_SUCCESS}
);
export const postDataFailure = () => (
    {type: POST_DATA_FAILURE}
);

export const getDataRequest = () => (
    {type:GET_DATA_REQUEST}
);
export const getDataSuccess = (value) => (
    {type:GET_DATA_SUCCESS, value}
);
export const getDataFailure = () => (
    {type:GET_DATA_FAILURE}
);

export const setError = () => (
    {type:SET_ERROR}
);

export const postData = (item) => {
    return async dispatch => {
        try {
            dispatch(postDataRequest());
            await axiosPosts.post('/posts', item);
            dispatch(postDataSuccess());
        } catch (e) {
            dispatch(postDataFailure(e));
        };
    };
};

export const getData = () => {
    return async dispatch => {
        try {
            dispatch(getDataRequest());
            const response = await axiosPosts.get('/posts');
            dispatch(getDataSuccess(response.data));
        } catch (e) {
            dispatch(getDataFailure(e));
        };
    };
};

export const errorHandler = () => {
    return dispatch => {
        dispatch(setError());
    };
};