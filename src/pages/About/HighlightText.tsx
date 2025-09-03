import classNames from 'classnames/bind';

import styles from './About.module.scss';

const cx = classNames.bind(styles);

interface Props {
    children: React.ReactNode;
}
const HighlightText = ({ children }: Props) => {
    return <span className={cx('hightlight-text')}>{children}</span>;
};

export default HighlightText;
