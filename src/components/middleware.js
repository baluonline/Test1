import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from './../actions/fetchPosts';
import UserHeader from './userHeader';

class middleware extends React.Component {
    componentDidMount() {
        this
            .props
            .fetchPostsAndUsers();
    }
    renderList() {
         return this.props.posts.map(post => {
             return(
                 <div className="item" key={post.id}>
                    <i className="mdi mdi-account"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                        <UserHeader userId={post.userId}>test</UserHeader>
                    </div>
                 </div>
             )
         })
    }
    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}
export default connect(mapStateToProps, {fetchPostsAndUsers})(middleware);