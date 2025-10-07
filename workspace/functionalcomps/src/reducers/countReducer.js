export function countReducer(state, action) {
    switch (action.type) {
        // {type: 'INCREMENT', payload: 10}
        case 'INCREMENT':
            return {
                count: state.count + action.payload
            }
        case 'DECREMENT':
            // // {type: 'DECREMENT'}
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}