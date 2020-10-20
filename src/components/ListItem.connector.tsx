import { connect } from "react-redux"
import { changeTextAction } from "../actions/textActions"
import { RootState } from "../reducers"

const mapState = (state: RootState) => ({
    stateText: state.text
})

const mapDispatch = {
    changeText: changeTextAction,
}

const connector = connect(mapState, mapDispatch)

export default connector


