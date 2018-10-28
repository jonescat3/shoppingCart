//redux- when things are added to the cart, it is stored in the redux store
import { createStore, combineReducers } from 'redux'
import cartReducer from '../features/cart/reducer'

//redux Devtools extension 
// if the function exist, this will call the function

const rootReducer = combineReducers({
    cart: cartReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION()
)
export default store