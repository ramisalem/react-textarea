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




export const FetchCorrectionList = (corrections) => {
    return {
        type: actionTypes.CORRECIONS_LIST,
        corrections: corrections 
    }
}

export const FetchErrorListSuccess = (errorList) => {
    return {
        type: actionTypes.FETCH_ERROR_LIST_SUCCESS,
        errorList: errorList 
    }
}



export const ErorrWordsList = (text)  => {
    return dispatch => {
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
            const ErrorWordsList = res.data.raw_errList ;
            const correctionList = res.data.raw_correctionsList ;
            console.log(" error list " , correctionList);
            console.log(" error list " , ErrorWordsList);
            const correctWords = {} ;
            for ( let ElementIdentifier in correctionList ) {
                correctWords[ElementIdentifier] = correctionList[ElementIdentifier].value  ;
            }
            console.log("corrct WOrd" , correctWords )
            dispatch(FetchCorrectionList(correctionList));
            dispatch(FetchErrorListSuccess(ErrorWordsList));
            
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
       
    };
};
