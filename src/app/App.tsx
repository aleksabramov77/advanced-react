import { Suspense, useEffect } from 'react';

import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const isUserInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isUserInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
