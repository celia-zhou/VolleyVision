const initState = {
    users: [
        {id: '1', email:'a@test.com', type:'player'},
        {id: '2', email:'b@test.com', type:'player'},
        {id: '3', email:'c@test.com', type:'player'},
    ]
}

const projReducer = (state = initState,action) => {
    switch(action.type){
        case 'CREATE_PROJ':
            console.log('su success');
            return state;
        case 'CREATE_PROJ_ERROR':
            console.log('su fail');
            return state;
        default:
            return state;
    }
}

export default projReducer