import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';

class Editor  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState( {
      value: event.target.value
    });
    this.props.onChangeText(this.state.value);
    
  }
  
  componentWillMount() {
     //console.log(this.props.onChangeText);
     this.props.onStart();
    
  }
  
//  handleChange = (event) => {
//    event.preventDefault();
//    //this.props.onChangeText(event.target.value);
//    console.log(this.props.onChangeText(event.target.value));
   
//  }

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
      onChangeText: (value) => dispatch(actionCreators.TextChange(value))
      
  }
};

export default connect( mapStateToProps , mapDispatchToProps ) (Editor);
