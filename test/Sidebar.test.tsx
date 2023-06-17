import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '@/components/Sidebar';

describe('Sidebar test', () => {
  it('is all component rendered?', () => {
    render(<Sidebar />);

    // 프로필 사진이 있어야 함
    const profile = screen.getByRole('img');
    expect(profile).toBeInTheDocument();
    // 프로필 닉네임이 있어야 함
    const name = screen.getByText('잠자는오리');
    // 서브 닉네임이 있어야 함
    const subName = screen.getByText('잠자는오리');
    // 총 방문자수, 금일 방문자수가 있어야 함
    const visitor = screen.getByText('총 방문자 수');
    const dayVisitor = screen.getByText('금일 방문자 수');
    // 포스팅 버튼이 있어야 함 / 클릭 시 글쓰기 페이지
    const postingBtn = screen.getByText('포스팅');
    // 카테고리가 있어야 함.
    const Ctg = screen.getByText('카테고리');
    // 카테고리 내용이 있어야 함. / 클릭 시 해당 카테고리 글 목록
    const CtgTag = screen.getByText('공지사항');
    // 이력서 가는 네비게이션이 있어야 함 / 클릭 시 이력서 페이지
    const resume = screen.getByText('resume');
    // 이메일, 깃허브 텍스트 또는 버튼이 있어야 함.(버튼으로 할 듯)
    const email = screen.getByText('Email');
    const github = screen.getByText('GitHub');
    // 클릭 시 해당 페이지
  });
});
