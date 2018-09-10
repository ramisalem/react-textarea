import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    text: ""
};




const textChanged = (state, action) => {
    return updateObject(state, { text: action.value })
}

const postText = (state) => {
    return {
        ...state 
    }
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TEXT_CHANGED: return textChanged(state ,action );
        case actionTypes.POST_TEXT_SUCCESS: return postText()
    }
    return state;
};

export default reducer;