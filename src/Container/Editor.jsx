import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Input } from 'antd';
import * as actionCreators from '../store/actions/index';
import axios from 'axios';

class Editor  extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     this.props.onChangeText(event.target.value);
     this.props.onSpellCheck(this.props.text);
     const StringToArray = this.props.text.split(' ');
     const highlight = StringToArray.filter( (x) => this.props.wrongWords.includes(x));
     console.log(' worong Wrods in the state  ' , highlight);
  }
  
  componentWillMount() {
     this.props.onStart();
  }
  
  render() {
       let val = this.props.text ;
    return (
      <div className="cont"> 
      <form>
             <Input.TextArea
              className="my-text" 
              size="large"
              value={val}
              placeholder="start typing now "
              onChange={this.handleChange}
              rows={20}
              cols={80}
             
             /> 
             <h1> sds</h1>
            <div id='fake_textarea' contenteditable></div>
      </form>   
    </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        text: state.edi.text ,
        wrongWords: state.edi.highlightWords
        
    };
};

const mapDispatchToProps = dispatch => {
  return {
      onStart: () => dispatch(actionCreators.start()),
      onChangeText: (value)   => dispatch(actionCreators.TextChange(value)),
      onSpellCheck: (word)    => dispatch(actionCreators.ErorrList(word)),
      
  }
};

export default connect( mapStateToProps , mapDispatchToProps ) (Editor);
