import React from 'react';
import GenericInput from './GenericInput';
import GenericDisplay from './GenericDisplay';
import GenericButton from './GenericButton';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate } from './utils/FormatDate';
//import the action(s) you need from the actions folder below this line

const Main = () => {

    const [value, setValue] = React.useState('');

    //useDispatch is a hook that allows us to dispatch actions
    const dispatch = useDispatch();

    const submitValue = () => {
        console.log('Value submitted: ', value);
        setValue('');
        //dispatch for setting the value in the store below this line        
    }

    const resetValue = () => {
        //dispatch for resetting the value in the store below this line
    }

    return (
        <div id='main'>
            <GenericInput value={value} setValue={setValue}/>
            <GenericButton onSubmit={submitValue} display="SUBMIT" />
            <GenericButton onSubmit={resetValue} display="RESET" />
            <GenericDisplay label="VALUE IN STORE" value={""} />
            <GenericDisplay label="LAST UPDATED" value={""} />
        </div>
    );
};

export default Main;
