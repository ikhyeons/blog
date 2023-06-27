'use client';
import Normal from '@/layouts/Normal';
import Title from '@/components/new/Title';
import Content from '@/components/new/Content';
import { useState } from 'react';

import React from 'react';

function Page() {
  const [formData, setFormData] = useState({});

  return (
    <Normal>
      <Title />
      <Content />
    </Normal>
  );
}

export default Page;
