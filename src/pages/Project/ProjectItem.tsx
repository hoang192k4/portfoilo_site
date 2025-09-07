import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Project.module.scss';
import Button from '@components/ui/Button';
import type { ProjectType } from '@/types/Project';

const cx = classNames.bind(styles);

interface Props {
    setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType | null>>;
    openModal?: boolean;
    project: ProjectType;
}

const ProjectItem = (props: Props) => {
    const { openModal, setSelectedProject, project } = props;

    return (
        <motion.div
            layoutId={`project-${project?.id}`}
            className={cx('project-item', { open: openModal })}
            onClick={() => !openModal && setSelectedProject(project)}
        >
            <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="internet không ổn định"
            />

            <div className={cx('cta')}>
                <div>
                    <h4 className={cx('name')}>{project?.name}</h4>
                    <div className={cx('short-description')}>
                        <p>{project?.type_project}</p>
                        <span className={cx('time')}>
                            {project?.time_start} - {project?.time_end}
                        </span>
                    </div>
                </div>

                {openModal && (
                    <Button primary className={cx('visit')} href={project?.link} blank>
                        Github
                    </Button>
                )}
            </div>

            {openModal && (
                <>
                    <p className={cx('description')}>{project?.description}</p>

                    <div className={cx('tech')}>
                        {project?.tech &&
                            project?.tech?.map((tech) => (
                                <Button key={tech.id} className={cx('tech-item')} outline>
                                    {tech.name}
                                </Button>
                            ))}
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default ProjectItem;
