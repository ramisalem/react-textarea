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
     
    //  this.setState({
    //    value: event.target.value 
    //  });
     this.props.onChangeText(event.target.value);
     this.props.onSpellCheck(this.props.text)
   
     
  }
  
  componentWillMount() {
     
     this.props.onStart();
   
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
              value={this.props.text}
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
        text: state.edi.text ,
        errorlist: state.edi.errorlist 
    };
};

const mapDispatchToProps = dispatch => {
  return {
      onStart: () => dispatch(actionCreators.start()),
      onChangeText: (value)   => dispatch(actionCreators.TextChange(value)),
      onSpellCheck: (word)    => dispatch(actionCreators.ErorrList(word))
  }
};

export default connect( mapStateToProps , mapDispatchToProps ) (Editor);
