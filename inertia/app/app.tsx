import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName = import.meta.env.VITE_APP_NAME || 'Berynite'

createInertiaApp({
  progress: { color: '#5468FF' },
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    document.documentElement.classList.add('dark')
    return resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx'),
    )
  },

  setup({ el, App, props }) {

    createRoot(el).render(<App {...props} />);

  },
});
