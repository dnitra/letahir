import React from 'react';
import Welcome from '@/Components/common/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import useTypedPage from "@/Hooks/useTypedPage";
import useRoute from "@/Hooks/useRoute";
import Auth from "@/Components/containers/pc/Auth";

export default function Home() {
    const route = useRoute();
    const page = useTypedPage();
  return (
    <AppLayout
      title="Home"
      renderHeader={() => (
          <>
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Home
              </h2>
          </>
    )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <Welcome page={page} route={route} />

          </div>
        </div>
      </div>
    </AppLayout>
  );
}
