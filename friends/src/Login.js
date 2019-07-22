import React from 'react'
import { connect } from 'react-redux';
import { login } from './actions'
import { withRouter } from 'react-router-dom'


class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

changeHandler = (event) => {
    event.preventDefault()
    this.setState({[event.target.name] : event.target.value})
}

submitHandler = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    this.props.login(username, password)
    .then(() => {
        this.props.history.push('/')
    })
   .catch((err) => {
       console.log(err)
   })
}

submitHandlerTwo = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    this.props.login(username, password)
    .then(() => {
        this.props.history.push('/friends')
    })
   .catch((err) => {
       console.log(err)
   })
}


    render(){
        console.log(this.state)
        const { username, password } = this.state
		const { isLoading, errorMessage } = this.props
        return (
            <div>
                 To logout
                <form onSubmit={this.submitHandler}>
                {errorMessage && <p>{errorMessage}</p>}
               
                    <input placeholder='username' value={this.state.username} onChange={this.changeHandler} name='username'/>
                    <input placeholder='password' value={this.state.password} onChange={this.changeHandler} name='password'/>

                    {isLoading
					? <p>Logging in...</p>
					: <button type="submit">Login</button>}

                </form>
                <form onSubmit={this.submitHandlerTwo}>
               <p>To Friends</p>
                {errorMessage && <p>{errorMessage}</p>}
               
                    <input placeholder='username' value={this.state.username} onChange={this.changeHandler} name='username'/>
                    <input placeholder='password' value={this.state.password} onChange={this.changeHandler} name='password'/>

                    {isLoading
					? <p>Logging in...</p>
					: <button type="submit">Login</button>}

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	errorMessage: state.errorMessage,
})

const mapDispatchToProps = {
	login: login
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Login)
)