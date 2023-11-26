'use client';

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => ( 
  console.log('Session ', session),
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;