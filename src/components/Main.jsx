import React from 'react';
import GenericInput from './GenericInput';
import GenericButton from './GenericButton';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../state/actions/actionTypes';
import Todo from './Todo';

const Main = () => {

    const [value, setValue] = React.useState('');
    const todoList = useSelector(state => state.todos);

    const dispatch = useDispatch();

    const createTodo = () => {
        console.log('Value submitted: ', value);
        dispatch({ type: todos.create_todo, payload: value });
        setValue('');
    }

    const updateTodo = (id) => {
        console.log('Value submitted: ', value);
        dispatch({ type: todos.update_todo, payload: { id, value } });
        setValue('');
    }

    const completeTodo = (id) => {
        dispatch({ type: todos.complete_todo, payload: id });
    }

    const deleteTodo = (id) => {
        dispatch({ type: todos.delete_todo, payload: id });
    }

    const todoFunctions = {
        updateTodo,
        completeTodo,
        deleteTodo
    }
    
    const displayTodos = todoList.map((todo, index) => {
        return <Todo key={index} todo={todo} todoFunctions={todoFunctions} />;
    });

    return (
        <div id='main'>
            <GenericInput value={value} setValue={setValue}/>
            <GenericButton onSubmit={createTodo} display="NEW TODO" />
            {todoList.length > 0 && displayTodos}
        </div>
    );
};

export default Main;
