
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {createPostAction} from '@/action/post'
class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      a:1
    }
  }
  clickHandle() {
    const {dispatch} = this.props;
    let res = dispatch(createPostAction(654321))
    console.log('res',res)
    this.setState((state,prop) => ({
      a:2
    }))
  }
  render() {
    console.log("quote render")
    const {posts} = this.props;
    return (
      <div>
        <div onClick={this.clickHandle.bind(this)}>carpic</div>
        <h3>{this.state.a}quote</h3>
        <h3>{posts.aa}</h3>
        {this.state.a==1 ? <p id='aaa'>111</p> : <p id='bbb'>222</p>}
      </div>
    );
  }
}

export default connect(state =>  {
  console.log("quote connect")
  return {
    posts: state.post.posts
  }
  
})(Quote);