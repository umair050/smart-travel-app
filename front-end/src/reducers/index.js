import{ combineReducers} from 'redux';
 
import authReducer from "./auth.reducer";
const reducer={
    authReducer
};
export default combineReducers(reducer);