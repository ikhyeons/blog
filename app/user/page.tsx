import React from 'react';
import WithoutSidebar from '@/layouts/WithoutSidebar';
import UserBox from '@/components/user/UserBox';

function page() {
  return (
    <WithoutSidebar>
      <UserBox />
    </WithoutSidebar>
  );
}

export default page;
