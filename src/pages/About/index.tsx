import classNames from 'classnames/bind';
import { FaGraduationCap, FaRocket, FaHandshake } from 'react-icons/fa6';

import styles from './About.module.scss';
import AboutItem from './AboutItem';
import HighlightText from './HighlightText';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <section className={cx('wapper')} id="about">
            <h4 className={cx('hashtag')}># Giới Thiệu</h4>
            <div className={cx('content')}>
                <AboutItem title="Học Vấn" className="education" iconLeft={<FaGraduationCap />}>
                    <p>
                        Tốt nghiệp chuyên ngành{' '}
                        <HighlightText>Công nghệ Thông tin / Lập trình Web</HighlightText> tại
                        trường Cao Đẳng Kỹ Thuật Cao Thắng, được trang bị vững chắc về {''}
                        <HighlightText>
                            nguyên lý lập trình, cơ sở dữ liệu, và phát triển ứng dụng web hiện đại.
                        </HighlightText>
                    </p>
                </AboutItem>

                <AboutItem title="Kinh Nghiệm" className="experience" iconLeft={<FaRocket />}>
                    <p>
                        Trong quá trình học tập, tôi đã tham gia nhiều{' '}
                        <HighlightText>dự án nhóm và cá nhân</HighlightText>, đặc biệt là{' '}
                        <HighlightText>đồ án tốt nghiệp</HighlightText> với vai trò lập trình viên.
                        Những dự án này giúp tôi:
                    </p>

                    <ul>
                        <li>
                            Thành thạo <HighlightText>ReactJS</HighlightText>, làm việc được với
                            <HighlightText>TypeScript, HTML5, CSS3, SCSS</HighlightText> và làm việc
                            với <HighlightText>RESTful API (Laravel, MySQL)</HighlightText>.
                        </li>
                        <li>
                            Hiểu rõ quy trình phát triển phần mềm: từ phân tích yêu cầu, thiết kế,
                            lập trình, đến kiểm thử và triển khai.
                        </li>
                        <li>
                            Tích lũy kinh nghiệm giải quyết vấn đề thực tế, tối ưu giao diện và hiệu
                            năng ứng dụng.
                        </li>
                    </ul>
                </AboutItem>

                <AboutItem
                    title="Kỹ Năng Mềm"
                    className="responsibility"
                    iconLeft={<FaHandshake />}
                >
                    <p>
                        Tôi luôn hướng đến sự{' '}
                        <HighlightText>chuyên nghiệp, tinh thần trách nhiệm cao</HighlightText> và
                        khả năng <HighlightText>tự học, thích ứng nhanh</HighlightText> với công
                        nghệ mới. Bên cạnh đó, tôi có kinh nghiệm{' '}
                        <HighlightText>làm việc nhóm, giao tiếp và quản lý thời gian</HighlightText>
                        , đảm bảo tiến độ và chất lượng sản phẩm.
                    </p>
                </AboutItem>
            </div>
        </section>
    );
};

export default About;
