import React from 'react';
import GenericInput from './GenericInput';
import GenericDisplay from './GenericDisplay';
import GenericButton from './GenericButton';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE, RESET } from '../state/actions/actionTypes';
import { formatDate } from './utils/FormatDate';

const Main = () => {

    const [value, setValue] = React.useState('');

    const mainDisplay = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    const submitValue = () => {
        console.log('Value submitted: ', value);
        dispatch({ type: UPDATE, payload: value });
        setValue('');
    }

    const resetValue = () => {
        dispatch({ type: RESET });
    }

    return (
        <div id='main'>
            <GenericInput value={value} setValue={setValue}/>
            <GenericButton onSubmit={submitValue} display="SUBMIT" />
            <GenericButton onSubmit={resetValue} display="RESET" />
            <GenericDisplay label="VALUE IN STORE" value={mainDisplay.value} />
            <GenericDisplay label="LAST UPDATED" value={mainDisplay.updateTime && formatDate(mainDisplay.updateTime)} />
        </div>
    );
};

export default Main;
