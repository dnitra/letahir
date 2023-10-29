import React from 'react';
import PrimaryButton from "@/Components/common/PrimaryButton";


interface Product {
    count: number;
    text: string;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CounterButton = ({ product }: { product: Product }) => {

    return (
        <div className="flex w-full items-stretch justify-between" >
            <PrimaryButton
                className="text-3xl"
                type="button"
                onClick={product.onDecrement}
            >
                -
            </PrimaryButton>
            <div className="text-secondary text-xl font-bold shrink-0 text-center">
                <span>{product.count}</span>
                <span> {product.text}</span>
            </div>
            <PrimaryButton
                className="text-3xl"
                type="button"
                onClick={product.onIncrement}
            >
                +
            </PrimaryButton>
        </div>

    );

};

export default CounterButton;
