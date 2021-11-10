const initState = {}

const matchReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_MATCH':
            console.log('created match', action.match)
            return state;
        case 'CREATE_MATCH_ERROR':
            console.log('created match error', action.err)
            return state;
        default:
            return state;
    }
};

export default matchReducer