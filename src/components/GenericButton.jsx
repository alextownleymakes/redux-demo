import React from 'react';

const GenericButton = ({ onSubmit, display }) => {
    return (
        <button onClick={onSubmit} className="generic-button">
            {display}
        </button>
    );
};

export default GenericButton;
