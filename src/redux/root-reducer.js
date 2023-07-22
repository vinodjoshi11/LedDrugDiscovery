import { combineReducers } from 'redux';
import LedCompoundSlice from './LedDrug/reducer'; 
const rootReducer = combineReducers({ 
    ledDrugCompound: LedCompoundSlice
});

export default rootReducer;
