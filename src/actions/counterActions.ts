export const ACTION_TYPE_INCREMENT = 'INCREMENT';
export const ACTION_TYPE_DECREMENT = 'DECREMENT';

interface IncrementAction {
    type: typeof ACTION_TYPE_INCREMENT
}

interface DecrementAction {
    type: typeof ACTION_TYPE_DECREMENT
}

export type CounterAction = IncrementAction | DecrementAction

export const incrementAction = (): IncrementAction => {
    return {
        type: ACTION_TYPE_INCREMENT
    }
}
export const decrementAction = (): DecrementAction => {
    return {
        type: ACTION_TYPE_DECREMENT
    }
}
