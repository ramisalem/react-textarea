import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
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
     this.setState({
       value: event.target.value 
     });
    //  this.props.onChangeText(event.target.value);
    //  let mystate = this.props.text ;
    //   let  bodyFormData = new FormData();
    //   bodyFormData.set('the_post' ,  "لاكن" )
    // axios({
    //   method: 'post',
    //   url: 'http://test.dhad.me/spellcheck/postajax/',
    //   data: bodyFormData,
    //   config: { headers: {'Content-Type': 'multipart/form-data' }}
    //   })
    //   .then(function (response) {
    //       //handle success
    //       console.log(response);
    //       console.log('full path ' , response.data.spellErrors)
    //   })
    //   .catch(function (response) {
    //       //handle error
    //       console.log(response);
    //   });
     
  }
  
  componentWillMount() {
     //console.log(this.props.onChangeText);
     this.props.onStart();
    // this.props.onPostText(this.props.text);
  }
  componentDidMount() {

  axios.get('https://www.googleapis.com/books/v1/volumes?q=search+harry')
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  }
  
  render() {
    return (
      <div> 
         <h1>{this.state.value}</h1>
      <form>
            <textarea  
              placeholder="Start typing " 
              onChange={this.handleChange} 
             value={this.state.value}  
             cols={40} rows={10} />
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
