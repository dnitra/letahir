import AppLayout from "@/Layouts/AppLayout";
import React, {useEffect, useState} from "react";
import useCounter from "@/Hooks/useCounter";
import ProductCounter from "@/Components/containers/shared/ProductCounter";
import {useForm} from "@inertiajs/react";
import KitchenType from "@/Enums/KitchenType";
import PropertyType from "@/Enums/PropertyType";
import useTypedPage from "@/Hooks/useTypedPage";
import RegularityType from "@/Enums/RegularityType";
import {DateTime} from "@/Types/DateTime";
import {Nullable} from "@/Types/Nullable";
import PrimaryButton from "@/Components/common/PrimaryButton";

interface Props {
    product: string;
}

interface OrderData {
    rooms: number;
    bathrooms: number;
    kitchenType: KitchenType;
    propertyType: PropertyType;
    regularity: RegularityType;
    date: DateTime;
    time: DateTime;
    email: string;
    phone: string;
}
const initialOrderData: OrderData = {
    rooms: 1,
    bathrooms: 1,
    kitchenType: KitchenType.kitchen,
    propertyType: PropertyType.Flat,
    regularity: RegularityType.SingleTime,
    date: '',
    time: '',
    email: '',
    phone: '',
}

export default function Order({product}: Props) {

    const rooms = useCounter(1, 'pokoj', ['pokoje', 'pokojů']);
    const bathrooms = useCounter(1, 'koupelna', ['koupelny', 'koupelen']);
    const user  = useTypedPage().props.auth

    // use form inertiajs
    // rooms, bathrooms, kitchenType (kuchun or +kk), propertyType (house or apartment), regularity(one-time, every week, once a month), date, time, name, email, phone, address, note, pric
    const {
        data,
        setData,
        setDefaults,
        post,
        processing,
        errors,
        reset,
    } = useForm('home',initialOrderData)

    useEffect(() => {
        setData({
            ...data,
            rooms: rooms.count,
            bathrooms: bathrooms.count
        });
    }, [rooms.count, bathrooms.count]);

    return (
        <AppLayout
            title={`Objednávka | ${product} úklid`}
            renderHeader={() => (
                <>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Objednávka
                    </h2>
                </>
            )}
        >
            <div className="w-full bg-white flex justify-center items-center" >
                <form className="flex flex-col justify-center items-center space-y-6 text-center text-secondary font-light leading-tight w-3/4">
                    <h1 className="text-3xl ">
                        Vaše domácnost:
                    </h1>
                    <PrimaryButton
                        //log global state of page
                        type={'button'}
                        onClick={(e)=>{
                            // e.preventDefault()
                            console.log(data)
                        }
                        }
                    > what is data
                    </PrimaryButton>

                    <div className="flex flex-col w-1/2 justify-between items-center space-x-0 space-y-2 lg:space-x-8 lg:space-y-0 lg:flex-row">
                        <ProductCounter
                            product={rooms}
                        />
                        <ProductCounter
                            product={bathrooms}
                        />
                    </div>


                    <div className="flex flex-col justify-center items-center space-x-0 space-y-2 lg:space-x-8 lg:space-y-0 lg:flex-row">
                        <div className="flex justify-center items-center space-x-0 space-y-2 lg:space-x-2 lg:space-y-0">
                            <label
                                className="text-secondary text-xl font-light"
                                htmlFor={`kitchenType_${KitchenType.kitchen}`}
                            >
                                Kuchyň
                            </label>
                            <input
                                id={`kitchenType_${KitchenType.kitchen}`}
                                type="radio"
                                name="kitchenType"
                                value={KitchenType.kitchen}
                                onChange={(e) => setData({
                                    ...data,
                                    kitchenType: e.target.value as unknown as KitchenType
                                })}
                                defaultChecked
                                className="text-secondary text-xl font-light"
                            />

                        </div>
                        <div>nebo</div>
                        <div className="flex justify-center items-center space-x-0 space-y-2 lg:space-x-2 lg:space-y-0">
                            <label
                                className="text-secondary text-xl font-light"
                                htmlFor={`kitchenType_${KitchenType.kk}`}
                                    >
                                +kk
                            </label>
                            <input
                                id={`kitchenType_${KitchenType.kk}`}
                                type="radio"
                                name="kitchenType"
                                value={KitchenType.kk}
                                onChange={(e) => setData({
                                    ...data,
                                    kitchenType: e.target.value as unknown as KitchenType
                                })}
                                className="text-secondary text-xl font-light"
                            />
                        </div>
                    </div>

                    {/*rqadio - single time, every week, once a month*/}
                    <div className="flex flex-col justify-center items-center space-x-0 space-y-2 lg:space-x-8 lg:space-y-0 lg:flex-row">
                        <div className="flex justify-center items-center space-x-0 space-y-2 lg:space-x-2 lg:space-y-0">
                            <label
                                className="text-secondary text-xl font-light"
                                htmlFor={`regularity_${RegularityType.SingleTime}`}
                                >
                                Jednorázově
                            </label>
                            <input
                                id={`regularity_${RegularityType.SingleTime}`}
                                type="radio"
                                name="regularity"
                                value={RegularityType.SingleTime}
                                onChange={(e) => setData({
                                    ...data,
                                    regularity: e.target.value as unknown as RegularityType
                                })}
                                defaultChecked
                                className="text-secondary text-xl font-light"
                            />
                        </div>
                        <div className="flex justify-center items-center space-x-0 space-y-2 lg:space-x-2 lg:space-y-0">
                            <label
                                className="text-secondary text-xl font-light"
                                htmlFor={`regularity_${RegularityType.Weekly}`}
                                >
                                Týdně
                            </label>
                            <input
                                id={`regularity_${RegularityType.Weekly}`}
                                type="radio"
                                name="regularity"
                                value={RegularityType.Weekly}
                                onChange={(e) => setData({
                                    ...data,
                                    regularity: e.target.value as unknown as RegularityType
                                })}
                                className="text-secondary text-xl font-light"
                            />
                        </div>
                        <div className="flex justify-center items-center space-x-0 space-y-2 lg:space-x-2 lg:space-y-0">
                            <label
                                className="text-secondary text-xl font-light"
                                htmlFor={`regularity_${RegularityType.Monthly}`}
                                >
                                Měsíčně
                            </label>
                            <input
                                id={`regularity_${RegularityType.Monthly}`}
                                type="radio"
                                name="regularity"
                                value={RegularityType.Monthly}
                                onChange={(e) => setData({
                                    ...data,
                                    regularity: e.target.value as unknown as RegularityType
                                })}
                                className="text-secondary text-xl font-light"
                            />
                        </div>
                    </div>

                </form>
            </div>
        </AppLayout>
    );
}
