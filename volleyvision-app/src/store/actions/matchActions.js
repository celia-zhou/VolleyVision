export const createMatch = (match) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('matches').add({
            ...match,
            number: match.number,
            date: match.date,
            opponent: match.opponent,
            tournament: match.tournament,
            location: match.location,
            winorloss: match.winorloss,
            authorID: 123456,
            createdAt: new Date()
        })
        dispatch({ type:'CREATE_MATCH', match})
    }
};