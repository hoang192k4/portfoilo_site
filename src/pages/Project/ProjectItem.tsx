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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <ProjectContent project={project} openModal={openModal} />
        </motion.div>
    );
};

export default ProjectItem;
