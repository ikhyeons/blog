import Index from '@/components/index/Index';
import styles from '@/styles/app/index.module.scss';
import Normal from '@/layouts/Normal';
export default function Home() {
  return (
    <Normal>
      <main className={styles.main}>
        <Index />
      </main>
    </Normal>
  );
}
