import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const MenuItem = () => {
    const [active, setActive] = useState('hero');

    const navbar = [
        {
            id: 1,
            to: 'hero',
            label: 'Trang Chủ',
        },
        {
            id: 2,
            to: 'project',
            label: 'Dự Án',
        },
        {
            id: 3,
            to: 'about',
            label: 'Giới Thiệu',
        },
        {
            id: 4,
            to: 'contact',
            label: 'Liên Hệ',
        },
    ];

    useEffect(() => {
        setActive(navbar[0].to);
    }, []);

    return (
        <>
            {navbar?.map((item) => (
                <li key={item.id}>
                    <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-50}
                        activeClass="active-nav"
                        className={active === item.to ? 'active-nav' : ''}
                        onSetActive={() => setActive(item.to)}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default MenuItem;
