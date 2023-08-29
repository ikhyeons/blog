import Title from '@/components/view/Title';
import CommentMain from '@/components/view/comment/CommentMain';
import Normal from '@/layouts/Normal';
import Content from '@/components/view/Content';

async function page({ params }: { params: { id: number } }) {
  const documentData = await getDocumentData(params.id);
  console.log(documentData);
  return (
    <Normal>
      <Title
        docId={params.id}
        title={documentData.title}
        date={documentData.date}
        thumbnailPath={documentData.thumbnailPath}
        love={documentData.love}
      />
      <Content data={documentData.content} />
      <CommentMain />
    </Normal>
  );
}

async function getDocumentData(number: number) {
  const data = await (
    await fetch(`https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/community/post/${number}`, { method: 'GET' })
  ).json();

  return data.document[0];
}

export default page;
