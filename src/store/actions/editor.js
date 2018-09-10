import * as actionTypes from './actionTypes';


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

export const postTextStart = () => {
    return {
        type: actionTypes.POST_TEXT_SART
    };
};

export const postTextSuccess = (value) => {
    return {
        type: actionTypes.POST_TEXT_SART,
        value: value
    };
};

export const postTextFail = ( error ) => {
    return {
        type: actionTypes.POST_TEXT_FAIL,
        error: error
    };
}
// export const postText = (text) => {
//     return dispatch => {
//         dispatch(postTextStart());
//         const base = "http://test.dhad.me/spellcheck/postajax/?the_post=";
//         axios.post(  base + "نص ")
//             .then( res => {
//                 // const result = [];
//                 // for ( let key in res.data ) {
//                 //     result.push( {
//                 //         ...res.data[key],
//                 //         id: key
//                 //     } );
//                 // }
//                  dispatch(postTextSuccess(...res));
//                 console.log(response.data);
                
//             } )
//             .catch( err => {
//                 dispatch(postTextFail(err));
//             } );
//     };
// };
