import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import { getAccount } from './actions'

class App extends React.Component {
	componentDidMount() {
		this.props.getAccount()
	}

	logout = (evt) => {
		evt.preventDefault()

		localStorage.removeItem('token')
		this.props.history.push('/login')
	}

	render() {
		return (
			<>
				<button type="button" onClick={this.logout}>Logout</button>

				
				
			</>
		)
	}
}

const mapDispatchToProps = {
	getAccount,
}

export default withRouter(
	// first param is mapStateToProps
	connect(null, mapDispatchToProps)(App)
)
