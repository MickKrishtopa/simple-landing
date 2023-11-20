import './Promo.scss';

export const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__left-container">
                <h1>
                    Зарабатывайте больше <br />
                    <span>с WELBEX</span>
                </h1>
                <p>
                    Развиваем и контролируем <br />
                    продажи за вас
                </p>
            </div>
            <div className="promo__right-container_desktop">
                <h2>
                    Вместе с <span>бесплатной консультацией</span> мы дарим:
                </h2>
                <ul>
                    <li>
                        <h3>Виджеты</h3>
                        <p>30 готовых решений</p>
                    </li>
                    <li>
                        <h3>Dashboard</h3>
                        <p>c показателями вашего бизнеса</p>
                    </li>
                    <li>
                        <h3>Skype Аудит</h3>
                        <p>отдела продаж и CRM системы</p>
                    </li>
                    <li>
                        <h3>35 дней</h3>
                        <p>использования CRM</p>
                    </li>
                </ul>
                <button>Получить консультацию</button>
            </div>
            <div className="promo__right-container_mobile">
                <h2>
                    Вместе с <span>бесплатной консультацией</span> мы дарим:
                </h2>
                <ul>
                    <li>
                        <p>
                            <span>&mdash;</span>Skype аудит
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>&mdash;</span>30 виджетов
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>&mdash;</span>Dashboard
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>&mdash;</span>Месяц аmoCRM
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};
