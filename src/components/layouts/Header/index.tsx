import classNames from 'classnames/bind';
import { FaBars } from 'react-icons/fa6';
import { CiLight, CiDark } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';

import styles from './Header.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Header = () => {
    const [activeMenuMobile, setActiveMenuMobile] = useState<boolean>(false);
    const [closeMenuMobile, setCloseMenuMobile] = useState<boolean>(false);
    const [theme, setTheme] = useState<'light' | 'dark'>(
        () => (localStorage.getItem('theme') as 'light' | 'dark') ?? 'light',
    );

    const hanleToggle = () => {
        if (activeMenuMobile) {
            setCloseMenuMobile(true);
            setTimeout(() => {
                setActiveMenuMobile(false);
                setCloseMenuMobile(false);
            }, 300);
        } else {
            setActiveMenuMobile(true);
            setCloseMenuMobile(false);
        }
    };

    console.log('re render header');

    useEffect(() => {
        activeMenuMobile
            ? document.body.classList.add('no-scroll')
            : document.body.classList.remove('no-scroll');
    }, [activeMenuMobile]);

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <header>
            {activeMenuMobile && (
                <>
                    <div className={cx(['navbar-overlay'])} onClick={hanleToggle}></div>
                    <ul
                        className={cx([
                            'navbar-mobile',
                            closeMenuMobile ? 'menu-mobile-close' : '',
                        ])}
                    >
                        <MenuItem />
                    </ul>
                </>
            )}

            <nav className={cx('navbar')}>
                <MediaQuery maxWidth={768}>
                    <span className={cx('navbar-icon')} onClick={hanleToggle}>
                        <FaBars size={18} />
                    </span>
                </MediaQuery>

                <MediaQuery minWidth={768}>
                    <ul className={cx('navbar-left')}>
                        <MenuItem />
                    </ul>
                </MediaQuery>

                <div>
                    <div className={cx('navbar-right')} onClick={handleToggleTheme}>
                        {theme === 'light' ? <CiLight size={24} /> : <CiDark size={24} />}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
