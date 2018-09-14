import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';


const initialState = {
    text: "",
    errorWordslist: [] ,
    correctionsList: {}

};



const textChanged = (state, action) => {
    return updateObject(state, { text: action.value })
}

const ErrorList = (state , action ) => {

    return updateObject(state , {errorWordslist: action.errorList})
}


const CorrectionsList = (state , action ) => {

    return updateObject(state , {correctionsList: action.corrections})
}

    
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TEXT_CHANGED:             return textChanged(state ,action );
        case actionTypes.FETCH_ERROR_LIST_SUCCESS: return ErrorList(state , action);
        case actionTypes.CORRECIONS_LIST:          return CorrectionsList(state , action );      
         
    }
    return state;
};

export default reducer;