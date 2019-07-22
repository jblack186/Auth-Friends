import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {getAccount} from './actions'

class FriendsList extends React.Component{

    componentDidMount(){
        this.props.getAccount()
    }

    render(){
        console.log(this.props)
        return(
            <div>
                yo
            </div>
        )
    }
    }

    // const mapStateToProps = (state) => ({
    //    friends: state.friends
    // })
    
const mapDispatchToProps = {
    getAccount,
}

    export default withRouter(
        connect(
            null, mapDispatchToProps
           
        )(FriendsList)
    )

