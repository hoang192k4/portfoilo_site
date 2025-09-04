import classNames from 'classnames/bind';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

import styles from './Home.module.scss';
import Button from '@components/ui/Button';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <section className={cx('wapper')} id="hero">
            <div>
                <div className={cx('content')}>
                    <h1>
                        Xin chào, Tôi là <span>Nguyễn Ngọc Hoàng</span>
                    </h1>
                    <h1>Fresher Frontend Developer</h1>
                    <p>
                        Tôi vừa tốt nghiệp ngành Công nghệ Thông tin, có kiến thức về React,
                        TypeScript, và xây dựng ứng dụng web hiện đại. Đam mê học hỏi và phát triển
                        sản phẩm hướng tới trải nghiệm người dùng.
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
                        iconLeft={<FaDownload />}
                    >
                        Xem CV
                    </Button>
                </div>
                <small className={cx('description')}>
                    Hãy xem qua các dự án tôi đã thực hiện hoặc tải CV để biết thêm chi tiết.
                </small>
                <div className={cx('socail')}>
                    <Button
                        href="https://github.com/hoang192k4"
                        className={cx('socail-icon')}
                        blank
                    >
                        <FaGithub />
                    </Button>
                    <Button
                        href="https://www.linkedin.com/in/nguyenngochoang2004/en/"
                        className={cx('socail-icon')}
                        blank
                    >
                        <FaLinkedin />
                    </Button>
                    <Button
                        href="mailto:nguyenngochoang192k4@gamil.com"
                        className={cx('socail-icon')}
                        blank
                    >
                        <SiGmail />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Home;
