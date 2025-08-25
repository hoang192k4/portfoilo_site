import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('wapper')}>
            <h1>Footer</h1>
        </footer>
    );
};

export default Footer;
