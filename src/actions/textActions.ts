export const ACTION_TYPE_CHANGE_TEXT = 'CHANGE_TEXT';

interface ChangeTextAction {
    type: typeof ACTION_TYPE_CHANGE_TEXT
    payload: string
}

export type TextAction = ChangeTextAction

export const changeTextAction = (text: string): ChangeTextAction => {
    return {
        type: ACTION_TYPE_CHANGE_TEXT,
        payload: text
    }
}
