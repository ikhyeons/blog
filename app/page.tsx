import Index from '@/components/index/Index';
import Normal from '@/layouts/Normal';

export default async function Home() {
  const postList = await getData();
  return (
    <Normal>
      <Index postList={postList} />
    </Normal>
  );
}

async function getData() {
  const fetchData = await (
    await fetch('http://localhost:3001/community/indexpost', { method: 'get', cache: 'no-store' })
  ).json();
  const postList = fetchData.postList;
  return postList;
}
