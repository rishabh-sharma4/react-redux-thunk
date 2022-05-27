import { createStore, applyMiddleware } from 'redux';
import { INCREMENT_COUNT } from './action';
import thunk from 'redux-thunk';

const initialState ={
    count:0
};
const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: action.payload,
            };  
        default:
            return state;
    }

};
export default createStore(rootReducer, applyMiddleware(thunk));