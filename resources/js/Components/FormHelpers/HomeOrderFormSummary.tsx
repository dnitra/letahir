
import React from 'react';
import FormInput from '@/Types/FormInput';
import PropertyType from "@/Enums/PropertyType";
import RegularityType from "@/Enums/RegularityType";
import ActionMessage from "@/Components/common/ActionMessage";
import PrimaryButton from "@/Components/common/PrimaryButton";
import classNames from "classnames";
import OrderData from "@/Pages/Products/Home/types/OrderDataInterface";

interface PropertyDataProps {
    form: { data: OrderData; errors: Record<string, string>; processing: boolean; recentlySuccessful: boolean;};
    formInfo: FormInput[];
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function HomeOrderFormSummary({form, formInfo, handleSubmit}: PropertyDataProps) {
    const itemClass = 'flex flex-row gap-2 justify-center items-center lg:justify-between lg:items-start'
    return (
        //display none on small but not on large
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <h2 className="text-xl font-bold">
                Shrnutí objednávky:
            </h2>
            <div className={itemClass}>
                <div>Počet pokojů</div>
                <div>{form.data.rooms}</div>
            </div>
            <div className={itemClass}>
                <div>Počet koupelen:</div>
                <div>{form.data.bathrooms}</div>
            </div>
            <div className={itemClass}>
                <div>Pravidelnost:</div>
                <div>{form.data.regularity === RegularityType.SINGLETIME? 'Jednorázově' : form.data.regularity === RegularityType.WEEKLY ? 'Týdně' : form.data.regularity === RegularityType.BIWEEKLY ? 'Dvoutýdně' : 'Měsíčně'}</div>
            </div>
            <div className={itemClass}>
                <div>Typ nemovitosti:</div>
                <div>{form.data.propertyType === PropertyType.Flat ? 'Byt' : 'Dům'}</div>
            </div>
            <ActionMessage on={form.recentlySuccessful} className="mr-3">
                Objednávka byla úspěšně odeslána.
            </ActionMessage>
            <PrimaryButton
                type="submit"
                className={classNames({'opacity-25': form.processing})+'justify-center h-20 w-full lg:h-12 '}
                disabled={form.processing}
            >
                        <span className={'text-xl lg:text-xs'}>
                            Odeslat objednávku za {form.data.price} Kč
                        </span>
            </PrimaryButton>
        </form>
    );
}
export default HomeOrderFormSummary;
