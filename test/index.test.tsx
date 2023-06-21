import SearchBar from '@/components/SearchBar';
import Announcement from '@/components/index/Announcement';
import DocList from '@/components/index/DocList';
import GuestBook from '@/components/index/GuestBook';

import { render, screen, fireEvent } from '@testing-library/react';

describe('Index test', () => {
  it('is searchBar component rendered', () => {
    render(<SearchBar />);

    //검색바 인풋이 있어야 함
    const searchBar = screen.getByPlaceholderText('Search');
  });

  it('is announcement component rendered', () => {
    render(<Announcement />);

    //공지사항 칸이 있어야 함
    const announcement = screen.getByText('공지');
  });

  it('is guestbook component rendered', () => {
    render(<GuestBook />);

    //방명록 칸이 있어야 함
    const guestBook = screen.getByText('방명록');
  });

  it('is newDocument component rendered', () => {
    render(<DocList type="new" />);

    //최신글 리스트가 있어야 함
    const newDocument = screen.getByText('최신 글');
  });

  it('is hotDocument component rendered', () => {
    render(<DocList type="hot" />);

    //인기글 리스트가 있어야 함
    const hotDocument = screen.getByText('인기 글');
  });
});
