import initialState from './initialState';  

// import your  action types to use in the switch statement
// they will also be used in the component level dispatches
  
function rootReducer(state = initialState, action) { 
  
  // action will have two props, type and payload
  // type is used to determine the action taken
  // payload is the data passed along to update the store
  // these are all just example cases;
  // look at the differences in how they set data.
  // you can use them to get started with set and unset, 
  // and then delete them as you go!
  
}  
  
export default rootReducer;  