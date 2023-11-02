import {Link} from "@inertiajs/react";
import ApplicationMark from "@/Components/common/ApplicationMark";
import NavLink from "@/Components/common/NavLink";
import ProfileSettings from "@/Components/containers/pc/ProfileSettings";
import classNames from "classnames";
import React from "react";
import route from "ziggy-js";
import Auth from "@/Components/containers/pc/Auth";
import NavigationProps from "@/Types/NavigationProps";

export default function PrimaryNavigation({navLinks, page, logout, setShowingNavigationDropdown, showingNavigationDropdown}: NavigationProps ) {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/*flex column*/}
            <div className="flex flex-col justify-between items-center">

                {/* Authentication Items (right side, hidden on small screens) */}
                <div className="hidden sm:flex items-center space-x-6 w-full justify-end">
                    {page.props.auth.user ? (
                        <ProfileSettings page={page} logout={logout} />
                    ) : (
                        <Auth />
                    )}
                </div>
                {/*heading*/}
                <div className="flex items-center w-full justify-center">
                    <Link href={route('home')}>
                        {/*0 margin*/}
                        <h1 className="text-2xl font-bold text-gray-900">
                            LETAHIR
                        </h1>
                    </Link>
                </div>
                {/*horizontal divider*/}
                <div className="w-full border-t dark:border-gray-500 my-2"></div>
                {/* <!-- Navigation Links --> */}
                <div className="flex justify-end items-center w-full">
                    {/* Hamburger Menu (shown on small screens) */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={classNames({
                                        hidden: showingNavigationDropdown,
                                        'inline-flex': !showingNavigationDropdown,
                                    })}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={classNames({
                                        hidden: !showingNavigationDropdown,
                                        'inline-flex': showingNavigationDropdown,
                                    })}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Items (centered) */}
                    <div className="hidden sm:flex justify-center items-center w-full space-x-4">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                href={route(link.routeName)}
                                active={route().current(link.routeName)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                </div>


            </div>
        </div>)
}
