import React from 'react';
import Header from '@/components/user/Header';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default layout;
