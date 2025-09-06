import classNames from 'classnames/bind';

import styles from './Project.module.scss';
import Button from '@components/ui/Button';

const cx = classNames.bind(styles);

interface Props {
    setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
    openModal?: boolean;
}
const ProjectItem = (props: Props) => {
    const { openModal, setSelectedProject } = props;
    return (
        <div className={cx('project-item')} onClick={() => setSelectedProject('a')}>
            <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="internet không ổn định"
            />

            <div className={cx('cta')}>
                <div>
                    <h4 className={cx('name')}>Sinh viên nghiêm túc</h4>
                    <div className={cx('short-description')}>
                        <p>Dự án cá nhân</p>
                        <span className={cx('time')}>09/2022 - 11/2022</span>
                    </div>
                </div>
                {openModal && (
                    <Button primary className={cx('visit')} href="https://hiennguyenvan.com/" blank>
                        Github
                    </Button>
                )}
            </div>

            {openModal && (
                <>
                    <p className={cx('description')}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ad voluptatum
                        dolores odit ipsa, esse, quis cum.
                    </p>

                    <div className={cx('tech')}>
                        <Button className={cx('tech-item')} outline>
                            ReactJs
                        </Button>
                        <Button className={cx('tech-item')} outline>
                            Html
                        </Button>
                        <Button className={cx('tech-item')} outline>
                            CSS
                        </Button>
                        <Button className={cx('tech-item')} outline>
                            Laravel
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectItem;
