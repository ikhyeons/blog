import styles from '@/styles/layout/layout.module.scss';

export default function WithoutSidebar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <div className={styles.longMain}>
          <section className={styles.section}>{children}</section>
        </div>
      </main>
    </>
  );
}
