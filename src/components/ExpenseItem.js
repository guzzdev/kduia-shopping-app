import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import useCurrencyMultiplier from '../hooks/useCurrencyMultiplier';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);
    const multiplier = useCurrencyMultiplier(Location);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };
    console.log(multiplier);

    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td>{Location}{(parseFloat(props.unitprice)*parseFloat(multiplier)).toFixed(2)}</td>
        <td>{Location}{((parseFloat(props.quantity)*parseFloat(props.unitprice))*parseFloat(multiplier)).toFixed(2)}</td>
        <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;