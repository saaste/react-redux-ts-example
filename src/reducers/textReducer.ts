import { ACTION_TYPE_CHANGE_TEXT, TextAction } from '../actions/textActions';

const initialState: string = 'Initial'

const textReducer = (state = initialState, action: TextAction) => {
    switch (action.type) {
        case ACTION_TYPE_CHANGE_TEXT:
            return action.payload;
        default:
            return state;
    }
}

export default textReducer
