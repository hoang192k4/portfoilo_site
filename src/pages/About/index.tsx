import classNames from 'classnames/bind';

import styles from './About.modules.scss';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <section className={cx('wapper')}>
            <h2>#Giới Thiệu</h2>
        </section>
    );
};

export default About;
