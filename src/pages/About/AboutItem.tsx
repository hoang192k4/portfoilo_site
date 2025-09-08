import classNames from 'classnames/bind';

import styles from './About.module.scss';

const cx = classNames.bind(styles);

interface Props {
    title: string;
    children: React.ReactNode;
    className: string;
    iconLeft?: React.ReactNode;
}

const AboutItem = ({ title, children, className, iconLeft }: Props) => {
    return (
        <div className={cx('content-box')}>
            <h2 className={cx('title')}>
                {iconLeft && iconLeft}
                {title}
            </h2>
            <div className={cx('content-item', className)}>{children}</div>
        </div>
    );
};

export default AboutItem;
