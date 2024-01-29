import React from 'react';

const GenericDisplay = ({ value, label }) => {
    return (
        <>
            {label && <div className='generic-label'>{label}</div>}
            <div className="generic-display">
                {value}
            </div>
        </>
    );
};

export default GenericDisplay;
