import React from 'react';

const GenericInput = ({value, setValue}) => { 

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
        </>
    );
};

export default GenericInput;
