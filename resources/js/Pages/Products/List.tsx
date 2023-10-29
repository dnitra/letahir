//list all products

import React, { useState } from 'react';
import { Link} from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import route from "ziggy-js";


//products is an array of objects
export default function Index({products}: any) {

    return (
        <div className="flex justify-center items-center w-full ">
            <div className="w-full  max-w-7xl">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:justify-start lg:flex-wrap mb-8">
                        {products?.map((product: any, key: number) => (
                            <div key={key} className="flex flex-col shrink-0 w-full lg:w-1/2">
                                <div className="flex justify-center items-center rounded overflow-hidden shadow-lg">
                                    <img className=" h-60 object-cover w-2/5 md:w-1/4 lg:w-1/2"
                                         src={product.image}
                                         alt={product.title} />
                                    <div className="flex flex-col justify-center items-center w-full h-60">
                                        <div className="w-full text-center font-bold text-xl my-8">{product.title}</div>
                                        <Link href={route('products.show', [product.prettyUrl])} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">Více informací</Link>
                                        <Link href={route('products.order', [product.prettyUrl])} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">Objednat</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );




}
