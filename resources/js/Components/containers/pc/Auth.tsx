import {Link} from "@inertiajs/react";
import React from "react";
import useRoute from "@/Hooks/useRoute";
import useTypedPage from "@/Hooks/useTypedPage";


export default function Auth() {
    const route = useRoute();
    return (
    <>
        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
           <Link
                href={route('login')}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                Log in
            </Link>


            <Link
                href={route('register')}
                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                Register
            </Link>
        </div>
    </>
  );
}
