import * as actionTypes from './actionTypes';
import axios from 'axios';


export const start = (  ) => {
    return {
        type: actionTypes.START,
    };
};

export const TextChange = (value) => {
    return {
        type: actionTypes.TEXT_CHANGED ,
        value: value
    };
};



export const postTextSuccess = (value) => {
    
    return {
        type: actionTypes.POST_TEXT_SART,
        value: value
    };
};



export const fetchErrorWords = () => {
    return {
        type: actionTypes.FETCH_ERROR_LIST ,

    }
}
export const FetchErrorListSuccess = (errorList) => {
    return {
        type: actionTypes.FETCH_ERROR_LIST_SUCCESS,
        errorList: errorList 
    }
}

export const highlightWords = (wrongWords) => {
    return {
        type: actionTypes.HIGHLIGHT_WORDS ,
        wrongWords: wrongWords 
    }
}

export const ErorrList = (text)  => {
    return dispatch => {
       // dispatch(TextChange());
        let  bodyFormData = new FormData();
        bodyFormData.set('the_post' , text )
        axios({
        method: 'post',
        url: 'http://test.dhad.me/spellcheck/postajax/',
        data: bodyFormData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(res => {
            //console.log(res.data.raw_errList);
            const list = res.data.raw_errList ;
            console.log(" error list " , list);
            let  wrongWords = text.split(' ').filter((x) => list.includes(x));
            console.log( 'check if it ' , wrongWords ); 
            dispatch(FetchErrorListSuccess(list));
            dispatch(highlightWords(wrongWords));
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
       
    };
};
