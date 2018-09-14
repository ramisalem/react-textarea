import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Input } from 'antd';
import * as actionCreators from '../store/actions/index';

class Editor  extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     this.props.onChangeText(event.target.value);
     this.props.onSpellCheck(event.target.value);
     
  }
  
  componentWillMount() {
     this.props.onStart();
  }
  
  render() {

         let lisWrongWords = this.props.wrongWords ? this.props.wrongWords : [] ;
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
       <div className="wrong-words">
            <h1> Worng words </h1>
            {lisWrongWords.map( (word) => {
              return <ul> <li>{word}</li></ul>
            })}
        </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        text: state.edi.text ,
        wrongWords: state.edi.errorWordslist 
        
    };
};

const mapDispatchToProps = dispatch => {
  return {
      onStart: () => dispatch(actionCreators.start()),
      onChangeText: (value)   => dispatch(actionCreators.TextChange(value)),
      onSpellCheck: (word)    => dispatch(actionCreators.ErorrWordsList(word)),
      
  }
};

export default connect( mapStateToProps , mapDispatchToProps ) (Editor);
