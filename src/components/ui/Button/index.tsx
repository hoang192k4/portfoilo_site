import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
    children: React.ReactNode;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    disabled?: boolean;
    download?: boolean;
    className?: string;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
    blank?: boolean;
    onClick?: () => void;
}
const Button = (propsCurrent: Props) => {
    const {
        children,
        href,
        primary = false,
        outline = false,
        disabled = false,
        download = false,
        className,
        iconLeft,
        iconRight,
        blank,
        onClick,
        ...passProps
    } = propsCurrent;

    let Component = 'button';

    const props: any = {
        onClick,
        download,
        ...passProps,
    };

    if (href) {
        Component = 'a';
        props.href = href;
    }

    const classes = cx(
        'wapper',
        {
            primary,
            outline,
        },
        className,
    );
    return (
        <>
            <Component className={classes} {...props} target={blank ? '_blank' : '_self'}>
                {iconLeft && <span className={cx('icon-left')}>{iconLeft}</span>}
                {children}
                {iconRight && <span className={cx('icon-right')}>{iconRight}</span>}
            </Component>
        </>
    );
};

export default Button;
