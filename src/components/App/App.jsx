import './App.scss';

import { Header } from '../Header/Header.jsx';
import { Promo } from '../Promo/Promo.jsx';
import { Footer } from '../Footer/Footer.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <Promo />
            <Footer />
        </div>
    );
}

export default App;
