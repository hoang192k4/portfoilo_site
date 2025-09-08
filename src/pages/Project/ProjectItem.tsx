import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Project.module.scss';
import type { ProjectType } from '@/types/Project';
import ProjectContent from './ProjectContent';

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
            key={project.id}
            layoutId={`project-${project?.id}`}
            className={cx('project-item', { open: openModal })}
            onClick={() => !openModal && setSelectedProject(project)}
        >
            <ProjectContent project={project} openModal={openModal} />
        </motion.div>
    );
};

export default ProjectItem;
