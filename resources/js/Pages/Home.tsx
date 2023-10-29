import React, {useEffect, useState} from 'react';
import Welcome from '@/Components/common/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import useTypedPage from "@/Hooks/useTypedPage";
import useRoute from "@/Hooks/useRoute";
import InstagramCard from "@/Components/containers/shared/InstagramCard";
import {Link} from "@inertiajs/react";

const urls = [
    'https://www.instagram.com/p/CyTVSqlNrIO/',
    'https://www.instagram.com/p/CyRNskZtAH5/',
    'https://www.instagram.com/p/CyN_IdXNAxs/',
    'https://www.instagram.com/p/Cx-R7J1tsVZ/',
    'https://www.instagram.com/p/Cx3l6qrNQZj/',
    'https://www.instagram.com/p/Cx3khXON2_s/',
]
export default function Home() {
    const route = useRoute();
    const page = useTypedPage();

  return (
      <>
        <div className="w-full bg-white flex justify-center items-center">
            <div className="text-center text-secondary font-light leading-tight">
                <h1 className="text-3xl">Čistota a pokoj vaší domácnosti</h1>
                <h2 className="mt-3 text-center text-secondary">
                    Nabízíme úklidové služby domácnostem i kancelářím.
                </h2>
                <Link href={route('about')} className="mt-3 bg-secondary text-white text-secondary font-semibold py-2 px-4 rounded inline-flex items-center">
                    OBJEDNAT UKLID
                </Link>
            </div>
        </div>

        <div className="mt-6 h-20 w-full bg-secondary flex justify-center items-center">
            <div className="text-center text-white font-light leading-tight">
                <h1 className="text-3xl">INSTAGRAM</h1>
                <h2 className="mt-3 text-center text-white">
                    PŘIPOJTE SE K NAŠÍ ONLINE KOMUNITĚ
                </h2>
            </div>
        </div>
        <div className="p-6 lg:p-8 bg-white">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col justify-center items-centerh Ω`">
                <div className="w-full bg-white flex flex-wrap">
                    {urls.map((url, index) => (
                        <InstagramCard key={index} url={url} />
                    ))}
                </div>
            </div>
        </div>
      </>
  );
}
