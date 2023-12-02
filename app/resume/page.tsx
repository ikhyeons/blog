import React from 'react';
import { redirect } from 'next/navigation';
function page() {
  redirect('https://api.ikhyeons.net/resume');
  return <div>page</div>;
}

export default page;
