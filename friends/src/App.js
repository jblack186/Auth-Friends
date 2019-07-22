import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import FriendsList from './FriendsList'

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<PrivateRoute exact path="/" component={Dashboard} />
				<ProtectedRoute exact path="/friends" component={FriendsList} />
				<Route exact path="/login" component={Login} />
			</div>
		)
	}
}

export default App
