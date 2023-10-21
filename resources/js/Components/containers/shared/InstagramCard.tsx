import {InstagramEmbed} from "react-social-media-embed";
import React from "react";


export default function InstagramCard({ url }: any) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/3 overflow-hidden">
            <InstagramEmbed url={url} />
        </div>
    );
}

