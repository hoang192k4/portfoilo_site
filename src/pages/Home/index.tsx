import classNames from 'classnames/bind';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

import styles from './Home.module.scss';
import Button from '@components/ui/Button';

const cx = classNames.bind(styles);

const socials = [
    {
        id: 1,
        href: 'https://github.com/hoang192k4',
        icon: <FaGithub />,
    },
    {
        id: 2,
        href: 'https://www.linkedin.com/in/nguyenngochoang2004/en/',
        icon: <FaLinkedin />,
    },
    {
        id: 3,
        href: 'mailto:nguyenngochoang192k4@gamil.com',
        icon: <SiGmail />,
    },
];

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
                    <Button href="#project" primary>
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

                <div className={cx('social')}>
                    {socials &&
                        socials?.map((item) => (
                            <Button
                                key={item.id}
                                href={item.href}
                                className={cx('social-icon')}
                                blank
                            >
                                {item.icon}
                            </Button>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
