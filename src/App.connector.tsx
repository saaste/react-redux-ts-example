import { connect } from "react-redux"
import { decrementAction, incrementAction } from "./actions/counterActions"
import { RootState } from "./reducers"

const mapState = (state: RootState) => ({
    counter: state.counter
})

const mapDispatch = {
    increment: incrementAction,
    decrement: decrementAction
}

const connector = connect(mapState, mapDispatch)

export default connector


