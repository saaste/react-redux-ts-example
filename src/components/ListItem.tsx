import React from 'react';
import { ConnectedProps, useSelector } from 'react-redux';
import connector from './ListItem.connector';
import { AppState } from '../index'

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    parentText: string
}

const ListItem = (props: Props) => {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.changeText(event.target.value)
    }

    const selectorStateText = (state: AppState) => `${props.parentText} - ${state.text}`
    const stateText = useSelector(selectorStateText)

    return (
        <div className="ListItem">
            <p>The parent set this to: {props.parentText}</p>
            <p>And this comes from the state: {stateText}</p>
            <input type="text" onChange={handleOnChange} />
        </div>
    )
}

export default connector(ListItem)
