import './layout.css';
import img from './../img/user.png';
import { Outlet, useNavigate } from 'react-router-dom';

import { useRef } from 'react';

function Layout() {

    const navigate = useNavigate();

    const leftlayout = useRef();
    const rightlayout = useRef();

    const leftlayoutactive = () => {
        leftlayout.current.classList.toggle('active');
        rightlayout.current.classList.toggle('active');
    };

    const dashboard = useRef();
    const home = useRef();
    const about = useRef();
    const menu = useRef();
    const location = useRef();
    const gallery = useRef();
    const vacancy = useRef();
    const events = useRef();
    const news = useRef();
    const contact = useRef();

    const dashboardactive = () => {
        removeactive();
        dashboard.current.classList.add('active');
        navigate('/', { replace: true });
    };

    const homeactive = () => {
        removeactive();
        home.current.classList.add('active');
        navigate('/home', { replace: true });
    };

    const aboutactive = () => {
        removeactive();
        about.current.classList.add('active');
        navigate('/about', { replace: true });
    };

    const menuactive = () => {
        removeactive();
        menu.current.classList.add('active');
        navigate('/menu', { replace: true });
    };

    const locationactive = () => {
        removeactive();
        location.current.classList.add('active');
        navigate('/location', { replace: true });
    };

    const galleryactive = () => {
        removeactive();
        gallery.current.classList.add('active');
        navigate('/gallery', { replace: true });
    };

    const vacancyactive = () => {
        removeactive();
        vacancy.current.classList.add('active');
        navigate('/vacancy', { replace: true });
    };

    const newsactive = () => {
        removeactive();
        news.current.classList.add('active');
        navigate('/news', { replace: true });
    };

    const eventactive = () => {
        removeactive();
        events.current.classList.add('active');
        navigate('/events', { replace: true });
    };

    const contactactive = () => {
        removeactive();
        contact.current.classList.add('active');
        navigate('/contact', { replace: true });
    };

    const removeactive = () => {
        dashboard.current.classList.remove('active');
        home.current.classList.remove('active');
        about.current.classList.remove('active');
        menu.current.classList.remove('active');
        location.current.classList.remove('active');
        gallery.current.classList.remove('active');
        vacancy.current.classList.remove('active');
        news.current.classList.remove('active');
        events.current.classList.remove('active');
        contact.current.classList.remove('active');
    };

    const layout = useRef();

    const themetoggle = () => {
        layout.current.classList.toggle('active');
    };

    return(
        <div ref={layout} className='layout'>
            <div ref={leftlayout} className='leftlayout'>
                <div className='logo'>PHO99</div>

                <div ref={dashboard} className='smenu active' onClick={dashboardactive}><ion-icon name="desktop-outline"></ion-icon>Dashboard</div>

                {/* <div className='menu'>Pages</div> */}
                <div ref={home} className='smenu' onClick={homeactive}><ion-icon name="home-outline"></ion-icon>Home</div>
                <div ref={about} className='smenu' onClick={aboutactive}><ion-icon name="help-outline"></ion-icon>About</div>
                <div ref={menu} className='smenu' onClick={menuactive}><ion-icon name="grid-outline"></ion-icon>Menus</div>
                <div ref={location} className='smenu' onClick={locationactive}><ion-icon name="location-outline"></ion-icon>Location</div>
                <div ref={gallery} className='smenu' onClick={galleryactive}><ion-icon name="images-outline"></ion-icon>Gallery</div>
                <div ref={vacancy} className='smenu' onClick={vacancyactive}><ion-icon name="clipboard-outline"></ion-icon>Vacancy</div>
                <div ref={news} className='smenu' onClick={newsactive}><ion-icon name="newspaper-outline"></ion-icon>News</div>
                <div ref={events} className='smenu' onClick={eventactive}><ion-icon name="calendar-outline"></ion-icon>Events</div>
                <div ref={contact} className='smenu' onClick={contactactive}><ion-icon name="call-outline"></ion-icon>Contact</div>

            </div>
            <div ref={rightlayout} className='rightlayout'>
                <div className='topbar'>
                    <div className='menubar' onClick={leftlayoutactive}><ion-icon name="menu-outline"></ion-icon></div>
                    <div className='userbox'>
                        <ion-icon name="contrast-outline" onClick={themetoggle}></ion-icon>
                        <img src = {img} alt='' />
                        <div className='user'>
                            <div className='username'>Akash</div>
                            <div className='designation'>Admin</div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;