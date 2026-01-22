'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface SessionProviderClientProps {
  children: React.ReactNode;
}

export const SessionProviderClient: React.FC<SessionProviderClientProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
