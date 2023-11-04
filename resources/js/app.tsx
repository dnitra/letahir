import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { RouteContext } from '@/Hooks/useRoute';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import AppLayout from "@/Layouts/AppLayout";

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText ;

createInertiaApp({
  title: title => `${title} - ${appName}`,
  progress: {
    color: '#4B5563',
  },
  resolve: name =>{
      const pages = import.meta.glob('./Pages/**/**/*.tsx', { eager: true })
      let page : any = pages[`./Pages/${name}.tsx`]
      page.default.layout = page.default.layout || ((page : any) => <AppLayout children={page} />)
      return page
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    return root.render(
      <RouteContext.Provider value={(window as any).route}>
        <App {...props} />
      </RouteContext.Provider>
    );
  },
});
