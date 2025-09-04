import { Link } from 'react-scroll';

interface Props {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}
const MenuItem = ({ active, setActive }: Props) => {
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

    return (
        <>
            {navbar?.map((item) => (
                <li key={item.id}>
                    <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-1}
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
