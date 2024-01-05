import ModalWrap from '@/components/modal/ModalWrap';
import './globals.css';
import { Providers } from '@/utils/redux/Providers';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Providers>
        <body style={{ background: 'var(--bg-main)' }}>
          <NextTopLoader
            color="#bb00aa"
            showSpinner={true}
            easing="ease"
            crawl={true}
            height={12}
            showAtBottom={false}
          />
          {children}
          <ModalWrap />
        </body>
      </Providers>
    </html>
  );
}
