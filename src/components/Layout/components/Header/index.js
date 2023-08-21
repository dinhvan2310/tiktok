import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { logo } from 'assets/images';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <img src={logo} alt="Tiktok" />
        <Tippy content="Search">
          <div className={clsx(styles.search)}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={clsx(styles.clear)}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />

            <button className={clsx(styles['search-btn'])}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={clsx(styles.actions)}></div>
      </div>
    </header>
  );
}

export default Header;
