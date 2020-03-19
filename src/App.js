import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Todos from './components/Todos';
import FarwardRefs from './components/ref';
import  updateUser  from './actions/user-actions';
import {pageOne, pageTwo} from './components/routerPage';
import middleware from './components/middleware';

class App extends React.Component{
  constructor(props){
    super(props);
    this.onUserUpdate = this.onUserUpdate.bind(this);
  }
  onUserUpdate(e){
    this.props.onUserUpdate(e.target.value);
  }
  render(){
    return (
      <div>
      <h1> React router</h1>
        <BrowserRouter>
          <Route path="/" exact component={pageOne} />
          <Route path="/pagetwo" exact component={pageTwo} />
          <Route path="/middle" exact component={middleware} />
          {/* <Route path="/" exact component={FarwardRefs} />
          <Route path="/todos" component={Todos} /> */}

        </BrowserRouter>

          <input type="text" onChange={(e) => this.onUserUpdate(e)} />
          See my username {this.props.user}
        </div>
    );
  }
}
const mapStateToProps = state => {
    return {
      products:state.products,
      user:state.user
    }
}

const mapActionsToProps =(dispatch,props) => {
  return bindActionCreators({onUserUpdate:updateUser},dispatch);
}


export default connect(mapStateToProps,mapActionsToProps)(App);

