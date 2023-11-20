import './Contacts.scss';

import telegramIcon from './images/telegram.svg';
import viberIcon from './images/viber.svg';
import whatsapIcon from './images/whatsapp.svg';

export const Contacts = ({ usedFor = 'header' }) => {
    return (
        <div className={`contacts contacts_type_${usedFor}`}>
            <span>+7&nbsp;555&nbsp;555&#8209;55&#8209;55</span>
            <ul>
                <li>
                    <img src={telegramIcon} alt="Иконка телеграма" />
                </li>
                <li>
                    <img src={viberIcon} alt="Иконка вайбера" />
                </li>
                <li>
                    <img src={whatsapIcon} alt="Иконка ватсапа" />
                </li>
            </ul>
        </div>
    );
};
