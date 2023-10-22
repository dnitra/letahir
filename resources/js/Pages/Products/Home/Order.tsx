import AppLayout from "@/Layouts/AppLayout";
import React, {useState} from "react";
import useCounter from "@/Hooks/useCounter";
import ProductCounter from "@/Components/containers/shared/ProductCounter";


export default function Order({product}: any) {
    const rooms = useCounter(1, 'pokoj', ['pokoje', 'pokojů']);
    const bathrooms = useCounter(1, 'koupelna', ['koupelny', 'koupelen']);

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
                <div className="text-center text-secondary font-light leading-tight">
                    <h1 className="text-3xl mb-6">
                        Vaše domácnost:
                    </h1>

                    <div className="flex flex-col justify-center items-center space-x-0 space-y-2 lg:space-x-8 lg:space-y-0 lg:flex-row">
                        <ProductCounter
                            product={rooms}
                        />
                        <ProductCounter
                            product={bathrooms}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
