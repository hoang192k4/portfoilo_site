import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wapper')}>
            <h1>Header</h1>
        </header>
    );
};

export default Header;
