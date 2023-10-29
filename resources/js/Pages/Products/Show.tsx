import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import route from "ziggy-js";
import {Link} from "@inertiajs/react";


export default function Show({ product }: any) {

    return (
            <div className="w-full bg-white flex justify-center items-center" >
                <div className="bg-white flex justify-center items-center w-3/4">
                    <div className="text-center text-secondary font-light leading-tight flex flex-col justify-center items-center gap-6">
                        <div className="flex gap-1">
                            {product.previousProductUrl &&(
                                <Link
                                    href={route('products.show', [product.previousProductUrl])}
                                    className="shrink-1 inline-blockrounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-100 text-xl px-6 py-3 flex justify-center items-center"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </Link>
                            )}
                            <div  className="flex gap-6 shrink-10">
                                <div>
                                    <p className="mt-3 text-center text-secondary">
                                        {product.description}
                                    </p>
                                    <p className="mt-3 text-center text-secondary">
                                        {product.description}
                                    </p>
                                    <p className="mt-3 text-center text-secondary">
                                        {product.description}
                                    </p>
                                </div>
                                <img className="w-1/2 object-cover"
                                     src={product.image}
                                     alt="Domacnost=ilustracni-foto" />
                            </div>
                            {product.nextProductUrl &&(
                                <Link
                                    href={route('products.show', [product.nextProductUrl])}
                                    className="shrink-1 inline-blockrounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-100 text-xl px-6 py-3 flex justify-center items-center"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1 justify-center items-center mb-3 w-full">
                            <Link
                                href={route('products.order', [product.prettyUrl])}
                                className=" inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 text-xl px-6 py-3"
                            >
                                Objednat
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
