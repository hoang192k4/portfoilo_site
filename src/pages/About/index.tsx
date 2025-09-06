import classNames from 'classnames/bind';
import {
    FaGraduationCap,
    FaRocket,
    FaHandshake,
    FaHandPointRight,
    FaClock,
    FaCommentDots,
    FaPeopleGroup,
    FaClipboardCheck,
} from 'react-icons/fa6';

import styles from './About.module.scss';
import AboutItem from './AboutItem';
import HighlightText from './HighlightText';
import Button from '@/components/ui/Button';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <section className={cx('wapper')} id="about">
            <h1 className="hashtag">Giới Thiệu</h1>
            <div className={cx('content')}>
                <AboutItem title="Học Vấn" className="education" iconLeft={<FaGraduationCap />}>
                    <div>
                        <p>CAO ĐẲNG KỸ THUẬT CAO THẮNG</p>
                        <span>
                            Tốt nghiệp chuyên ngành Công nghệ Thông tin / Lập trình Web (2022 -
                            2025)
                        </span>
                        <p>
                            Trang bị vững chắc về nguyên lý lập trình, cơ sở dữ liệu, và phát triển
                            ứng dụng web hiện đại.
                        </p>
                    </div>
                </AboutItem>

                <AboutItem title="Kinh Nghiệm" className="experience" iconLeft={<FaRocket />}>
                    <div className={cx('experience-left')}>
                        <p>
                            Trong quá trình học tập, tôi đã tham gia nhiều{' '}
                            <HighlightText>dự án nhóm và cá nhân</HighlightText>, đặc biệt là{' '}
                            <HighlightText>đồ án tốt nghiệp</HighlightText> với vai trò lập trình
                            viên. Những dự án này giúp tôi:
                        </p>

                        <ul>
                            <li>
                                <FaHandPointRight />
                                {'  '} Thành thạo
                                <HighlightText>ReactJS, HTML5, CSS3, SCSS</HighlightText>, làm việc
                                được với
                                <HighlightText> TypeScript</HighlightText> và{' '}
                                <HighlightText>RESTful API (Laravel, MySQL)</HighlightText>.
                            </li>
                            <li>
                                <FaHandPointRight />
                                {'  '}
                                Hiểu rõ quy trình phát triển phần mềm: từ phân tích yêu cầu, thiết
                                kế, lập trình, đến kiểm thử và triển khai.
                            </li>
                            <li>
                                <FaHandPointRight />
                                {'  '}
                                Tích lũy kinh nghiệm giải quyết vấn đề thực tế, tối ưu giao diện và
                                hiệu năng ứng dụng.
                            </li>
                        </ul>
                    </div>

                    <div className={cx('experience-right')}>
                        <div className={cx('experience-right-item')}>
                            <div>
                                <span>5+</span>
                                <p>Dự án cá nhân</p>
                            </div>
                        </div>
                        <div className={cx('experience-right-item')}>
                            <div>
                                <span>3+</span>
                                <p>Dự án nhóm</p>
                            </div>
                        </div>
                    </div>
                </AboutItem>

                <AboutItem
                    title="Kỹ Năng Mềm"
                    className="responsibility"
                    iconLeft={<FaHandshake />}
                >
                    <Button outline iconLeft={<FaPeopleGroup />}>
                        Làm việc nhóm
                    </Button>
                    <Button outline iconLeft={<FaCommentDots />}>
                        Giao tiếp
                    </Button>
                    <Button outline iconLeft={<FaClock />}>
                        Quản lý thời gian
                    </Button>
                    <Button outline iconLeft={<FaClipboardCheck />}>
                        Trách nhiệm
                    </Button>
                </AboutItem>
            </div>
        </section>
    );
};

export default About;
