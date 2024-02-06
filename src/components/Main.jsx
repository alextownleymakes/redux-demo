import React from 'react';
import GenericDisplay from './GenericDisplay';
import GenericButton from './GenericButton';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../state/actions/actionTypes';

const { catFacts } = actionTypes;

const Main = () => {

    const [value, setValue] = React.useState('');
    const catFact  = useSelector(state => state.catFacts);

    //useDispatch is a hook that allows us to dispatch actions
    const dispatch = useDispatch();

    const getCatFact = () => {
        console.log('Value submitted: ', value);
        setValue('');
        //dispatch for setting the value in the store below this line  
        dispatch({type: catFacts.request})      
    }

    const resetValue = () => {
        //dispatch for resetting the value in the store below this line
    }

    return (
        <div id='main'>
            <GenericButton onSubmit={getCatFact} display="GET CAT FACT" />
            <GenericDisplay label="A CAT FACT" value={catFact} />
        </div>
    );
};

export default Main;
