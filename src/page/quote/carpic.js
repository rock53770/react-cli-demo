
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Com from './com'
class Carpic extends React.Component {
  cc = {b:1}
  constructor(props) {
    super();
    this.state = {
      a:2,
      b:1
    }

    this.dd = props.postsUI;
  }
  clickHandle() {
    const {dispatch} = this.props;
    console.log(1111)
    this.setState({
      a:3
    })
    this.cc = {b:2}
    // dispatch({
    //   type:'postsui',
    //   postsUI:{
    //     bb:123
    //   }
    // })
    // this.props.history.push('/quote/carpic')
  }
  render() {
    console.log('carpic render')
    const {postsUI} = this.props;
    
    return (
      <div>
        <div onClick={this.clickHandle.bind(this)}>changepostsUI</div>
        <h3>{this.state.a}Carpic</h3>
        <h3>{postsUI.bb}</h3>
        <Com cc={this.cc}></Com>
      </div>
    );
  }
}

export default connect(state => {
  console.log('postsUI')
  return {
    postsUI: state.postListUI.postsUI
  }
  
})(Carpic);