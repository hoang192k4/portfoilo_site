import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Project.module.scss';
import Button from '@components/ui/Button';
import type { ProjectType } from '@/types/Project';

const cx = classNames.bind(styles);

interface Props {
    openModal?: boolean;
    project: ProjectType;
}

const ProjectContent = memo(({ openModal, project }: Props) => {
    return (
        <>
            <img src={`/images/${project?.image}`} alt="internet không ổn định" />

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
        </>
    );
});

export default ProjectContent;
