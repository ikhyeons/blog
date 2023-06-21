import Sidebar from '@/components/sidebar/Sidebar';
import styles from '@/styles/layout/layout.module.scss';

export default function Normal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main>
        <div className={styles.main}>
          <section className={styles.section}>{children}</section>
        </div>
      </main>
    </>
  );
}
