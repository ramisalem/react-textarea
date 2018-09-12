import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';


const initialState = {
    text: "",
    errorlist: []
};




const textChanged = (state, action) => {
    return updateObject(state, { text: action.value })
}

const ErrorList = (state , action ) => {

    return updateObject(state , {errorlist: action.errorList})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TEXT_CHANGED: return textChanged(state ,action );
        case actionTypes.FETCH_ERROR_LIST_SUCCESS: return ErrorList(state , action)
        
    }
    return state;
};

export default reducer;