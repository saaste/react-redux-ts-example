import React from 'react';
import { ConnectedProps } from 'react-redux';
import connector from './App.connector';
import ListItem from './components/ListItem'

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  // Add internal props here
}

const App = (props: Props) => (
  <div className="App">
    <h1>Current counter {props.counter}</h1>
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
    <ListItem parentText="First" />
    <ListItem parentText="Second" />
  </div>
)

export default connector(App)
