import classNames from "classnames";
import ResponsiveNavLink from "@/Components/common/ResponsiveNavLink";
import ProfileSettingsMobile from "@/Components/containers/mobile/ProfileSettingsMobile";
import React from "react";
import route from "ziggy-js";
import AuthMobile from "@/Components/containers/mobile/AuthMobile";
import NavLink from "@/Components/common/NavLink";
import NavigationProps from "@/Types/NavigationProps";

export default function PrimaryNavigationMobile({navLinks, page, logout, setShowingNavigationDropdown, showingNavigationDropdown}: NavigationProps ) {
    return (
        <div
            className={classNames('sm:hidden', {
                block: showingNavigationDropdown,
                hidden: !showingNavigationDropdown,
            })}
        >
            <div className="pt-2 pb-3 space-y-1">
                {navLinks.map((navLink, index) => (
                        <ResponsiveNavLink
                            href={route(navLink.routeName)}
                            active={route().current(navLink.routeName)}
                            key={index}
                        >
                            {navLink.label}
                        </ResponsiveNavLink>
                    ))
                }
            </div>

            {page.props.auth.user ?
                (<ProfileSettingsMobile page={page} logout={logout} />) :
                (<AuthMobile />)
            }

        </div>)
}
