import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import useCurrencyMultiplier from "../hooks/useCurrencyMultiplier";

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const multiplier = useCurrencyMultiplier(Location);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.unitprice * item.quantity * multiplier);
    }, 0).toFixed(2);

    return (
        <div className="alert alert-primary">
            <span>
                Cart Value: {Location}
                {totalExpenses}
            </span>
        </div>
    );
};

export default CartValue;
