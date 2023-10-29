import ModalWrap from '@/components/modal/ModalWrap';
import './globals.css';
import { Providers } from '@/utils/redux/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Providers>
        <body style={{ background: 'var(--bg-main)' }}>
          {children}
          <ModalWrap />
        </body>
      </Providers>
    </html>
  );
}
