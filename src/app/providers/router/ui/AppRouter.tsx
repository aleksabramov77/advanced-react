import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routeConfig).map((route) => (
                    <Route key={route.path} {...route}/>))}
            </Routes>
        </Suspense>
    );
};