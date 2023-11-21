import './Footer.scss';

import { Contacts } from '../Contacts/Contacts';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top-container">
                <div className="footer__about">
                    <h2 className="footer__subtitle">О Компании</h2>
                    <p className="footer__link-item">Партнёрская программа</p>
                    <p className="footer__link-item">Вакансии</p>
                </div>
                <div className="footer__menu">
                    <h2 className="footer__subtitle">Меню</h2>
                    <ul>
                        <li className="footer__link-item">Расчёт стоимости</li>
                        <li className="footer__link-item">Кейсы</li>
                        <li className="footer__link-item">Услуги</li>
                        <li className="footer__link-item">
                            Благодарственные письма
                        </li>
                        <li className="footer__link-item">Виджеты</li>
                        <li className="footer__link-item">Сертификаты</li>
                        <li className="footer__link-item">Интеграции</li>
                        <li className="footer__link-item">Блог на Youtube</li>
                        <li className="footer__link-item">Наши клиенты</li>
                        <li className="footer__link-item">Вопрос / Ответ</li>
                    </ul>
                </div>
                <div className="footer__contacts">
                    <h2 className="footer__subtitle">Контакты</h2>
                    <Contacts usedFor="footer" />
                </div>
            </div>
            <div className="footer__copyright">
                <span>©WELBEX 2022. Все права защищены.</span>
                <p>Политика конфиденциальности</p>
            </div>
        </footer>
    );
};
