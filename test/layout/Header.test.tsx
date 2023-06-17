import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/header/Header';

describe('Header test', () => {
  it('is all component rendered?', () => {
    render(<Header />);

    const header = screen.getByText('어서오세요!');
    expect(header).toBeInTheDocument();
  });
});
