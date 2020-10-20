import { ACTION_TYPE_DECREMENT, ACTION_TYPE_INCREMENT, CounterAction } from '../actions/counterActions';

const initialState: number = 0

const counterReducer = (state = initialState, action: CounterAction) => {
    switch (action.type) {
        case ACTION_TYPE_INCREMENT:
            return state + 1;
        case ACTION_TYPE_DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer
