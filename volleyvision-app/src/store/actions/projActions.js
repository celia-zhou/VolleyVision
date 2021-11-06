export const signupForm = (proj) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...proj,
            email: 'a@a.com',
            id: '123456',
            type: 'playa'
        }).then(() => {
            dispatch({TYPE: 'CREATE_PROJ', proj});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJ_ERROR', err});
        })
        
    }
};