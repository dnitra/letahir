export interface Option {
    label: string;
    //value can be string, num, enum, etc.
    value: any;
    selected?: boolean;
}

interface selectInputProps {
    options: Option[];
}

export default selectInputProps;
