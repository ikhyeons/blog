import Index from '@/components/index/Index';
import Normal from '@/layouts/Normal';

export default async function Home() {
  const postList = await getDocumentData();
  const guestBookList = await getGuestBookData();
  return (
    <Normal>
      <Index postList={postList} guestbookList={guestBookList} />
    </Normal>
  );
}

async function getDocumentData() {
  const fetchData = await (
    await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_HOST}/community/indexpost`, {
      method: 'get',
      cache: 'no-store',
    })
  ).json();
  const postList = fetchData.postList;
  return postList;
}

async function getGuestBookData() {
  const fetchData = await (
    await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_HOST}/guestBook/`, { method: 'get', cache: 'no-store' })
  ).json();
  const guestBookList = fetchData.guestbookData;
  return guestBookList;
}
