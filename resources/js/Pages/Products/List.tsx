//list all products

import React, { useState } from 'react';
import { Link} from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import route from "ziggy-js";


//products is an array of objects
export default function Index({products}: any) {

    return (
        <AppLayout
            title="Uklidové služby"
            renderHeader={() => (
                <>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Úklidové služby
                    </h2>
                </>
            )}
        >
            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full s
                        m:w-1/2">
                            <h2 className="text-2xl font-semibold leading-tight">Products</h2>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:gap-8 mb-8">
                            {products?.map((product: any) => (
                                <div className="flex-col ">
                                    <div className="rounded overflow-hidden shadow-lg">
                                        <img className="w-full h-40 object-cover"
                                             src={product.image}
                                             alt={product.name} />
                                        <div className="px-6 py-4 text-center">
                                            <div className="font-bold text-xl mb-2">{product.name}</div>
                                            <p className="text-gray-700 text-base">
                                                {product.description}

                                            </p>
                                        </div>
                                        <div className="flex flex-col space-y-1 justify-center items-center mb-3">
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
        </AppLayout>
    );




}
