
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      a:1
    }
  }
  clickHandle() {
    const {dispatch} = this.props;
    dispatch({
      type:'posts',
      posts:{
        aa:123
      }
    })
    // this.props.history.push('/quote/carpic')
  }
  render() {
    console.log("Quote")
    const {posts} = this.props;
    return (
      <div>
        <div onClick={this.clickHandle.bind(this)}>carpic</div>
        <h3>{this.state.a}quote</h3>
        <h3>{posts.aa}</h3>
      </div>
    );
  }
}

export default connect(state => ({
  posts: state.post.posts
}))(Quote);