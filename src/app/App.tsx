import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";

import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import './styles/index.scss';


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <AppRouter/>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};
