import React, {useEffect, useState} from 'react';
import PrimaryButton from "@/Components/common/PrimaryButton";
import {InertiaFormProps} from "@inertiajs/react/types/useForm";
import {GenericFormData} from "@/Types/GenericFormData";
import useCounter from "@/Hooks/useCounter";


interface Product {
    amount: number;
    singular: string;
    plurals: string[];
    price: number;
    label: string;
}
interface Props {
    options: Product;
    form: InertiaFormProps<any & GenericFormData>;
}

const CounterButton = ({ options,form }: Props) => {

    const [text, changeText] = useState(options.singular);
    const handleText = (amount: number) => {
        if(amount === 1){
            changeText(options.singular);
            return
        }
        if (amount > 1 && amount < 5){
            changeText(options.plurals[0]);
            return
        }
        changeText(options.plurals[1])
    }

    return (
        <div className="flex w-full items-stretch justify-between" >
            <PrimaryButton
                className="text-3xl"
                type="button"
                onClick={() => {
                    const oldAmount = form.data[options.label];
                    const newAmount = oldAmount - 1 < 0 ? 0 : oldAmount - 1;
                    form.setData({
                        ...form.data,
                        [options.label]: newAmount,
                    })
                    handleText(newAmount)
            }}
            >
                -
            </PrimaryButton>
            <div className="text-secondary text-xl font-bold shrink-0 text-center flex gap-3">
                <span>{form.data[options.label]}</span>
                <span>{text}</span>
            </div>
            <PrimaryButton
                className="text-3xl"
                type="button"
                onClick={() => {
                    form.setData({
                        ...form.data,
                        [options.label]: form.data[options.label] + 1,
                    })
                    handleText(form.data[options.label] + 1)
                }}
            >
                +
            </PrimaryButton>
        </div>

    );

};

export default CounterButton;
