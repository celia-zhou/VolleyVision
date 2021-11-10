export const createMatch = (match) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('matches').add({
            ...match,
            opponent: 'ABC HS',
            number: '001',
            winorloss: 'win',
            authorFirstName: 'temp1',
            authorLastName: 'temp2',
            authorID: 123456,
            createdAt: new Date()
        })
        dispatch({ type:'CREATE_MATCH', match})
    }
};