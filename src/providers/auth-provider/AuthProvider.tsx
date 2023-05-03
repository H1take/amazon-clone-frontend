import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect, Component } from 'react';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import { TypeComponentAuthFields } from './auth-pages.types';
import { getAccessToken } from '@/services/auth/auth.helper';

// need for ssr rendering and seo optimize
const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyUser },
  children,
}) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();

  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = getAccessToken();

    if (accessToken) checkAuth();
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');

    if (!refreshToken && user) {
      logout();
    }
  }, [pathname]);

  return isOnlyUser ? (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  ) : (
    <>{children}</>
  );
};

export default AuthProvider;
