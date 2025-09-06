import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './Project.module.scss';
import ProjectItem from './ProjectItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Project = () => {
    const [selectedProject, setSelectedProject] = useState('');

    return (
        <section className={cx('wapper')} id="project">
            <h1 className="hashtag">Dự Án</h1>

            {/*  <div className={cx('title')}>
                <h2>Hãy xem các dự án cá nhân của tôi </h2>
            </div> */}

            <div className={cx('project-items')}>
                <ProjectItem setSelectedProject={setSelectedProject} />
                <ProjectItem setSelectedProject={setSelectedProject} />
                <ProjectItem setSelectedProject={setSelectedProject} />
                <ProjectItem setSelectedProject={setSelectedProject} />
                <ProjectItem setSelectedProject={setSelectedProject} />
                <ProjectItem setSelectedProject={setSelectedProject} />
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={cx('overlay')}
                        onClick={() => setSelectedProject('')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ProjectItem setSelectedProject={setSelectedProject} openModal={true} />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Project;
