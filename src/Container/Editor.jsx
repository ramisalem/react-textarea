import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Input } from 'antd';
import * as actionCreators from '../store/actions/index';
import axios from 'axios';

class Editor  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '' ,
     
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     //console.log(event.target.value);
     this.props.onChangeText(event.target.value);
     this.setState({
       value: event.target.value 
     });
     let  bodyFormData = new FormData();
     let curret = this.props.text ;
     bodyFormData.set('the_post' ,  this.props.text )
     axios({
       method: 'post',
       url: 'http://test.dhad.me/spellcheck/postajax/',
       data: bodyFormData,
       config: { headers: {'Content-Type': 'multipart/form-data' }}
       })
       .then(res => {
           console.log(res.data.raw_errList);
     })
       .catch(function (response) {
           //handle error
           console.log(response);
       });
     
  }
  
  componentWillMount() {
     
     this.props.onStart();
     this.props.onChangeText(this.state.value);
  }
  componentDidMount() {
    
      
  }
  
  render() {
    
    return (
      <div className="cont"> 
      <form>
             <Input.TextArea
              className="my-text" 
              size="large"
              value={this.state.value}
              placeholder="start typing now "
              onChange={this.handleChange}
              rows={20}
              cols={80}
             /> 
      </form>   
    </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        text: state.edi.text 
    };
};

const mapDispatchToProps = dispatch => {
  return {
      onStart: () => dispatch(actionCreators.start()),
      onChangeText: (value)   => dispatch(actionCreators.TextChange(value)) 
      
  }
};

export default connect( mapStateToProps , mapDispatchToProps ) (Editor);
