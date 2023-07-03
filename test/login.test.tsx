import { render, screen, fireEvent } from '@testing-library/react';
import UserBox from '@/components/user/UserBox';

describe('Index test', () => {
  it('is mainBtn rendered', () => {
    render(<UserBox />);
    //버튼 2개가 렌더링 되어야 함.
    const loginBtn = screen.getByText('로그인');
    const joinBtn = screen.getByText('회원가입');

    expect(loginBtn).toBeInTheDocument();
    expect(joinBtn).toBeInTheDocument();
  });

  it('is loginBtn work', () => {
    render(<UserBox />);
    //버튼 2개가 렌더링 되어야 함.
    const loginBtn = screen.getByText('로그인');

    fireEvent.click(loginBtn);
    const back = screen.getByText('< 뒤로가기');
    const loginText = screen.getByText('로그인');
    const loginInput = screen.getByRole('emailInput');
    const pwInput = screen.getByRole('pwInput');

    expect(back).toBeInTheDocument();
    expect(loginText).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
    expect(pwInput).toBeInTheDocument();
    expect(pwInput).toHaveStyle('opacity : hidden');
  });
});
