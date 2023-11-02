import AppLayout from "@/Layouts/AppLayout";
import React, {useEffect} from "react";
import ProductCounter from "@/Components/containers/shared/ProductCounter";
import {useForm} from "@inertiajs/react";
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
import timeInputSettings from "@/Enums/TimeInputSettings";
import TimeInputSettings from "@/Enums/TimeInputSettings";



interface Props {
    product: string;
}

interface OrderData {
    rooms: number;
    bathrooms: number;
    propertyType: PropertyType;
    regularity: RegularityType;
    date: DATE |''
    time: Time;
    email: string;
    phone: string;
    street: string;
    streetNumber: string;
    city: string;
    zip: string;
    note: string;
    price: number;
}

const initialOrderData: OrderData = {
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

interface HomeCleaningProduct {
    [key: string]: {
        [key: string] : number | string | {}
        multipliers: {
            [key:string] :{
                [key:string] : number
            }
        }
    }
}

const products: HomeCleaningProduct = {
    homeCleaning: {
        name: 'Home Cleaning',
        minPrice: 900,
        roomPrice: 350,
        bathroomPrice: 400,
        multipliers: {
            regularity:
                {
                    singleTime: 1.0,
                    weekly: 0.9,
                    biweekly: 0.85,
                    monthly: 0.8,
                },

        },
    },
};



export default function Order({product}: Props) {

    const regularityOptions : Option[] = [
        { label: 'Jednorázově', value: RegularityType.SINGLETIME },
        { label: 'Týdně', value: RegularityType.WEEKLY, priceMultiplier: 0.8},
        { label: 'Dvakrát měsíčně', value: RegularityType.BIWEEKLY, priceMultiplier: 0.85},
        { label: 'Měsíčně', value: RegularityType.MONTHLY , priceMultiplier: 0.9},
    ];

    const propertyTypeOptions : Option[] = [
        { label: 'Byt', value: PropertyType.Flat },
        { label: 'Dům', value: PropertyType.House, priceMultiplier: 1.2},
    ];

    const roomOptions = {
        amount: 1,
        singular: 'pokoj',
        plurals: ['pokoje', 'pokojů'],
        price: 350,
        label: 'rooms',
        title: 'Počet místností'
    }
    const bathroomOptions = {
        amount: 1,
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

    const user  = useTypedPage().props.auth
    const form = useForm(initialOrderData)

    const handleSubmit = ()=>{
        form.post(route('order.post'),{
            errorBag: 'orderHomeCleaning',
            preserveScroll: true
        })
    }

    useEffect(() => {

    }, [])

    return (
            <>
                <div className=" fixed top-1/2 right-10 transform -translate-y-1/2 text-gray-700 bg-white p-5 rounded-lg shadow-lg z-50 lg:block">
                    <h2>Shrnutí objednávky:</h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <div>Počet místností:</div>
                            <div>{form.data.rooms}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Počet koupelen:</div>
                            <div>{form.data.bathrooms}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Typ nemovitosti:</div>
                            <div>{form.data.propertyType}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Celkem cena:</div>
                            <div>{form.data.price || 0} Kč</div>
                        </div>
                    </div>
                </div>
                <FormSection
                    title={'Objednávka'}
                    description={'Objednejte si úklid pro svou domácnost'}
                    onSubmit={handleSubmit}

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
                            value={form.data.date.split('.').reverse().join('-')}
                            onChange={(event) => {
                                const formattedDate : DATE = event.target.value.split('-').reverse().join('.') as DATE
                                form.setData('date', formattedDate)
                            }}
                        />
                    </div>
                    <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'time'} value={'Čas'} />
                        <TimeInput form={form} label={'time'}  timeInputSetting={timeInputSettings} />
                    </div>

                </FormSection>

                <FormSection
                    title={'Kontaktní údaje'}
                    description={'Vyplňte kontaktní údaje'}
                    onSubmit={handleSubmit}
                    renderActions={() => (
                        <>
                            <ActionMessage on={form.recentlySuccessful} className="mr-3">
                                Objednáno
                            </ActionMessage>

                            <PrimaryButton
                                onClick={(event) => {
                                    event.preventDefault()
                                    console.log(form.data)
                                }}
                            >
                                show data
                            </PrimaryButton>
                            <PrimaryButton
                                className={classNames({ 'opacity-25': form.processing })}
                                disabled={form.processing}
                            >
                                Objednat
                            </PrimaryButton>

                        </>
                    )}
                >
                    <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'email'} value={'Email'} />
                        <input
                            id="email"
                            type="email"
                            className="block w-full mt-1"
                            value={form.data.email}
                            onChange={(event) => {
                                form.setData('email', event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'phone'} value={'Telefon'} />
                        <input
                            id="phone"
                            type="tel"
                            className="block w-full mt-1"
                            value={form.data.phone}
                            onChange={(event) => {
                                form.setData('phone', event.target.value)
                            }}
                        />
                    </div>


                    <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'Ulice'} value={'Ulice'} />
                        <input
                            id="street"
                            type="text"
                            className="block w-full mt-1"
                            value={form.data.street}
                            onChange={(event) => {
                                form.setData('street', event.target.value)

                            }}
                        />
                    </div>
                    <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'Číslo popisné'} value={'Číslo popisné'} />
                        <input
                            id="streetNumber"
                            type="text"
                            className="block w-full mt-1"
                            value={form.data.streetNumber}
                            onChange={(event) => {
                                form.setData('streetNumber', event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'Město'} value={'Město'} />
                        <input
                            id="city"
                            type="text"
                            className="block w-full mt-1"
                            value={form.data.city}
                            onChange={(event) => {
                                form.setData('city', event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'PSČ'} value={'PSČ'} />
                        <input
                            id="zip"
                            type="text"
                            className="block w-full mt-1"
                            value={form.data.zip}
                            onChange={(event) => {
                                form.setData('zip', event.target.value)
                            }}
                        />
                    </div>
                {/*    poznamka*/}
                    <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'Poznámka'} value={'Poznámka'} />
                        <textarea
                            id="note"
                            className="block w-full mt-1"
                            value={form.data.note}
                            onChange={(event) => {
                                form.setData('note', event.target.value)
                            }}
                        />
                    </div>

                </FormSection>
                </>
    );
}
