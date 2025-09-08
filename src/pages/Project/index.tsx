import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './Project.module.scss';
import ProjectItem from './ProjectItem';
import { useEffect, useState } from 'react';
import projectsData from '../../data/projects.json';
import type { ProjectType } from '@/types/Project';

const cx = classNames.bind(styles);

const Project = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
    const [projects, setProjects] = useState<ProjectType[]>([]);

    //fake call api
    useEffect(() => {
        if (projectsData) setProjects(projectsData);
    }, []);

    return (
        <section className={cx('wapper')} id="project">
            <h1 className="hashtag">Dự Án</h1>

            <div className={cx('project-items')}>
                {projects &&
                    projects.map((propject) => (
                        <ProjectItem
                            key={propject.id}
                            setSelectedProject={setSelectedProject}
                            project={propject}
                        />
                    ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={cx('overlay')}
                        onClick={() => setSelectedProject(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            key={selectedProject.id}
                            layoutId={`project-${selectedProject.id}`}
                            className={cx('project-detail')}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ProjectItem
                                setSelectedProject={setSelectedProject}
                                openModal={true}
                                project={selectedProject}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Project;
