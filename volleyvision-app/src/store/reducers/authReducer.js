const initState = {}

const authReducer = (state = initState,action) => {
    switch(action.type){
        case 'SU_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SU_FAIL':
            console.log('signup fail');
            return {
                ...state,
                authError: 'signupfailed'
            }
            case 'LI_SUCCESS':
                console.log('login success');
                return {
                    ...state,
                    authError: null
                }
            case 'LI_FAIL':
                console.log('login fail');
                return {
                    ...state,
                    authError: 'loginfailed'
                }
                case 'LO_SUCCESS':
                    console.log('logout success');
                    return {
                        ...state,
                        authError: null
                    }
                case 'LO_FAIL':
                    console.log('logout fail');
                    return {
                        ...state,
                        authError: 'logoutfailed'
                    }
        default:
            return state;
    }
}

export default authReducer