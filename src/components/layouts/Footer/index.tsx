import classNames from 'classnames/bind';
import { FaCopyright } from 'react-icons/fa6';

import styles from './Footer.module.scss';
import Container from '../Container';

const cx = classNames.bind(styles);

const profile = [
    {
        id: 1,
        title: 'Địa Chỉ',
        content: 'Thành Phố Hồ Chí Minh, Việt Nam',
    },
    {
        id: 2,
        title: 'Điện Thoại',
        content: '+84 389 212 987',
    },
    {
        id: 3,
        title: 'Email',
        content: 'nguyenngochoang192k4@gmail.com',
    },
];
const Footer = () => {
    console.log('re render footer');
    return (
        <Container>
            <footer className={cx('wapper')}>
                <div className={cx('profile')}>
                    {profile?.map((item) => (
                        <div key={item.id} className={cx('profile-item')}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
                <p className={cx('subtitle')}>
                    <FaCopyright /> 2025 - Thiết kế và xây dựng <span>Nguyễn Ngọc Hoàng.</span>
                </p>
            </footer>
        </Container>
    );
};

export default Footer;
