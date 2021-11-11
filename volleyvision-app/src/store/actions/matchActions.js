export const createMatch = (match) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('matches').add({
            ...match,
            opponent: match.opponent,
            number: match.number,
            winorloss: match.winorloss,
            authorID: 123456,
            createdAt: new Date()
        })
        dispatch({ type:'CREATE_MATCH', match})
    }
};