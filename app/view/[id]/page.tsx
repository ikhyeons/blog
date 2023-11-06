import Title from '@/components/view/Title';
import CommentMain from '@/components/view/comment/CommentMain';
import Normal from '@/layouts/Normal';
import Content from '@/components/view/Content';

async function page({ params }: { params: { id: number } }) {
  const documentData = await getDocumentData(params.id);
  const commentList: {
    id: number;
    writerID: number;
    nickname: string;
    refID?: number;
    documentID: number;
    Content: string;
    date: string;
    love: number;
    del: number;
    refNickname: string;
  }[] = await getCommentList(params.id);
  return (
    <>
      <title>{documentData.title}</title>
      <meta name="description" content={`성익현의 블로그 - ${documentData.title}`} />
      <meta name="image" content={documentData.thumbnailPath} />
      <meta property="og:description" content={`성익현의 블로그 - ${documentData.title}`} />
      <meta property="og:image" content={documentData.thumbnailPath} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={documentData.title} />
      <meta property="twitter:title" content={documentData.title} />
      <meta property="twitter:description" content={`성익현의 블로그 - ${documentData.title}`} />
      <meta property="twitter:image" content={documentData.thumbnailPath} />

      <Normal>
        <Title
          docId={params.id}
          title={documentData.title}
          date={documentData.date}
          thumbnailPath={documentData.thumbnailPath}
          love={documentData.love}
        />
        <Content data={documentData.content} />
        <CommentMain documentData={documentData} commentList={commentList} />
      </Normal>
    </>
  );
}

async function getDocumentData(number: number) {
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/community/post/${number}`, {
      method: 'GET',
      cache: 'no-store',
    })
  ).json();

  return data.document[0];
}

async function getCommentList(number: number) {
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/community/comment/${number}`, {
      method: 'GET',
      cache: 'no-store',
    })
  ).json();

  return data.commentList;
}

export default page;
