import classNames from 'classnames/bind';
import { FaCloudDownloadAlt } from 'react-icons/fa';

import styles from './Home.module.scss';
import Button from '@components/ui/Button';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <section className={cx('wapper')} id="hero">
            <h4 className={cx('hashtag')}>#Fresher Frontend Developer</h4>
            <div className={cx('content')}>
                <h1>
                    Xin chào, Tôi là <span>Nguyễn Ngọc Hoàng</span>
                </h1>
                <h1>Fresher Frontend Developer</h1>
                <p>
                    Tôi vừa tốt nghiệp ngành Công nghệ Thông tin, có kiến thức về React, TypeScript,
                    và xây dựng ứng dụng web hiện đại. Đam mê học hỏi và phát triển sản phẩm hướng
                    tới trải nghiệm người dùng.
                </p>
            </div>
            <div className={cx('cta')}>
                <Button href="#hero" primary>
                    Xem Dự Án
                </Button>
                <Button
                    href="/CV_Hoang_Frontend.pdf"
                    outline
                    download={true}
                    iconLeft={<FaCloudDownloadAlt />}
                >
                    Xem CV
                </Button>
            </div>
        </section>
    );
};

export default Home;
