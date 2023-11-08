import AppLayout from "@/Layouts/AppLayout";
import React, {useEffect} from "react";
import ProductCounter from "@/Components/containers/shared/ProductCounter";
import {router, useForm, useRemember} from "@inertiajs/react";
import PropertyType from "@/Enums/PropertyType";
import useTypedPage from "@/Hooks/useTypedPage";
import RegularityType from "@/Enums/RegularityType";
import {Time} from "@/Types/Time";
import PrimaryButton from "@/Components/common/PrimaryButton";
import FormSection from "@/Components/common/FormSection";
import route from "ziggy-js";
import ActionMessage from "@/Components/common/ActionMessage";
import classNames from "classnames";
import InputLabel from "@/Components/common/InputLabel";
import SelectInput from "@/Components/FormHelpers/SelectInput";
import {Option} from "@/Types/Select";
import useTimer from "@/Hooks/useTimer";
import {Nullable} from "@/Types/Nullable";
import {DATE} from "@/Types/Date";
import TimeInput from "@/Components/FormHelpers/TimeInput";
import TimeInputSettings from "@/Enums/TimeInputSettings";
import ContactForm from "@/Components/FormHelpers/ContactForm";
import FormInput from "@/Types/FormInput";
import HomeOrderFormSummary from "@/Components/FormHelpers/HomeOrderFormSummary";
import FormErrorMessage from "@/Components/FormHelpers/FormErrorMessage";
import validateHomeOrder from "@/Pages/Products/Home/ValidateHomeOrder";
import OrderData from "@/Pages/Products/Home/types/OrderDataInterface";

interface HomeCleaningProducts {
    name: string;
    minPrice: number;
    roomPrice: number;
    bathroomPrice: number;
    multipliers: {
        regularity: {
            [RegularityType.SINGLETIME]: number;
            [RegularityType.WEEKLY]: number;
            [RegularityType.BIWEEKLY]: number;
            [RegularityType.MONTHLY]: number;
        };
    };
}

const products: HomeCleaningProducts = {
    name: 'Home Cleaning',
    minPrice: 900,
    roomPrice: 350,
    bathroomPrice: 400,
    multipliers: {
        regularity: {
            [RegularityType.SINGLETIME]: 0,
            [RegularityType.WEEKLY]: 0.2,
            [RegularityType.BIWEEKLY]: 0.15,
            [RegularityType.MONTHLY]: 0.1,
        },
    },
};


const formInfo: FormInput[] = [
    {
        title: "Počet místností:",
        label: "rooms",
    },
    {
        title: "Počet koupelen:",
        label: "bathrooms",
    },
    {
        title: "Typ nemovitosti:",
        label: "propertyType",
    },
    {
        title: "Celkem cena:",
        label: "price",
    },
];

interface RegularityOption extends Option{
    value: RegularityType;
}

const regularityOptions : RegularityOption[] = [
    { label: 'Jednorázově', value: RegularityType.SINGLETIME },
    { label: 'Týdně', value: RegularityType.WEEKLY},
    { label: 'Dvakrát měsíčně', value: RegularityType.BIWEEKLY},
    { label: 'Měsíčně', value: RegularityType.MONTHLY},
];

const propertyTypeOptions : Option[] = [
    { label: 'Byt', value: PropertyType.Flat },
    { label: 'Dům', value: PropertyType.House, priceMultiplier: 1.2},
];

const roomOptions = {
    value: 1,
    singular: 'pokoj',
    plurals: ['pokoje', 'pokojů'],
    price: 350,
    label: 'rooms',
    title: 'Počet místností'
}
const bathroomOptions = {
    value: 1,
    singular: 'koupelna',
    plurals: ['koupelny', 'koupelen'],
    price: 400,
    label: 'bathrooms',
    title: 'Počet koupelen'
}
const timeInputSettings : TimeInputSettings = {
    minMinutes: 0,
    minHour: 8,
    maxHour: 16,
    maxMinutes: 30,
    stepMinutes: 30,
}

const initialData : OrderData = {
    rooms: 1,
    bathrooms: 1,
    propertyType: PropertyType.Flat,
    regularity: RegularityType.SINGLETIME,
    date:'',
    time: '08:00',
    email: '',
    phone: '',
    street: '',
    streetNumber: '',
    city: '',
    zip: '',
    note: '',
    price: 900,
}


export default function Order() {

    const form = useForm('OrderHome',initialData)
    const user  = useTypedPage().props.auth
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validateHomeOrder(form)) return
        form.post(route('order.post'),{
            errorBag: 'OrderHome',
            preserveScroll: true
        })
    }

    // @ts-ignore
    // @ts-ignore
    useEffect(()=>{

        const roomPrice = form.data.rooms * products.roomPrice
        const bathroomPrice = form.data.bathrooms * products.bathroomPrice
        const regularityMultiplier = 1 - products.multipliers.regularity[form.data.regularity]
        const propertyTypeMultiplier =  propertyTypeOptions.find(option => option.value === form.data.propertyType)?.priceMultiplier || 1

        let price = ((roomPrice + bathroomPrice) *  propertyTypeMultiplier)
        price = price < products.minPrice ? products.minPrice : price
        price = price * regularityMultiplier
        form.setData('price',price)
        // @ts-ignore
    },Object.values(form.data).filter(key => key !== form.data.price));

    return (
            <div className={'grid col-span-1 md:grid-cols-7 gap-8'}>
                <section className={'col-span-1 md:col-span-5'}>
                    <div className={'mb-6'}>
                        <FormSection
                            title={'Objednávka'}
                            description={'Objednejte si úklid pro svou domácnost'}
                        >

                            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                                <InputLabel htmlFor={'rooms'} value={'Počet místností'} />
                                <ProductCounter
                                    options={roomOptions} form={form}
                                />
                                <ProductCounter
                                    options={bathroomOptions} form={form}
                                />
                            </div>
                            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                                <InputLabel htmlFor={'regularity'} value={'Pravidelnost'} />
                                <SelectInput options={regularityOptions} label={'regularity'} form={form} />
                            </div>

                            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                                <InputLabel htmlFor={'propertyType'} value={'Typ nemovitosti'} />
                                <SelectInput options={propertyTypeOptions} label={'propertyType'} form={form} />
                            </div>

                            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                                <InputLabel htmlFor={'date'} value={'Datum'} />
                                <input
                                    id="date"
                                    type="date"
                                    className="block w-full mt-1"
                                    min={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                                    value={form.data.date.split('.').reverse().join('-')}
                                    onChange={(event) => {
                                        const formattedDate : DATE = event.target.value.split('-').reverse().join('.') as DATE
                                        form.setData('date', formattedDate)
                                    }}
                                />
                                <FormErrorMessage error={form.errors.date} />
                            </div>
                            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                                <InputLabel htmlFor={'time'} value={'Čas'} />
                                <TimeInput form={form} label={'time'} timeInputSetting={timeInputSettings} />
                                <FormErrorMessage error={form.errors.time} />
                            </div>
                        </FormSection>
                    </div>
                    <ContactForm form={form}/>
                </section>

                <div className="col-span-1 md:col-span-2">
                    <div className="sticky top-5">
                        <div className="hidden bg-white p-5 rounded-lg shadow-lg lg:block">
                            <HomeOrderFormSummary form={form} formInfo={formInfo} handleSubmit={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
    );
}
