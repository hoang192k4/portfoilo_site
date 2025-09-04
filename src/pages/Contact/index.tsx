import classNames from 'classnames/bind';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

const Contact = () => {
    return (
        <>
            <section className={cx('wapper')} id="contact">
                <h1>Contact</h1>
            </section>
        </>
    );
};

export default Contact;
