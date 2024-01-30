import initialState from './initialState';  

// importing the action types to use in the switch statement
// they will also be used in the component level dispatches

import { SOME_GENERIC_ACTION, ANOTHER_GENERIC_ACTION, RESET_ALL, actionTypes } from '../actions/actionTypes';  
  
function rootReducer(state = initialState, action) { 
  
  // action will have two props, type and payload
  // type is used to determine the action taken
  // payload is the data passed along to update the store
  // these are all just example cases;
  // look at the differences in how they set data.
  // you can use them to get started with set and unset, 
  // and then delete them as you go!

  switch (action.type) {  
    case SOME_GENERIC_ACTION:  
      return { 
        ...state, 
        one_property: action.payload 
      }  
    case ANOTHER_GENERIC_ACTION:
      return { 
        ...state, 
        another_property: action.payload 
      }
    case actionTypes.SOME_GENERIC_ACTION_SET.START:
      return { 
        ...state, 
        a_set_of_properties: {
          ...state.a_set_of_properties,
          property_one: action.payload.property_one,
          property_two: action.payload.property_two,
          property_three: action.payload.property_three,
        }
      }
    case actionTypes.SOME_GENERIC_ACTION_SET.SUCCESS:
      return { 
        ...state, 
        a_set_of_properties: {
          ...state.a_set_of_properties,
          property_array: action.payload.property_array,
          property_object: action.payload.property_object,
        }
      }
    case actionTypes.SOME_GENERIC_ACTION_SET.ERROR:
      return { 
        ...state, 
        error: action.payload.error 
      }
    case actionTypes.SOME_GENERIC_ACTION_SET.RESET:
      return { ...state, 
        a_set_of_properties: initialState.a_set_of_properties 
      }
    case RESET_ALL:
      return initialState;
    default:  
      return state;  
  }
  
}  
  
export default rootReducer;  