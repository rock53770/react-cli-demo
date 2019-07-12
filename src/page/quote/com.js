
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class com extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      a:1
    }
  }
  clickHandle() {
    this.setState({
      a:3
    })
    // const {dispatch} = this.props;
    // dispatch({
    //   type:'posts',
    //   posts:{
    //     aa:123
    //   }
    // })
    // this.props.history.push('/quote/carpic')
  }
  render() {
    console.log("com render")
    const {b} = this.props;
    return (
      <div>
        <div onClick={this.clickHandle.bind(this)}>carpic</div>
        <h3>{this.state.a}quote</h3>
        {/* <h3>{posts.aa}</h3> */}
        <div href='http://www.baidu.com'>{b}</div>
      </div>
    );
  }
}
export default com;
// export default connect((state) =>  {
//   console.log("posts")
//   return {
//     posts: state.post.posts
//   }
  
// })(com);