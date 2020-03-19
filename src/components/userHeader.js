import React from "react";
import {connect} from 'react-redux';
// import {fetchPostsAndUsers} from '../actions/fetchPosts';


class UserHeader extends React.Component{
   /*  componentDidMount() {
        this
            .props
            .fetchPostsAndUsers(this.props.userId)
    } */
    render(){
        const  user = this.props.users;
        if(!user) {
            return null
        }
        return <div className="primary">  user name : {user.name} </div>
    }
}
/* 
class UserHeader extends React.Component {
    componentDidMount() {
        this
            .props
            .fetchUser(this.props.userId)
    }
    render() {
        const { user }= this.props;
        if(!user) {
            return null
        }
        return (
            <div  color="red">
            Balaji
            </div>
        )
    }
}
 */
const mapStateToProps = (state,ownProps) => {
    return {users: state.users.find(user => user.id===ownProps.userId)}
}
export default connect(mapStateToProps)(UserHeader);