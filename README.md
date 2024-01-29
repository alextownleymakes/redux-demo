# Redux demo!

Simple React/Redux app that:

1. accepts an input with submit button
2. fires a dispatch to the store with that value with useDispatch
3. reducer stores the value as well as updates the timestamp of the submitted value
4. main component retrieves data from redux with useSelector
5. values rendered on page
6. reset button dispatches to the store to clear data

Redux flow:

1. store is created in store.js, consuming the root reducer
2. the root reducer initializes the store based on the initial state
3. the app is wrapped in a provider that accepts the state as a property, giving the entire app access to the redux store
4. components update the store with dispatches
5. components read from the store with selectors

Challenge: Convert to To-do app

1. update initialvalues to contain an array of todos, think about what data each todo will need to be updatable/deletable
2. update the reducer to create, update, or delete todos
3. update the UI to display todos below the text area instead of a single display
4. update the UI to accomodate for update and delete

have fun :)

-alex
