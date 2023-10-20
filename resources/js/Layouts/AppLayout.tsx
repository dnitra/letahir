import { router } from '@inertiajs/core';
import { Link, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import Banner from '@/Components/common/Banner';
import PrimaryNavigation from "@/Components/containers/pc/PrimaryNavigation";
import PrimaryNavigationMobile from "@/Components/containers/mobile/PrimaryNavigationMobile";

interface Props {
  title: string;
  renderHeader?(): JSX.Element;
}

export default function AppLayout({
  title,
  renderHeader,
  children,
}: PropsWithChildren<Props>) {
  const page = useTypedPage();
  const route = useRoute();
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  function logout(e: React.FormEvent) {
    e.preventDefault();
    router.post(route('logout'));
  }

  return (
    <div>
      <Head title={title} />

      <Banner />

      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white border-b border-gray-100">
            <PrimaryNavigation page={page} logout={logout} setShowingNavigationDropdown={setShowingNavigationDropdown} showingNavigationDropdown={showingNavigationDropdown}  />

            <PrimaryNavigationMobile page={page} logout={logout} setShowingNavigationDropdown={setShowingNavigationDropdown} showingNavigationDropdown={showingNavigationDropdown} />
        </nav>

        {/* <!-- Page Heading --> */}
        {renderHeader ? (
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              {renderHeader()}
            </div>
          </header>
        ) : null}

        {/* <!-- Page Content --> */}
        <main>{children}</main>
      </div>
    </div>
  );
}
