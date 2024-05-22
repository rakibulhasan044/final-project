import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import menuImg from '../../assets/menu/menu-logo.jpeg'
import PopularMenu from '../Home/popularMenu/PopularMenu';
import { Parallax } from 'react-parallax';

const Menu = () => {
    return (
        <div className='px-4'>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <Cover img={menuImg}
            title={'Our Menu'}/>
            <PopularMenu/>
            <Cover img={menuImg}
            title={'Our Menu'}/>
            <PopularMenu/>
            <Cover img={menuImg}
            title={'Our Menu'}/>
            <PopularMenu/>

        </div>
    );
};

export default Menu;