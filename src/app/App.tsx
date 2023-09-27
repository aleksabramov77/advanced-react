import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

import {useTheme} from "./providers/ThemeProvider";
import './styles/index.scss';


export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <AppRouter/>
        </div>
    );
};
