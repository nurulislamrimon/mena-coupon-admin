import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/store'>Store</Link></li>
                    <li><Link to='/post'>Post</Link></li>
                    <li><Link to='/carousel'>Carousel</Link></li>
                    <li><Link to='/members'>Members</Link></li>
                    <li><Link to='/user'>User</Link></li>
                    <li><Link to='/whatsapp'>Whatsapp</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavMenu;