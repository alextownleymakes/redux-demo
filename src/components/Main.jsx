import React from 'react';
import GenericInput from './GenericInput';
import GenericDisplay from './GenericDisplay';
import GenericButton from './GenericButton';
import { useSelector, useDispatch } from 'react-redux';
import { RESET } from '../state/actions/actionTypes';

const Main = () => {

    const dispatch = useDispatch();
    const mainDisplay = useSelector(state => state.mainDisplay);

    const resetValue = () => {
        dispatch({ type: RESET });
    }

    return (
        <>
            <GenericInput />
            <GenericButton onSubmit={resetValue} display="RESET" />
            <GenericDisplay label="VALUE IN STORE" value={mainDisplay.value} />
            <GenericDisplay label="LAST UPDATED" value={mainDisplay.updateTime?.toString()} />
        </>
    );
};

export default Main;
