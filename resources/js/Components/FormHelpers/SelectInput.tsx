import React, { useRef, useEffect, useReducer } from 'react';
import { Option } from '@/Types/Select';
import {InertiaFormProps} from "@inertiajs/react/types/useForm";
import {GenericFormData} from "@/Types/GenericFormData";
import FormErrorMessage from "@/Components/FormHelpers/FormErrorMessage";


enum ActionType {
    OPEN,
    CLOSE,
    SELECT,
}

interface State {
    selectedValue: Option['value'];
    isOpen: boolean;
}

interface Props<T> {
    label: string;
    options: Option[];
    form: InertiaFormProps<T & GenericFormData>
}


const reducer = (state: State, action: { type: ActionType; value?: Option['value'] }) => {
    switch (action.type) {
        case ActionType.OPEN:
            return { ...state, isOpen: true };
        case ActionType.CLOSE:
            return { ...state, isOpen: false };
        case ActionType.SELECT:
            return { ...state, selectedValue: action.value, isOpen: false };
        default:
            return state;
    }
};


const SelectInput: React.FC<Props<any>> = ({
                                               label,
                                               options,
                                               form,
                                           }) => {
    const [state, dispatch] = useReducer(reducer, {
        selectedValue: options[0].value,
        isOpen: false,
    });
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const selectedOption = options.find((option) => option.selected);
        if (selectedOption) {
            dispatch({ type: ActionType.SELECT, value: selectedOption.value });
        }

        const checkIfClickedOutside = (e: MouseEvent) => {
            if (state.isOpen && selectRef.current && !selectRef.current.contains(e.target as Node)) {
                dispatch({ type: ActionType.CLOSE });
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [state.isOpen, options]);


    const handleSelect = (option: Option) => {
        const value = option.value;
        dispatch({ type: ActionType.SELECT, value });
        form.setData({
            ...form.data,
            [label]: value,
        });
    }

    return (
        <>
            <div className="w-full relative inline-block text-gray-700" id='pravidelnost' ref={selectRef}>
                <div
                    className={`p-2 bg-white border rounded ${state.isOpen ? 'border-gray-600' : 'border-gray-300'} cursor-pointer w-full flex justify-between items-center`}
                    onClick={() => dispatch({ type: ActionType.OPEN })}
                >
                    <span>{options.find((option) => option.value === state.selectedValue)?.label}</span>
                    <span className="ml-2">&#9660;</span> {/* Down arrow indicating the dropdown */}
                </div>
                {state.isOpen && (
                    <ul
                        className="absolute mt-2 w-full max-h-40 overflow-y-auto bg-white border rounded border-gray-300 shadow-lg z-30"
                        style={{ top: selectRef.current?.offsetHeight }}
                    >
                        {options.map((option) => (
                            <li
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className={`w-full px-4 py-2 cursor-pointer ${
                                    state.selectedValue === option.value ? 'bg-gray-200' : 'hover:bg-gray-100'
                                }`}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <FormErrorMessage error={form.errors[label]} />
        </>

    );
};

export default SelectInput;
