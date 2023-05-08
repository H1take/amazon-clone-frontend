import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthProvider from '@/providers/auth-provider/AuthProvider';
import { TypeComponentAuthFields } from '@/providers/auth-provider/auth-pages.types';

import '@/assets/styles/global.scss';

import { persistor, store } from '@/store/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = ({
  Component,
  pageProps,
}: AppProps & TypeComponentAuthFields) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
            <Component {...pageProps} />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;