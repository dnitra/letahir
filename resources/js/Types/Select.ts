export interface Option {
    label: string;
    //value can be string, num, enum, etc.
    value: any;
    selected?: boolean;
    priceDivisor?: number;
    price?: number;
    priceMultiplier?: number;
}

interface selectInputProps {
    options: Option[];
}

export default selectInputProps;
