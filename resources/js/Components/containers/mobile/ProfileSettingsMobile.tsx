import ResponsiveNavLink from "@/Components/common/ResponsiveNavLink";
import React from "react";
import route from "ziggy-js";

export default function ProfileSettingsMobile ({page, logout}: {page: any, logout: any}) {

    return (
        <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="flex items-center px-4">
                {page.props.jetstream.managesProfilePhotos ? (
                    <div className="flex-shrink-0 mr-3">
                        <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={page.props.auth.user?.profile_photo_url}
                            alt={page.props.auth.user?.name}
                        />
                    </div>
                ) : null}

                <div>
                    <div className="font-medium text-base text-gray-800">
                        {page.props.auth.user?.name}
                    </div>
                    <div className="font-medium text-sm text-gray-500">
                        {page.props.auth.user?.email}
                    </div>
                </div>
            </div>

            <div className="mt-3 space-y-1">
                <ResponsiveNavLink
                    href={route('profile.show')}
                    active={route().current('profile.show')}
                >
                    Profile
                </ResponsiveNavLink>

                {page.props.jetstream.hasApiFeatures ? (
                    <ResponsiveNavLink
                        href={route('api-tokens.index')}
                        active={route().current('api-tokens.index')}
                    >
                        API Tokens
                    </ResponsiveNavLink>
                ) : null}

                {/* <!-- Authentication --> */}
                <form method="POST" onSubmit={logout}>
                    <ResponsiveNavLink as="button">Log Out</ResponsiveNavLink>
                </form>

            </div>
        </div>

    )
}
