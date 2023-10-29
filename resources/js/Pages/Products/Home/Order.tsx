import AppLayout from "@/Layouts/AppLayout";
import React, {useEffect} from "react";
import useCounter from "@/Hooks/useCounter";
import ProductCounter from "@/Components/containers/shared/ProductCounter";
import {useForm} from "@inertiajs/react";
import PropertyType from "@/Enums/PropertyType";
import useTypedPage from "@/Hooks/useTypedPage";
import RegularityType from "@/Enums/RegularityType";
import {DateTime} from "@/Types/DateTime";
import PrimaryButton from "@/Components/common/PrimaryButton";
import FormSection from "@/Components/common/FormSection";
import route from "ziggy-js";
import ActionMessage from "@/Components/common/ActionMessage";
import classNames from "classnames";
import InputLabel from "@/Components/common/InputLabel";
import SelectInput from "@/Components/FormHelpers/SelectInput";
import {Option} from "@/Types/Select";
import {GenericFormData} from "@/Types/GenericFormData";
import useTimer from "@/Hooks/useTimer";



interface Props {
    product: string;
}

interface OrderData extends GenericFormData {
    rooms: number;
    bathrooms: number;
    propertyType: PropertyType;
    regularity: RegularityType;
    date: DateTime;
    time: DateTime;
    email: string;
    phone: string;
    street: string;
    streetNumber: string;
    city: string;
    zip: string;
    note: string;
    price: number;
    minPrice: number;
}

const initialOrderData: OrderData = {
    rooms: 1,
    bathrooms: 1,
    propertyType: PropertyType.Flat,
    regularity: RegularityType.SINGLETIME,
    date: '',
    time: '08:00',
    email: '',
    phone: '',
    street: '',
    streetNumber: '',
    city: '',
    zip: '',
    note: '',
    price: 900,
    minPrice: 900
}



export default function Order({product}: Props) {

    const regularityOptions : Option[] = [
        { label: 'Jednorázově', value: RegularityType.SINGLETIME },
        { label: 'Týdně', value: RegularityType.WEEKLY, priceDivisor: 1.2},
        { label: 'Dvakrát měsíčně', value: RegularityType.BIWEEKLY, priceDivisor: 1.15},
        { label: 'Měsíčně', value: RegularityType.MONTHLY , priceDivisor: 1.1},
    ];

    const propertyTypeOptions : Option[] = [
        { label: 'Byt', value: PropertyType.Flat },
        { label: 'Dům', value: PropertyType.House, priceMultiplier: 1.2},
    ];

    const rooms = useCounter(1, 'pokoj', ['pokoje', 'pokojů'], 350);
    const bathrooms = useCounter(1, 'koupelna', ['koupelny', 'koupelen'],400);
    const times = useTimer(8,15,0,30)
    const user  = useTypedPage().props.auth
    // use form inertiajs
    // rooms, bathrooms, kitchenType (kuchun or +kk), propertyType (house or apartment), regularity(one-time, every week, once a month), date, time, name, email, phone, address, note, pric
    const form = useForm('home',initialOrderData)

    const handleSubmit = ()=>{
        form.post(route('order.post'),{
            errorBag: 'orderHomeCleaning',
            preserveScroll: true
        })
    }

    useEffect(() => {
        const totalPrice = rooms.total + bathrooms.total
        const minPrice = form.data.minPrice || (initialOrderData.minPrice || 0);

        form.setData({
            ...form.data,
            rooms: rooms.count,
            bathrooms: bathrooms.count,
            price: Math.floor(totalPrice < minPrice ? minPrice : totalPrice)

        });
    }, [rooms.count, bathrooms.count]);

    return (
            <>
                <div className="fixed top-1/2 left-10 transform -translate-y-1/2 text-2xl text-gray-700 bg-white p-10 rounded-lg shadow-lg">
                    Celkem cena: {form.data.price || 'N/A'} Kč
                </div>
                <FormSection
                    title={'Objednávka'}
                    description={'Objednejte si úklid pro svou domácnost'}
                    onSubmit={handleSubmit}

                >

                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'rooms'} value={'Počet místností'} />
                        <ProductCounter
                            product={rooms}
                        />
                        <ProductCounter
                            product={bathrooms}
                        />
                    </div>
                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'Pravidelnost'} value={'Pravidelnost'} />
                        <SelectInput options={regularityOptions} label={'regularity'} form={form} />
                    </div>

                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'Typ nemovitosti'} value={'Typ nemovitosti'} />
                        <SelectInput options={propertyTypeOptions} label={'propertyType'} form={form} />
                    </div>

                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'Datum'} value={'Datum'} />
                        <input
                            id="date"
                            type="date"
                            className="block w-full mt-1"
                            value={form.data.date}
                            onChange={(event) => {
                                form.setData('date', event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
                        <InputLabel htmlFor={'Čas'} value={'Čas'} />
                        <SelectInput label={'time'} form={form} options={times} />
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
                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
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
                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
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


                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
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
                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
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
                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
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
                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
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
                    <div className="col-span-5 flex flex-col gap-2 lg:col-span-3">
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
