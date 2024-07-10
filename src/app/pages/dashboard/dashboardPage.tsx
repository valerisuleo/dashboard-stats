import styles from './dashboardPage.module.scss';

/* eslint-disable-next-line */
interface DashboardPageProps {}

export function DashboardPage(props: DashboardPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DashboardPage!</h1>
    </div>
  );
}

export default DashboardPage;
