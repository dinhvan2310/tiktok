import Header from 'components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from 'components/Layout/DefaultLayout/DefaultLayout.module.scss';

import { clsx } from 'clsx';

function DefaultLayout({ children }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Header />
      <div className={clsx(styles.container)}>
        <Sidebar />
        <div className={clsx(styles.content)}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
