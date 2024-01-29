import initialState from './initialState';  
import { UPDATE, RESET } from '../actions/actionTypes';  
  
function rootReducer(state = initialState, action) {  
  switch (action.type) {  
    case UPDATE:  
      return { 
        ...state, 
        mainDisplay: { 
          value: action.payload, 
          updateTime: new Date() 
        }
      };   
    case RESET:
      return { 
        ...state, 
        mainDisplay: { 
          value: "", 
          updateTime: new Date() 
        } 
      };
    default:  
      return state;  
  }  
}
  
export default rootReducer;  