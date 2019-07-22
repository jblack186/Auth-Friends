import { ADD_FRIEND,
     LOGIN_START,
	LOGIN_SUCCESS,
    LOGIN_FAILED,
    GET_FRIENDS_START,
	GET_FRIENDS_SUCCESS,
	GET_FRIENDS_FAILED, } from './actions'


const initialState = {
    username: '',
    password: '',
    isLoading: false,
    errorMessage: null,
    friends: []
}


export default function(state= initialState, action) {
    switch (action.type){
        case ADD_FRIEND: {
            const { friends } = action.payload
        }
    
    case LOGIN_START: {
        return {
            ...state,
            isLoading: true,
        }
    }
    case LOGIN_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            errorMessage: null,
        }
    }
    case LOGIN_FAILED: {
        return {
            ...state,
            isLoading: false,
            errorMessage: action.payload.message,
        }
    }

    case GET_FRIENDS_START: {
        return {
            ...state,
            isLoading: true,
        }
    }
    case GET_FRIENDS_SUCCESS: {
        const { friends } = action.payload
        return {
            ...state,
            isLoading: false,
            errorMessage: null,
            friends,
        }
    }
    case GET_FRIENDS_FAILED: {
        return {
            ...state,
            isLoading: false,
            errorMessage: action.payload.message,
        }
    }

    default:
        return state
}
}


