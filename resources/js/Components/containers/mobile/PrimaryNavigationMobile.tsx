import classNames from "classnames";
import ResponsiveNavLink from "@/Components/common/ResponsiveNavLink";
import ProfileSettingsMobile from "@/Components/containers/mobile/ProfileSettingsMobile";
import React from "react";
import route from "ziggy-js";


export default function PrimaryNavigationMobile({page, logout, setShowingNavigationDropdown, showingNavigationDropdown}: {page: any, logout: any, setShowingNavigationDropdown: any, showingNavigationDropdown: any}) {
    return (
        <div
            className={classNames('sm:hidden', {
                block: showingNavigationDropdown,
                hidden: !showingNavigationDropdown,
            })}
        >
            <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink
                    href={route('home')}
                    active={route().current('home')}
                >
                    Home
                </ResponsiveNavLink>
            </div>

            {/* <!-- Responsive Settings Options --> */}
            <ProfileSettingsMobile page={page} logout={logout}/>
        </div>)
}
