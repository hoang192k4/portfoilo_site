import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

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
        <motion.div
            className={cx('content-box')}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className={cx('title')}>
                {iconLeft && iconLeft}
                {title}
            </h2>
            <div className={cx('content-item', className)}>{children}</div>
        </motion.div>
    );
};

export default AboutItem;
