import axios from 'axios'

export const ADD_FRIEND = 'ADD_FRIEND'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
// our loading state - sets to this immediately
export const GET_FRIENDS_START = 'GET_ACCOUNT_START'
// if the request completes successfully
export const GET_FRIENDS_SUCCESS = 'GET_ACCOUNT_SUCCESS'
// if the request fails
export const GET_FRIENDS_FAILED = 'GET_ACCOUNT_FAILED'

export function addFriend(id, name, age, email){
    return {
        type: ADD_FRIEND,
        payload: {
            id,
            name,
            age,
            email
        }
    }
}

export function getAccount () {
	// can return a function because we're using redux-thunk
	return (dispatch) => { // receives direct access to the dispatcher
		// enter the "loading" state
		dispatch({ type: GET_FRIENDS_START })

		// const headers = {
		// 	Authorization: localStorage.getItem('token'),
		// }

axios.get('http://localhost:5000/')
			.then((res) => {
				dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.friends })
			})
			.catch((err) => {
				dispatch({ type: GET_FRIENDS_FAILED, payload: err.response.data })
			})
	}
}

export function login(username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START })

        return axios.post('http://localhost:5000/api/login', {username, password})
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            console.log(res.data)
            dispatch({type: LOGIN_SUCCESS})
        })
        .catch((err) => {
            const payload = err.response ? err.response.data: err
            dispatch({ type: LOGIN_FAILED, payload })
        })
    }
}