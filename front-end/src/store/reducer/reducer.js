import { GET_DATA_FAILURE, GET_DATA_SUCCESS, GET_DATA_REQUEST, 
    POST_DATA_FAILURE, POST_DATA_SUCCESS, POST_DATA_REQUEST } from "../actions/action";

const initialState = {
    loading:false,
    value:'',
    error:false
};

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case POST_DATA_REQUEST:
            return {...state, loading:true};
        case POST_DATA_SUCCESS:
            return {...state, loading: false};
        case POST_DATA_FAILURE:
            return {...state, error:action.error, loading:false};
        case GET_DATA_REQUEST:
            return {...state, loading:true};
        case GET_DATA_SUCCESS:
            return {...state, value:action.value, loading: false};
        case GET_DATA_FAILURE:
            return {...state, error:action.error, loading:false};
    };
};