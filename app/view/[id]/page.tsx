import Title from '@/components/view/Title';
import CommentMain from '@/components/view/comment/CommentMain';
import Normal from '@/layouts/Normal';
import Content from '@/components/view/Content';

async function page({ params }: { params: { id: number } }) {
  const documentData = await getDocumentData(params.id);
  return (
    <Normal>
      <Title title={documentData.title} date={documentData.date} />
      <Content data={documentData.content} />
      <CommentMain />
    </Normal>
  );
}

async function getDocumentData(number: number) {
  const data = await (await fetch(`http://localhost:3001/community/post/${number}`, { method: 'GET' })).json();

  return data.document[0];
}

export default page;
