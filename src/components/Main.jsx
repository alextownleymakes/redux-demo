import React from 'react';
import GenericInput from './GenericInput';
import GenericDisplay from './GenericDisplay';
import GenericButton from './GenericButton';

const Main = () => {

    const [value, setValue] = React.useState('');

    const submitValue = () => {
        console.log('Value submitted: ', value);
        setValue('');
    }

    const resetValue = () => {
        console.log('Value reset');
        setValue('');
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
