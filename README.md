# Redux demo!

this is for instructional purposes to demonstrate an incredibly simple implementation of the redux store. 
it is not functional as is and needs some updates to be functional. follow the steps in "wiring up the store!"

the first-steps branch contains example code in store.js, rootReducer.js, initialState.js, and actionTypes.js.
    replace example code to wire the store up, then switch back to main and try it from scratch!

the basic-store-implementation branch has already completed those steps;
    try the challenge at the end to build a to-do app!

# Simple React/Redux app that:

1. accepts an input with submit button
2. fires a dispatch to the store with that value with useDispatch
3. reducer stores the value as well as updates the timestamp of the submitted value
4. main component retrieves data from redux with useSelector
5. values rendered on page
6. reset button dispatches to the store to clear data
7. as an IMPORTANT NOTE: state is never modified directly, 
    it is copied and a new iteration of it is returned and overwrites
    the previous iteration.

# Redux flow:

1. store is created in store.js, consuming the root reducer
2. the root reducer initializes the store based on the initial state
3. the app is wrapped in a provider that accepts the state as a property, giving the entire app access to the redux store
4. components update the store with dispatches
5. components read from the store with selectors

# Wiring up the store

0. create a new branch based on main. examine store.js; the most basic implementation is incredibly simple - 
    defining a const store set to the return from the redux function createStore() with the reducer passed into it.

1. decide what data you need to store in state. in this simple app, it's just one value, 
    and needs to be set and reset. start in initialState to declare the structure of the store
    as an object with values. the object can also contain objects and other data types.

2. create action types, in actionTypes.js, based on the actions you need the store to take. 
    for this simple app, only two actions are needed to set and reset the value.

3. in the reducer, update your imports for the action types you created in step 2, and
    update the reducer to handle cases for them. there are many examples; 
    you should only need 2 cases for set and unset.

3. in the main.jsx component, create a dispatch in the revelant function for set and unset, 
    and pass in an object with properties type and payload, with type being set to the relevant
    action type you imported and payload being set to the data you are passing to the reducer.
    in this case, you will pass 'value' as the payload, which is set by GenericInput.

    example: dispatch({type: your_action_type_goes_here, payload: whateverDataYouNeed})

    note: examine the example for reset in the reducer; notice that it does not use the payload.
            no payload is needed if no data is being processed by the reducer in cases like this.

4. in main.jsx, define a const that is set to what is returned from the store in a useSelector(). 
    this is how you will access data in the store.

    example: const someValue = useSelector(state => state.someValue)

5. in main.jsx, notice that there are two GenericDisplays: one to accept the value from
    the text field after it's been saved to the store, and one that's to display the last 
    updated time of the value. in initialState, create a new property for a timestamp.
    then, in the reducer, add that property to the set case and set it to a new Date().
    then you can define a new useSelector in main.jsx to retrieve that value, or you can
    have one property as an object that contains both values and use only one useSelector.

6. in main.jsx, pass the properties from state that you have grabbed with the selector(s)
    and pass them into the components in the jsx return. you should now be able to use the 
    input and buttons to set and to reset the values in the store and see those rendered on the page!

# Challenge: Convert to To-do app

1. update initialvalues to contain an array of todos, think about what data each todo will need to be updatable/deletable
2. update the reducer to create, update, or delete todos
3. update the UI to display todos below the text area instead of a single display
4. update the UI to accomodate for update and delete functionality

have fun :)

-alex

