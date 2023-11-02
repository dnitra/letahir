import {InertiaPageWithProps} from "@/Types/InertiaPageWithProps";
import React from "react";
import {Page} from "@inertiajs/core";

export interface Navlink {
    label: string,
    routeName: string,
}

export default interface NavigationProps {
    navLinks: Navlink[],
    page: Page<InertiaPageWithProps>,
    logout: React.FormEventHandler<HTMLFormElement>,
    setShowingNavigationDropdown: React.Dispatch<React.SetStateAction<boolean>>,
    showingNavigationDropdown: boolean,
}
