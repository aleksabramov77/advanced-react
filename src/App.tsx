import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";

import './styles/index.scss';
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                    <Route path='/' element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};

export default App;