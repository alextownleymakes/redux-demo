import initialState from './initialState';  
import { todos } from '../actions/actionTypes';  
  
function rootReducer(state = initialState, action) {

  const { create_todo, update_todo, complete_todo, delete_todo, reset_todos } = todos;
  const todoList = [...state.todos];

  switch (action.type) { 
    case create_todo:
      const newTodo = {
        id: todoList.length,
        title: action.payload,
        completed: false,
        updateDate: new Date(),
      }
      todoList.push(newTodo);
      return { 
        ...state, 
        todos: todoList
      };   

    case update_todo:
      const updateTodo = todoList.find(todo => todo.id === action.payload.id);
      updateTodo.title = action.payload.title;
      updateTodo.updateDate = new Date();
      return { 
        ...state, 
        todos: todoList
      };

    case complete_todo:
      const completeTodo = todoList.find(todo => todo.id === action.payload.id);
      completeTodo.completed = true;
      completeTodo.updateDate = new Date();
      return { 
        ...state, 
        todos: todoList
      };

    case delete_todo:
      const deleteTodo = todoList.find(todo => todo.id === action.payload.id);
      todoList.splice(todoList.indexOf(deleteTodo), 1);
      return { 
        ...state, 
        todos: todoList
      };

    case reset_todos:
      return { 
        ...state, 
        todos: []
      };

    default:  
      return state;  
  }  
}
  
export default rootReducer;  