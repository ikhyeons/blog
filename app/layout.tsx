import ModalWrap from '@/components/modal/ModalWrap';
import './globals.css';
import { Providers } from '@/utils/redux/Providers';
import NextTopLoader from 'nextjs-toploader';
import Analytics from '@/components/Analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Providers>
        <meta name="google-site-verification" content="FDJs7Lft-q0-JR8h3ahvjI1vgP-H41XSqGvbJpJ8gQQ" />
        <body style={{ background: 'var(--bg-main)' }}>
          <Analytics />

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
