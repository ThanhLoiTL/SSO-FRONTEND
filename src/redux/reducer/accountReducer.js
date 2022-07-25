import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_FAILED,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS
} from '../action/accoutnAction';

const INITIAL_STATE = {
    userInfor: {
        access_token: "",
        email: "",
        groupWithRoles: {},
        refresh_token: "",
        username: ""
    },
    isLoading: false,
    errorMessage: ""
};

const accountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMessage: ""
            };
        case USER_LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: "",
                userInfor: action.user
            }
        case USER_LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMessage: ""
            };
        case USER_LOGOUT_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error
            };
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: "",
                userInfor: {
                    access_token: "",
                    email: "",
                    groupWithRoles: {},
                    refresh_token: "",
                    username: ""
                }
            }
        default: return state;
    }
};

export default accountReducer;