import {Link} from "@inertiajs/react";
import ApplicationMark from "@/Components/common/ApplicationMark";
import NavLink from "@/Components/common/NavLink";
import ProfileSettings from "@/Components/containers/pc/ProfileSettings";
import classNames from "classnames";
import React from "react";
import route from "ziggy-js";

export default function PrimaryNavigation({page, logout, setShowingNavigationDropdown, showingNavigationDropdown}: {page: any, logout: any, setShowingNavigationDropdown: any, showingNavigationDropdown: any}) {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    {/* <!-- Logo --> */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href={route('home')}>
                            <ApplicationMark className="block h-9 w-auto" />
                        </Link>
                    </div>

                    {/* <!-- Navigation Links --> */}
                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink
                            href={route('home')}
                            active={route().current('Home')}
                        >
                            Home
                        </NavLink>
                    </div>
                </div>

                <div className="hidden sm:flex sm:items-center sm:ml-6">
                    <div className="ml-3 relative">

                        {/* <!-- Settings Dropdown --> */}
                        <ProfileSettings page={page} logout={logout} />
                    </div>
                </div>

                {/* <!-- Hamburger --> */}
                <div className="-mr-2 flex items-center sm:hidden">
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(!showingNavigationDropdown)
                        }
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
            </div>
        </div>)
}
