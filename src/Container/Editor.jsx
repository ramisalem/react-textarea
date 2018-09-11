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
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     //console.log(event.target.value);
     this.props.onChangeText(event.target.value);
     this.setState({
       value: event.target.value 
     });
     let mystate = this.props.text ;
      let  bodyFormData = new FormData();
      bodyFormData.set('the_post' ,  "لاكن" )
    axios({
      method: 'post',
      url: 'http://test.dhad.me/spellcheck/postajax/',
      data: bodyFormData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          //console.log(response);
          console.log('full path ' , response.data.raw_correctionsList)
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
     
  }
  
  componentWillMount() {
     //console.log(this.props.onChangeText);
     this.props.onStart();
     this.props.onChangeText(this.state.value);
  }
  componentDidMount() {

   
  }
  
  render() {
    return (
      <div> 
         <h1>{this.state.value}</h1>
      <form>
             <Input.TextArea
              size="large"
              value={this.state.value}
              placeholder="start typing now "
              onChange={this.handleChange}
              rows={8}
              cols={40}
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
