import React from 'react';
import GenericButton from './GenericButton';
import { useDispatch } from 'react-redux';
import { UPDATE } from '../state/actions/actionTypes';

const GenericInput = () => {

    const dispatch = useDispatch();

    const [value, setValue] = React.useState('');

    const submitValue = () => {
        console.log('Value submitted: ', value);
        dispatch({ type: UPDATE, payload: value });
        setValue('');
    }

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter a value"
                className='generic-input'
            />
            <br/>
            <GenericButton onSubmit={submitValue} display="SUBMIT" />
        </>
    );
};

export default GenericInput;
