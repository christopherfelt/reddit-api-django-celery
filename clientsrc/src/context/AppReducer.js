export default (state, action) => {
    switch (action.type){
        case "GET_SONGS":
            return {
                ...state,
                loading: false,
                songs: action.payload,
            }
        default:
            return state;
    }
}