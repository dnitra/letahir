import {useEffect, useState} from "react";
import {router} from "@inertiajs/react";

type useCounterResult = {
    count: number;
    text: string;
    onIncrement: () => void;
    onDecrement: () => void;
};

type useCounterValues = {
    amount: number;
    singular: string;
}

const useCounter = (initialAmount: number, singular: string, plurals: string[], price?: number): useCounterResult => {
    const [amount, setAmount] = useState<number>(initialAmount);


    const updateAmount = (newAmount: number): void => {
        if (newAmount >= 1) {
            setAmount(newAmount);
        }
    };

    const getText = (amount: number): string => {
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
