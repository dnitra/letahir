import React from 'react';

interface Props {
    label: string;
    name: string;
    value: string | number
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({ label, name, value, checked, onChange } : Props) => {
    return (
        <div
            className="flex flex-col justify-center items-center space-x-0 space-y-2 lg:space-x-8 lg:space-y-0 lg:flex-row"
        >
            <label className="text-secondary text-xl font-light">
                {label}
            </label>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                    className="text-secondary text-xl font-light"
                />
        </div>
);
};

export default RadioInput;
