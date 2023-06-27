import Title from '@/components/view/Title';
import CommentMain from '@/components/view/comment/CommentMain';
import Normal from '@/layouts/Normal';
import Content from '@/components/view/Content';

function page() {
  return (
    <Normal>
      <Title />
      <Content />
      <CommentMain />
    </Normal>
  );
}

export default page;
