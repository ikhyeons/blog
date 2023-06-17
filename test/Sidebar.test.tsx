import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '@/components/sidebar/Sidebar';

describe('Sidebar test', () => {
  it('is all component rendered?', () => {
    render(<Sidebar />);

    // 프로필 사진이 있어야 함
    const profile = screen.getByRole('img');
    expect(profile).toBeInTheDocument();
    // 프로필 닉네임이 있어야 함
    const name = screen.getByText('잠자는오리');
    expect(name).toBeInTheDocument();
    // 서브 닉네임이 있어야 함
    const subName = screen.getByText('DrowzyDuck');
    expect(subName).toBeInTheDocument();
    // 이메일이 있어야 함
    const email = screen.getByText('skantrkwl789@naver.com');
    expect(email).toBeInTheDocument();
    // 금일 방문자수가 있어야 함
    const dayVisitor = screen.getByText('today 35');
    expect(dayVisitor).toBeInTheDocument();
    // 포스팅 버튼이 있어야 함 / 클릭 시 글쓰기 페이지
    const postingBtn = screen.getByText('포스팅');
    expect(postingBtn).toBeInTheDocument();
    // 카테고리가 있어야 함.
    const Ctg = screen.getByText('Category');
    expect(Ctg).toBeInTheDocument();
    // 카테고리 내용이 있어야 함. / 클릭 시 해당 카테고리 글 목록
    const CtgTag = screen.getByText('공지사항');
    expect(CtgTag).toBeInTheDocument();

    // 이력서, 깃허브 텍스트 또는 버튼이 있어야 함.(버튼으로 할 듯)

    const resume = screen.getByText('resume');
    const github = screen.getByText('GitHub : https://github.com/ikhyeons');

    expect(resume).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    // 클릭 시 해당 페이지
  });
});
