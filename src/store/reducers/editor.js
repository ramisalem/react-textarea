import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    text: ""
};


const textChanged = (state, action) => {
    return updateObject(state, { text: action.value })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TEXT_CHANGED: return textChanged(state , action);
    }
    return state;
};

export default reducer;