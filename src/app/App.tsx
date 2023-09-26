import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";

import {useTheme} from "./providers/ThemeProvider";
import './styles/index.scss';


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};
