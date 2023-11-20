import './Navigation.scss';

export const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li className="navigation__item">Услуги</li>
                <li className="navigation__item">Виджеты</li>
                <li className="navigation__item">Интеграции</li>
                <li className="navigation__item">Кейсы</li>
                <li className="navigation__item navigation__item_hidden">
                    Сертификаты
                </li>
            </ul>
        </nav>
    );
};
