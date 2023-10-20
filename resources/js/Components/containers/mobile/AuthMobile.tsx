import useRoute from "@/Hooks/useRoute";
import {Link} from "@inertiajs/react";
import React from "react";
import ResponsiveNavLink from "@/Components/common/ResponsiveNavLink";

export default function AuthMobile() {
    const route = useRoute();
    return (
        <>
            <ResponsiveNavLink href={route('login')}> Log in </ResponsiveNavLink>
            <ResponsiveNavLink href={route('register')}> Register </ResponsiveNavLink>
        </>
    );
}
