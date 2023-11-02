
import React from 'react';
import FormInput from '@/Types/FormInput';

interface PropertyDataProps {
    form: { data: Record<string, any> };
    formInfo: FormInput[];
}

function FormSummary({ form, formInfo }: PropertyDataProps) {
    return (
        <div className="flex flex-col gap-2">
            {formInfo.map((item, index) => (
                <div className="flex justify-between" key={index}>
                    <div>{item.title}</div>
                    <div>{(item.label === "price") ? form.data[item.label] + ' Kč': form.data[item.label] }</div>
                </div>
            ))}
        </div>
    );
}
export default FormSummary;
