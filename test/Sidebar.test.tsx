import { render, screen } from '@testing-library/react';
import Sidebar from '@/components/Sidebar';
import styles from '@styles/components/Sidebar.module.scss';

describe('Sidebar test', () => {
  it('is Profile?', () => {
    const { container } = render(<Sidebar />);
    screen.debug();
  });
});
