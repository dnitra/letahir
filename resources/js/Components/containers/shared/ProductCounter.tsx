import React from 'react';


interface Product {
    count: number;
    text: string;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CounterButton = ({ product }: { product: Product }) => {
    const buttonClass = 'shrink-1 inline-flex items-center px-2 py-2 border border-transparent ' +
        'leading-6 font-medium rounded-md text-white bg-secondary group hover:bg-secondary-dark hover:text-white ' +
        'focus:outline-none focus:border-secondary focus:shadow-outline-secondary active:bg-secondary ' +
        'transition ease-in-out duration-150 text-3xl';

    return (
        <div className="flex items-center justify-center space-x-8">
            <button
                type="button"
                className={buttonClass}
                onClick={product.onDecrement}
            >
                -
            </button>
            <div className="text-secondary text-3xl font-bold w-40 text-center">
                <span>{product.count}</span>
                <span> {product.text}</span>
            </div>
            <button
                type="button"
                className={buttonClass}
                onClick={product.onIncrement}
            >
                +
            </button>
        </div>

    );

};

export default CounterButton;
