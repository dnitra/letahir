import React from 'react';
import Welcome from '@/Components/common/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import useTypedPage from "@/Hooks/useTypedPage";
import useRoute from "@/Hooks/useRoute";
import InstagramCard from "@/Components/containers/shared/InstagramCard";
import TeamMemberCard from "@/Components/containers/shared/TeamMemberCard";

const urls = [
    'https://www.instagram.com/p/CyTVSqlNrIO/',
    'https://www.instagram.com/p/CyRNskZtAH5/',
    'https://www.instagram.com/p/CyN_IdXNAxs/',
    'https://www.instagram.com/p/Cx-R7J1tsVZ/',
    'https://www.instagram.com/p/Cx3l6qrNQZj/',
    'https://www.instagram.com/p/Cx3khXON2_s/',
    'https://www.instagram.com/p/Cw5xOS3NcMn/'
]

const members = [
    {
        name: 'Michela',
        avatar: 'https://static.wixstatic.com/media/47b0da_fad7bc7a287c44fe87bf44ebde38cf0d~mv2.png/v1/fill/w_612,h_708,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/47b0da_fad7bc7a287c44fe87bf44ebde38cf0d~mv2.png',
        role: 'Managment, Hospodyně'
    },
    {
        name: 'Anna',
        avatar: 'https://static.wixstatic.com/media/47b0da_b6fd5fbddb3747fd90818275458217d9~mv2.png/v1/fill/w_612,h_716,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/47b0da_b6fd5fbddb3747fd90818275458217d9~mv2.png',
        role: 'Hospodyně'
    },
    {
        name: 'Světlana',
        avatar: 'https://static.wixstatic.com/media/47b0da_2cb955b2d1644b0a81c300d1270c198e~mv2.png/v1/fill/w_612,h_716,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/47b0da_2cb955b2d1644b0a81c300d1270c198e~mv2.png',
        role: 'Hospodyně'
    }
    ]
export default function Home() {
    const route = useRoute();
    const page = useTypedPage();
    return (
            <div className="w-full bg-white flex flex-col justify-center items-center">
                <div className="text-center text-secondary font-light leading-tight w-3/4 mb-6">
                    <h1 className="text-3xl">CO JE LETAHIR</h1>
                    <div className="text-center text-secondary text-xl font-light">
                        <p className={"mt-3"}>
                            LETAHIR je čistota. Doslova. Hebrejské slovo לְטַהֵר znamená očistit. Ne pouze fyzicky,
                            ale fyzicky a duševně zároveň. Právě to je myšlenka a filosofie této firmy.
                            Přinášet nejen povrchově uklizené prostory, ale také duševní harmonii a pokoj.
                            Věříme, že prostředí, kde panuje čistota, pozitivně ovlivňuje lidskou mysl a umožňuje
                            vám užívat na 100% prostor, kde bydlíte, nebo pracujetel
                        </p>
                        <p className={"mt-3"}>
                            Naše úklidová služba je založena na kvalitě a efektivitě. Jsme oddaní našemu závazku přinést
                            do vašich domovů špičkové a profesionální služby. Spokojenost zákazníků je pro nás na prvním
                            místě, a proto se snažíme plně porozumět a poté vyhovět vašim potřebám a požadavkům.
                            Jsme nově se rozvíjející úklidová služba, a proto vám slibujeme, že se budeme stále zdokonalovat.
                        </p>
                        <p className={"mt-3"}>
                            Svou zodpovědnost vůči životnímu prostředí bereme vážně, a proto využíváme především šetrné
                            čistící prostředky. Díky tomu zajišťujeme nejen bezpečnost pro naše zákazníky, ale také
                            minimalizujeme negativní dopady na planetu.
                        </p>
                        <p className={"mt-3"}>
                            Důvěřujte Letahir a dovolte nám, abychom vaše domácnosti nebo pracoviště (či obojí zároveň)
                            proměnili v místo čistoty, pokoje a efektivity. Jsme tu pro vás, abyste si mohli skutečně užít
                            váš čas doma, ať už odpočíváte, pracujete nebo trávíte čas s rodinou.
                            Čistota Vašeho prostoru je naším hlavním cílem.
                        </p>
                    </div>
                </div>
                <div className="w-full bg-secondary flex justify-center items-center mt-6 ">
                    <div className="text-center text-white font-light leading-tight w-3/4 mb-6">
                        <h1 className="text-3xl mt-6">NÁŠ TÝM</h1>
                        <div className="text-center text-white text-2xl font-light">
                            <p className={"mt-3"}>
                                Jsme malý a přátelský tým, který věří, že čistota je základem pohody v domově.
                                Vaše spokojenost je naší prioritou a naším hlavním cílem je, aby každá interakce s námi
                                byla příjemným zážitkem.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-3/4 bg-white flex flex-wrap justify-center items-center mb-6">
                    {members.map((member, index) => (
                        <TeamMemberCard member={member} key={index}/>
                    ))}
                </div>

            </div>
    );
}
