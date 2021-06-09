import { combineReducers } from 'redux'
import pageReducer from "./pageReducers"
import otherReducers from "./otherReducers"


const rootReducer = combineReducers({
    page: pageReducer,
    others: otherReducers
})

export default rootReducer