import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";

import cls from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(cls.root, {}, [className])}>

            <div className={cls.links}>
                <AppLink to='/' className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
                <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};