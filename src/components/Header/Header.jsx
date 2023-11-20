import './Header.scss';

import { Navigation } from '../Navigation/Navigation';
import { Contacts } from '../Contacts/Contacts';

import logo from '../../images/logo_welbex.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-area">
                <img src={logo} alt="Логотип компании Veblex" />
                <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>
            <Navigation />
            <Contacts usedFor="header" />
        </header>
    );
};
