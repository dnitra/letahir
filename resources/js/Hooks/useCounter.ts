import {useEffect, useState} from "react";
import {router, useRemember} from "@inertiajs/react";
import {data} from "autoprefixer";

type useCounterResult = {
    count: number;
    text: string;
    price?: number;
    total: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

type useCounterValues = {
    amount: number;
    singular: string;
}

const useCounter = (initialAmount: number, singular: string, plurals: string[], price?: number): useCounterResult => {
    const restoredAmount=router.restore(singular) as number;
    const [amount, setAmount] = useState<number>(restoredAmount??initialAmount);

    const updateAmount = (newAmount: number): void => {
        if (newAmount >= 1) {
            setAmount(newAmount);
            router.remember(newAmount, singular)
        }
    };


    const getText = (amount: number): string => {
        if (amount === 1) return singular;
        if (amount > 1 && amount < 5) return plurals[0];
        return plurals[1];
    };

    useEffect(() => {
        const restoredData=router.restore(singular) as number;
        if (restoredData) {
            router.remember(restoredData, singular)
        }
    }, []);

    return {
        count: amount,
        text: getText(amount),
        price: price,
        total: Math.floor(price ? price * amount : 0),
        onIncrement: () => updateAmount(amount + 1),
        onDecrement: () => updateAmount(amount - 1),
    };
};


export default useCounter;
