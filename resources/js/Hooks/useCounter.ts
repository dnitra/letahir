import {useState} from "react";

const useCounter = (initialAmount : number, singular : string, plurals : string[]) => {
    const [amount, setAmount] = useState(initialAmount);

    const updateAmount = (newAmount : number) => {
        if (newAmount >= 1) {
            setAmount(newAmount);
        }
    };

    const getText = (amount : number) => {
        if (amount === 1) return singular;
        if (amount > 1 && amount < 5) return plurals[0];
        return plurals[1];
    };

    return {
        count: amount,
        text: getText(amount),
        onIncrement: () => updateAmount(amount + 1),
        onDecrement: () => updateAmount(amount - 1),
    };
};

export default useCounter;
