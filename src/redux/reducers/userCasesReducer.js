const userCasesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_CASES':
            return action.payload;
        default:
            return state;
    }
}

export default userCasesReducer;