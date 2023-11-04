import React, { PropsWithChildren } from 'react';
import {Link} from "@inertiajs/react";
import route from "../../../../vendor/tightenco/ziggy";

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

      {/*margin 10px*/}
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <button type={"button"} onClick={()=>history.back()} className="flex justify-between items-center w-full mb-4">
                  <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                  </svg>
          </button>
        {children}
      </div>
    </div>
  );
}
